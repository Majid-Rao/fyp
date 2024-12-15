const { request } = require('express');
const Swapper = require('../models/swapperModel.js');

const createswapper = async (req, res) => {
    try {
        const swapperData = new Swapper(req.body);
        
        if (!swapperData) {
            return res.status(400).json({ message: "Data not found" });
        }
        
        const savedDatatwo = await swapperData.save();
        res.status(200).json({ savedDatatwo });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getswapper = async (req,res) =>{
    try {
        const swapperData = await Swapper.find();
        if (!swapperData) {
            return res.status(400).json({ message: "Data not found" });
        }
        res.status(200).json(swapperData);
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};
const getOneSwapper = async (req, res) => {
    try {
        const id = req.params.id;
        const swapperExist = await Swapper.findById(id);
        if (!swapperExist) {
            return res.status(400).json({ message: "Data not found" });
        }
        res.status(200).json(swapperExist);
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};

const updateswapper = async (req, res) => {
    try {
        const id = req.params.id;
        const swapperExist = await Swapper.findById(id);
        if (!swapperExist) {
            return res.status(401).json({ message: "Data not found" });
        }
        const updatedData = await Swapper.findByIdAndUpdate(id, req.body,{new:true});

        res.status(200).json(updatedData);
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};

const deleteswapper = async (req, res) => {
    try {
        const id = req.params.id;
        const swapperExist = await Swapper.findById(id);
        if (!swapperExist) {
            return res.status(404).json({ message: "Data not found" });
        }
        await Swapper.findByIdAndDelete(id);
        res.status(200).json({message:"Data Deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
        
    }
};


module.exports = { createswapper , getswapper,getOneSwapper ,updateswapper,deleteswapper};
