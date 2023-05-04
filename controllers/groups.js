import { db } from '../db/connect.js';
import { StatusCodes } from 'http-status-codes';
const groupSubjects = async (req, res) => {
    let group_id = req.params.id;
    const [data] = await db.query(`select * from subjects where group_id = ${group_id}`);
    const [[{ group_name }]] = await db.query(`select group_name from groups where group_id = ${group_id}`);
    res.status(200).json({ data, group_id, group_name });
};

const groupStudentsPersonalInfo = async (req, res) => {
    let group_id = req.params.id;
    const [students_data] = await db.query(`select * from students where group_id = ${group_id}`);
    const [[{ group_name }]] = await db.query(`select group_name from groups where group_id = ${group_id}`);
    res.status(200).json({ students_data, group_id, group_name });
};

const groupStudentsGrades = async (req, res) => {
    let group_id = req.params.id;
    let students_data = [];

    const [data] = await db.query(`select student_id, first_name, last_name from students where group_id = ${group_id}`);
    const [[{ group_name }]] = await db.query(`select group_name from groups where group_id = ${group_id}`);

    for (let i = 0; i < data.length; ++i) {
        const [studentGrades] = await db.query(`select subjects.subject_name, grades.grade, grades.status from grades, subjects where grades.student_id = ${data[i].student_id} and grades.group_id = ${group_id} and subjects.subject_id = grades.subject_id`);
        let student = data[i];
        student.grades = studentGrades;
        students_data.push(student);
    }
    res.status(200).json({ students_data, group_id, group_name });
};

// all info + grades
const groupStudentsAllData = async (req, res) => {
    let group_id = req.params.id;
    let students_data = [];

    const [data] = await db.query(`select * from students where group_id = ${group_id}`);
    const [[{ group_name }]] = await db.query(`select group_name from groups where group_id = ${group_id}`);

    for (let i = 0; i < data.length; ++i) {
        const [studentGrades] = await db.query(`select subjects.subject_name, grades.grade, grades.status from grades, subjects where grades.student_id = ${data[i].student_id} and grades.group_id = ${group_id} and subjects.subject_id = grades.subject_id`);
        let student = data[i];
        student.grades = studentGrades;
        students_data.push(student);
    }

    res.status(200).json({ students_data, group_id, group_name });
};

const studentAllData = async (req, res) => {
    let group_id = req.params.gid;
    let student_id = req.params.sid;
try{
    const [[data]] = await db.query(`select * from students where (group_id = ${group_id} and student_id = ${student_id})`);
    const [[{ group_name }]] = await db.query(`select group_name from groups where group_id = ${group_id}`);
    const [studentGrades] = await db.query(`select subjects.subject_name, grades.grade, grades.status from grades, subjects where grades.student_id = ${student_id} and grades.group_id = ${group_id} and subjects.subject_id = grades.subject_id and subjects.group_id = grades.group_id`);

    let student_data = data;
    student_data.grades = studentGrades;
    res.status(200).json({ student_data, group_id, group_name });

}
catch (err){
    console.log(err)
    res.status(StatusCodes.BAD_REQUEST).json({err:`no such student with id  = ${student_id} in academic year = ${group_id}`})
}
};

export {
    groupStudentsPersonalInfo,
    groupStudentsGrades,
    groupStudentsAllData,
    studentAllData,
    groupSubjects
};