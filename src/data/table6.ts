import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_6 = [
  {
    "id": "Dl1",
    "Phase Category": "Labeling",
    "Subcategory": "Scalability",
    "Description": "Manual data labeling could be expensive, so it could be done by more than one person in order to scale the labeling process.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/12344",
    "External URL(S) in post(s)": "https://www.mturk.com",
    "STE Post(s)-link": "DTSC/12344",
    "External URL(S) in post(s)-link": "Amazon's Mechanical Turk"
  },
  {
    "id": "Dl2",
    "Phase Category": "Labeling",
    "Subcategory": "Parameterize",
    "Description": "In the case of object detection, when selecting the region of interest, a tool should be used to fix the aspect ratio for all the labeled objects.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/40476041",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/40476041"
  }
];

export const TABLE_6_COLUMNS = [
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