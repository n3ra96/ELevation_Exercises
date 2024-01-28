import React , { useState } from 'react';


const Exercise1 = () => {

    let [currImg , setImg] = useState({
        images: [
      "https://hips.hearstapps.com/hmg-prod/images/lychee-fruit-sugar-1530136136.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/mango-fruit-sugar-1530136260.jpg?crop=1xw:1xh;center,top&resize=640:*",
      "https://hips.hearstapps.com/hmg-prod/images/cherries-sugar-fruit-1530136329.jpg?crop=1xw:1xh;center,top&resize=640:*",
    ],
        currentImg: 0
      })

      const shiftImageBack = () =>{
        let newImg = {...currImg} 
        if( newImg.currentImg !== 0 ){
          newImg.currentImg--
          setImg(newImg)
        }
      }

      const shiftImageForward = () =>{
        let newImg = {...currImg} 
        if( newImg.currentImg !== 2 ){
          newImg.currentImg++
          setImg(newImg)
        }
      }

      

      
      
  return (
    <div>
        <button onClick={shiftImageBack}>Pervious</button>
        <img src={currImg.images[currImg.currentImg]}/>
        <button onClick={shiftImageForward}>Next</button>
    </div>
  );
}


export default Exercise1;