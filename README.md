Database Schema

Users Table
------------
Field         Type          Primary Key  Description
---------------------------------------------------
id            Integer       Yes          User ID (Auto-incremented)
username      Varchar(255)  No           Username of the user
email         Varchar(255)  No           Email address of the user
password      Varchar(255)  No           Encrypted password of the user
name          Varchar(255)  No           Full name of the user
profilePic    Varchar(255)  No           Profile picture URL


Posts Table
------------
Field         Type          Primary Key  Foreign Key  Description
-------------------------------------------------------------------
id            Integer       Yes          No           Post ID (Auto-incremented)
userId        Integer       No           Yes          User ID (Foreign key)
content       Text          No           No           Content of the post
createdAt     Timestamp     No           No           Date and time of post creation


Stories Table
--------------
Field         Type          Primary Key  Foreign Key  Description
-------------------------------------------------------------------
id            Integer       Yes          No           Story ID (Auto-incremented)
userId        Integer       No           Yes          User ID (Foreign key)
img           Varchar(255)  No           No           URL of the story image

