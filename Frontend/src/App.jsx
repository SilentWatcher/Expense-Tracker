import styled from "styled-components"
import { useState } from "react";
// import profilePic from './assets/vikas-animate.jpeg'
// import bg from './assets/abstract_bg.png'
// import bg from './assets/beach.png'

import {MainLayout} from './styles/Layouts.js';

import Orb from './components/Orb/Orb.jsx';
import Navigation from "./components/Navigation/Navigation.jsx";
import Income from "./components/Income/Income.jsx";
import Expenses from "./components/Expenses/Expenses.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import { useGlobalContext } from "./context/gobalContext.jsx";



function App( ) {

  const {addIncome,} = useGlobalContext();
  // console.log(addIncome);

  const [active, setActive] = useState(1);

  const displayData= ()=>{
    switch (active){
      case 1: 
        return <Dashboard/>
      case 2: 
        return <Dashboard/>
      case 3: 
        return <Income/>
      case 4: 
        return <Expenses/>
      default: 
        return <Dashboard/>

    }
  }

  return (
    <AppStyled>
      <Orb/>
      <MainLayout>
        <Navigation active={active} setActive={setActive}/>
        <main>
          {displayData()}
        </main>
      </MainLayout>

      
    </AppStyled>
  )
}

const AppStyled = styled.div`
    
  min-height: 100vh;
  /* background:linear-gradient(45deg, #2247276c, #f3f0ce53 , #89ce8c4a); */
  background: #8e97c5ad;
  position: relative;

  main{
    /* feel the remaining space so flex:1 nav | main  */
    flex: 1;
    background: var(--color-white-light);
    border: 3px solid var(--color-white);
    backdrop-filter: blur(4.5px);
    border-radius: 32px;
    overflow-x: hidden;
    /* overflow-y: visible; */
    &::-webkit-scrollbar{
      width: 0;
    }
  }

`;

export default App
