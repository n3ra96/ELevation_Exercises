// 9782806269171 - The Little Prince: Book Analysis
// 1440633908 - Of Mice and Men by John Steinbeck
// 9781945048470 - The Alchemist by Paulo Coelho
// 9780307417138 - Hitchhiker’s Guide to the Galaxy


// Initialize the HTTP request to a server located at "someURL"

const fetch = function (queryType,queryValue) {
    if(queryType == "isbn"){
        $.ajax({
            method: "GET",
            url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+queryValue,
            success: function (data) {
                if(data.items.length >0){
                    console.log(data.items[0].volumeInfo.title) 
                } 
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })

    }else if(queryType == "title"){
        $.ajax({
            method: "GET",
            url: 'https://www.googleapis.com/books/v1/volumes?q=intitle:'+queryValue,
            success: function (data) {
                if(data.items.length >0){
                    data.items.forEach((element) => 
                    console.log(data.items[element].volumeInfo.title),
                    console.log(data.items[element].volumeInfo.authors),
                    console.log(data.items[element].volumeInfo.ISBN) 

                    );
                    
                } 
            },
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
    }
}

let first = fetch("isbn", 9789814561778)
let second = fetch("title", "How to Win Friends and Influence People")


