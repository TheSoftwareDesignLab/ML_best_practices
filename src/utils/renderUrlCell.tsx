import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: inherit;
  overflow: scroll;
  white-space: nowrap;
  scrollbar-width: none;

  ::-webkit-scrollbar { /* Chrome/Safari/Webkit */
    width: 0;
    background: transparent; /* make scrollbar transparent */
  }
`;

export const renderUrlCell = (params: any) => {
  const SEP = "https";
  const val: string = params.value;
  const urlsArr = val.split(SEP);

  return (
    <Container>
      {urlsArr.map((url, index) => {
        if (url.length > 4) {
          return <a href={SEP+url} key={index}>{SEP+url}</a>
        }
      })}
    </Container>
  )
}
