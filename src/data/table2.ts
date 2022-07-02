export const TABLE_2 = [
  {
    "id": "Dc1",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "The distribution of the training data should reflect the real distribution.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/48234558",
    "External URL(S) associated to the post": "https://ai.stackexchange.com/q/92/9647\nhttps://www.cs.toronto.edu/~kriz/cifar.html"
  },
  {
    "id": "Dc2",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "If a model is expected to detect \"something\" in an image, then representative examples of that \"something\" should be present in the training and testing data.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/35915685",
    "External URL(S) associated to the post": "https://stackoverflow.com/questions/28003424/how-to-train-opencv-svm-with-bow-properly/28112558#28112558"
  },
  {
    "id": "Dc3",
    "Phase Category": "Data",
    "Subcategory": "Ensure minimum size and how to measure the size",
    "Description": "When measuring a dataset size it should not be done only by referring to storage space but also in terms of rows and columns.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/13901",
    "External URL(S) associated to the post": "http://www.cs.columbia.edu/~vondrick/largetrain.pdf"
  },
  {
    "id": "Dc4",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "If it is required to augment the number of instances in the negative class, preexisting datasets could be used for including more instances in the dataset.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/48234558",
    "External URL(S) associated to the post": "https://ai.stackexchange.com/q/92/9647\nhttps://www.cs.toronto.edu/~kriz/cifar.html"
  },
  {
    "id": "Dc5",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "The images that are going to be used as instances of the negative class should have some common characteristics with the positive ones.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/48234558",
    "External URL(S) associated to the post": "https://ai.stackexchange.com/q/92/9647\nhttps://www.cs.toronto.edu/~kriz/cifar.html"
  },
  {
    "id": "Dc6",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "The minimum size of the object that is going to be detected should be present in the data that is going to be used for training the model.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/40476041",
    "External URL(S) associated to the post": "-"
  },
  {
    "id": "Dc7",
    "Phase Category": "Data",
    "Subcategory": "Dataset construction",
    "Description": "The object region of interest(ROI) should have a similar aspect ratio in all the positive images.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/40476041",
    "External URL(S) associated to the post": "-"
  }
];

export const TABLE_2_COLUMNS = [
  { field: 'id', headerName: "ID", width: 160 },
  { field: 'Phase Category', headerName: "Phase Category", width: 150 },
  { field: 'Subcategory', headerName: "Subcategory", width: 210 },
  { field: 'Description', headerName: "Description", width: 300 },
  { field: 'Number of experts that validated the practice', headerName: "Number of experts that" +
      " validated the practice", width: 200, type: 'number', },
  { field: 'STE Post(s)', headerName: "STE Post(s)", width: 250 },
  { field: 'External URL(S) associated to the post', headerName: "External URL(S) associated to" +
      " the post", width: 300 },
];
