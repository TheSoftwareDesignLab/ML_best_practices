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
  },
  {
    "id": "Mt9",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a NN",
    "Description": "When training a NN, Early Stopping should be used (e.g., after 10 epochs the model has not improved in 0.001 in accuracy).",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/425014",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/425014"
  },
  {
    "id": "Mt10",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a NN",
    "Description": "If images are being used for training a neural network, it is preferable a convolutional layer than a fully connected one.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/450246",
    "External URL(S) in post(s)": "https://arxiv.org/abs/1505.04597",
    "STE Post(s)-link": "CRV/450246",
    "External URL(S) in post(s)-link": "Ronneberger O. et al. (2015)"
  },
  {
    "id": "Mt11",
    "Phase Category":"Training*",
    "Subcategory": "Select learning rate",
    "Description": "if a neural network stagnates with non-optimal results, then the learning rate should be decreased.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/37163",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/37163"
  },
  {
    "id": "Mt12",
    "Phase Category":"Training*",
    "Subcategory": "When using transfer learning",
    "Description": "If there is not enough data when training a deep neural network from scratch, transfer learning with fine tuning should be tried.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/32966970",
    "External URL(S) in post(s)": "http://arxiv.org/pdf/1411.6447",
    "STE Post(s)-link": "STO/32966970",
    "External URL(S) in post(s)-link": "Xiao T. et al. (2014)"
  },
  {
    "id": "Mt13",
    "Phase Category":"Training*",
    "Subcategory": "Convergence",
    "Description": "If a deep neural network does not converge in an specific number of iterations, then increasing this number should be tried.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/43856384",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/43856384",
  },
  {
    "id": "Mt14",
    "Phase Category":"Training*",
    "Subcategory": "Ensemble",
    "Description": "When having a large dataset that does not fit in memory, multiples models could be first trained on random data samples, and then an ensemble with those models could be created to get a more accurate model than a base learner with fewer data.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/13901",
    "External URL(S) in post(s)": "https://www.cs.columbia.edu/~vondrick/largetrain.pdf",
    "STE Post(s)-link": "DTSC/13901",
    "External URL(S) in post(s)-link": "Zhu X. et al. (2012)"
  },
  {
    "id": "Mt15",
    "Phase Category":"Training*",
    "Subcategory": "Retraining models",
    "Description": "A model should be retrained with an online approximation if the model needs to dynamically adapt to new patterns from the data.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/467757\nhttps://stackoverflow.com/questions/28006451\nhttps://datascience.stackexchange.com/questions/12765",
    "External URL(S) in post(s)": "https://en.wikipedia.org/wiki/Online_machine_learning\nhttps://www.jmlr.org/papers/volume6/bordes05a/bordes05a.pdf\nhttps://www.jmlr.org/papers/volume7/laskov06a/laskov06a.pdf\nhttps://ieeexplore.ieee.org/abstract/document/1318049\nhttps://en.wikipedia.org/wiki/Instance-based_learning\nhttps://en.wikipedia.org/wiki/K-d_tree\nhttps://docs.scipy.org/doc/scipy-0.14.0/reference/generated/scipy.spatial.KDTree.html\nhttps://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDClassifier.html#sklearn.linear_model.SGDClassifier",
    "STE Post(s)-link": "CRV/467757, STO/28006451, DTSC/12765",
    "External URL(S) in post(s)-link": "Online ML Wikipedia, Border A. et al. (2005), Laskov P. et al. (2006), Tax D.M.J et al. (2003), Instance-based learning Wikipedia, K-D tree Wikipedia, K-D tree SciPy, SGD Classifier Sklearn"
  },
  {
    "id": "Mt16",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a model",
    "Description": "If dependencies between features exist, it is suggested to used a gradien boost decision tree (GBDT) instead of a Random Forest (RF).",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/1094",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DTSC/1094"
  },
  {
    "id": "Mt17",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a neural network",
    "Description": "The number of parameters of a deep neural network should be proportional to the number of instances needed for training a deep neural network.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/32966970",
    "External URL(S) in post(s)": "https://arxiv.org/pdf/1411.6447.pdf",
    "STE Post(s)-link": "STO/32966970",
    "External URL(S) in post(s)-link": "Xiao T. et al. (2014)"
  },
  {
    "id": "Mt18",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a neural network",
    "Description": "If there is a large data variance, the number of layers in a neural network must be increased.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/58644114",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/58644114"
  },
  {
    "id": "Mt19",
    "Phase Category":"Training*",
    "Subcategory": "Aspects to consider when training a neural network",
    "Description": "A neural network should be trained with different initialized weights several times, in order to first get an average of the results and its variance and then to get a more specific judgment of the overall performance.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/65704588",
    "External URL(S) in post(s)": "https://rads.stackoverflow.com/amzn/click/com/0262035618\nhttps://www.deeplearning.ai/ai-notes/initialization/\nhttps://papers.nips.cc/paper/2018/file/d81f9c1be2e08964bf9f24b15f0e4900-Paper.pdf\nhttps://mlfromscratch.com/activation-functions-explained/",
    "STE Post(s)-link": "STO/65704588",
    "External URL(S) in post(s)-link": "Goodfellow I. et al.(2017), Deep Learning AI Initializing, Hanin B. and Rolnick D. (2018), Hansen C. Activation functions"
  },
  {
    "id": "Mt20",
    "Phase Category":"Training*",
    "Subcategory": "Convergence",
    "Description": "If a neural netwok does not converge, then the learning rate should be reduced by a half or one third.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/43856384",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/43856384",
  },
  {
    "id": "Mt21",
    "Phase Category":"Training*",
    "Subcategory": "Convergence",
    "Description": "When a neural network does not converge, the size of the mini-batches should be increased.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/43856384",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/43856384",
  },
  {
    "id": "Mt22",
    "Phase Category":"Training*",
    "Subcategory": "Convergence",
    "Description": "For faster convergence of Multi Layer Perceptrons, Stochastic Gradient Descent (SGD) should be used.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/45769058",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/45769058",
  },
  {
    "id": "Mt23",
    "Phase Category":"Training*",
    "Subcategory": "Improve performance",
    "Description": "If robustness is required in a machine learning model, then, Adversarial machine learning should be used.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://ai.stackexchange.com/questions/16756",
    "External URL(S) in post(s)": "https://en.wikipedia.org/wiki/Generative_adversarial_network",
    "STE Post(s)-link": "AI/16756",
    "External URL(S) in post(s)-link": "Generative adversarial Network Wikipedia"
  },
  {
    "id": "Mt24",
    "Phase Category":"Training*",
    "Subcategory": "Improve performance",
    "Description": "If the time-performance of a model is being a large time series data, then the data could be sub-sampled.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/175714",
    "External URL(S) in post(s)": "https://www.otexts.org/fpp/2/5",
    "STE Post(s)-link": "CRV/175714",
    "External URL(S) in post(s)-link": "OTexts Evaluating forecasting"
  },
  {
    "id": "Mt25",
    "Phase Category":"Training*",
    "Subcategory": "Improve performance",
    "Description": "When sub-sampling time-series data, it should be checked that unwanted confounding between sampled origins and seasonality in data is not being introduced.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/175714",
    "External URL(S) in post(s)": "https://www.otexts.org/fpp/2/5",
    "STE Post(s)-link": "CRV/175714",
    "External URL(S) in post(s)-link": "OTexts Evaluating forecasting"
  },
  {
    "id": "Mt26",
    "Phase Category":"Training*",
    "Subcategory": "Ensemble",
    "Description": "Before combining models, the correlation of models' prediction should be measured.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/308376",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/308376"
  },
  {
    "id": "Mt27",
    "Phase Category":"Training*",
    "Subcategory": "Ensemble",
    "Description": "Only independent models should be combined in an ensemble.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/308376",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "CRV/308376"
  },
  {
    "id": "Mt28",
    "Phase Category":"Training*",
    "Subcategory": "Ensemble",
    "Description": "When training a model with mixed type features, which includes time series features, separate models for each part of the representation should be built, and then the different models should be combined in an ensemble.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/18853557",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "STO/18853557"
  },
  {
    "id": "Mt29",
    "Phase Category":"Training*",
    "Subcategory": "Retraining models",
    "Description": "When using clustering, the model should be re-trained with new data to build more clusters and increase its efficiency.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/64990",
    "External URL(S) in post(s)": "https://www.geeksforgeeks.org/clustering-in-machine-learning/",
    "STE Post(s)-link": "DSC/64990",
    "External URL(S) in post(s)-link": "Clustering GeeksForGeeks"
  },
  {
    "id": "Mt30",
    "Phase Category":"Training*",
    "Subcategory": "Retraining models",
    "Description": "In order to deal with concept drift when working with data streams, models should be re-trained with small a limited number of instances.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/297871",
    "External URL(S) in post(s)": "https://link.springer.com/article/10.1007/s10462-015-9444-8\nhttps://dl.acm.org/doi/10.5555/1315451.1315460\nhttps://dl.acm.org/doi/10.1145/2523813",
    "STE Post(s)-link": "CRV/297871",
    "External URL(S) in post(s)-link": "Faria E. et al. (2015), Aggarwal C. et al. (2003), Gama J. et al. (2014)"
  },
  {
    "id": "Mt31",
    "Phase Category":"Training*",
    "Subcategory": "Retraining models",
    "Description": "A model should be retrained in offline mode, due to this method could lead to a better global approximation.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/12765",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DSC/12765"
  },
  {
    "id": "Mt32",
    "Phase Category":"Training*",
    "Subcategory": "Retraining models",
    "Description": "In the case of online and offline re-training are not an option, then using batch/mini-batch approach should be used.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/12765",
    "External URL(S) in post(s)": "-",
    "STE Post(s)-link": "DSC/12765"
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
    width: 170,
    renderCell: renderUrlCell,
    sortable: false
  },
  {
    field: 'External URL(S) in post(s)',
    headerName: "External URL(S) in post(s)",
    width: 230,
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