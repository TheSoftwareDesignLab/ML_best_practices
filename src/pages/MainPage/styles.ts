import styled from "styled-components";

export const Container = styled.div<{fullWidth: boolean}>`
  margin: 0 50px;
  width: ${({fullWidth}) => fullWidth ? "100%" : "1000px"};
`;
