






const inEle = `<input type="text" id="my-input" placeholder="Human name">`
const buEle = `<button class="button">Add Human</button>`
const elem = $(inEle)
const elem2 = $(buEle)
$("body").append(elem)
$("body").append(elem2)

$("button").on("click", function () {
    let newHuman = $("#my-input").val()
    let item = $(`<li>${newHuman}</li>`)
    $("ul").append(item)
    $("#my-input").val("")

})


