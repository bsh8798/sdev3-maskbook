'use client';

import Image from 'next/image';
import styled from 'styled-components';

const postInfo = {
  title: '오늘 점심 뭐 먹지..',
  date: '25.04.28',
  content: '오늘 아침부터 아무것도 안 먹음… 띠용',
  liked: 15,
};

export default function PostDetail() {
  return (
    <>
      <TopBar>
        <Logo>MaskBook</Logo>
        <SignIn>Sign In</SignIn>
      </TopBar>

      <Main>
        {/* ───── 좌측(본문) ───── */}
        <Article>
          <CategoryRow>
            <Icon>💬</Icon>
            <span>익명토크</span>
          </CategoryRow>

          <Title>{postInfo.title}</Title>

          <MetaRow>
            <DateSpan>{postInfo.date}</DateSpan>
            <LikeImage
                  src="/heart.png"
                  alt=""
                  width={12}
                  height={12}
                />
            <LikeSpan>{postInfo.liked}</LikeSpan>
          </MetaRow>

          <Divider />
          <ContentSpan>

          <Content>{postInfo.content}</Content>

          <SaveButton>저장</SaveButton>
          </ContentSpan>

          <Divider />
        </Article>

      </Main>
    </>
  );
}

/* ---------------- styled-components ---------------- */

const TopBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  background: #d79c17;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-family: 'Times New Roman', serif;
  font-size: 2rem;
  font-weight: 600;
  color: #fff;
  margin: 0;
`;

const SignIn = styled.button`
  padding: 0.5rem 1.5rem;
  background: #efd9ad;
  border: 1px solid #cba86d;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  color: rgba(0, 0, 0, 0.7);
  transition: 0.2s;

  &:hover {
    background: #f5e5c5;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content:center;
  max-width: 1000px;
  margin: 3rem auto;
  margin-top: 120px; /* 헤더 높이만큼 여백 */
  padding: 0 2rem;
`;

/* ──── 본문 영역 ──── */

const Article = styled.article`
  display: flex;
  flex-direction: column;
  width:500px;
`;

const CategoryRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
  margin-bottom:1rem;
`;

const Icon = styled.span`
  font-size: 1.2rem;
`;

const Title = styled.h2`
  font-size: 1.4rem;
  font-weight: 700;
  margin: 0;
  margin-bottom:1rem;
`;

const MetaRow = styled.div`
  display: flex;
  align-items:center;
  font-size: 0.9rem;
  color: #666;
`;

const DateSpan = styled.span`
  margin-left:0.1rem;
  margin-right:1rem;
`;

const LikeImage = styled(Image)`
  margin-top:2px;
  margin-right:2px;
`;


const LikeSpan = styled.span`
  margin-right:0.8rem;

`

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #000;
  margin: 0.5rem 0;
`;

const ContentSpan = styled.span`
  min-height:150px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
`;


const Content = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  white-space: pre-wrap;
`;

const SaveButton = styled.button`
  align-self: center;
  padding: 0.5rem 1.8rem;
  background: #d79c17;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s;
  margin: 2rem 0 1rem 0;

  &:hover {
    background: #c28a14;
  }
`;