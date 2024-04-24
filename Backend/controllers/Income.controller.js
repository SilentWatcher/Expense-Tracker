import Income from "../models/income.model.js";

//ADDING  INCOME IN DATABASE
const addIncome = async(req, res)=>{
    console.log(req.body)
    const {title, amount, category, description,date} = req.body
    
    const income = new Income({ //instance of schema that we created 
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
        
        await income.save()
        res.status(200).json({message:"Income Added"})
    }catch(error){
        console.log("Unable To Add Income", error)
        res.status(500).json({message:"Server Error"})
        
    }
    console.log("income", income)
    
}

//GETTING  INCOME FROM DATABASE
const getIncomes = async(req, res)=>{

    try{
        //put last created income to first- by default it last 
        const incomes = await Income.find().sort({createdAt:-1})
        res.status(200).json(incomes)
    }catch(error){
        res.status(500).json({message:"Server Error while Getting Income"})
    }
}


//DELETE  INCOME FROM DATABASE
const deleteIncome = async(req, res)=>{
    //access the id 
    //delete idd
    const {id} = req.params;
    // console.log(req.params)
    // console.log(id)
    
    
    Income.findByIdAndDelete(id)
    .then((income)=>{
        res.status(200).json({message:"Income Deleted"})
    })
    .catch(error=>{
            res.status(500).json({message:"Unable to Delete Income"})
    })
    
}

export  {addIncome , getIncomes, deleteIncome};
