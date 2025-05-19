'use client'

import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from './_components/layout';

const popularPosts = [
  { id:1, title: '오늘 점심 뭐 먹지..', date: '25.04.28' },
  { id:2, title: '이따 비온다고 함', date: '25.04.28' },
  { id:3, title: '비트코인 떡상 ㄷㄷ', date: '25.04.28' },
  { id:4, title: '고민 있음', date: '25.04.28' },
  { id:5, title: '여행 어디로 갈까?', date: '25.04.28' },
];

export default function Home() {
  return (
    <Layout>
        {/* ------- 좌측 영역 ------- */}
        <LeftPanel>
          <SearchBox placeholder="Search…" />

          <PopularArea>
            <PopularHeading>
              <span role="img">
                🎵
              </span>
              <div>
                {"Popular"}
              </div>
            </PopularHeading>

            <Separator />

            <List>
              {popularPosts.map(({ id, title, date }) => (
                <SLink href={`/post/${id}`} key={id}>
                  <ListRow>
                    <span>{title}</span>
                    <span>{date}</span>
                  </ListRow>
                </SLink>
              ))}
            </List>
          </PopularArea>
        </LeftPanel>

        {/* ------- 우측 영역 ------- */}
        <RightPanel>
          {/* 광고 */}
          <Image
          src="/ad.png"
          alt="광고"
          fill
        />
        </RightPanel>
      </Layout>
  );
}

/* ---------------- styled-components ---------------- */
/* ---------- 좌측 ---------- */

const LeftPanel = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
`;

const SearchBox = styled.input`
  height: 48px;
  border: 2px solid #000;
  border-radius: 999px;
  padding: 0 1.2rem;
  font-size: 1rem;

  &::placeholder {
    color: #666;
  }
`;

const PopularArea = styled.div`
  margin-top: 2.5rem;
`;

const PopularHeading = styled.h2`
  font-size: 1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0 0 0.8rem 0;
`;

const Separator = styled.div`
  height: 2px;
  background: #a06a1d;
  width: 100%;
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListRow = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.9rem 0.1rem;
  font-size: 0.9rem;
  border-bottom: 1px solid #e4e4e4;
`;

/* ---------- 우측 ---------- */

const RightPanel = styled.aside`
  aspect-ratio:1/2;
  position: relative;    /* <Image fill> 필수 */
  border: 1px solid rgba(0, 0, 0, 0.2);  /* 얕은 검은색 경계선 */
  border-radius: 4px;                     /* 라운드 모서리 */
  cursor: pointer;
  width: 20rem;
`;

const SLink = styled(Link)`
  color: inherit;        /* 부모 글자색 물려받기 */
  text-decoration: none; /* 밑줄 제거 */
`;