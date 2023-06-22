# General description of the code
In this folder the code used in the article can be found
* Notebook1.ipynb: It is used to extract the analyzed posts in the study, as filtered as possible
* Notebook2.ipynb: It is used to extract all the machinine learning posts (posts that have machine-learning tag) and compared it with the ones that discussed best practices (BP)
* config_file.ini: Configuration file that is used to store the credentials and the suggested name of the databases for each of the selected websites n the article.
* create_data_noSTO.sh: bash script that is used to create the needed databases (dbs) for each of the mentioned Q&A websites in the article. It also loads the respective data into the dbs and creates the required indexes for the post table. This is done with an auxiliar script *load_create_noSTO.sql*.  **(This is not used for Stack Overflow (STO) dump)**. 
* load_create_noSTO.sql: SQL script that creates the required databases and load the information to the post table.  **(This is not used for Stack Overflow (STO) dump)**.
* create_and_load_STO.sql: SQL script that was manually executed to created the STO database, and the required tables and indexes for the posts.

## Requisites 
* Mysql (8.0) installed and running.
* Having an user name for Mysql with a password.

## Recommendations and guidelines

### Data --> Databases
1. Download the data from [Stack Exchange dump 03.2021](https://archive.org/details/stackexchange_20210301)
2. Uncompress the data, in an specific path, e.g, [path_to_the_base_folder], taking into acount the name of the each database as a folder name i.e.,[path_to_the_base_folder]/[wesite_folder]/. For example, for the website *Data Science*, a the dump must be decompressed in  [path_to_the_base_folder]/Data Science/.
3. **[Not for STO].** Inside the base folder (i.e., [path_to_the_base_folder]), create a new folder, e.g., [temp]. This folder is used in the *create_data_noSTO.sh*.
4. **[Not for STO].** In the script *create_data_noSTO.sh* identify the [path_to_the_original_folder]/[temp] path and replace it with your own paths. 
5. **[Not for STO].** In the sql script *load_create_noSTO.sql* replace the path /[path_to_the_base_folder]/[temp] with your own path.
6. **[Not for STO].** Execute *create_data_noSTO.sh* for each of the 13 studied Q&A websites (not including Stack Overflow). For this, you should replacethe [wesite_folder], for the corresponding value for each of the 13 websites. In addition, the [Name_database] should also be changed for a database name of your preferences for each database. In the *config_file.ini* file there is a list of suggested names for all of the 13 web sites.
8. **[For STO].** Be sure to have extracted the *Posts.xml*, then, copy it in the [path_to_the_base_folder]/[temp]/ folder.
9. **[For STO].** In the sql script *create_and_load_STO.sql*, replace the path /[path_to_the_base_folder]/[temp] with your own path.
10. **[For STO].** Read the script, *create_and_load_STO.sql*, and identify which part you need to execute. In any case, the *Part 1* is needed, then, you can choose between executing the *Part 2* (required table for extracting the analyzed posts in the article), and *Part 3* (posts that do not consider the scores as a criteria of filtering). 


### Databases --> Studied Posts
* With *Notebook1.ipynb* you can export the set of used posts for the article (before tagging). Just a set of questions and answers filtered by a defined criteria.
* *Notebook2.ipynb* is a complementary material, which allows you to extract a broader set of questions and answers that relate to "machine-learning", and/or "best practices", without consider the score of the posts. 

##### Acronyms
* STO = Stack Overflow
* BP = Best practices