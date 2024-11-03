const Todo = require("../models/todo")

const getTodos = async(req,res) => {
    try{
        const todos = await Todo.find({});

        res.status(200).json({
            success:true,
            data:todos,
            message:"fetched all Data",
        })
    }

    catch(error){
        console.error(error);
        res.status(500).json({
            success:false,
            error:error.message,
            data:"Internal server error",
        })
    }
}

const getTodoById = async(req,res) => {
    try{
        const id = req.params.id;
        const todo = await Todo.findById({_id: id})

        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo data at id: ${id}`
        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            error:error.message,
            data:"Internal server Error",
        })
    }
}

module.exports = {getTodos,getTodoById}