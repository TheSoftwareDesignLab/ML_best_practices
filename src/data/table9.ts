import {renderUrlCell} from "../utils/renderUrlCell";

export const TABLE_9 = [
  {
    "id": "Mt33",
    "Phase Category": "Validation",
    "Subcategory": "Hyper-parameter tuning",
    "Description": "The optimization process should be done with a validation set.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/179872",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/179872"
  },
  {
    "id": "Mt34",
    "Phase Category": "Validation",
    "Subcategory": "Hyper-parameter tuning",
    "Description": "Each model that is combined into an ensemble should be optimized independently.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/308376",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/308376"
  },
  {
    "id": "Mt35",
    "Phase Category": "Validation",
    "Subcategory": "Hyper-parameter tuning",
    "Description": "In order to monitor the learning process's evolution, the model's predefined metrics should be calculated at the end of each epoch.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/425014",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/425014"
  },
  {
    "id": "Mt36",
    "Phase Category": "Validation",
    "Subcategory": "Aspects to consider when validating a model",
    "Description": "When data is insufficient to split it into train, validation and test, then cross-validation should be used.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/355428",
    "External URL(S) in post(s)": "http://web.stanford.edu/~hastie/Papers/ESLII.pdf\nhttps://stats.stackexchange.com/questions/7004/calculating-required-sample-size-precision-of-variance-estimate/7008#7008\nhttps://stats.stackexchange.com/questions/19048/what-is-the-difference-between-test-set-and-validation-set/129125#129125\nhttps://cran.r-project.org/web/packages/rms/index.html",
    "STE Post(s)-link": "CRV/355428",
    "External URL(S) in post(s)-link": "Book Hastie T. et al., CRV/7008, CRV/129125, Regression Modeling CRAN"
  },
  {
    "id": "Mt37",
    "Phase Category": "Validation",
    "Subcategory": "Aspects to consider when validating a model",
    "Description": "It is preferable to use cross-validation instead of a training and test data split for training and testing a model.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/410118",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/410118",
  },
  {
    "id": "Mt38",
    "Phase Category": "Validation",
    "Subcategory": "Aspects to consider when validating a model",
    "Description": "It is preferable to use nested cross-validation instead of a training and test split for training and testing a model.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/410118",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/410118",
  },
  {
    "id": "Mt39",
    "Phase Category": "Validation",
    "Subcategory": "Aspects to consider when validating a model",
    "Description": "When training a neural network, in order to ensure reproducibility and fair comparison, the seed used for generating random numbers in the training process should be fixed.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/65706957",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/65706957",
  },
  {
    "id": "Mt40",
    "Phase Category": "Validation",
    "Subcategory": "Avoid overfitting",
    "Description": "In order to prevent overfitting, cross-validation should be used.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/12761\nhttps://datascience.stackexchange.com/questions/13901\nhttps://stackoverflow.com/questions/65706957",
    "External URL(S) in post(s)": "http://www.cs.columbia.edu/~vondrick/largetrain.pdf",
    "STE Post(s)-link": "DTSC/12761, DTSC/13901, STO/65706957",
    "External URL(S) in post(s)-link": "Zhu X. et al. (2012)"
  },
  {
    "id": "Mt41",
    "Phase Category": "Validation",
    "Subcategory": "Avoid overfitting",
    "Description": "In order to avoid overfitting nested cross-validation should be used.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/15585\nhttps://stats.stackexchange.com/questions/11602",
    "External URL(S) in post(s)": "http://dx.doi.org/10.1073/pnas.102102699\nhttps://jmlr.csail.mit.edu/papers/volume11/cawley10a/cawley10a.pdf\nhttps://jmlr.csail.mit.edu/papers/volume8/cawley07a/cawley07a.pdf",
    "STE Post(s)-link": "CRV/15585, CRV/11602",
    "External URL(S) in post(s)-link": "Ambroise C. et al. (2002), Cawley G. et al. (2010), Cawley G. et al. (2007)"
  },
  {
    "id": "Mt42",
    "Phase Category": "Validation",
    "Subcategory": "Aspects  to consider when validating a model",
    "Description": "First tune the hyper-parameters of the probabilistic model and then adjust the decision thresholds.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/405622",
    "External URL(S) in post(s)": "https://stats.stackexchange.com/questions/390186/is-decision-threshold-a-hyperparameter-in-logistic-regression\nhttps://stats.stackexchange.com/a/405049/1352\nhttps://www.fharrell.com/post/classification/",
    "STE Post(s)-link": "CRV/405622",
    "External URL(S) in post(s)-link": "CRV/390186, CRV/405049, Classification vs. Prediction"
  },
  {
    "id": "Mt43",
    "Phase Category": "Validation",
    "Subcategory": "Aspects  to consider when validating a model",
    "Description": "In order to monitor the evolution of the learning process and identify issues at an early stage on it, learning curves should be plotted.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/13901",
    "External URL(S) in post(s)": "http://www.cs.columbia.edu/~vondrick/largetrain.pdf",
    "STE Post(s)-link": "DTSC/13901",
    "External URL(S) in post(s)-link": "Zhu X. et al. (2012)"
  },
  {
    "id": "Mt44",
    "Phase Category": "Validation",
    "Subcategory": "Aspects  to consider when validating a model",
    "Description": "When evaluating a model, bootstrapping or cross-validation should be tried.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/355428",
    "External URL(S) in post(s)": "http://web.stanford.edu/~hastie/Papers/ESLII.pdf\nhttps://stats.stackexchange.com/questions/7004/calculating-required-sample-size-precision-of-variance-estimate/7008#7008\nhttps://stats.stackexchange.com/questions/19048/what-is-the-difference-between-test-set-and-validation-set/129125#129125\nhttps://cran.r-project.org/web/packages/rms/index.html",
    "STE Post(s)-link": "CRV/355428",
    "External URL(S) in post(s)-link": "Book Hastie T. et al., CRV/7008, CRV/129125, Regression Modeling CRAN"
  },
  {
    "id": "Mt45",
    "Phase Category": "Validation",
    "Subcategory": "Aspects  to consider when validating a model",
    "Description": "When training/validating/testing a model, the process of cross-validation should be repeated with different seeds to prevent the impact of using a fixed seed.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/65706957",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/65706957",
  },
  {
    "id": "Mt46",
    "Phase Category": "Validation",
    "Subcategory": "Aspects  to consider when validating a model",
    "Description": "If you want to lower the uncertainty of the hyper-parameter tuning process, then nested cross-validation should be used.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/342110",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/342110"
  },
  {
    "id": "Mt47",
    "Phase Category": "Validation",
    "Subcategory": "",
    "Description": "In order to avoid overfitting the performance between training and testing should be compared.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/77298",
    "External URL(S) in post(s)": "https://scikit-optimize.github.io/stable/auto_examples/sklearn-gridsearchcv-replacement.html\nhttps://stackoverflow.com/questions/20463281/how-do-i-solve-overfitting-in-random-forest-of-python-sklearn\nhttps://stats.stackexchange.com/questions/111968/random-forest-how-to-handle-overfitting",
    "STE Post(s)-link": "DTSC/77298, STO/20463281, CRV/111968",
    "External URL(S) in post(s)-link": "Hyperparameter search Sklearn, "
  },
];

export const TABLE_9_COLUMNS = [
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