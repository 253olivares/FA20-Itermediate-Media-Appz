class Guitar{
    constructor(make, strings, acoustic){
        this.make = make;
        this.strings = strings;
        this.acoustic = acoustic;
    }

    strumOpen(){
        this.strings.forEach(string =>{
            console.log(string.note+"Plays");
        });
    }
}

class String{
    constructor(note, octave){
        this.note = note;
        this.octave = octave;
    }
}
var strings = [];
strings[0] = new String("E", 4);
strings[1] = new String("A", 4);
strings[2] =  new String("D", 4);
var myGuitar = new Guitar("Gibson", [], false);


myGuitar.strumOpen();