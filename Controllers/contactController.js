const contact = require('../Models/contactModel');


const create = async (req,res)=>{
    try {
        const {name,email,subject,message}=req.body;
        const newContact = await contact.create({
            name,
            email,
            subject,
            message
        })
        return res.status(201).json(newContact)
    } catch (error) {
        console.log(error.message);
    }
}



const getAll = async (req,res)=>{
    try {
        const contacts = await contact.find();
        return res.status(200).json(contacts);

    } catch (error) {
        console.log(error.message);
    }
}


const getById = async (req,res)=>{
    try {
        const {id} = req.params;
        const contacts = await contact.findById({_id:id})
        return res.status(200).json(contacts);
    } catch (error) {
        console.log(error.message);
    }
}


const deleteContact = async (req,res)=>{
    try {
        const {id} =req.params;
        const contacts = await contact.deleteOne({_id:id})
        return res.status(200).json({message:"deleted sucssefully"})
    } catch (error) {
        console.log(error.message);
    }
} 


// const updateContact = async (req,res)=>{
//     try {
//         const {id} = req.params;
//         const {name,email,subject,message} = req.body;
//         const updatedContact = await contact.updateOne({_id:id},{name,email,subject,message});
//         return res.status(200).json({message :"updated sucsessfully"});
//     } catch (error) {
//         console.log(error.message);
//     }
// }
// module.exports = {updateContact}

module.exports = {
    create,
    getAll,
    getById,
    deleteContact
};