const Todo = require("../models/todo");

const createTodo = async (request,responce) => {
    try{
            const {title,description} = request.body;
            const result = await Todo.create({title,description});
            responce.status(200).json({
                success:true,
                data:result,
                message:"Successfully Created"
            });
    }
    catch(error) {
        console.log(`${error}`)
        responce.status(500).json({
            success:false,
            data:"Internal Server Error",
            message:error.message
        })
    }
}

module.exports = {createTodo}