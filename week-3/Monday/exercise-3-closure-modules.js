
function SongsManager(){
    //https://www.youtube.com/watch?v=
    const songs = {

    }

    function addSong(name , song){
         let url1 = song.slice(32)
         songs[name] = url1;
    }

    function getSong(name){
        let song = "https://www.youtube.com/watch?v=" + songs[name]
        return console.log(song);
    }

    return {
        addSong: addSong ,
        getSong: getSong
    }
}




const songsManager = SongsManager()
songsManager.addSong("sax", "https://www.youtube.com/watch?v=3JZ4pnNtyxQ")
songsManager.addSong("how long", "https://www.youtube.com/watch?v=CwfoyVa980U")
songsManager.addSong("ain't me", "https://www.youtube.com/watch?v=D5drYkLiLI8")

songsManager.getSong("sax") // should print https://www.youtube.com/watch?v=3JZ4pnNtyxQ