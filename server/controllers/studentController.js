const { request } = require('express');
const Student = require('../models/studentModel.js');

const createstudent = async (req, res) => {
    try {
        const studentData = new Student(req.body);
        
        if (!studentData) {
            return res.status(400).json({ message: "Data not found" });
        }
        
        const savedDatathree = await studentData.save();
        res.status(200).json({ savedDatathree });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getstudent = async (req,res) =>{
    try {
        const studentData = await Student.find();
        if (!studentData) {
            return res.status(400).json({ message: "Data not found" });
        }
        res.status(200).json(studentData);
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};
const getOneStudent = async (req, res) => {
    try {
        const id = req.params.id;
        const studentExist = await Student.findById(id);
        if (!studentExist) {
            return res.status(400).json({ message: "Data not found" });
        }
        res.status(200).json(studentExist);
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};

const updatestudent = async (req, res) => {
    try {
        const id = req.params.id;
        const studentExist = await Student.findById(id);
        if (!studentExist) {
            return res.status(401).json({ message: "Data not found" });
        }
        const updatedData = await Student.findByIdAndUpdate(id, req.body,{new:true});

        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};

const deletestudent = async (req, res) => {
    try {
        const id = req.params.id;
        const studentExist = await Student.findById(id);
        if (!studentExist) {
            return res.status(404).json({ message: "Data not found" });
        }
        await Student.findByIdAndDelete(id);
        res.status(200).json({message:"Data Deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};


module.exports = { createstudent , getstudent,getOneStudent ,updatestudent,deletestudent};
