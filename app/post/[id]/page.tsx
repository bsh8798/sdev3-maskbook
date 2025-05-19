'use client';

import Layout from '@/app/_components/layout';
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
      <Layout>
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
      </Layout>
  );
}

/* ---------------- styled-components ---------------- */
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