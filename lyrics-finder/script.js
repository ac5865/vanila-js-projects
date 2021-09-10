const form = document.getElementById('search-form');
const seacrh = document.getElementById('seacrh');
const result = document.getElementById('result');
const more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';

async function searchSongs(term){
    const res = await fetch(`${apiURL}/suggest/${term}`);
    const data = await res.json();

    showData(data);
}

function showData(data){
    result.innerHTML = `<ul class="songs"> ${data.data.map(song => 
        `<li> <span> <strong> ${song.artist.name}</strong> - ${song.title}</span> <button class="btn" data-artist = "${song.artist.name}" data-songtitle="${song.title}">Lyrics</button> </li>`
    ).join('')}</ul>`;
    if(data.prev || data.next){
        more.innerHTML = `${data.prev ? `<button class="btn" onClick = "getMoreSongs('${data.prev}')"></button>`:''}
        ${data.next ? `<button class="btn" onClick = "getMoreSongs('${data.next}')"></button>`:''}`;
    }
    else{
        more.innerHTML='';
    }

}

async function getMoreSongs(url){
    const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await res.json();

  showData(data);
}

async function getLyrics(artist, songTitle){
    const res = await fetch(`${apiURL}/v1/${artist}/${songTitle}`);
    const data = await res.json();

    if(data.error){
        result.innerHTML = data.error;
    }
    else{
        const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g, '<br>');
        result.innerHTML = `
            <h2><strong>${artist}</strong> - ${songTitle}</h2>
            <span>${lyrics}</span>
        `;
    }
    more.innerHTML = '';
}

form.addEventListener('submit', e => {
    e.preventDefault();

    const searchTerm = seacrh.value.trim();
    if(!searchTerm){
        alert('Please enter a search keyword');
    }
    else{
        searchSongs(searchTerm);
    }
});

result.addEventListener('click', e =>{
    const clickEl = e.target;
    if(clickEl.tagName === 'BUTTON') {
        const artist = clickEl.getAttribute('data-artist');
        const songTitle = clickEl.getAttribute('data-songtitle');

        getLyrics(artist, songTitle);
    }
});