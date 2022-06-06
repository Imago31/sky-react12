
/* eslint-disable react/button-has-type */
/* eslint-disable react/function-component-definition */
import styled from 'styled-components'

function Button(){

const ButtonConsole = styled.button`
 width: 200px;
 height: 50px;
 background: green;
 color: white;
 font-size: 24px;
 border-radius: 5px;
 display:none;
 &:hover{
    cursor: pointer;
    opacity: 0.95;
  }
`

const del = ()=>{
    const textarea = document.querySelector('.sc-gsnTZi');
    textarea.value = "";
    textarea.focus();
    document.querySelector('.buttonConsole').style = "display: none"
}




    return (
        <div>
            <ButtonConsole className='buttonConsole' onClick={del}>Очистить</ButtonConsole>
        </div>
      )
    }

    export default Button
