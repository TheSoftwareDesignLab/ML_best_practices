# This code is based on the following gist 
# https://gist.github.com/enricorotundo/1e074af39d90629252a7df3fc1066397 
# Some comments are taken from the following post in stackExchange
# https://meta.stackexchange.com/questions/2677/database-schema-documentation-for-the-public-data-dump-and-sede
# We added the content licence for comments, posts and postlinks, 
# Be sure of having by default innodb tables, otherwise specify it (needed for a text full index)
# If you are having problems loading data into your DataBase you must 
# 1) uncomment the first  line, 2) run mysql with --secure_file_priv="" 
# 2.1) If you are on a mac an your  are having problems running the complementary files, you can run amysql with mysqld_safe --secure_file_priv=""  located on BIN
# 3) The path of your xml files have to be absolute paths 

# - -------- ----------- ------------ --------------- ----------

#SET @@SESSION.SQL_MODE='';

CREATE TABLE Posts (
  Id INT NOT NULL PRIMARY KEY,
  PostTypeId TINYINT NOT NULL,
  # 1 = Question
  # 2 = Answer
  # 3 = Orphaned tag wiki
  # 4 = Tag wiki excerpt
  # 5 = Tag wiki	
  # 6 = Moderator nomination
  # 7 = "Wiki placeholder" (seems to only be the election description)
  # 8 = Privilege wiki
  AcceptedAnswerId INT,
  ParentId INT,
  CreationDate DATETIME NOT NULL,
  DeletionDate DATETIME,
  Score INT NULL,
  ViewCount INT NULL,
  Body text NULL,
  OwnerUserId INT,
  OwnerDisplayName varchar(256),
  LastEditorUserId INT,
  LastEditorDisplayName VARCHAR(40),
  LastEditDate DATETIME,
  LastActivityDate DATETIME,
  Title varchar(256),
  Tags VARCHAR(256),
  AnswerCount INT DEFAULT 0,
  CommentCount INT DEFAULT 0,
  FavoriteCount INT DEFAULT 0,
  ClosedDate DATETIME,
  CommunityOwnedDate DATETIME,
  ContentLicense VARCHAR(20)
);

SELECT
  DATABASE();

select
  count(*) postsCount
from
  Posts;

# need this (it depends on your security and OS)
load xml LOCAL infile '/[path_to_the_base_folder]/[temp]/Posts.xml' into table Posts rows identified by '<row>';


show databases;

create index Posts_idx_1 on Posts(AcceptedAnswerId);

create index Posts_idx_2 on Posts(ParentId);

create index Posts_idx_3 on Posts(OwnerUserId);

create index Posts_idx_4 on Posts(LastEditorUserId);

SHOW INDEX
FROM
  Posts;
CREATE FULLTEXT INDEX index_Tags ON Posts(Tags);

SHOW INDEX
FROM
  Posts;

# This index is not created for StackOverflow due to the amount of information and lack of resources, it is created over a subset of the resources
CREATE FULLTEXT INDEX index_Text_title ON Posts(Title, Body);

SHOW INDEX
FROM
  Posts;
