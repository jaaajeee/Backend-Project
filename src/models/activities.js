const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {type: String, 
        minLength: [5, 'State must contians at least 5 charactors'], 
        maxLength: [15,'State must contians at most 15 charactors'], 
        required: true},
        
    description: {type: String, 
        minLength: [5, 'State must contians at least 5 charactors'], 
        maxLength: [100,'State must contians at most 100 charactors'], 
        required: true},

    selectList: {type: String, 
        minLength: [1, 'State must contians at least 1 charactors'], 
        maxLength: [10,'State must contians at most 10 charactors'],     
        required: true},

    kilocalories: {type: Number, 
        min: [0, 'Calories must contians at least 0 '], 
        max: [5000,'Calories must contians at most 5000'],   
        required: true},
        
    Timestamp: {type: Date, 
        default: Date.now},
    hour: {type: Number, 
        min: 0, max: 23, 
        required: true},
    minute: {type: Number, 
        min: 0, max: 59, 
        required: true},
},
);

const ActivityModel = mongoose.model('Activity', dataSchema, 'Activities');

module.exports = ActivityModel;
