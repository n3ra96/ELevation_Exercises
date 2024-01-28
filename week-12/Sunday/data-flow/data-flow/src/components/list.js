import React from 'react'
import Contact from './Contact'

const List = (props) => {

  return (
    <>
        {props.Contactname.conversations.map( (nameHolder,index) => <div key={index} ><Contact   nameCon={nameHolder.with} switch={props.switch}  /></div>  )}
    </>

  )
}


export default  List