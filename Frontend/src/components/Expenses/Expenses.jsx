import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/gobalContext';
import IncomeItem from '../IncomeItem/IncomeItem';
import ExpenseForm from './ExpenseForm';

function Expense() {

  const {getExpenses, addExpense, deleteExpense,expenses, totalExpense} = useGlobalContext();

  useEffect(()=>{
    getExpenses()
  },[])

  return (
    <ExpenseStyled>
        <InnerLayout>
            <h1>Expense</h1>
            {/* <p>{totalIncome()}</p> */}
            <h2 className="total-income">Total Expense: <span style={{color:"var(--color-red)"}}>${totalExpense()}</span></h2>
            <div className="income-content">
                    <div className="form-container">
                        <ExpenseForm/>

                    </div>

                    <div className="incomes">
                        {
                            expenses.map((expense)=>{
                                const {_id, title ,amount, category, date, description,type } = expense;
                                return <IncomeItem 
                                    key={_id}
                                    id={_id} 
                                    title={title} 
                                    description={description} 
                                    amount={amount} 
                                    date={date} 
                                    type={type}
                                    category={category} 
                                    indicatorColor="var(--color-red)"
                                    deleteItem={deleteExpense}

                                    />
                            })
                        }
                    </div>
                
            </div>
        </InnerLayout>
    </ExpenseStyled>
  )
}
const ExpenseStyled = styled.div`
    display: flex;
    overflow: auto;
    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: 1rem;
        margin: 1rem 0;
        font-size: 2rem;
        gap: .5rem;
        span{
            font-size: 2.5rem;
            font-weight: 800;
            color: var(--color-green);
        }
    }
    .income-content{
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        .incomes{
            flex: 1;
        }
    }
`;

export default Expense