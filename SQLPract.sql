create database if not exists Instagram;
use Instagram;

create table user(
Id int,
age int,
Name varchar(30) not null,
Email varchar(50) unique,
Followers int default 0,
Following int,
constraint age_check check (age >=13),
primary key (Id)
);

insert into user 
(id, age, name, email, followers, following)
values
(101,21, "Hemanth", "hemu@gmail.com", 0,123),
(102,20, "Rajesh", "raj@gmail.com", 4, 23),
(103,20, "Teja", "tej@gmail.com", 34, 3),
(104,21, "Phani", "phani@gmail.com", 24, 23),
(105,21, "Vijay", "vijju@gmail.com", 0, 1023);


create table post (
  id int primary key,
  content varchar(100),
  user_id int,
  foreign key (user_id) references user(id)
);

use instagram;
select name, age from user where age = (select max(age) from user);

select name, age, max(following) from user group by name, age;


insert into user 
(id, age, name, email, followers, following)
values
(106,15, "sasi", "sasi@gmail.com", 2,13);

select name, age, max(followers) 
from user
group by name, age
having max(followers) > 10;

select * from user;

update user
set followers = 54
where followers in (0, 4);

set sql_safe_updates = 0;

update user
set followers = 54
where followers = 4 or id = 103;

delete from user
where id = 101;

alter table user
add column city varchar(50) default "delhi";

alter table user 
drop age;

alter table instauser
rename to user;

select * from user;

alter table user
change column followers subs varchar(50) default 0;

alter table user
modify subs int default 5;