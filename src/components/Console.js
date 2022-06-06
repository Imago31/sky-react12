/* eslint-disable eqeqeq */
/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import Line from './Line'
import Button from './Button'
import Themes from './Themes' 

const circlePit = keyframes`
transform : rotateZ()
`

const StyledConsole = styled.textarea`
 width: 450px;
 height: 200px;
 background: black;
 font-size: 24px;
 border: none;
 resize: none;
 color: green;
 margin: 10px;
 outline:none;
 animation : ${circlePit} 2s
`


const Console = (color, ...props) => {

  const [lines, setLines] = useState(['C/users/SKYPRO_REACT>'])

  const onKeyPress = (e) => {
    document.querySelector('.buttonConsole').style = "display: block"
    if (e.charCode === 13) {
      setLines([...lines, 'C/users/SKYPRO_REACT>'])
    }
    if (!e.target.value) {
      document.querySelector('.buttonConsole').style = "display: none"
    }
    console.log(e.target.value.length)
  }
  
  return (
    <div>
      {lines.map((line) => (
        <Line>{line}</Line>
      ))}
      <StyledConsole color={color} onChange={onKeyPress} {...props} />
      <Button />
      <Themes />
    </div>
  )
}
export default Console
