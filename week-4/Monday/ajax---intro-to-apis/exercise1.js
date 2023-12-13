// 9782806269171 - The Little Prince: Book Analysis
// 1440633908 - Of Mice and Men by John Steinbeck
// 9781945048470 - The Alchemist by Paulo Coelho
// 9780307417138 - Hitchhiker’s Guide to the Galaxy


// Initialize the HTTP request to a server located at "someURL"
var xhr = new XMLHttpRequest();
const fetch = function (isbn) {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+isbn,
        success: function (data) {
            console.log(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}

 fetch(9782806269171)
 fetch(1440633908)
 fetch(9781945048470)
 fetch(9780307417138)


