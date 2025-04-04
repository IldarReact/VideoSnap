import styled from "styled-components";

export const StickyHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #fff;
  height: var(--header-height, 60px);
`;

export const StickyFooter = styled.footer`
  background-color: #fff;
  height: var(--footer-height, 60px);
`;

export const MainContent = styled.main`
  flex: 1 0 auto;
`;