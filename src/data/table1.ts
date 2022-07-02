import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_1 = [
  {
    "id": "Mr1",
    "Phase Category": "Requirement definition",
    "Subcategory": "Metric selection",
    "Description": "The goal of the model that is going to be trained should be considered when selecting the most appropriate metrics for assessing the model performance.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/82012",
    "External URL(S) associated to the post": "https://imbalanced-learn.org/stable/"
  },
  {
    "id": "Mr2",
    "Phase Category": "Requirement definition",
    "Subcategory": "Retraining model",
    "Description": "It is important to identify the needs/requirements of model retraining.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/56859324",
    "External URL(S) associated to the post": "-"
  },
  {
    "id": "Mr3",
    "Phase Category": "Requirement definition",
    "Subcategory": "External services",
    "Description": "If an ML model is published as a cloud service, specifically, when a classification/prediction task uses ML cloud-based services, it is important to define the use case and the model requirements in order to identify how frequently the service should be invoked.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/56859324",
    "External URL(S) associated to the post": "-"
  },
  {
    "id": "Mr4",
    "Phase Category": "Requirement definition",
    "Subcategory": "Probabilistic model",
    "Description": "When using probabilistic forecasting in a decision system, it is necessary to decouple the probabilistic model optimization from the probability threshold selection.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/405622",
    "External URL(S) associated to the post": "https://stats.stackexchange.com/questions/390186/is-decision-threshold-a-hyperparameter-in-logistic-regression\nhttps://stats.stackexchange.com/a/405049/1352\nhttps://www.fharrell.com/post/classification/"
  }
];

export const TABLE_1_COLUMNS = [
  { field: 'id', headerName: "ID", width: 160 },
  { field: 'Phase Category', headerName: "Phase Category", width: 200 },
  { field: 'Subcategory', headerName: "Subcategory", width: 160 },
  { field: 'Description', headerName: "Description", width: 300 },
  { field: 'Number of experts that validated the practice', headerName: "Number of experts that" +
      " validated the practice", width: 200, type: 'number', },
  { field: 'STE Post(s)', headerName: "STE Post(s)", width: 250, renderCell: renderUrlCell },
  { field: 'External URL(S) associated to the post', headerName: "External URL(S) associated to" +
      " the post", width: 300, renderCell: renderUrlCell },
];
