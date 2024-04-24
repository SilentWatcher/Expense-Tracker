import Expense from "../models/expense.model.js";

//ADDING  INCOME IN DATABASE
const addExpense = async(req, res)=>{
    console.log(req.body)
    const {title, amount, category, description,date} = req.body
    
    const expense = new Expense({ //instance of schema that we created 
        title,
        amount,
        category,
        description,
        date
    })

    // we need to way to save this data
    try{
        if(!title || !category || !description || !date ){
            return res.status(400).json({message:"All fields are required"})
        }
        if(amount <= 0 || !amount === 'number' ){
            return res.status(400).json({message:"Amount must be positive"})
        }
        //saving the instance
        
        await expense.save()
        res.status(200).json({message:"Expense Added"})
    }catch(error){
        console.log("Unable To Add Expense", error)
        res.status(500).json({message:"Server Error"})
        
    }
    // console.log("income", income)
    
}

//GETTING  INCOME FROM DATABASE
const getExpenses= async(req, res)=>{

    try{
        //put last created income to first- by default it last 
        const expense = await Expense.find().sort({createdAt:-1})
        res.status(200).json(expense)
    }catch(error){
        res.status(500).json({message:"Server Error while Getting Expense"})
    }
}


//DELETE  INCOME FROM DATABASE
const deleteExpense = async(req, res)=>{
    //access the id 
    //delete idd
    const {id} = req.params;
    // console.log(req.params)
    // console.log(id)
    
    
    Expense.findByIdAndDelete(id)
    .then((expense)=>{
        res.status(200).json({message:"Expense Deleted"})
    })
    .catch(error=>{
            res.status(500).json({message:"Unable to Delete Expense"})
    })
    
}

export  {addExpense , getExpenses, deleteExpense};
