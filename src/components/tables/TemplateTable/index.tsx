import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import {Wrapper} from "./styles";
import {DATA} from "./data";

export const TemplateTable: React.FC = () => {

  const columns: GridColDef[] = [
    { field: 'name', headerName: "Name", width: 160 },
    { field: 'mail', headerName: "Mail", width: 160 },
    { field: 'phone', headerName: "Phone", width: 160 },
    {
      field: 'rating',
      headerName: "Rating",
      type: 'number',
      width: 100,
    },
  ];


  return (
    <Wrapper>
      <DataGrid
        rows={DATA}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </Wrapper>
  )

}
