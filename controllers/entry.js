const uuid = require('uuid').v4;
const Entry = require('../models/entry');

const getAllEntries = async(req, res) => {
    try{
        const entries = await Entry.find();
        res.json({
            status: 'success',
            data:{
                entries: entries
            }
        });
    }
    catch(err){
        console.log(err);
    }
}

const getEntryByID = async(req, res) => {
    try{
        const {id} = req.params;
        const entry = await Entry.findById(id);
        res.json({
            status: 'success',
            data:{
                entry: entry
            }
        });
    }
    catch(err){
        console.log(err);
    }
}

const saveEntry = async(req, res) => {
    const body = req.body;
    try{
        const newEntry = await Entry.create(body);
        res.status(201).json({
            status: 'success',
            data: {
                entry: newEntry
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

const deleteEntry = async(req, res) => {
    console.log(req.params);
    const {id} = req.params;
    try{
        const entry = await Entry.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            data: {
                entry: entry
            }
        })
    }
    catch(err){
        console.log(err);
    }
}

const updateEntry = async(req, res) => {
    console.log(req.params);
    const {id} = req.params;
    const body = req.body;
    try{
        const entry = await Entry.findByIdAndUpdate(id, body);
        //const user = await User.updateOne({_id:id}, body);
        console.log(entry);
        res.status(200).json({
            status: 'success',
            data: {
                entry: entry
            }
        })
    }
    catch(err){
        console.log(err);
    }
}



module.exports = {
    getAllEntries,
    getEntryByID,
    saveEntry,
    deleteEntry,
    updateEntry
}