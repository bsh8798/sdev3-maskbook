'use client';

import Layout from '@/app/_components/layout';
import Image from 'next/image';
import styled from 'styled-components';
import { Post } from '@/lib/generated/prisma';
import useSWR from 'swr';
import { useParams } from 'next/navigation';
import { formatDate } from '@/lib/utils';

interface PostResponse {
  ok:boolean;
  post:Post | undefined;
}

export default function PostDetail() {

  const params = useParams();
  const id = Number(params.id);

  const {data, error, isLoading} = useSWR<PostResponse>(`/api/post/${id}`)  

  return (
      <Layout>
        {/* ───── 좌측(본문) ───── */}
        <Article>
          <CategoryRow>
            <Icon>💬</Icon>
            <span>익명토크</span>
          </CategoryRow>

          <Title>{data?.post?.title}</Title>

          <MetaRow>
            <DateSpan>{formatDate(data?.post?.createdAt)}</DateSpan>
            <LikeImage
                  src="/heart.png"
                  alt=""
                  width={12}
                  height={12}
                />
            <LikeSpan>{data?.post?.likeCount}</LikeSpan>
          </MetaRow>

          <Divider />
          <ContentSpan>

          <Content>{data?.post?.content}</Content>

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