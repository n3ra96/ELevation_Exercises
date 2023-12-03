



$(".item[data-instock=true]").on("click", function () {
    let newCart = $(this).text()
    let item = $(`<div >${newCart}</div>`)
    $("#cart").append(item)
    
    

})


// $(".item[data-instock=true]").on("click", function () {
//     let divCopy = $("<div> " + $(this).html() + "</div>")
//     $("#items").append(divCopy)
// })