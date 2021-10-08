const init = () => {
	fetch("http://localhost:3000/topHits")
	.then(response => response.json())
	.then(data => renderAlbumMenu(data))
}

function renderAlbumMenu(tracks) {
    const albumMenu = document.getElementById('album-list');
	
	tracks.forEach(track => {
			const image = document.createElement('img');
			image.src = track.image;	
			image.addEventListener( 'cloicl')
	})

}

document.addEventListener("DOMContentLoaded", init)
