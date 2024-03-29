import * as React from 'react';
import {DataGrid, GridColDef, GridRowSpacingParams} from '@mui/x-data-grid';
import {Wrapper, OverrideCss} from "./styles";

type Props = {
  columns: GridColDef[];
  data: any;
  tableHeight?: number;
}

export const TemplateTable: React.FC<Props> = ({columns, data, tableHeight= 400}) => {

  return (
      <OverrideCss>
        <Wrapper height={tableHeight}>
          <DataGrid
            rows={data}
            columns={columns}
            hideFooter
            disableSelectionOnClick
            disableColumnMenu
            rowHeight={60}
            showColumnRightBorder={false}
            showCellRightBorder={false}
          />
        </Wrapper>
      </OverrideCss>
  )
}
