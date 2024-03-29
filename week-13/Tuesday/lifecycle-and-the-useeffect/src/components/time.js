import React, { useState , useEffect } from 'react'

const Time = () => {

    let [date,setDate] = useState(new Date());
    
    useEffect(() => {

        let timer = setInterval(()=>setDate(new Date()), 1000 )

        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p> Time : {date.toLocaleTimeString()}</p>
            <p> Date : {date.toLocaleDateString()}</p>

        </div>
    )
}

export default Time