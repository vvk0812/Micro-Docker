const usermaster = require("../models/usermaster");
const Taskdata = require('../models/Task');

exports.Register = async (req, res) => {
  try {
    const { mobilenumber, name, email,password } = req.body
    if (!mobilenumber,!email,!password,!name) {
      return res.status(406).send({ status: false, message: 'All parameters are required fields' });
    }

    const checkNumber = await usermaster.findOne({mobilenumber:mobilenumber})

    if(checkNumber){
    return res.status(400).send({ status: false, message:'user already exist Please go to login' });

    }else{
   
    const user = new usermaster({
     
      mobilenumber: mobilenumber,
      name:name,
      email:email,
      password:password
      
  });
  const result = await user.save()
  console.log(result)
  return res.status(200).send({ status: true, message: 'Registered  Successfully', result });
}
  } catch (err) {
    console.log('Set Background error', err);
    return res.status(500).send({ status: false, message: err.message || 'Something went wrong' });
  }
};

exports.createTask = async (req, res) => {
 try {
    const { Title,Description} = req.body;
   
    if (!Title || !Description ) {
      return res.status(400).json({ Status: false, message: 'Please Fill All The Fields' });
    }
    const createdAt = new Date();
    const task = Taskdata({
            Title: Title,
            Description: Description,
            createdAt: createdAt
        });
          await task.save();
          return res.status(200).send({ Status: true, message: 'Task Created Succesfully', task});
        }
      catch (err) {
        console.log(err);
        return res.status(400).send({ Status: false, message: 'Something went wrong' });
      }
      };
      


exports.UpdateTask = async (req, res) => {
  try {
      const { task_id,Title,Description } = req.body;
      const data = await Taskdata.findByIdAndUpdate({ _id:task_id},{ $set: {Title:Title,Description:Description,}},{ new: true });
      if (!data) {
          res.status(404).send({ message: `Task Data Not Found.` });
         } else {
        return res.status(200).send({ Status: true, message: 'Task Updated Succesfully', data});
         }
         } catch (error) {
         res.status(500).send({ message: "Something went wrong", error });
      }
    };

exports.CompleteTask = async (req, res) => {
try {
      const { task_id } = req.body;
      const data = await Taskdata.findByIdAndUpdate({ _id:task_id},{ $set: {Completed:true,}},{ new: true }
      );
      if (!data) {
          res.status(404).send({ message: `Task Data Not Found.` });
      } else {
        return res.status(200).send({ Status: true, message: 'Task Completed Succesfully', data});
      }
  } catch (error) {
      console.log('Error:', error);
      res.status(500).send({ message: "Something went wrong", error });
  }
};











