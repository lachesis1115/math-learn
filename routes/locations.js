var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    password: String,
    sex: String,
    age: {type:Number, min:0, max:15},
    points: Number,
    color: String,
    animal: String,
    music: String,
    happy: {type: Number, "default": 0},
    exciting: {type: Number, "default": 0},
    sad: {type: Number, "default": 0}
  });

  mongoose.model('User', userSchema);

var reportSchema = new mongoose.Schema({
    title: String,
    name: String,
    accuracy: String,
    point: Number,
    rank: String
  });

  mongoose.model('Report', reportSchema);

var achievementSchema = new mongoose.Schema({
    number: {type:Number, min:0},
    done: Number,
    total: Number,
    title: String
  });

var paperSchema = new mongoose.Schema({
    title: String,
    level: String,
    q1: String,
    a1: Number,
    q2: String,
    a2: Number,
    q3: String,
    a3: Number,
    q4: String,
    a4: Number,
    q5: String,
    a5: Number,
    q6: String,
    a6: Number,
    q7: String,
    a7: Number,
    q8: String,
    a8: Number,
    q9: String,
    a9: Number,
    q10: String,
    a10: Number
  });