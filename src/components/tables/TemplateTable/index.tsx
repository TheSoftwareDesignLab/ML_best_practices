import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Wrapper} from "./styles";

type Props = {
  columns: GridColDef[];
  data: any;
}

export const TemplateTable: React.FC<Props> = ({columns, data}) => {
  return (
    <Wrapper>
      <DataGrid
        autoHeight
        rows={data}
        columns={columns}
      />
    </Wrapper>
  )

}
