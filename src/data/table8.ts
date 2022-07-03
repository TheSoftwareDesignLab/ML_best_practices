import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_8 = [
  {
    "id": "Mt1",
    "Phase Category": "Training*",
    "Subcategory": "Aspects to consider when training a model",
    "Description": "If the objective is to build specialized models, then a specific model for each category in a categorical feature should be trained.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/191348",
    "External URL(S) in post(s)": "https://stats.stackexchange.com/questions/187205/same-estimate-of-least-squares-regression-equation/187210#187210",
    "STE Post(s)-link": "CRV/191348",
    "External URL(S) in post(s)-link": "CRV/187210"
  },
  {
    "id": "Mt2",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a model",
    "Description": "If the dataset that is going to be used has multiple features in different scale systems, then invariant-algorithms like tree based algorithms should be used.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/89696",
    "External URL(S) in post(s)": "https://github.com/dmlc/xgboost/issues/357",
    "STE Post(s)-link": "DTSC/89696",
    "External URL(S) in post(s)-link": "Xgboost Github"
  },
  {
    "id": "Mt3",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a model",
    "Description": "When training prediction models with time series data, then, sliding windows should be used.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/175714",
    "External URL(S) in post(s)": "https://www.otexts.org/fpp/2/5",
    "STE Post(s)-link": "CRV/175714",
    "External URL(S) in post(s)-link": "OTexts Evaluating forecasting"
  },
  {
    "id": "Mt4",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a model",
    "Description": "Test data should not be included in the training data in order to have a fair metric.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/482486",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/482486",
  },
  {
    "id": "Mt5",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a model",
    "Description": "As many data as possible should be used when training a model.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/297875",
    "External URL(S) in post(s)": "https://arxiv.org/abs/1707.02968\nhttps://arxiv.org/abs/1606.04080",
    "STE Post(s)-link": "CRV/297875",
    "External URL(S) in post(s)-link": "Sun C. et al. (2017), Vinyals O. et al. (2017)",
  },
  {
    "id": "Mt6",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a NN",
    "Description": "When training a neural network (NN), dropout layer(s) should be used to avoid overfitting.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/43856384\nhttps://stackoverflow.com/questions/58644114\nhttps://stackoverflow.com/questions/32966970",
    "External URL(S) in post(s)": "http://arxiv.org/pdf/1411.6447",
    "STE Post(s)-link": "STO/43856384, STO/58644114, STO/32966970",
    "External URL(S) in post(s)-link": "Xiao T. et al. (2014)",
  },
  {
    "id": "Mt7",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a NN",
    "Description": "If symmetry is needed to be avoided, in a neural network, their components should be initialized with different values.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/65704588",
    "External URL(S) in post(s)": "https://rads.stackoverflow.com/amzn/click/com/0262035618\nhttps://www.deeplearning.ai/ai-notes/initialization/\nhttps://papers.nips.cc/paper/2018/file/d81f9c1be2e08964bf9f24b15f0e4900-Paper.pdf\nhttps://mlfromscratch.com/activation-functions-explained/",
    "STE Post(s)-link": "STO/65704588",
    "External URL(S) in post(s)-link": "Goodfellow I. et al.(2017), Deep Learning AI Initializing, Hanin B. and Rolnick D. (2018), Hansen C. Activation functions",
  },
  {
    "id": "Mt8",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a NN",
    "Description": "Neural Networks weights should be initialized randomly to avoid symmetry.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/65704588",
    "External URL(S) in post(s)": "https://rads.stackoverflow.com/amzn/click/com/0262035618\nhttps://www.deeplearning.ai/ai-notes/initialization/\nhttps://papers.nips.cc/paper/2018/file/d81f9c1be2e08964bf9f24b15f0e4900-Paper.pdf\nhttps://mlfromscratch.com/activation-functions-explained/",
    "STE Post(s)-link": "STO/65704588",
    "External URL(S) in post(s)-link": "Goodfellow I. et al.(2017), Deep Learning AI Initializing, Hanin B. and Rolnick D. (2018), Hansen C. Activation functions",
  }
];

export const TABLE_8_COLUMNS = [
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