const fetchStoreData = function () {
    let input = $("#furniture-input").val()

    $.get(`/priceCheck/${input}`, function (storeData) {
        $("body").append(`<div>${storeData.name} - ${storeData.price}`)
    })
} 

const fetchBuy = function () {
    let input = $("#buy-input").val()

    $.get(`/buy/${input}`, function (storeData) {
        $("body").append(`<div>Congratulations, you’ve just bought ${storeData.name} for ${storeData.price}. There are ${storeData.inventory} left now in the store.`)
    })
}