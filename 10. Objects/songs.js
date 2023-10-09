class Song {
    constructor(type, name, time){
        this.type = type,
        this.name = name,
        this.time = time
    }
}

function songs(arr){
    let songs = [];
    let numberOfSongs = arr.shift(); 
    let typeSong = arr.pop(); 

    for(let i = 0; i < numberOfSongs; i++){
        let [type, name, time] = arr[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeSong === 'all'){
        songs.forEach((i) => console.log(i.name));
    } else {
        let filteredSongs = songs.filter((i) => i.type === typeSong);
        filteredSongs.forEach((i) => console.log(i.name));
    }

}

let inputArr = [4,'favourite_DownTown_3:14','listenLater_Andalouse_3:24','favourite_In To The Night_3:58','favourite_Live It Up_3:48','listenLater'];

songs(inputArr);


