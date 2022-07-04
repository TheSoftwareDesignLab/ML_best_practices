import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_11 = [
  {
    "id": "Md1",
    "Phase Category": "Deployment",
    "Subcategory": "-",
    "Description": "A deployed model should be the one that has the best hyper-parameters, but it should be re-trained with the entire dataset.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/400242\nhttps://stats.stackexchange.com/questions/11602",
    "External URL(S) in post(s)": "https://jmlr.csail.mit.edu/papers/volume11/cawley10a/cawley10a.pdf\nhttps://jmlr.csail.mit.edu/papers/volume8/cawley07a/cawley07a.pdf",
    "STE Post(s)-link": "CRV/400242, CRV/11602",
    "External URL(S) in post(s)-link": "Cawley G. et al. (2010), Cawley G. et al. (2007)"
  },
  {
    "id": "Md2",
    "Phase Category": "Deployment",
    "Subcategory": "-",
    "Description": "When deploying a model, the entire pipeline should be exported instead of exporting only the model.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/400242",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/400242",
  }
];

export const TABLE_11_COLUMNS = [
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