import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_11 = [
  {
    "id": "MD1",
    "Phase Category": "Deployment",
    "Subcategory": "-",
    "Description": "A deployed model should be the one that has the best hyper-parameters, but it should be re-trained with the entire dataset.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/400242\nhttps://stats.stackexchange.com/questions/11602",
    "External URL(S) in post(s)": "https://jmlr.csail.mit.edu/papers/volume11/cawley10a/cawley10a.pdf\nhttps://jmlr.csail.mit.edu/papers/volume8/cawley07a/cawley07a.pdf",
    "STE Post(s)-link": "CRV/400242, CRV/11602",
    "External URL(S) in post(s)-link": "Cawley G. et al. (2010), Cawley G. et al. (2007)",
    "References to practice terminology": "-",
  },
  {
    "id": "MD2",
    "Phase Category": "Deployment",
    "Subcategory": "-",
    "Description": "When deploying a model, the entire pipeline should be exported instead of exporting only the model.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/400242",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/400242",
    "References to practice terminology": "-",
  }
];

export const TABLE_11_COLUMNS = [ 
  {field: 'id', headerName: "ID", width: 80, sortable: false},
  {field: 'Phase Category', headerName: "Phase Category", width: 100, sortable: false},
  {field: 'Subcategory', headerName: "Subcategory", width: 100, sortable: false},
  {field: 'Description', headerName: "Description", width: 390, sortable: false},
  {
    field: 'References to practice terminology',
    headerName: "References to practice terminology",
    width: 290,
    sortable: false,
    renderCell: renderUrlCell,
    hide: true,
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