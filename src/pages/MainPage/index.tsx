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
import {TABLE_6_COLUMNS, TABLE_6} from "../../data/table6";
import {TABLE_7_COLUMNS, TABLE_7} from "../../data/table7";
import {TABLE_8_COLUMNS, TABLE_8} from "../../data/table8";
import {TABLE_9_COLUMNS, TABLE_9} from "../../data/table9";
import {TABLE_10_COLUMNS, TABLE_10} from "../../data/table10";
import {TABLE_11_COLUMNS, TABLE_11} from "../../data/table11";
import {TABLE_12_COLUMNS, TABLE_12} from "../../data/table12";
import {TABLE_13_COLUMNS, TABLE_13} from "../../data/table13";




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
          <Typography variant="body1" align="justify"> The following tables are complement to the taxonomy presented in the previous chart. These tables are organized in the ML pipeline stages proposed by <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">Amershi et al. (2019)</a> (<em>Model requirement</em>, <em> Data collection</em>, <em> Data cleaning</em>, <em> Feature engineering</em>, <em> Data labeling</em>, <em> Model training</em>, <em> Model evaluation</em>, <em> Model deployment</em> and <em> Model monitoring</em>) and an extra stage called <em> implementation</em>. For each stage, a brief explanation of it is given and a table with the respective practices is presented. In the Table, an indicator per practice is given (this ID match wirh the ID used in the article). In addition to the ID, the taxonomy's categories are presented with the description of the practices.  Furthermore, we present extra resources, the post(s) that is related to the practices, external URL(s) related to the post, and extra urls that help to understand the practices and the ML terminology/concepts associated to them. Kindly note that below each table, you will find an explanation abou the acronyms used in each table.</Typography>
          <br/>
          <Typography variant="h6" align="left">  Model requirement (mr)</Typography>
          <Typography variant="body1" align="justify"> In this stage, designers decide the functionalities that should be included in an ML system, their usefulness for new or existing products, and the most appropriate type of ML model for the expected system features <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">(Amershi et al. (2019))</a>. Four ML best practices were identified for this stage.</Typography>
          <br/>
          <TemplateTable data={TABLE_1} columns={TABLE_1_COLUMNS} tableHeight={540}/>
          <Typography variant="caption" align="justify">CRV: https://stats.stackexchange.com/q<br/>DTSC: https://datascience.stackexchange.com/q<br/>STO: https://stackoverflow.com/q</Typography>
          <br/>
          <br/>
          <Typography variant="h6" align="left">  Data collection (dc)</Typography>
          <Typography variant="body1" align="justify"> This second stage encompasses looking for, collecting, and integrating available datasets <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">(Amershi et al. (2019))</a>. Datasets can be created from scratch, or existing datasets can be used to train models in a transfer learning fashion. Both scenarios are widely used when creating ML systems. In this stage, seven validated practices were identified. Bear in mind that the identified practices relate to some characteristics that the collected data has to meet during/after this process and not to the collection process itself.</Typography>
          <br/>
          <TemplateTable data={TABLE_2} columns={TABLE_2_COLUMNS} tableHeight={570}/>
          <Typography variant="caption" align="justify">AI: https://ai.stackexchange.com/q<br/>CRV: https://stats.stackexchange.com/q<br/>DTSC: https://datascience.stackexchange.com/q<br/>STO: https://stackoverflow.com/q</Typography>
          <br/>
          <br/>
          <Typography variant="h6" align="left">  Data cleaning (dcl)</Typography>
          <Typography variant="body1" align="justify"> This is the second stage in which the most practices were identified (i.e., 33 practices). In general, this stage involves removing inaccurate or noisy records from a dataset <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">(Amershi et al. (2019))</a>. In this case, we present the practices aggregated by three subcategories: <b><em>Exploratory data analysis (EDA)</em></b>, <b><em>Wrangling</em></b>, and <b><em>Data</em></b>.</Typography>
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
          <br/>
          <Typography variant="h6" align="left">  Data labeling (dl)</Typography>
          <Typography variant="body1" align="justify"> This phase, in which a ground truth label is assigned to each sample/record of the datasets <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">(Amershi et al. (2019))</a>, is not always required since some ML approaches do not need it. In particular, ground truth is needed when working with projects that use supervised or semi-supervised learning but is not needed for projects that use unsupervised learning. For instance, if a snippet of code is going to be classified as vulnerable or not, then for each snippet of code, a label indicating if it is vulnerable or not should be assigned. Two practices were identified in this stage. The first practice in this group was validated by all the experts (<em>dl1</em>), while the second practice (<em>dl2</em>) was validated by three of them. </Typography>
          <br/>
          <TemplateTable data={TABLE_6} columns={TABLE_6_COLUMNS} tableHeight={300}/>
          <Typography variant="caption" align="justify">DTSC: https://datascience.stackexchange.com/q<br/>STO: https://stackoverflow.com/q</Typography>
          <br/>
          <br/>
          <Typography variant="h6" align="left">  Feature engineering (fe)</Typography>
          <Typography variant="body1" align="justify"> This stage of an ML pipeline involves all the activities that are performed to extract and select informative features (i.e., characteristics/attributes that are useful or relevant) for machine learning models <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">(Amershi et al. (2019))</a>. In this stage, 11 validated practices were identified, four of them (<em>fe1</em> - <em>fe4</em>) were validated by the four experts  and the remaining six (<em>fe5</em> - <em>fe11</em>) were validated by three experts.</Typography>
          <br/>
          <TemplateTable data={TABLE_7} columns={TABLE_7_COLUMNS} tableHeight={600}/>
          <Typography variant="caption" align="justify">CRV: https://stats.stackexchange.com/q<br/>DTSC: https://datascience.stackexchange.com/q<br/>STO: https://stackoverflow.com/q</Typography>
          <br/>
          <br/>
          <Typography variant="h6" align="left">  Model training (mt)</Typography>
          <Typography variant="body1" align="justify"> This is the ML pipeline stage with the largest number of validated practices, 47 in total. In this stage, machine learning models are trained and tuned using the selected features in the fe stage, and the labels created/selected during the dl stage  <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">(Amershi et al. (2019))</a>, if applicable. To facilitate the reading of this subsection, the practices are grouped into two subcategories, a Learning phase, and a Validation phase. In each subcategory, we present, first, all the practices that were validated by all the four experts, followed by those that were validated by three experts. Note that validation refers to the usage of a validation set in order to optimize hyper-parameters; validation, in this case, is not related to testing an already trained and tuned model.</Typography>
          <br/>
          <Typography variant="subtitle1" align="left" mb={1}>  <em>Learning Phase</em></Typography>
          <Typography variant="body1" align="justify"> This subcategory is related to the learning phase of a model, meaning the first step of training a model before worrying about the optimization of hyper-parameters and the evaluation phase. In particular, some of the topics covered by the identified practices in this category are: aspects to consider when training a model regardless of its type; aspects to consider when training a neural network; when to use transfer learning; ensemble modeling; and how to improve the performance of a model during the training process. In this subcategory, we present 32 practices. Fifteen (15) practices (<em>mt15</em> - <em>m15</em>) were validated by all the experts and the other 17 were validated  (<em>mt16</em> - <em>mt32</em>) only by three experts.</Typography>
          <br/>
          <TemplateTable data={TABLE_8} columns={TABLE_8_COLUMNS} tableHeight={800}/>
          <Typography variant="caption" align="justify">*: We renamed this subcategory in the article to Learning phase in order to facilitate the reading  in the article.<br/>AI: https://ai.stackexchange.com/q<br/>CRV: https://stats.stackexchange.com/q<br/>DTSC: https://datascience.stackexchange.com/q<br/>STO: https://stackoverflow.com/q</Typography>
          <br/>
          <br/>
          <Typography variant="subtitle1" align="left" mb={1}>  <em>Validation Phase</em></Typography>
          <Typography variant="body1" align="justify"> This subcategory includes topics that relate to (i) hyper-parameter tuning (i.e., finding optimum hyper-parameters), (ii) aspects to consider when evaluating a model, and (iii) avoid over-fitting. Note that the second and third topics were included in this stage (i.e., training) since the training process is affected. In this subcategory, 15 practices were identified,  nine of them (<em>mt33</em> - <em>mt41</em>) were validated by four experts, and the other six (<em>mt42</em> - <em>mt47</em>) were validated by three experts.</Typography>
          <br/>
          <TemplateTable data={TABLE_9} columns={TABLE_9_COLUMNS} tableHeight={600}/>
          <Typography variant="caption" align="justify">CRV: https://stats.stackexchange.com/q<br/>DTSC: https://datascience.stackexchange.com/q<br/>STO: https://stackoverflow.com/q</Typography>
          <br/>
          <br/>
          <Typography variant="h6" align="left">  Model evaluation (me)</Typography>
          <Typography variant="body1" align="justify"> In the model evaluation stage, trained and tuned models are tested. For instance, engineers evaluate the output models on tested or safeguard datasets by using pre-defined metrics. In particular cases, for critical domains (e.g., safety-critical applica- tions from the medical domain), this stage involves human evaluation <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">(Amershi et al. (2019))</a>. For this stage, we have a few practices, eight, that are related to model evaluations. However, some other practices that involve or are associated with model evaluation/testing were mentioned before as part of other stages. All the experts validated two practices (<em>me1</em> - <em>me2</em>), and six (<em>me3</em> - <em>me8</em>) were validated by three experts. </Typography>
          <TemplateTable data={TABLE_10} columns={TABLE_10_COLUMNS} tableHeight={400}/> 
          <Typography variant="caption" align="justify">CS: https://cs.stackexchange.com/q<br/>CRV: https://stats.stackexchange.com/q<br/>DTSC: https://datascience.stackexchange.com/q<br/>STO: https://stackoverflow.com/q</Typography>
          <br/>
          <br/>
          <Typography variant="h6" align="left">  Model deployment (md)</Typography>
          <Typography variant="body1" align="justify"> Note that, in this stage, the inference code (i.e., the code used to train/test/validate a model) of the previously trained, tuned, and tested model is deployed on a production setup <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">(Amershi et al. (2019))</a>. Two practices were identified in this stage and validated by the four experts. </Typography>
          <TemplateTable data={TABLE_11} columns={TABLE_11_COLUMNS} tableHeight={280}/> 
          <Typography variant="caption" align="justify">CRV: https://stats.stackexchange.com/q</Typography>
          <br/>
          <br/>
          <Typography variant="h6" align="left">  Model monitoring (mm)</Typography>
          <Typography variant="body1" align="justify"> In the last but not least stage of the ML pipeline, models are continuously monitored for possible errors while being executed in the real world <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">(Amershi et al. (2019))</a>. For this stage, two practices related to data deviations were validated by all the experts. </Typography>
          <TemplateTable data={TABLE_12} columns={TABLE_12_COLUMNS} tableHeight={320}/> 
          <Typography variant="caption" align="justify">DTSC: https://datascience.stackexchange.com/q</Typography>
          <br/>
          <br/>
          <Typography variant="h6" align="left">  Implementation (i)</Typography>
          <Typography variant="body1" align="justify"> This section does not correspond to an established stage in the ML pipeline proposed by <a href="https://www.microsoft.com/en-us/research/uploads/prod/2019/03/amershi-icse-2019_Software_Engineering_for_Machine_Learning.pdf">Amershi et al. (2019)</a>; this is a complementary stage in which we present practices that are more related to the resources needed to build/monitor an ML model/system and involves more than one of the previous stages. Eleven practices were identified in this stage, from which nine (<em>i1</em> - <em>i9</em>)  were validated by all the experts, and  two (<em>i10</em> - <em>i11</em>)  were validated by three of the experts.</Typography>
          <TemplateTable data={TABLE_13} columns={TABLE_13_COLUMNS} tableHeight={500}/> 
          <Typography variant="caption" align="justify">CRV: https://stats.stackexchange.com/q<br/>DTSC: https://datascience.stackexchange.com/q<br/>STO: https://stackoverflow.com/q <br/> SE: https://softwareengineering.stackexchange.com/q</Typography>
        </>
        : <TaxPage data={data} onBackClick={() => setOpenTax(false)}/>}
    </Container>
  )

}
