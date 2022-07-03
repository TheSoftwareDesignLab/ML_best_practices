import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {TaxPage} from "../TaxPage";
import {TemplateTable} from "../../components/tables/TemplateTable";

import {TABLE_1_COLUMNS, TABLE_1} from "../../data/table1";
import {TABLE_2_COLUMNS, TABLE_2} from "../../data/table2";
import {TABLE_3_COLUMNS, TABLE_3} from "../../data/table3";
import {TABLE_4_COLUMNS, TABLE_4} from "../../data/table4";
import {TABLE_5_COLUMNS, TABLE_5} from "../../data/table5";
import taxImage from "../../assets/taxImage.png";

import {Container, ImageContainer} from "./styles";

type Props = {
  data: any;
}

export const MainPage: React.FC<Props> = ({data}) => {
  const [openTax, setOpenTax] = React.useState(false);

  return (
    <Container fullWidth={openTax}>
      {!openTax ? <>
          <Typography variant="overline" align="center"> This is the online appendix of </Typography>
          <Typography variant="h3" align="center" margin={10}>What are the Machine Learning best practices reported by practitioners on Stack Exchange?</Typography>
          <br/>
          <Typography variant="body1" align="justify"> <b>ABSTRACT.</b> Machine Learning (ML) is being used in multiple disciplines due to its powerful capability to infer relationships within data. In particular, Software Engineering (SE) is one of those disciplines in which ML has been used for multiple tasks, like software categorization, bugs prediction, and testing. In addition to the multiple ML applications, some studies have been conducted to detect and understand possible pitfalls and issues when using ML. However, to the best of our knowledge, only a few studies have focused on presenting ML best practices or guidelines for the application of ML in different domains. In addition, the practices and literature presented in previous literature (i) are domain-specific (e.g., concrete practices in biomechan- ics), (ii) describe few practices, or (iii) the practices lack rigorous validation and are presented in gray literature. In this paper, we present a study listing 127 ML best practices systematically mining 242 posts of 14 dfferent Stack Exchange (STE) websites and validated by four independent ML experts. The list of practices is pre- sented in a set of categories related to dierent stages of the implementation process of an ML-enabled system; for each practice, we include explanations and examples. In all the practices, the provided examples focus on SE tasks. <strong><em> We expect this list of practices could help practitioners to understand better the practices and use ML in a more informed way, in particular newcomers to this new area that sits at the intersection of software engineering and machine learning</em></strong>. </Typography>
          <br/>
          <Typography variant="caption" align="justify">Authors: Anamaria Mojica-Hanke, Andrea Bayona, Mario Linares-Vásquez, Steffen Herbold, Fabio A. González</Typography>
          <br/>
          <br/>
          <Typography variant="h5">Taxonomy of the ML best practices </Typography>
          <br/>
          <br/>
          <ImageContainer>
            <img src={taxImage} height={500} alt="Taxonomy image"/>
          </ImageContainer>
          <br/>
          <br/>
          <Typography variant="body1" align="justify"> In the following link, you will find a visual representation of the practices' taxonomy in a tree-based chart. This chart has "three" levels, a first level that describe big tasks (e.g., monitor) or important objects  (data). Followed by a second level that is a more detail activity, after this, the three presents codes/labels that were the basis of the practices presented when clicked. </Typography>
          <br/>
          <Button onClick={() => setOpenTax(true)}>Taxonomy chart</Button>
          <br/>
          <br/>
          <Typography variant="h5">Complementary tables of practices</Typography>
          <br/>
          <Typography variant="body1" align="justify"> The following tables are complement to the taxonomy presented in the previous chart. These tables are organized in the ML pipeline stages proposed by <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">Amershi et al. (2019)</a> (<em>Model requirement</em>, <em> Data collection</em>, <em> Data cleaning</em>, <em> Feature engineering</em>, <em> Data labeling</em>, <em> Model training</em>, <em> Model evaluation</em>, <em> Model deployment</em> and <em> Model monitoring</em>) and an extra stage called <em> implementation</em>. For each stage, a brief explanation of it is given and a table with the respective practices is presented. In the Table, an indicator per practice is given (this ID match wirh the ID used in the article). In addition to the ID, the taxonomy's categories are presented with the description of the practices.  Furthermore, we present extra resources, the post(s) that is related to the practices, external URL(s) related to the post, and extra urls that help to understand the practices and the ML terminology/concepts associated to them. </Typography>
          <br/>
          <Typography variant="h6" align="left">  Model requirement (mr)</Typography>
          <Typography variant="body1" align="justify"> In this stage, designers decide the functionalities that should be included in an ML system, their usefulness for new or existing products, and the most appropriate type of ML model for the expected system features <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">Amershi et al. (2019)</a>. Four ML best practices were identified for this stage.</Typography>
          <br/>
          <TemplateTable data={TABLE_1} columns={TABLE_1_COLUMNS} tableHeight={600}/>
          <br/>
          <Typography variant="h6" align="left">  Data collection (dc)</Typography>
          <Typography variant="body1" align="justify"> This second stage encompasses looking for, collecting, and integrating available datasets <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">Amershi et al. (2019)</a>. Datasets can be created from scratch, or existing datasets can be used to train models in a transfer learning fashion. Both scenarios are widely used when creating ML systems. In this stage, seven validated practices were identified. Bear in mind that the identified practices relate to some characteristics that the collected data has to meet during/after this process and not to the collection process itself.</Typography>
          <br/>
          <TemplateTable data={TABLE_2} columns={TABLE_2_COLUMNS} tableHeight={570}/>
          <br/>
          <Typography variant="h6" align="left">  Data cleaning (dcl)</Typography>
          <Typography variant="body1" align="justify"> This is the second stage in which the most practices were identified (i.e., 33 practices). In general, this stage involves removing inaccurate or noisy records from a dataset <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">Amershi et al. (2019)</a>. In this case, we present the practices aggregated by three subcategories: <b><em>Exploratory data analysis (EDA)</em></b>, <b><em>Wrangling</em></b>, and <b><em>Data</em></b>.</Typography>
          <br/>
          <Typography variant="subtitle1" align="left" mb={1}>  <em>Exploratory data analysis (EDA)</em></Typography>
          <Typography variant="body1" align="justify"> We consider EDA as the first subcategory of data cleaning, since a possible first step to modify/preprocess/wrangling data is to understand the underlying characteristics of the data (e.g., trends, nature, format). Regarding this procedure, we identified a total of seven validated practices.</Typography>
          <br/>
          <TemplateTable data={TABLE_3} columns={TABLE_3_COLUMNS} tableHeight={500}/>
          <br/>
          <Typography variant="subtitle1" align="left" mb={1}> <em>Data</em></Typography>
          <Typography variant="body1" align="justify"> In this subcategory, we present practices that deal with splitting the dataset and practices related to when to measure (i.e., determining the size of the dataset) a dataset. This subgroup is called Data since we present practices related to the data and dataset themselves and not to any transformation (beyond splitting the data) or analysis. In this group, four validated practices were identified.</Typography>
          <br/>
          <TemplateTable data={TABLE_4} columns={TABLE_4_COLUMNS} tableHeight={440}/>
          <br/>
          <Typography variant="subtitle1" align="left" mb={1}> <em>Wrangling</em></Typography>
          <Typography variant="body1" align="justify"> In this subcategory, we grouped all the practices that munge/transform the raw data into another format that will be useful when training the models. In this category, 22 practices were accepted.</Typography>
          <br/>
          <TemplateTable data={TABLE_5} columns={TABLE_5_COLUMNS} tableHeight={500}/>
        </>
        : <TaxPage data={data} onBackClick={() => setOpenTax(false)}/>}
    </Container>
  )

}
