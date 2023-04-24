-- wirte ddl for creating schema

create table students (
	student_id int,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    group_id int not null,
    email varchar(100) ,
    phone_number varchar(100),
    constraint students_pk primary key(student_id),
    constraint students_fk foreign key (group_id) references Groups_(group_id)
);
