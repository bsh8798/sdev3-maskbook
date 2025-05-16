'use client'

import styled from "styled-components";

export default function Home() {
  return (
    <MainBody>
      <div>Hello World</div>
    </MainBody>
  );
}

// Style 선언
const MainBody = styled.div`
  background-color: red;
`;