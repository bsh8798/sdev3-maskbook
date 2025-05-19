'use client';

import styled from "styled-components";

interface LayoutProps {
    children: React.ReactNode
}

export default function Layout({children}: LayoutProps) {
    return (
        <>
        <TopBar>
            <Logo>MaskBook</Logo>
            <SignIn>Sign In</SignIn>
        </TopBar>
        <Main>
            {children}
        </Main>
        </>
    )
};

const TopBar = styled.header`
  position: fixed;
  top:0;
  left:0;
  width: 100%;
  padding: 1.5rem 2rem;
  background: #d79c17; /* 헤더 배경색 */
  display: flex;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box; /* ← 패딩‧보더를 폭 안에 포함 */
  z-index:1000;
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
  transition: 0.2s;
  color:rgba(0,0,0,0.7);

  &:hover {
    background: #f5e5c5;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  gap: 3rem;
  max-width: 1000px;
  margin: 3rem auto;
  margin-top: 120px;
  padding: 0 2rem;
`;