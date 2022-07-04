import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_1 = [
  {
    "id": "Mr1",
    "Phase Category": "Requirement definition",
    "Subcategory": "Metric selection",
    "Description": "The goal of the model that is going to be trained should be considered when selecting the most appropriate metrics for assessing the model performance.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/82012",
    "External URL(S) in post(s)": "https://imbalanced-learn.org/stable/",
    "STE Post(s)-link": "DTSC/82012",
    "External URL(S) in post(s)-link": "Imbalanced learn-Sklearn"
  },
  {
    "id": "Mr2",
    "Phase Category": "Requirement definition",
    "Subcategory": "Retraining model",
    "Description": "It is important to identify the needs/requirements of model retraining.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/56859324",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/56859324",
  },
  {
    "id": "Mr3",
    "Phase Category": "Requirement definition",
    "Subcategory": "External services",
    "Description": "If an ML model is published as a cloud service, specifically, when a classification/prediction task uses ML cloud-based services, it is important to define the use case and the model requirements in order to identify how frequently the service should be invoked.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/56859324",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/56859324",
  },
  {
    "id": "Mr4",
    "Phase Category": "Requirement definition",
    "Subcategory": "Probabilistic model",
    "Description": "When using probabilistic forecasting in a decision system, it is necessary to decouple the probabilistic model optimization from the probability threshold selection.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/405622",
    "External URL(S) in post(s)": "https://stats.stackexchange.com/questions/390186/is-decision-threshold-a-hyperparameter-in-logistic-regression\nhttps://stats.stackexchange.com/a/405049/1352\nhttps://www.fharrell.com/post/classification/",
    "STE Post(s)-link": "CRV/405622",
    "External URL(S) in post(s)-link": "CRV/390186, CRV/405049, Classification vs. Prediction"
  }
];

export const TABLE_1_COLUMNS = [
  {field: 'id', headerName: "ID", width: 80, sortable: false},
  {field: 'Phase Category', headerName: "Phase Category", width: 200, sortable: false},
  {field: 'Subcategory', headerName: "Subcategory", width: 160, sortable: false},
  {field: 'Description', headerName: "Description", width: 300, sortable: false},
  {
    field: 'STE Post(s)',
    headerName: "STE Post(s)",
    width: 180,
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
