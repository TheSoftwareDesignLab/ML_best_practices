import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {TaxPage} from "../TaxPage";
import {TemplateTable} from "../../components/tables/TemplateTable";

import {TABLE_1_COLUMNS, TABLE_1} from "../../data/table1";

import {Container} from "./styles";

type Props = {
  data: any;
}

export const MainPage: React.FC<Props> = ({data}) => {
  const [openTax, setOpenTax] = React.useState(false);

  return (
    <Container>
      {!openTax ? <>
          <Typography variant="h3" align="center" margin={10}>What are the Machine Learning best practices reported by practitioners on Stack Exchange?</Typography>
          <Typography variant="h4">Taxonomy</Typography>
          <Button onClick={() => setOpenTax(true)}>Open chart</Button>
          <br/>
          <br/>
          <Typography variant="h4">Complementary tables of practices</Typography>
          <TemplateTable data={TABLE_1} columns={TABLE_1_COLUMNS} tableHeight={500}/>
        </>
        : <TaxPage data={data} onBackClick={() => setOpenTax(false)}/>}
    </Container>
  )

}
