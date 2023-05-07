import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_12 = [
  {
    "id": "MM1",
    "Phase Category": "Monitoring",
    "Subcategory": "Be aware of model performance and new data",
    "Description": "After deployment, the new data that will serve as input for the  model should be constantly monitored to detect any deviation from the original data.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/12761",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/12761",
    "References to practice terminology": "https://dl.acm.org/doi/full/10.1145/3446331?casa_token=34-SMl_TTxcAAAAA%3AZPrioGk5aA9wG7OmYeylmG0iSjR4-yMW_QLUjqyxI0-E8BzxvhPDX5_SfeGOKwOsqev0s2V8beY\nhttps://proceedings.mlr.press/v126/adam20a",
    "References to practice terminology-link": "Model degradation (Mauri & Damiani), Model degradation (Adam et al.)",
  },
  {
    "id": "MM2",
    "Phase Category": "Monitoring",
    "Subcategory": "Be aware of model performance and new data",
    "Description": "When monitoring the data distribution, if it deviates from  the original one used for training and tuning models, then the model should be retrained in order to avoid degradation.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/12761",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/12761",
    "References to practice terminology": "-",
  }
];

export const TABLE_12_COLUMNS = [
  {field: 'id', headerName: "ID", width: 70, sortable: false},
  {field: 'Phase Category', headerName: "Phase Category", width: 100, sortable: false},
  {field: 'Subcategory', headerName: "Subcategory", width: 190, sortable: false},
  {field: 'Description', headerName: "Description", width: 390, sortable: false},
  {
    field: 'References to practice terminology',
    headerName: "References to practice terminology",
    width: 290,
    sortable: false,
    renderCell: renderUrlCell,
  },
  {
    field: 'STE Post(s)',
    headerName: "STE Post(s)",
    width: 190,
    sortable: false,
    renderCell: renderUrlCell
  },
  {
    field: 'External URL(S) in post(s)',
    headerName: "External URL(S) in post(s)",
    width: 250,
    sortable: false,
    renderCell: renderUrlCell,
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
    field: 'References to practice terminology-link',
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