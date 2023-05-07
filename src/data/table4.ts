import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_4 = [
  {
    "id": "DCL8",
    "Phase Category": "Data",
    "Subcategory": "Improve performance",
    "Description": "For improving model performance with a dataset that has acategorical feature, the data should be split by each category.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/191348",
    "External URL(S) in post(s)": "https://stats.stackexchange.com/questions/187205/same-estimate-of-least-squares-regression-equation/187210#187210",
    "STE Post(s)-link": "CRV/191348",
    "External URL(S) in post(s)-link": "CRV/187210"
  },
  {
    "id": "DCL9",
    "Phase Category": "Data",
    "Subcategory": "Prevent computation of  biased metrics and avoid overfitting",
    "Description": "If it is needed to optimize hyper-parameters, the dataset should be split into training, validation and test sets in order to prevent overfitting and avoid biased computing metrics.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/179872",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/179872",
  },
  {
    "id": "DCL10",
    "Phase Category": "Data",
    "Subcategory": "Detect trends, errors  and relations in data",
    "Description": "In order to prevent overfitting and avoid biased metrics when optimizing, the whole dataset should be divided into trainand test; then, the training data should be divided into folds for cross-validation",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/179872\nhttps://stats.stackexchange.com/questions/342110\nhttps://stats.stackexchange.com/questions/410118",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/179872, CRV/342110, CRV/410118",
  },
  {
    "id": "DCL11",
    "Phase Category": "Data",
    "Subcategory": "Ensure minimum size and how to measure the size",
    "Description": "The size of a dataset should be only calcuated after the data pre-processing.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/13901",
    "External URL(S) in post(s)": "http://www.cs.columbia.edu/~vondrick/largetrain.pdf",
    "STE Post(s)-link": "DTSC/13901",
    "External URL(S) in post(s)-link": "Zhu X. et al. (2012)"
  }
];

export const TABLE_4_COLUMNS = [
  { field: 'id', headerName: "ID", width: 80 },
  { field: 'Phase Category', headerName: "Phase Category", width: 150 },
  { field: 'Subcategory', headerName: "Subcategory", width: 210 },
  { field: 'Description', headerName: "Description", width: 300 },
  {
    field: 'STE Post(s)',
    headerName: "STE Post(s)",
    width: 190,
    renderCell: renderUrlCell,
    sortable: false
  },
  {
    field: 'External URL(S) in post(s)',
    headerName: "External URL(S) in post(s)",
    width: 200,
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
    sortable: false,
    hide: true,
  },
];