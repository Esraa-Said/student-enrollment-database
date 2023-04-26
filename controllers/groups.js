import { db } from '../db/connect.js';

const groupSubjects = async (req, res) => {
    let group_id = req.params.id;
    const [data] = await db.query(`select * from subjects where group_id = ${group_id}`);
    const [[{ group_name }]] = await db.query(`select first_name from students where group_id = ${group_id}`);
    res.status(200).json({ data, group_id, group_name });
};

const groupStudentsPersonalInfo = async (req, res) => {
    let group_id = req.params.id;
    const [students_data] = await db.query(`select * from students where group_id = ${group_id}`);
    const [[{ group_name }]] = await db.query(`select first_name from students where group_id = ${group_id}`);
    res.status(200).json({ students_data, group_id, group_name });
};

const groupStudentsGrades = async (req, res) => {
    let group_id = req.params.id;
    let students_data = [];

    const [data] = await db.query(`select student_id, first_name, last_name from students where group_id = ${group_id}`);
    const [[{ group_name }]] = await db.query(`select group_name from groups where group_id = ${group_id}`);
    const [subjects] = await db.query(`select * from subjects where group_id = ${group_id}`);

    for (let i = 0; i < data.length; ++i) {
        const [grades] = await db.query(`select subject_id, grade, status from grades where (student_id = ${data[i].student_id} and group_id = ${group_id})`);
        students_data.push([data[i], grades]);
    }

    res.status(200).json({ students_data, subjects, group_id, group_name });
};

// all info + grades
const groupStudentsAllData = async (req, res) => {
    let group_id = req.params.id;
    let students_data = [];

    const [data] = await db.query(`select * from students where group_id = ${group_id}`);
    const [[{ group_name }]] = await db.query(`select group_name from groups where group_id = ${group_id}`);
    const [subjects] = await db.query(`select * from subjects where group_id = ${group_id}`);

    for (let i = 0; i < data.length; ++i) {
        const [grades] = await db.query(`select subject_id, grade, status from grades where (student_id = ${data[i].student_id} and group_id = ${group_id})`);
        students_data.push([data[i], grades]);
    }

    res.status(200).json({ students_data, subjects, group_id, group_name });
};

const studentAllData = async (req, res) => {
    let group_id = req.params.gid;
    let student_id = req.params.sid;

    const [[data]] = await db.query(`select * from students where (group_id = ${group_id} and student_id = ${student_id})`);
    const [[{ group_name }]] = await db.query(`select group_name from groups where group_id = ${group_id}`);
    const [subjects] = await db.query(`select * from subjects where group_id = ${group_id}`);
    const [grades] = await db.query(`select subject_id, grade, status from grades where (student_id = ${student_id} and group_id = ${group_id})`);

    let student_data = [data, grades];

    res.status(200).json({ student_data, subjects, group_id, group_name });
};

export {
    groupStudentsPersonalInfo,
    groupStudentsGrades,
    groupStudentsAllData,
    studentAllData,
    groupSubjects
};