const usermaster = require("../models/usermaster");
const Taskdata = require('../models/Task')





exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const User = await usermaster.findOne({ email: email });
   
    if (!User) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    if (User.password !== password) {
      return res.status(401).send({ message: 'Invalid email or password' });
    }
    return res.status(200).json({ status: 'true', message: 'Login Successfull', User });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

exports.GetTask = async (req, res) => {
    try {
        const{task_id}=req.body;
        const TotalTask = data.length;
        const data = await Taskdata.findById({_id:task_id});
        if (!data) {
          res.status(404).send({ message: `Task Data Not Found.` });
      } else {
        return res.status(200).send({ Status: true, message: 'Retrieved Task Succesfully', data,TotalTask});
      }
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
};

exports.DeleteTask = async (req, res) => {
  try {
      const {task_id} = req.body;
      const taskdata = await Taskdata.findOneAndDelete({ _id:task_id},{ new: true });
        if (!taskdata) {
            res.status(404).send({ message: `Task not found.` });
        } else {
          return res.status(200).send({ Status:true,message: "Task Deleted Successfully.", taskdata });
        }
    } catch (error) {
        console.log('Error:', error);
        res.status(500).send({ message: "Something went wrong", error });
    }
  };
  exports.GetAllTask = async (req, res) => {
    try { 
      
          const completeddata = await Taskdata.find({Completed:true});
          const completedTask = completeddata.length;
                       
          const Totaldata = await Taskdata.find({});
          const Totaltask = Totaldata.length;
  
          const Tasks = Totaldata;
          return res.status(200).send({ Status: true, message: 'Retrieved All Completed Task Succesfully',completedTask,Totaltask,Tasks});
      } catch(error) {
          res.status(404).json({message: error.message});
      }
  };