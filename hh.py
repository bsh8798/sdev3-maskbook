import os
import sys
import re

# path
# frameworks 디렉토리 탐색
def find_external_library_path(project_root):
    paths = set()
    for dirpath, dirnames, _ in os.walk(project_root):
        for dirname in dirnames:
            if dirname.lower() == "frameworks":
                path = os.path.join(dirpath, dirname)
                paths.add(path)
    return paths

# swiftinterface 파일 탐색
def find_swiftinterface(dir_paths):
    paths = set()
    for dir_path in dir_paths:
        for dirpath, _, filenames in os.walk(dir_path):
            for filename in filenames:
                if filename.endswith(".swiftinterface"):
                    path = os.path.join(dirpath, filename)
                    paths.add(path)
    return paths

# 선언부 추출
DECLARATION_PATTERNS = {
    "protocol": re.compile(r"^\s*(?:@[\w\._\(\)]+[\s]+)*(?:\w+\s+)*protocol\s+([\w\.]+)", re.MULTILINE),
    "class": re.compile(r"^\s*(?:@[\w\._\(\)]+[\s]+)*(?:\w+\s+)*class\s+([\w\.]+)", re.MULTILINE),
    "struct": re.compile(r"^\s*(?:@[\w\._\(\)]+[\s]+)*(?:\w+\s+)*struct\s+([\w\.]+)", re.MULTILINE),
    "function": re.compile(r"^\s*(?:@[\w\._\(\)]+[\s]+)*(?:\w+\s+)*func\s+([\w\d_]+\s*\(.*?\))", re.MULTILINE),
    "variable": re.compile(r"^\s*(?:@[\w\._\(\)]+[\s]*)*(?:\w+\s+)*(?:var|let)\s+([\w\d_]+)", re.MULTILINE),
    "extension": re.compile(r"^\s*(?:@[\w\._\(\)]+[\s]+)*(?:\w+\s+)*extension\s+([\w\.]+)", re.MULTILINE),
    "enum": re.compile(r"^\s*(?:@[\w\._\(\)]+[\s]*)*(?:\w+\s+)*enum\s+([\w\.]+)", re.MULTILINE)
}

def find_declarations(si_paths, directory):
    for path in si_paths:
        declarations = set()
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
        for key, pattern in DECLARATION_PATTERNS.items():
            find_list = pattern.findall(content)
            for name in find_list:
                declarations.add(f"{key}: {name}")
    
        # 하나의 텍스트 파일에 --{fileName}으로 구분해서 선언부 저장
        output_path = "../output/external_dependencies.txt"
        with open(output_path, "a", encoding="utf-8") as f:
            f.write(f"\n\n--{path}\n\n")
            for dec in declarations:
                f.write(f"{dec}\n")
        return declarations


def main():
    if len(sys.argv) != 2:
        exit(1)
    
    project_dir = sys.argv[1]
    dir_paths = find_external_library_path(project_dir)
    si_paths = find_swiftinterface(dir_paths)
    find_declarations(si_paths, project_dir)
    
    
if __name__ == "__main__":
    main()

# 작업 사항, 고민
# 외부라이브러리 파일을 AST로 파싱해서 프로젝트 내부 코드와 비교를 하는 방식으로 하면  
# 클래스 상속 시, 상속한 클래스의 요소만을 대상으로 매칭을 하는 방식으로하면 상속된 멤버 판단에 대한 정확도가 조금 더 높아질 거 같은데, AST 파싱이 오래 걸림.
# AST 파싱이 아닌 정규표현식 형태로 .swiftinterface 파일을 기준으로 선언부를 수집하는 방식으로 진행
# 현재는 해당 클래스가 정의된 .swiftinterface 파일 전체를 대상으로 비교하고 있어, 상속받지 않은 다른 요소와도 이름이 같으면 매칭될 수 있는 문제가 있습니다.
