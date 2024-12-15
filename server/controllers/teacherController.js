const { request } = require('express');
const Teacher = require('../models/teacherModel.js');

const create = async (req, res) => {
    try {
        const teacherData = new Teacher(req.body);
        
        if (!teacherData) {
            return res.status(400).json({ message: "Data not found" });
        }
        
        const savedData = await teacherData.save();
        res.status(200).json({ savedData });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getAll = async (req,res) =>{
    try {
        const teacherData = await Teacher.find();
        if (!teacherData) {
            return res.status(400).json({ message: "Data not found" });
        }
        res.status(200).json(teacherData);
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};
const getOne = async (req, res) => {
    try {
      const { id } = req.params;  // Destructure `id` from `req.params`
  
      // Try finding by `uid` first
      let teacherExist = await Teacher.findOne({ uid: id });
  
      // If not found by `uid`, try finding by `_id`
      if (!teacherExist) {
        teacherExist = await Teacher.findById(id);
      }
  
      if (!teacherExist) {
        return res.status(400).json({ message: "Data not found" });
      }
  
      res.status(200).json(teacherExist);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  


const update = async (req, res) => {
    try {
        const id = req.params.id;
        const teacherExist = await Teacher.findById(id);
        if (!teacherExist) {
            return res.status(401).json({ message: "Data not found" });
        }
        const updatedData = await Teacher.findByIdAndUpdate(id, req.body,{new:true});

        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};

const deleteteacher = async (req, res) => {
    try {
        const id = req.params.id;
        const teacherExist = await Teacher.findById(id);
        if (!teacherExist) {
            return res.status(404).json({ message: "Data not found" });
        }
        await Teacher.findByIdAndDelete(id);
        res.status(200).json({message:"Data Deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};

// Exporting the create function as part of module.exports
module.exports = { create , getAll,getOne ,update,deleteteacher};
