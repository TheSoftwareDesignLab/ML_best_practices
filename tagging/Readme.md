# Decription

In this folder, we have the file related to the tagging and merging process. In particular, we have a file that contains per each answer, the taggas that were assigned to each answer (post). For this we present the following information:

* *Tagger*: Identification of the tagger in charge. Possible Values: Merge, Tagger1_, Tagger1_2, Tagger2_, Tagger2_2, Tagger3_, Tagger3_2. Merge indicates that are the final taggs after the merging process (discussion).  Tagger1_, Tagger2_, Tagger3_ indicate that the tags associated to that row are the initial taggs given by a tagger. Tagger1_2, Tagger2_2, and Tagger3_2, indicate that the tags associated to that row are given after a conflict is identified in the initial taggs. 
* *Answer ID*: The unique ID of the answer, it is complemented with the *Website_URL* column. 
* *externalReferences*: External references (urls) identified in the post during the tagging process. 
* *goodPractice*: Good/best practices identified in the post during the tagging process.
* *isFalsePositive*: this variable indicates if a post is a false positive or not.
* *mlPipeline*: ML pipeline(s) associated to the post.
* *Reason False Positive*: Extra clarification about, why a post is considered a false positive. 


