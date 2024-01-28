import React from 'react'

const Contact = (props) => {
    
  return (
    <div onClick={() => props.switch(props.nameCon)}>{props.nameCon}</div>
  )
}

export default Contact