import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_3 = [
  {
    "id": "Dcl1",
    "Phase Category": "Exploratory data analysis",
    "Subcategory": "Define types of features and  dependencies between them",
    "Description": "For each possible attribute/column in a dataset, we should identify its type before applying any pre-processing technique.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/5652357",
    "External URL(S) in post(s)": "http://oreilly.com/catalog/9780596510497/\nhttps://en.wikipedia.org/wiki/Cross_tabulation",
    "STE Post(s)-link": "STO/5652357",
    "External URL(S) in post(s)-link": "Book-Watters P. and Boslaugh S, Cross tabulation Wikipedia"
  },
  {
    "id": "Dcl2",
    "Phase Category": "Exploratory data analysis",
    "Subcategory": "Define types of features and  dependencies between them",
    "Description": "It should be determined what variables are dependent and what ones are independent.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/5652357",
    "External URL(S) in post(s)": "http://oreilly.com/catalog/9780596510497/\nhttps://en.wikipedia.org/wiki/Cross_tabulation",
    "STE Post(s)-link": "STO/5652357",
    "External URL(S) in post(s)-link": "Book-Watters P. and Boslaugh S, Cross tabulation Wikipedia"
  },
  {
    "id": "Dcl3",
    "Phase Category": "Exploratory data analysis",
    "Subcategory": "Detect trends, errors  and relations in data",
    "Description": "When analyzing time series/temporal data, possible temporal trends should be identified.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/2368",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/2368",
  },
  {
    "id": "Dcl4",
    "Phase Category": "Exploratory data analysis",
    "Subcategory": "Detect trends, errors  and relations in data",
    "Description": "When analyzing time series/temporal data, weird trends should be identified.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/2368",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/2368",
  },
  {
    "id": "Dcl5",
    "Phase Category": "Exploratory data analysis",
    "Subcategory": "Detect trends, errors  and relations in data",
    "Description": "It is needed to identify missing values and their nature before doing any pre-processing.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/39058",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/39058",
  },
  {
    "id": "Dcl6",
    "Phase Category": "Exploratory data analysis",
    "Subcategory": "Detect trends, errors  and relations in data",
    "Description": "Before applying any pre-processing technique, potential errors in data should be identified.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/2368",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/2368",
  },
  {
    "id": "Dcl7",
    "Phase Category": "Exploratory data analysis",
    "Subcategory": "Dataset construction",
    "Description": "If correlation between existing features and instances of geographical data are needed, then, geographical data should be clustered.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/64990",
    "External URL(S) in post(s)": "https://www.geeksforgeeks.org/clustering-in-machine-learning/",
    "STE Post(s)-link": "DTSC/64990",
    "External URL(S) in post(s)-link": "Clustering GeeksForGeeks"
  }
];

export const TABLE_3_COLUMNS = [
  { field: 'id', headerName: "ID", width: 160 },
  { field: 'Phase Category', headerName: "Phase Category", width: 150 },
  { field: 'Subcategory', headerName: "Subcategory", width: 210 },
  { field: 'Description', headerName: "Description", width: 300 },
  {
    field: 'STE Post(s)',
    headerName: "STE Post(s)",
    width: 170,
    renderCell: renderUrlCell,
    sortable: false
  },
  {
    field: 'External URL(S) in post(s)',
    headerName: "External URL(S) in post(s)",
    width: 230,
    renderCell: renderUrlCell,
    sortable: false,
  },
  {
    field: 'STE Post(s)-link',
    hide: true,
  },
  {
    field: 'External URL(S) in post(s)-link',
    hide: true,
  },
  {
    field: 'Number of experts that validated the practice',
    headerName: "Number of experts that validated the practice",
    width: 200,
    type: 'number',
    sortable: false
  },
];