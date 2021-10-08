const init = () => {
	fetch("http://localhost:3000/topHits")
	.then(response => response.json())
	.then(data => renderAlbumMenu(data))
}

function renderAlbumMenu(topHits) {
    const albumMenu = document.getElementById('album-list');
	
	topHits.forEach(track => {
			const image = document.createElement('img');
			image.src = track.image;	
			image.addEventListener( 'click', () => {

				document.getElementById('albumimage').src = topHits.image;
				document.getElementById('trackname').innerHTML = topHits.title;
				document.getElementById('ranking').innerHTML = topHits.rating;
				document.getElementById('albumname').innerHTML = topHits.album;

			})
			albumMenu.appendChild(image);
	})

}

document.addEventListener("DOMContentLoaded", init)
