import styled from "styled-components";

export const Wrapper = styled.div<{height: number}>`
  height: ${({height}) => height}px;
  padding: 20px;
`;

export const OverrideCss = styled.div`
  .MuiDataGrid-columnHeaderTitle {
    overflow: unset;
    text-overflow: unset;
    white-space: normal;
    line-height: initial;
    font-weight: 600;
  }
  
  .MuiDataGrid-columnHeaderTitleContainer{
    white-space: normal;
  }
  
  .MuiDataGrid-columnHeaders{
    max-height: fit-content !important;
    line-height: unset !important;
  }
  
  .MuiDataGrid-row{
    height: auto !important;
    max-height: 100% !important;
    min-height: 60px !important;
  }
  
  .MuiDataGrid-cell {
    max-height: 100% !important;
    min-height: 60px !important;
    white-space: break-spaces !important;
  }
  
  .MuiDataGrid-virtualScroller {
    overflow-y: scroll !important;
  }
`;

