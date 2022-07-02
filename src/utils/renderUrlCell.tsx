import styled from "styled-components";
import {GridRenderCellParams} from "@mui/x-data-grid";

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

export const renderUrlCell = (params: GridRenderCellParams) => {
  const FIELD_SEP = "https";
  const LABEL_SEP = ",";
  const LINK_FLAG = "-link";
  const val: string = params.value;
  const urlsArr = val.split(FIELD_SEP).filter((val) => val.length > 4);

  const linkLabels: string = params.getValue(params.id, params.field + LINK_FLAG);
  console.log(linkLabels)
  const labelsArr = linkLabels ? linkLabels.split(LABEL_SEP) : [];
  console.log(labelsArr)

  return (
    <Container>
      {urlsArr.map((url, index) => {
          return <a href={FIELD_SEP+url} key={index}>{labelsArr[index] || FIELD_SEP+url}</a>
      })}
    </Container>
  )
}
