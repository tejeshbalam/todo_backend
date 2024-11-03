const Todo = require('../models/todo')

const deleteTodo = async(req,res) => {
    try{
        const {id} = req.params
     
        await Todo.findByIdAndDelete(id)

        res.status(200).json({
            success:true,
            message:"Successfully deleted"
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

module.exports = {deleteTodo}