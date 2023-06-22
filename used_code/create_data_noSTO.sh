#!/bin/bash

cp /[path_to_the_original_folder]/[wesite_folder]/Posts.xml /[path_to_the_base_folder]/[temp]
mysql --load-data-local-dir=/[path_to_the_base_folder]/[temp] -u [user] -p[password] -e "SET @@SESSION.SQL_MODE='';  create database [Name_database] DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci; use [Name_database]; $(cat load_create_noSTO.sql)"
rm  -rf /[path_to_the_base_folder]/[temp]/Posts.xml
