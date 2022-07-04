import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_2 = [
  {
    "id": "Dc1",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "The distribution of the training data should reflect the real distribution.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/48234558",
    "External URL(S) in post(s)": "https://ai.stackexchange.com/q/92/9647\nhttps://www.cs.toronto.edu/~kriz/cifar.html",
    "STE Post(s)-link": "STO/48234558",
    "External URL(S) in post(s)-link": "AI/92, CIFAR dataset"
  },
  {
    "id": "Dc2",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "If a model is expected to detect \"something\" in an image, then representative examples of that \"something\" should be present in the training and testing data.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/35915685",
    "External URL(S) in post(s)": "https://stackoverflow.com/questions/28003424/how-to-train-opencv-svm-with-bow-properly/28112558#28112558",
    "STE Post(s)-link": "STO/35915685",
    "External URL(S) in post(s)-link": "STO/28112558"
  },
  {
    "id": "Dc3",
    "Phase Category": "Data",
    "Subcategory": "Ensure minimum size and how to measure the size",
    "Description": "When measuring a dataset size it should not be done only by referring to storage space but also in terms of rows and columns.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/13901",
    "External URL(S) in post(s)": "http://www.cs.columbia.edu/~vondrick/largetrain.pdf",
    "STE Post(s)-link": "DTSC/13901",
    "External URL(S) in post(s)-link": "Zhu X. et al. (2012)"
  },
  {
    "id": "Dc4",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "If it is required to augment the number of instances in the negative class, preexisting datasets could be used for including more instances in the dataset.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/48234558",
    "External URL(S) in post(s)": "https://ai.stackexchange.com/q/92/9647\nhttps://www.cs.toronto.edu/~kriz/cifar.html",
    "STE Post(s)-link": "STO/48234558",
    "External URL(S) in post(s)-link": "AI/92, CIFAR dataset"
  },
  {
    "id": "Dc5",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "The images that are going to be used as instances of the negative class should have some common characteristics with the positive ones.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/48234558",
    "External URL(S) in post(s)": "https://ai.stackexchange.com/q/92/9647\nhttps://www.cs.toronto.edu/~kriz/cifar.html",
    "STE Post(s)-link": "STO/48234558",
    "External URL(S) in post(s)-link": "AI/92, CIFAR dataset"
  },
  {
    "id": "Dc6",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "The minimum size of the object that is going to be detected should be present in the data that is going to be used for training the model.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/40476041",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/40476041",
  },
  {
    "id": "Dc7",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "The object region of interest (ROI) should have a similar aspect ratio in all the positive images.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/40476041",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/40476041",
  }
];

export const TABLE_2_COLUMNS = [
  {field: 'id', headerName: "ID", width: 160, sortable: false},
  {field: 'Phase Category', headerName: "Phase Category", width: 150, sortable: false},
  {field: 'Subcategory', headerName: "Subcategory", width: 210, sortable: false},
  {field: 'Description', headerName: "Description", width: 300, sortable: false},
  {
    field: 'STE Post(s)',
    headerName: "STE Post(s)",
    width: 250,
    sortable: false,
    renderCell: renderUrlCell
  },
  {
    field: 'External URL(S) in post(s)',
    headerName: "External URL(S) in post(s)",
    width: 300,
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
    field: 'Number of experts that validated the practice',
    headerName: "Number of experts that validated the practice",
    width: 200,
    type: 'number',
    sortable: false
  },
];
