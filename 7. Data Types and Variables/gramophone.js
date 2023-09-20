function gramophone(str1, str2, str3){
    let band = str1;
    let album = str2;
    let song = str3;

    let songDuration = (album.length * band.length) * song.length / 2;
    let rotations = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${rotations} times.`)
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');