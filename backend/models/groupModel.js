import mongoose from 'mongoose';

const groupSchema= new mongoose.Schema({
    id:{type:String, required:true,unique:true},
    users:[{
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    }]                                                                                                                                                                                                                                                                                                                              
},
    {timestamps:true,}
);
const Group=mongoose.model('User',groupSchema);
export default Group;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       