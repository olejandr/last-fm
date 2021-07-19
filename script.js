class Song {
    // constructor(group,url,title,listeners){
    //     this.group = group;
    //     this.url = url;
    //     this.title = title;
    //     this.listeners = listeners;
    // }

    // setItemLi(){
    //     let li = document.createElement('li');
    //     li.classList.add("fa", "fa-play-circle");
    //     return li;
    // }

    // setItemGroupName(group,url){
    //     let aGroup = document.createElement('a');
    //     aGroup.classList.add("group-name");
    //     aGroup.title("Ir al Grupo");
    //     aGroup.setAttribute.add("href", url);
    //     aGroup.innerHTML = group;
    //     return aGroup;        
    // }

    // setItemSongTitle(title){
    //     let aTitle = document.createElement('a');
    //     aTitle.classList.add("song-title");
    //     aTitle.innerHTML = title;
    //     return aTitle;
    // }

    // setListeners(listeners){
    //     let divListeners = document.createElement('div');
    //     divListeners.classList.add("listeners");
    //     divListeners.innerHTML = listeners;
    //     return divListeners;
    // }

    // getNewElement(group,url,title,listeners){
    //     let newItem = this.setItemLi();
    //     newItem.appendChild(this.setItemGroupName(this.group,this.url));
    //     newItem.appendChild(this.setItemSongTitle(this.title));
    //     newItem.appendChild(this.setListeners(this.listeners));
    //     return newItem;
    // }    
}


// este codigo funciona

    const getSongs = fetch('music.json')      
        .then((response) => response.json())
        .then((data) => {            
            data.forEach((data) => {
                console.log(data);
                let lista = document.querySelector('.lista');
                let listItem = document.createElement('li');
                let aGroup = document.createElement('a');
                let aTitle = document.createElement('a');
                let divListeners = document.createElement('div');

                listItem.classList.add("far", "fa-play-circle", "list-item");
                aGroup.classList.add("group-name"); 
                aTitle.classList.add("song-title");
                divListeners.classList.add("listeners");

                aGroup.href = data.url;
                aGroup.setAttribute('target', 'blank')
            

                aGroup.textContent = data.artist.name;                
                aTitle.textContent = data.name;                
                divListeners.textContent = data.listeners;

                listItem.appendChild(aGroup);
                listItem.appendChild(aTitle);
                listItem.appendChild(divListeners);
                lista.appendChild(listItem);
            });
        });
   
    


const loadSongs = (arraySongs)=>{
    // let arraySongs = [];
    // let song = fetch('music.json');
   
    // song.then(response => response.json())
    //     .then(data =>{
    //         console.log(data)
    //         data.forEach(data=> {
                // group = data.artist.name;
                // url = data.url;
                // title = data.name;
                // listeners = data.listeners;
        //     })
        // })
//         .then(arraySongs.push(song))
// return arraySongs
// arraySongs.forEach(e => {

// })

}


const loadOverview = () =>{
}

const loadTenListened = ()=>{
 
}

const loadBiggest = (e)=>{
   
}

const init = ()=>{
 
}


window.onload = init;

