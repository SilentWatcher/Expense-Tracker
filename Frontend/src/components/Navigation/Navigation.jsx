import React from 'react'
import styled from 'styled-components'
import Avatar from '../../assets/profilePic.jpg'
import menuItems from '../../utils/menuItems.js'
import { signout } from '../../utils/Icon.jsx'




function Navigation({active, setActive}) {
  return (
    <NavStyled>
      <div className='user-container'> 
        <img src={Avatar} width="100px" alt="Avatar" /> 
        <div className="text">
          <h2>Vikas</h2>
          <p>Your Money</p>
        </div>
      </div>
      
      <ul className='menu-items'>
        {menuItems.map((item)=>{
          // console.log(item);
          return <li key={item.id} onClick={()=>setActive(item.id)} className={active === item.id ? 'active': '' }>

            {item.icon} 
            <span>{item.title}</span>
          </li>
        })}
      </ul> 
      
      <div className="bottom-nav">
        {signout} Sign Out
      </div>
    </NavStyled>
  )
}
const NavStyled = styled.nav`
    /* background: #000; */
    padding: 2rem 1.5rem;
    min-height: calc(100vh - 2rem );
    background: var(--color-white-light);
    border: 3px solid var(--color-white);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    display: flex;
    flex-direction: column;
    
    justify-content: space-between;
    gap: 1rem;

    .user-container{
        height: 100px;
        display: flex;
        align-items: center;
        
        gap: 1rem;
        img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            background: var(--color-white-light);
            border: 2px solid var(--color-white);
            padding: .2rem;
            box-shadow: 0px 1px 17px #00000029;
        }
        h2{
          
            color: var(--primary-color);
        }
        p{
            color: var(--primary-color2);
        }


    }
    .menu-items{
        flex: 1;
        display: flex;
        flex-direction: column;

        li{
            display: grid;
            grid-template-columns: 40px auto;
            align-items: center;
            margin: .6rem 0;        
            justify-content: start;
            font-weight: 500;
            cursor: pointer;
            transition: all .4s ease-in-out;
            color: var(--primary-color2);
            padding-left: 1rem;
            position: relative;
            i{
                color: var(--primary-color2);
                font-size: 1.4rem;
                transition: all .4s ease-in-out;
            }
        }

    }

    .active{
        color: var(--primary-color) !important;
        font-weight: 700 !important;
        i{
            color:var(--primary-color) !important;
        }
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: var(--primary-color);
            border-radius: 0 10px 10px 0;
        }
    }

`;
export default Navigation