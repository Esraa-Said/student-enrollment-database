/*
this file will be used to add functionalty 
like function to add , create ,delete , ... student 
*/

export const getAllStudents = async (req, res) => {
    res.status(200).json({msg:"all students"})
}
