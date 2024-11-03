const Todo = require('../models/todo');

const updateTodo = async(req,res) => {
    try{
        const {id} = req.params;
        const {title,description} = req.body

        const todo = await Todo.findByIdAndUpdate(
            {_id:id},
            {title, description, updatedAt: Date.now()},
        )
            res.status(200).json({
                success:true,
                data:req.body,
                message:"updated Successfully"
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

module.exports = {updateTodo}