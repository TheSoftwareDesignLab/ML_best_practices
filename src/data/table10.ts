import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_10 = [
  {
    "id": "Me1",
    "Phase Category": "Validation",
    "Subcategory": "Aspects  to consider when validating a model",
    "Description": "Use adversarial inputs for testing a model in order to ensure robustness.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/82805",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/82805"
  },
  {
    "id": "Me2",
    "Phase Category": "Validation",
    "Subcategory": "Hyper parameter tuning",
    "Description": "After the best hyper-parameters are found, the model with those \“optimum\" hyper-parameters should be tested in the set built for testing.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/342110\nhttps://stackoverflow.com/questions/65706957\nhttps://stats.stackexchange.com/questions/179872",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/342110, STO/65706957, CRV/179872"
  },
  {
    "id": "Me3",
    "Phase Category": "Validation",
    "Subcategory": "Aspects  to consider when validating a model",
    "Description": "If a superset vocabulary was built for a natural language processing {NLP} task, then the model bias should be checked.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/32859",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/32859"
  },
  {
    "id": "Me4",
    "Phase Category": "Validation",
    "Subcategory": "Aspects  to consider when validating a model",
    "Description": "The comparison between models to identify the best model should be made in the test set.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/179872",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/179872",
  },
  {
    "id": "Me5",
    "Phase Category": "Validation",
    "Subcategory": "Unit testing",
    "Description": "Previously annotated data should be used when testing machine learning models with unit tests.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/82805",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/82805"
  },
  {
    "id": "Me6",
    "Phase Category": "Validation",
    "Subcategory":  "Aspects to consider when validating a model",
    "Description": "The performance and the time required to train a model should be taken into account when comparing models",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/13901",
    "External URL(S) in post(s)": "http://www.cs.columbia.edu/~vondrick/largetrain.pdf",
    "STE Post(s)-link": "DTSC/13901",
    "External URL(S) in post(s)-link": "Zhu X. et al. (2012)"
  },  
  {
    "id": "Me7",
    "Phase Category": "Validation",
    "Subcategory": "Aspects to consider when validating a model",
    "Description": "The membership of the testing data to the training data should be tested.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://cs.stackexchange.com/questions/115441",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CS/115441",
  },  
  {
    "id": "Me8",
    "Phase Category": "Validation",
    "Subcategory": "Aspects to consider when validating a model",
    "Description": "When cross-validation is used for testing, then the hold-out set should not be used.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/342110",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/342110",
  }
];

export const TABLE_10_COLUMNS = [
  {field: 'id', headerName: "ID", width: 70, sortable: false},
  {field: 'Phase Category', headerName: "Phase Category", width: 200, sortable: false},
  {field: 'Subcategory', headerName: "Subcategory", width: 160, sortable: false},
  {field: 'Description', headerName: "Description", width: 300, sortable: false},
  {
    field: 'STE Post(s)',
    headerName: "STE Post(s)",
    width: 200,
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
    sortable: false
  },
];