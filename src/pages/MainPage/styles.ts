import styled from "styled-components";

export const Container = styled.div<{fullWidth: boolean}>`
  margin: 0 50px;
  width: ${({fullWidth}) => fullWidth ? "100%" : "1000px"};
`;
export const ImageContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const Image = styled.img`
  max-height: 500px;
`;
