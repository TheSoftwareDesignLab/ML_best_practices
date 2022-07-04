import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_12 = [
  {
    "id": "Mm1",
    "Phase Category": "Monitoring",
    "Subcategory": "Be aware of model performance and new data",
    "Description": "After deployment, the new data that will serve as input for the  model should be constantly monitored to detect any deviation from the original data.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/12761",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/12761"
  },
  {
    "id": "Mm2",
    "Phase Category": "Monitoring",
    "Subcategory": "Be aware of model performance and new data",
    "Description": "When monitoring the data distribution, if it deviates from  the original one used for training and tuning models, then the model should be retrained in order to avoid degradation.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/12761",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/12761",
  }
];

export const TABLE_12_COLUMNS = [
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