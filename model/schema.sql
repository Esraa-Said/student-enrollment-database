-- wirte ddl for creating schema

create table Groups_ (
	group_id int, 
    group_name varchar(100) not null,
	constraint groups_pk primary key(group_id)
);

CREATE TABLE students (
	student_id INT,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    group_id INT NOT NULL,
    email VARCHAR(100) ,
    phone_number VARCHAR(100),
    CONSTRAINT students_pk PRIMARY KEY(student_id),
    CONSTRAINT students_fk FOREIGN KEY(group_id) REFERENCES Groups_(group_id)
);

CREATE TABLE teacher (
    teacher_id INT,
    fist_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    CONSTRAINT teacher_pk PRIMARY KEY(teacher_id)
);
create table subjects(
	subject_id int not null,
    group_id int not null,
    subject_name varchar(100) not null,
    teacher_id int not null,
	constraint subject_pk primary key(subject_id , group_id),
    constraint teacher_fk foreign key (teacher_id) references teacher(teacher_id),
    constraint grouos_fk foreign key (group_id) references Groups_(group_id)
);

CREATE TABLE grades (
    student_id INT NOT NULL,
    group_id INT NOT NULL,
    subject_id INT NOT NULL,
    grade INT NOT NULL,
    status VARCHAR(20) CHECK(status IN ('succedded','faild')),
    CONSTRAINT grades_pk PRIMARY KEY(student_id, group_id, subject_id)
);
 
