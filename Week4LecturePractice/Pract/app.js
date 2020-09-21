let song = {
    name: "Wake Me Up",
    artist:"Avicii",
    album: "True",
    duration: "4:09"
};

class Song{
    constructor(name, artist, album, duration) {
        this.name = name;
        this.artist = artist;
        this.album = album;
        this.duration = duration;
        this.playTime = 0;
    }
    updateTime(){
        this.playTime++;
    }
    updateDisplay(){
        //later
    }
}
