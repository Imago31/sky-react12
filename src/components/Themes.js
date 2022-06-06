/* eslint-disable no-restricted-syntax */

/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import styled from 'styled-components'

function Themes(){

const ButtonTheme = styled.button`
 width: 160px;
 height: 30px;
 background: green;
 color: white;
 font-size: 18px;
 border-radius: 5px;
 &:hover{
    cursor: pointer;
    opacity: 0.95;
  }
`

const TitleTheme = styled.p`
 font-size: 22px; 
 color: green;
 margin-top: 20px
`

const green = ()=>{
    document.querySelector('h1').style = "color: green";
    document.querySelector('textarea').style = "color: green";
    document.querySelector('.sc-bczRLJ').style = "color: green";
    document.querySelector('p').style = "color: green";
    const buttons = document.querySelectorAll('button');
    for(const butt of buttons){
        butt.style = "background: green";
    }
}

const blue = ()=>{
    document.querySelector('h1').style = "color: blue";
    document.querySelector('textarea').style = "color: blue";
    document.querySelector('.sc-bczRLJ').style = "color: blue";
    document.querySelector('p').style = "color: blue";
    const buttons = document.querySelectorAll('button');
    for(const butt of buttons){
        butt.style = "background: blue";
    }
}

const orange = ()=>{
    document.querySelector('h1').style = "color: orange";
    document.querySelector('textarea').style = "color: orange";
    document.querySelector('.sc-bczRLJ').style = "color: orange";
    document.querySelector('p').style = "color: orange";
    const buttons = document.querySelectorAll('button');
    for(const butt of buttons){
        butt.style = "background: orange";
    }
}


    return (
        <div>
            <TitleTheme>Темы</TitleTheme>
            <ButtonTheme  onClick={green}>Зеленый</ButtonTheme>
            <ButtonTheme  onClick={blue}>Синий</ButtonTheme>
            <ButtonTheme  onClick={orange}>Оранжевый</ButtonTheme>
        </div>
      )
    }

    export default Themes
