
import React, {createContext, useContext, useState} from "react";
import Axios from 'axios'
const BASE_URL = "http://localhost:4000/api/v1/";
// http://localhost:5000/api/v1/
const GlobalContext = createContext();

export const GlobalContextProvider = ({children})=>{

    const [incomes, setIncomes] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [error, setError] = useState(null)

    // INCOME METHODS 
    const addIncome = async (income) => {

        try{

            // console.log("global context Income ", income);
            const response = await Axios.post(`${BASE_URL}add-income`, income)
            // console.log("Response",response.data);
            getIncomes()

        }catch(err){

            setError(err.response.data.message)
            console.error(error)

        }
    }

    const getIncomes = async ()=>{
        const response = await Axios.get(`${BASE_URL}get-incomes`)

        setIncomes(response.data)
        // console.log("Get-Income", response.data);
    }

    const deleteIncome = async (id)=>{
        const response = await Axios.delete(`${BASE_URL}delete-income/${id}`)
        getIncomes()
        // console.log("Item Deleted");
    }
    
    const totalIncome = ()=>{
        let totalIncome = 0 
        incomes.forEach((income)=>{
            totalIncome =totalIncome +  +income.amount
            // console.log(typeof(+income.amount));
        })
        // console.log("totalIncome" , totalIncome);

        return totalIncome

    }
    // EXPENSE METHODS

    const addExpense= async(expense)=>{
        const response = await Axios.post(`${BASE_URL}add-expense`, expense)
        .catch((error)=>console.log(error))
        getExpenses()
    }
    const getExpenses= async()=>{
        const response = await Axios.get(`${BASE_URL}get-expenses`)
        setExpenses(response.data)
        // console.log("Get Expenses", response.data);
    }
    const deleteExpense= async(id)=>{
        const resonse = await Axios.delete(`${BASE_URL}delete-expense/${id}`)
        getExpenses()
    }
    const totalExpense=()=>{
        let totalExpense = 0;
        expenses.forEach((expense)=>{
            totalExpense = totalExpense + +expense.amount
            // console.log(totalExpense);
        })
        return totalExpense
    }

    const totalBalance= ()=>{
        return totalIncome() - totalExpense()
    }
    // console.log("totalBalance",totalBalance());
    const recentTransactionHistory = ()=>{
        const history = [...incomes, ...expenses] 
        // console.log("recent history", history);
        history.sort((a,b)=>{
            return new Date( b.createdAt) - new Date(a.createdAt)
        })

        return history
    }


    return (
        <GlobalContext.Provider value={{
        addIncome, getIncomes, incomes, deleteIncome,
        totalIncome, 
        addExpense, getExpenses,expenses, deleteExpense, 
        totalExpense, error, setError,
        
        totalBalance, recentTransactionHistory
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext =()=>{
    return useContext(GlobalContext)
}
