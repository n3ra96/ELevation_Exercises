const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]
  
  for(let fruit of fruits){
    let co = fruit.color
    let na = fruit.name
    $("#basket").append(`<div class="${co}">${na}</div>`)
  }


// <div class="orange">Orange</div> $("#b2").css("background-color", "red")

