import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_13 = [
  {
    "id": "I1",
    "Phase Category": "Implementation",
    "Subcategory": "Reproducibility/replicability",
    "Description": "For the data cleaning procedure stage, routines should be  used to avoid implementing everything from scratch.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/2066005",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/2066005"
  },
  {
    "id": "I2",
    "Phase Category": "Implementation",
    "Subcategory": "Reproducibility/replicability",
    "Description": "Across the ML stages, pipelines should be used to automate processes and save time in complex tasks.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/13901",
    "External URL(S) in post(s)": "http://www.cs.columbia.edu/~vondrick/largetrain.pdf",
    "STE Post(s)-link": "DTSC/13901", 
    "External URL(S) in post(s)-link": "Zhu X. et al. (2012)"
  },
  {
    "id": "I3",
    "Phase Category": "Implementation",
    "Subcategory": "Reproducibility/replicability",
    "Description": "In order to enable reproducibility in data pre-processing, pipelines should be used and exported.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/400242\nhttps://stats.stackexchange.com/questions/482486",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/400242, CRV/482486",
  },
  {
    "id": "I4",
    "Phase Category": "Implementation",
    "Subcategory": "Documentation/traceability",
    "Description": "For each trained model, a separate file should be used in order to keep track of all the possible experiments.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/56318",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/56318", 
  },
  {
    "id": "I5",
    "Phase Category": "Implementation",
    "Subcategory": "Documentation/traceability",
    "Description": "The (hyper-)parameters used in the training process should be documented.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/56318",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/56318", 
  },
  {
    "id": "I6",
    "Phase Category": "Implementation",
    "Subcategory": "Consistency/Integrity",
    "Description": "Once a model is deployed and a petition of data deletion is made, the data should be deleted across the entire pipeline.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/73163",
    "External URL(S) in post(s)": "https://research.google/pubs/pub46555/\nhttps://arxiv.org/abs/1907.05012\nhttps://en.wikipedia.org/wiki/Instance-based_learning",
    "STE Post(s)-link": "DTSC/73163", 
    "External URL(S) in post(s)-link": "The ML Test Score-Google,  Ginart A. et al. (2019), Instance-based learning Wikipedia"
  },
  {
    "id": "I7",
    "Phase Category": "Implementation",
    "Subcategory": "Resources usage",
    "Description": "When dealing with large datasets or large files, aspects such as parallel executions, GPU usage, and input/output efficiency should be taken into account.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://softwareengineering.stackexchange.com/questions/421223",
    "External URL(S) in post(s)": "https://github.com/webdataset/webdataset",
    "STE Post(s)-link": "SE/421223", 
    "External URL(S) in post(s)-link": "WebDataset-Github"
  },
  {
    "id": "I8",
    "Phase Category": "Implementation",
    "Subcategory": "Resources usage",
    "Description": "In order to optimize, parallel execution should be used if it supported by the algorithms.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/13901\nhttps://stackoverflow.com/questions/18567633",
    "External URL(S) in post(s)": "http://www.cs.columbia.edu/~vondrick/largetrain.pdf",
    "STE Post(s)-link": "CRV/13901, STO/18567633", 
    "External URL(S) in post(s)-link": "Zhu X. et al. (2012)"
  },
  {
    "id": "I9",
    "Phase Category": "Implementation",
    "Subcategory": "Resources usage",
    "Description": "It should be verified if both, model and dataset, fit in memory.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/13901\nhttps://softwareengineering.stackexchange.com/questions/421223",
    "External URL(S) in post(s)": "http://www.cs.columbia.edu/~vondrick/largetrain.pdf\nhttps://github.com/webdataset/webdataset",
    "STE Post(s)-link": "DTSC/13901, SE/421223", 
    "External URL(S) in post(s)-link": "Zhu X. et al. (2012), WebDataset-Github"
  },
  {
    "id": "I10",
    "Phase Category": "Implementation",
    "Subcategory": "Resources usage",
    "Description": "When dealing with large corpus, in NLP-related tasks, sparse structures should be used to improve the implementation performance.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/32859",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/32859", 
  },
  {
    "id": "I11",
    "Phase Category": "Implementation",
    "Subcategory": "Resources usage",
    "Description": "When dealing with large data, resource-aware implementations should be used.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/13901\nhttps://softwareengineering.stackexchange.com/questions/421223",
    "External URL(S) in post(s)": "http://www.cs.columbia.edu/~vondrick/largetrain.pdf\nhttps://github.com/webdataset/webdataset",
    "STE Post(s)-link": "DTSC/13901, SE/421223", 
    "External URL(S) in post(s)-link": "Zhu X. et al. (2012), WebDataset-Github"
  }
];

export const TABLE_13_COLUMNS = [
  {field: 'id', headerName: "ID", width: 70, sortable: false},
  {field: 'Phase Category', headerName: "Phase Category", width: 200, sortable: false},
  {field: 'Subcategory', headerName: "Subcategory", width: 160, sortable: false},
  {field: 'Description', headerName: "Description", width: 300, sortable: false},
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