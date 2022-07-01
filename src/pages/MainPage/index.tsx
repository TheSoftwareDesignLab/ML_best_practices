import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {TaxPage} from "../TaxPage";
import {TemplateTable} from "../../components/tables/TemplateTable";

import {TABLE_1_COLUMNS, TABLE_1} from "../../data/table1";

type Props = {
  data: any;
}

export const MainPage: React.FC<Props> = ({data}) => {
  const [openTax, setOpenTax] = React.useState(false);

  return (
    <>
      {!openTax ? <>
          <h1>Online Appendix</h1>
          <Typography variant="h5">Taxonomy</Typography>
          <Button onClick={() => setOpenTax(true)}>Open chart</Button>
          <br/>
          <br/>
          <Typography variant="h5">Some chart</Typography>
          <TemplateTable data={TABLE_1} columns={TABLE_1_COLUMNS} tableHeight={500}/>
        </>
        : <TaxPage data={data} onBackClick={() => setOpenTax(false)}/>}
    </>
  )

}
