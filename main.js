function Jukebox (){
    var x=0;
    this.playlist =["buddy.mp3", "minds.mp3","sunny.mp3", "dubstep.mp3"]
    this.zz = new Audio(this.playlist[x])
    
    this.play = function() {
        // console.log("this play")
        // console.log(zz)
         this.zz.play();
    }
    this.pause = function() {
        this.zz.pause();
    }
    this.stop = function() {
        this.zz.pause();
        this.zz.currentTime =0;
    }
     
    this.next = function() {
        this.pause();
        x= (x<7)?x=x+1:x=0; //tenary operator
        this.zz = new Audio(this.playlist[x])
        this.play()
       
    }
    this.random = function() {
        this.pause();
        x= Math.floor(Math.random()*6)
        this.zz = new Audio(this.playlist[x])
        this.play()
    }
    this.addSong = function(song) {
        this.playlist.push(song)
    }

}

function Song (name) {
    this.name = name
    
}

var dinerJukebox = new Jukebox()
//still working on the stuff below
// dinerJukebox.addSong(new Song("dubstep.mp3"))

// document.getElementById("songtitle").innerHTML = dinerJukebox.playlist[x]
