
let cmp = []

$(".generator").on("click", function () {
    
    console.log($(this).closest(".computer").data().id)
    let add = $(this).closest(".computer").find(".BUS").text()
    console.log(add)
    cmp.push({"cmp_id": add})
    console.log($(this).closest(".processor").attr("id"))
})


//  the generator button
//   console log the following values for its computer:
//   The processor ID
//   The computer’s data-id - also, push this to an array in an object like this: {cmp_id: id}
//   The BUS number

$(".validator").on("click", function () {
    let qr = $(this).closest(".computer").find('.QR')
    for (let i = 0; i < qr.length; i++) {
        console.log($(qr[i]).text())
    }
    console.log($(this).closest(".computer").find('.generator').text())//empty
    console.log($(this).closest(".computer").find('.MB').text())//empty
})

//  the validator button console log the following values for its computer:
//   The generator’s text
//   The MB
//   Both QRs