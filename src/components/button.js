import React, { useRef, useEffect } from 'react'
import { Sampler } from 'tone'

const Button = (props) => {

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown)
    window.focus()
  }, [])

  const { text, audio } = props;
  const sound = useRef(null);

  const handleKeydown = (e) => {
    if(e.keyCode === text.charCodeAt()) {
      sound.current.play();
    }
  }

  const handleClick = () => {
    sound.current.play();
  }
  return (
    <div style={buttonStyle} onClick={handleClick}>
      {text}
      <audio src={audio} id={text} className='clip' ref={sound}/>
    </div>
  )
}

export const buttonStyle = {
  width: '90px',
  height: '90px',
  backgroundColor: '#485460',
  border: '2px solid #1e272e',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '36px',
  boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.4)'
}

export default Button
