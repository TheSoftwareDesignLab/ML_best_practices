import styled from "styled-components";

export const Container = styled.div<{fullWidth: boolean}>`
  padding: 0;
  width: ${({fullWidth}) => fullWidth ? "100%" : "1000px"};
`;
