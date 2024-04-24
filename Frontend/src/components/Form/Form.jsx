import React from 'react'
import styled from 'styled-components'

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import { useGlobalContext } from '../../context/gobalContext';
import { useState } from 'react'

import Button from '../Buttons/Button'
import {plus} from '../../utils/Icon'

function Form() {
    const {addIncome, getIncomes, error, setError}=useGlobalContext()
    // console.log(addIncome);

    const [inputState, setInputState] = useState({
        title:'',
        type:'',
        amount:'',
        date:'',
        category:'',
        description:''
    })
    // console.log(inputState);

    const {title, amount, date, category, description} = inputState;

    const handleInput= (name)=>(e)=>{
        
        setInputState({...inputState, [name]:e.target.value})
        setError('')
    }


    const handleSubmit = e => {
        e.preventDefault();
        addIncome(inputState);
        getIncomes()
        setInputState({
            title:'',
            type:'income',
            amount:'',
            date:'',
            category:'',
            description:''
        })
        
    }



  return (
    <FormStyled >
        {error && <p className='error'>{error}</p>}
        <div className="input-control">
            <input type="text"
                value={title}
                name={'title'}
                placeholder='Salary Title'
                onChange={handleInput('title')}
                required
             />
        </div>
        <div className="input-control">
            <input type="number"
                value={amount}
                name={'amount'}
                placeholder='Salary Amount'
                onChange={handleInput('amount')}
                required
             />
        </div>
        <div className="input-control">
            <textarea
            
            value={description}
            name='description'
            placeholder='Add description'
            id='description'
            cols="30" rows="3"
            onChange={handleInput('description')}
            required


            >
            </textarea>
        </div>
        <div className="input-control">
            <DatePicker
                id="date"
                placeholderText='Enter Date'
                selected={date}
                dateFormat='dd/MM/yyyy'
                onChange={(date)=>setInputState({...inputState,date:date})}
                Required={true}
            />

        </div>
        <div className="selects input-control">
                <select required value={category} name="category" id="category" onChange={handleInput('category')}>
                    <option value=""   >Select Option</option>
                    <option value="salary">Salary</option>
                    <option value="freelancing">Freelancing</option>
                    <option value="investments">Investments</option>
                    <option value="stocks">Stocks</option>
                    <option value="bitcoin">Bitcoin</option>
                    <option value="bank">Bank Transfer</option>  
                    <option value="youtube">Youtube</option>  
                    <option value="other">Other</option>  
                </select>
        </div>
        <div className="submit-btn">
            <Button 
                    type={'submit'}
                    name={'Add Income'}
                    icon={plus}
                    btn_padding={'.8rem 1.6rem'}
                    btn_radius={'30px'}
                    btn_background={'var(--color-accent'}
                    color={'#fff'}
                    onClickFunction={handleSubmit} 
            />        
        </div>

    </FormStyled>
  )
}

const FormStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    input, textarea, select{
        font-family: inherit;
        font-size: inherit;
        outline: none;
        border: none;
        padding: .5rem 1rem;
        border-radius: 5px;
        border: 2px solid #fff;
        background: transparent;
        resize: none;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        color: rgba(34, 34, 96, 0.9);
        &::placeholder{
            color: rgba(34, 34, 96, 0.4);
        }
    }
    .input-control{
        input{
            width: 100%;
        }
    }

    .selects{
        display: flex;
        justify-content: flex-end;
        select{
            color: rgba(34, 34, 96, 0.4);
            &:focus, &:active{
                color: rgba(34, 34, 96, 1);
            }
        }
    }

    .submit-btn{
        button{
            box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
            &:hover{
                background: var(--color-green) !important;
            }
        }
    }
`;
export default Form