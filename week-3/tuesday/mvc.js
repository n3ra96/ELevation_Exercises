posts = [
    {name: "mo" , text: "hello" },
    {name: "ha" , text: "my" },
    {name: "me" , text: "friend" }
]


function render(){
    for(post of posts){
        let simple= $("<div>" + post.name + ": " + post.text + "</div>")
        $("body").append(simple)
    }
}

$("button").on("click", function () {
        $("div").empty()
        posts.push({
            name: $("#name").val(),
            text: $("#text").val()})
        render()
})