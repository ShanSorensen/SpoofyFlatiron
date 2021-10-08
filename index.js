const init = () => {
	fetch("http://localhost:3000/topHits")
	.then(response => response.json())
	.then(data => renderAlbumMenu(data))
}

function renderAlbumMenu(song) {
    const albumMenu = document.getElementById('album-list');
	const albumPhoto = document.createElement('img');
		albumPhoto.src = song.image;

}

document.addEventListener("DOMContentLoaded", init)
