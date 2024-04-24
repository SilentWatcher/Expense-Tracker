import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import Chart from './Chart';

import {dollar} from '../../utils/Icon'
import { useGlobalContext } from '../../context/gobalContext';
import History from '../History/History';

function Dashboard() {

  const {totalExpense,incomes, expenses, totalIncome, totalBalance, getIncomes, getExpenses } = useGlobalContext()

  useEffect(()=>{
    getIncomes();
    getExpenses();
  },[])
  // console.log(Math.min(2, 34, 78));
  // console.log(Math.min(...incomes.map((item)=>item.amount)));
  // console.log(Math.max(...incomes.map((item)=>item.amount)));
  return (
    <DashboardStyled>
        <InnerLayout>
            <h1>All Transaction</h1>
            <div className="stats-container">
              <div className="chart-container">
                <div className="chartAndStats">
                <Chart/>
                <div className="amount-container">
                    <div className="income">
                        <h2>Total Income</h2>
                        <p>
                            {dollar} {totalIncome()}
                        </p>
                    </div>
                    <div className="expense">
                        <h2>Total Expense</h2>
                        <p>
                            {dollar} {totalExpense()}
                        </p>
                    </div>
                    <div className="balance">
                        <h2>Total Balance</h2>
                        <p>
                            {dollar} {totalBalance()}
                        </p>
                    </div>
                </div>
                </div>
                <div className="history-container">
                  <History />
                  <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...incomes.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...incomes.map(item => item.amount))}
                            </p>
                        </div>
                        <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                        <div className="salary-item">
                            <p>
                                ${Math.min(...expenses.map(item => item.amount))}
                            </p>
                            <p>
                                ${Math.max(...expenses.map(item => item.amount))}
                            </p>
                        </div>
                </div>
              </div>
            </div>
        </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
    .stats-container{
        /* display: grid; */
        /* grid-template-columns: repeat(1, 1fr); */
        gap: 2rem;
        .chart-container{
            /* grid-column: 1 / 4; */
            height: 400px;
            .amount-container{
                /* display: grid; */
                /* grid-template-columns: repeat(4, 1fr); */
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 2rem;
                margin-top: 2rem;
                
                .income, .expense{
                    grid-column: span 2;
                    
                }
                .expense p{
                    color: var(--color-red);
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem 2rem;
                    max-width: max-content;
                    p{
                        /* font-size: 2rem; */
                        font-size: clamp(1rem, 1.5vw + .001rem, 2rem);
                        font-weight: 700;
                    }
                    h2{
                        font-size: clamp(1.25rem, 1.5vw + .001rem, 4rem);
                    }
                    
                }

                .balance{
                    /* grid-column: 2 / 4; */
                    /* display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center; */
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        /* font-size: 2rem; */
                        
                    }
                }
            }
        }

        .history-container{
            /* grid-column: 4 / -1; */
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
    }
`;

export default Dashboard