import React, { useState, useEffect } from 'react'

const Fetcher = () => {


    const [Mocks, setMocks] = useState([])
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 600);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                let newData = data.splice(0,10)
                setMocks(newData);
            });
    }, []);




    return (
        <div >

        

            <h1>TOP Posts</h1><br></br>
            <div style={{ display: 'flex' , flexWrap: isSmallScreen ? 'wrap' : 'nowrap'  }}>
            {Mocks.map((Mock) => (
                <div key={Mock.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>  {Mock.title} <p>{Mock.body}</p> </div>
            ))}
            </div>
        </div>
    );

}

export default Fetcher