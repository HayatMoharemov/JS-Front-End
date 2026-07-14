function manageSong(strArr){
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let songsArr = [];

    let songCount = strArr.shift();
    let searchedTypeList = strArr.pop();

    for (let currentSong = 1; currentSong <= songCount; currentSong++) {
        let songStr = strArr.shift();
        let [listType, name, time] = songStr.split('_')
        let songObj = new Song(listType, name, time)
        songsArr.push(songObj)    
    }

    if (searchedTypeList === 'all') {
        for(let songObj of songsArr) {
            console.log(songObj.name);
        }
    } else {
        let filteredSongs = songsArr.filter(songObj => songObj.typeList === searchedTypeList);
        for(let songObj of filteredSongs) {
            console.log(songObj.name)
        }
    }
}

manageSong([3,
'favourite_DownTown_3:14',
'favourite_Kiss_4:16',
'favourite_Smooth Criminal_4:01',
'favourite'])
