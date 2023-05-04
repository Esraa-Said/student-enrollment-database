import { db } from "../db/connect.js";
import { StatusCodes } from "http-status-codes";

export const getAllStudents = async (req, res) => {
    const [data] = await db.query(
        `select *, group_name from students, groups where groups.group_id = students.group_id`
    );
    res.status(200).json({ data, length: data.length });
};

export const getStudentById = async (req, res) => {
    const id = req.params.id;
    try {
        const [data] = await db.query(
            `select * from students where student_id = ?`,
            Number(id)
        );
        if (data.length == 0)
            return res.status(StatusCodes.BAD_REQUEST).json({
                msg: `Student with ID = ${id} is not found`,
            });
        res.status(200).json(data);
    } catch (err) {
        res.status(StatusCodes.BAD_REQUEST).json({
            msg: `Student with ID = ${id} is not found`,
        });
    }
};

export const createStudent = async (req, res) => {
    const { student_id, first_name, last_name, group_id, email, phone_number } =
        req.body;
    let val;
    try {
        val = await db.query(`INSERT INTO students VALUES (?,?,?,?,?,?)`, [
            student_id,
            first_name,
            last_name,
            group_id,
            email,
            phone_number,
        ]);
        const [subject] = await db.query(
            `select subject_id ,subject_name from subjects where group_id = ?`,
            Number(group_id)
        );
        for (let i = 0; i < subject.length; i++) {
            let subject_id = subject[i].subject_id;
            await db.query(`INSERT INTO grades VALUES (?, ?, ?, ?, ?)`, [
                Number(student_id),
                Number(group_id),
                Number(subject_id),
                Number(0),
                "failed",
            ]);
        }
    } catch (err) {
        return res.json({
            msg: "Error in creating student. Please, check data validation and try again",
        });
    }
    res.status(StatusCodes.CREATED).json(req.body);
};

export const updateStudent = async (req, res, next) => {
    // in front we must handle not to update id
    // there is a feild for each data => if filled and validatied then apply
    const student_id = Number(req.params.id);
    const { first_name, last_name, group_id, email, phone_number } = req.body;
    const updateObj = {};
    if (first_name) updateObj.first_name = first_name;
    if (last_name) updateObj.last_name = last_name;
    if (group_id) updateObj.group_id = group_id;
    if (email) updateObj.email = email;
    if (phone_number) updateObj.phone_number = phone_number;

    const [subject] = await db.query(
        `select subject_id ,subject_name from subjects where group_id = ?`,
        Number(group_id)
    );
    for (let i = 0; i < subject.length; i++) {
        let subject_id = subject[i].subject_id;
        try {
            await db.query(`INSERT INTO grades VALUES (?, ?, ?, ?, ?)`, [
                Number(student_id),
                Number(group_id),
                Number(subject_id),
                Number(0),
                "failed",
            ]);
        } catch (err) {
            console.log(err);
        }
    }

    for (let [k, v] of Object.entries(updateObj)) {
        await db.query(`UPDATE students SET ${k} = ? WHERE student_id = ? `, [
            v,
            student_id,
        ]);
    }
    const [result] = await db.query(
        `SELECT * FROM students WHERE student_id = ?`,
        student_id
    );
    if (!result.length) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: `Student with ID = ${student_id} is not found` });
    }
    console.log(result);
    res.status(StatusCodes.OK).send(result);
};

export const deleteStudent = async (req, res) => {
    const student_id = req.params.id;
    const [result] = await db.query(
        `SELECT * FROM students WHERE student_id = ?`,
        student_id
    );
    if (!result.length) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: `Student with ID = ${student_id} is not found` });
    }
    await db.query(`DELETE FROM students WHERE student_id = ?`, student_id);
    const group_id = result.group_id;
    try {
        await db.query(
            `DELETE FROM grades WHERE group_id = ?  AND student_id = ?`,
            [group_id, student_id]
        );
    } catch (err) {
        console.log(err);
    }
    res.status(StatusCodes.OK).json(result);
};

export const updateGrade = async (req, res) => {
    const { gid: group_id, sid: student_id, bid: subject_id } = req.params;
    const { grade } = req.body;
    let status = grade >= 50 ? "succeeded" : "failed";
    try {
        let result = await db.query(
            `UPDATE grades SET grade = (?) , status = (?)  WHERE student_id = ? AND group_id = ? AND subject_id = ?`,
            [
                grade,
                status,
                Number(student_id),
                Number(group_id),
                Number(subject_id),
            ]
        );
    } catch (err) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: `Grade updation failed` });
    }
    res.json({ msg: `Grade updation is successfully done` });
};

export const setGrades = async (req, res) => {
    const { gid: group_id, sid: student_id } = req.params;
    const [subject] = await db.query(
        `select subject_id ,subject_name from subjects where group_id = ?`,
        Number(group_id)
    );
    let subjectNameToId = new Map();
    for (let i = 0; i < subject.length; i++)
        subjectNameToId.set(subject[i].subject_name, subject[i].subject_id);

    try {
        for (let [subject_name, new_grade] of Object.entries(req.body)) {
            const subject_id = subjectNameToId.get(subject_name);
            const new_status = new_grade >= 50 ? "succeeded" : "failed";
            await db.query(
                `UPDATE grades SET grade = (?) , status = (?)  WHERE student_id = ? AND group_id = ? AND subject_id = ?`,
                [
                    new_grade,
                    new_status,
                    Number(student_id),
                    Number(group_id),
                    Number(subject_id),
                ]
            );
        }
    } catch (err) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ msg: `Grade updation failed` });
    }
    res.status(StatusCodes.OK).json({
        msg: `Grade updation is successfully done`,
    });
};
