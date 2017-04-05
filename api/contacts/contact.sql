CREATE TABLE "contact" 
(
    "id" integer not null primary key autoincrement, 
    "name" varchar(255) not null, 
    "email" varchar(255) not null, 
    "phone" varchar(255) not null, 
    "street" varchar(255) not null, 
    "city" varchar(255) not null, 
    "state" varchar(255) not null, 
    "zip" integer not null, 
    "website" varchar(255) not null, 
    "company" varchar(255) not null, 
    "title" varchar(255) not null, 
    "avatar" varchar(255) not null, 
    "birthday" date not null, 
    "created_on" datetime default CURRENT_TIMESTAMP, 
    "modified_on" datetime default CURRENT_TIMESTAMP
);

CREATE UNIQUE INDEX "contact_name_unique" on "contact" ("name");