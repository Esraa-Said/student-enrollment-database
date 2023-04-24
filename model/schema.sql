-- wirte ddl for creating schema
create table teacher (
    teacher_id int,
    fist_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(100),
    constraint teacher_pk primary key (teacher_id)
);

create table groups (
	group_id int, 
    group_name varchar(100) not null,
	constraint groups_pk primary key(group_id)
);

create table students (
	student_id int,
    first_name varchar(100) not null,
    last_name varchar(100) not null,
    group_id int not null references groups (group_id),
    email varchar(100) ,
    phone_number varchar(100),
    constraint students_pk primary key(student_id)
);

create table subjects(
	subject_id int not null,
    subject_name varchar(100) not null,
    group_id int not null references groups (group_id),
    teacher_id int not null references teacher(teacher_id),
	constraint subject_pk primary key(subject_id , group_id)
);

create table grades (
student_id int not null references students(student_id),
group_id int not null references groups (group_id),
subject_id int not null references subjects(subject_id),
grade int not null,
status varchar(20) check (status in ('succedded','faild')),
constraint grades_pk primary key (student_id , group_id , subject_id)
);