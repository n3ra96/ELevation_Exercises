// console.log(document)
// const playingField = document.getElementById("playing-field")
// console.log(playingField)

// const down = document.getElementById("down")
// console.log(down)
// console.log(down.innerHTML)
// down.innerHTML = "Down"

// playingField.style.backgroundColor = 'blue'
// const ball = document.getElementById("ball")
// ball.style.backgroundColor = "yellow"

///8

// const moveRight = function(){
//     let newLeft = parseInt(document.getElementById("ball").style.left)
//     if(newLeft >=0 ){
        
//     }else{
//         newLeft = 0
//     }
//     let fifteenplus = parseInt(newLeft)
//     fifteenplus += 15
//     str =  `${fifteenplus}px`
//     document.getElementById("ball").style.left = `${fifteenplus}px`

//   }
//   moveRight()


/////9

// const box = document.createElement("h1")
// box.innerHTML = "The Best Game Ever"
// box.style.color = "#c0392b"
// box.style.fontFamily = "Helvetica"
// document.body.appendChild(box)
// box.setAttribute("class", "my-box")

// const subbox = document.createElement("h2")
// subbox.innerHTML = "Created by me"
// subbox.setAttribute("class", "my-subbox")
// document.body.appendChild(subbox)



//// 11. Events

// const box = document.getElementById("box")

// const enterColor = function () {
//     box.style.backgroundColor = "#c0392b"
//     box.innerHTML = "AHH GO AWAY"
// }

// const leaveColor = function () {
//     box.style.backgroundColor = "#1abc9c"
//     box.innerHTML = "Hover over me!"
// }

// const changeColor = function () {
//     box.style.backgroundColor = "#8e44ad"
//     box.innerHTML = "OH! You Changed Me!"
// }
  



///13. Spot Check 6


///14. Events II

// const box = document.createElement("div") // dynamically creating an element

// box.setAttribute("class", "box")
// box.onclick = function(){       // adding an event to the new element
//     box.innerHTML = "I'm alive!"
// }

// document.getElementById("some-id").appendChild(box) // now the box will be on the page, and will react to a click!


// Exercise 2


// const reservations = {
//     Bob: { claimed: false },
//     Ted: { claimed: true }
//   }
  
//   function checkReservation(){
//    const fname = document.getElementById("client").value
//    let lowerfname = fname.toLowerCase()
//    let keys = Object.keys(reservations)

//     for( let key in keys){
//         if ( keys[key].toLowerCase() == lowerfname){
//             lowerfname = keys[key]
//         }
//     }
    
//     if ( lowerfname in reservations  ){
//         if( reservations[lowerfname].claimed == false ){
//             alert(`Welcome, ${lowerfname}`)
//         }else{
//             alert('Hmm, someone already claimed this reservation')
//         }

//     }else{
//         alert('You have no reservation')
//         reservations[fname] = {claimed: false}

//     }
//   }


// Exercise 3


// for(let i = 0 ; i < 50; i++){
//     const box = document.createElement("div")
//     box.setAttribute("class", "box")
//     document.getElementById("container").appendChild(box)
//     box.onmouseleave = function () {
//         const niceColors = ["#8e44ad", "#3498db", "#c0392b", "#f1c40f", "#d35400", "#2ecc71", "#1abc9c", "#2c3e50", "#7f8c8d"]
    
//     const randomPosition = Math.floor(Math.random() * niceColors.length);
//     box.style.backgroundColor = niceColors[randomPosition];
//   }

// }


//Exercise 4 - Form




// console.log("@@@@@@ " + money)
// console.log("@@@@@@ " + date)
// console.log("@@@@@@ " + mobile)

function validate(){
    const fname = document.getElementById("name").value;
    const fnameError = document.getElementById("nameError");
    fnameError.innerHTML = "";


    let money = document.getElementById("salary").value;
    const moneyError = document.getElementById("salaryError");
    moneyError.innerHTML = "";
    
    const date = document.getElementById("birthday").value;
    const dateError = document.getElementById("birthdayError");
    dateError.innerHTML = "";
    
    const mobile = document.getElementById("phone").value;
    const mobileError = document.getElementById("phoneError");
    mobileError.innerHTML = "";
    
    
    
    

    if (fname.length == "") {
        fnameError.innerHTML = '<div style="margin-left: 20px;"> Empty field!</div>';
    }
    if (fname.length != "" && fname.length <= 2) {
        fnameError.innerHTML = '<div style="margin-left: 20px;"> your fname must be at least 2 characters</div>';
        // return;
    }
    if (money.length == "") {
        moneyError.innerHTML = '<div style="margin-left: 20px;"> Empty field!</div>';
    }
    if (money.length != "" && (money < 10000 || money > 16000)) {
        moneyError.innerHTML = '<div style="margin-left: 20px;"> money should be between 10,000 and 16,000</div>';
        // return;
    }
    if (date === "") {
        dateError.innerHTML = '<div style="margin-left: 20px;"> date should not be empty</div>';
    }
    if (mobile.length == "") {
        mobileError.innerHTML = '<div style="margin-left: 20px;"> Empty field!</div>';
    }
    if (mobile.length != "" && (mobile < 10)) {
        mobileError.innerHTML = '<div style="margin-left: 20px;"> mobile number should be at least 10 digits</div>';
    }
    if (fnameError.innerHTML === "" && moneyError.innerHTML === "" && mobileError.innerHTML === "" && dateError.innerHTML === "") {
        alert("Form submitted successfully!");
    }
}
    

