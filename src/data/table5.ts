export const TABLE_5 = [
  {
    "id": "Dcl12",
    "Phase Category": "Wrangling",
    "Subcategory": "Impute missing data",
    "Description": "If an imputation technique is used, the same technique should be used in the training, validation and testing sets.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/503677",
    "External URL(S) associated to the post": "-"
  },
  {
    "id": "Dcl13",
    "Phase Category": "Wrangling",
    "Subcategory": "Balance data",
    "Description": "When having an unbalanced dataset, balancing the datashould be done only in the training dataset.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/51064462\nhttps://datascience.stackexchange.com/questions/82012",
    "External URL(S) associated to the post": "https://stackoverflow.com/questions/48805063/h2o-balance-classes-cross-validation/48810493#48810493\nhttps://imbalanced-learn.org/stable/",
  },
  {
    "id": "Dcl14",
    "Phase Category": "Wrangling",
    "Subcategory": "Balance data",
    "Description": "Oversampling should be done only after the whole dataset is split into train, validation and test sets.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/51064462",
    "External URL(S) associated to the post": "https://stackoverflow.com/questions/48805063/h2o-balance-classes-cross-validation/48810493#48810493"
  },
  {
    "id": "Dcl15",
    "Phase Category": "Wrangling",
    "Subcategory": "Balance data",
    "Description": "When undersampling data, the samples that are being selected should be randomly sampled.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/46178141",
    "External URL(S) associated to the post": "https://en.wikipedia.org/wiki/Oversampling_and_undersampling_in_data_analysis"
  },
  {
    "id": "Dcl16",
    "Phase Category": "Wrangling",
    "Subcategory": "Transform numerical features",
    "Description": "Transformation of numerical data should be done in all the sets by using the statistics computed on the training data.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://cs.stackexchange.com/questions/60391\nhttps://stats.stackexchange.com/questions/77350\nhttps://datascience.stackexchange.com/questions/75178\nhttps://stats.stackexchange.com/questions/482486\nhttps://cs.stackexchange.com/questions/115441",
    "External URL(S) associated to the post": "https://cs231n.github.io/neural-networks-2/\nhttps://openai.com/blog/better-language-models/"
  },
  {
    "id": "Dcl17",
    "Phase Category": "Wrangling",
    "Subcategory": "Transform numerical features",
    "Description": "Transformations should take into account (i) the model that is going to be used and (ii) the data nature.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/5652357\nhttps://datascience.stackexchange.com/questions/37734\nhttps://stats.stackexchange.com/questions/189652\nhttps://datascience.stackexchange.com/questions/25832\nhttps://datascience.stackexchange.com/questions/65215",
    "External URL(S) associated to the post":"http://oreilly.com/catalog/9780596510497/\nhttp://en.wikipedia.org/wiki/Cross_tabulation\nhttps://stats.stackexchange.com/questions/189652/is-it-a-good-practice-to-always-scale-normalize-data-for-machine-learning\nhttps://arxiv.org/pdf/1508.00330.pdf\nhttps://datascience.stackexchange.com/questions/13061/when-to-use-he-or-glorot-normal-initialization-over-uniform-init-and-what-are\nhttps://datascience.stackexchange.com/questions/23493/why-relu-is-better-than-the-other-activation-functions\nhttps://datascience.stackexchange.com/questions/23287/why-large-weights-are-prohibited-in-neural-networks"
  }, 
  {
    "id": "Dcl18",
    "Phase Category": "Wrangling",
    "Subcategory": "Transform numerical features",
    "Description": "Features/attributes should be scaled when using a support vector machine (SVM) model.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/189652",
    "External URL(S) associated to the post": "-"
  },
  {
    "id": "Dcl19",
    "Phase Category": "Wrangling",
    "Subcategory":  "Transform numerical features",
    "Description": "When transforming numerical data into ratios and the transformation leads to infinite values, smoothing should be used.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/46355357",
    "External URL(S) associated to the post": "-"
  },
  {
    "id": "Dcl20",
    "Phase Category": "Wrangling",
    "Subcategory": "Encode non numerical data",
    "Description": "if an algorithm does not support categorical data, this type  of feature should be encoded into multiple binary features or by counting frequencies.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/18853557",
    "External URL(S) associated to the post": "-"
  },
  {
    "id": "Dcl21",
    "Phase Category": "Wrangling",
    "Subcategory": "Encode non numerical data",
    "Description": "Datetime data could be partitioned into their corresponding components (e.g., if you have day-month-year then split it into day, month, year).",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stats.stackexchange.com/questions/311494",
    "External URL(S) associated to the post": "https://ianlondon.github.io/blog/encoding-cyclical-features-24hour-time/\nhttps://stats.stackexchange.com/questions/126230/optimal-construction-of-day-feature-in-neural-networks\nhttps://datascience.stackexchange.com/questions/5990/what-is-a-good-way-to-transform-cyclic-ordinal-attributes\nhttps://medium.com/towards-data-science/top-6-errors-novice-machine-learning-engineers-make-e82273d394db"
  }, 
  {
    "id": "Dcl22",
    "Phase Category": "Wrangling",
    "Subcategory": "Augment dataset",
    "Description": "Data augmentation should be used in order to prevent over-fitting.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://stackoverflow.com/questions/32966970",
    "External URL(S) associated to the post": "http://arxiv.org/pdf/1411.6447"
  },
  {
    "id": "Dcl23",
    "Phase Category": "Wrangling",
    "Subcategory": "Transform non numerical data",
    "Description": "For analyzing handwritten text images, the image should besplit into individual characters.",
    "Number of experts that validated the practice": 4,
    "STE Post(s)": "https://opendata.stackexchange.com/questions/7225",
    "External URL(S) associated to the post": "https://stackoverflow.com/q/1972299/2327328\nhttps://stackoverflow.com/a/28029854/2327328\nhttps://stackoverflow.com/a/12243875/2327328"
  },
  {
    "id": "Dcl24",
    "Phase Category": "Wrangling",
    "Subcategory": "Transform non numerical data",
    "Description": "If the task of a model is detecting objects, then each region of interest (ROI) should be cropped instead of using the complete image.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/40476041",
    "External URL(S) associated to the post": "-"
  },
  {
    "id": "Dcl25",
    "Phase Category": "Wrangling",
    "Subcategory": "Transform  numerical features",
    "Description": "When handling geographical data and the latitude and longitude will be transformed, directional statistics should be used to deal with potential interdependence of latitude and longitude, and with scales wrapping around.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": " https://stats.stackexchange.com/questions/207533",
    "External URL(S) associated to the post": "http://www.academia.edu/4489774/PREDICTING_THE_GEOGRAPHIC_ORIGIN_OF_WORLD_MUSIC\nhttps://en.wikipedia.org/wiki/Directional_statistics\nhttps://cran.r-project.org/web/views/Spatial.html"
  },
  {
    "id": "Dcl26",
    "Phase Category": "Wrangling",
    "Subcategory": "Encode numerical data",
    "Description": "When handling geographical data, the geodesic distance should be used to compute the distance between two points of interest.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/207566",
    "External URL(S) associated to the post": "http://www.academia.edu/4489774/PREDICTING_THE_GEOGRAPHIC_ORIGIN_OF_WORLD_MUSIC"
  },
  {
    "id": "Dcl27",
    "Phase Category": "Wrangling",
    "Subcategory": "Encode misellaneous",
    "Description": "If a variable is dependable on time along with other features,then, the timeseries variable could be encoded as frequencies.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/18853557\nhttps://datascience.stackexchange.com/questions/65215",
    "External URL(S) associated to the post": "-"
  },
  {
    "id": "Dcl28",
    "Phase Category": "Wrangling",
    "Subcategory": "Encode non numerical data",
    "Description": "When encoding geographical data, Sine and Cosine facets could be used for representing the cyclical characteristics from date time features.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stats.stackexchange.com/questions/311494",
    "External URL(S) associated to the post": "https://ianlondon.github.io/blog/encoding-cyclical-features-24hour-time/\nhttps://stats.stackexchange.com/questions/126230/optimal-construction-of-day-feature-in-neural-networks\nhttps://datascience.stackexchange.com/questions/5990/what-is-a-good-way-to-transform-cyclic-ordinal-attributes\nhttps://medium.com/towards-data-science/top-6-errors-novice-machine-learning-engineers-make-e82273d394db"
  },
  {
    "id": "Dcl29",
    "Phase Category": "Wrangling",
    "Subcategory": "Eliminate noisy data",
    "Description": "If noise is present in a dataset, then, it should be removed,with techniques such as smoothing.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/13901\nhttps://stackoverflow.com/questions/46355357",
    "External URL(S) associated to the post": "http://www.cs.columbia.edu/~vondrick/largetrain.pdf"
  },
  {
    "id": "Dcl30",
    "Phase Category": "Wrangling",
    "Subcategory": "Transform  numerical features",
    "Description": "If rectified linear unit (ReLU) is being used as an activation function in NeuralNetworks (NN), then, the features should be scaled.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/25832",
    "External URL(S) associated to the post": "https://arxiv.org/pdf/1508.00330.pdf\nhttps://datascience.stackexchange.com/questions/13061/when-to-use-he-or-glorot-normal-initialization-over-uniform-init-and-what-are\nhttps://datascience.stackexchange.com/questions/23493/why-relu-is-better-than-the-other-activation-functions\nhttps://datascience.stackexchange.com/questions/23287/why-large-weights-are-prohibited-in-neural-networks"
  },
  {
    "id": "Dcl31",
    "Phase Category": "Wrangling",
    "Subcategory": "Encode misellaneous",
    "Description": "If clustering is needed, the dataset contains aggregated structures (e.g., a 3D array), and the order of the aggregated data matters, then a new feature should be created in to encode the order.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/65215",
    "External URL(S) associated to the post": "-"
  },
  {
    "id": "Dcl32",
    "Phase Category": "Wrangling",
    "Subcategory": "Transform misellaneous data type",
    "Description": "When working with an long short-term memory (LSTM) network the sequences that are going to be fed into the NN should be padded in order to equalize the length of all the sequences.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://stackoverflow.com/questions/44131718",
    "External URL(S) associated to the post": "http://www.deeplearningbook.org/contents/rnn.html"
  },
  {
    "id": "Dcl33",
    "Phase Category": "Wrangling",
    "Subcategory": "Transform misellaneous data type",
    "Description": "When data is being anonymized with hashing, it should bedone over a unique identifier using salt.",
    "Number of experts that validated the practice": 3,
    "STE Post(s)": "https://datascience.stackexchange.com/questions/3693",
    "External URL(S) associated to the post": "-"
  },
];

export const TABLE_5_COLUMNS = [
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