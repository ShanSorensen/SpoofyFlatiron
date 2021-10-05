const init = () => {
    fetch("https://api.spotify.cm/v1/artists/1dfeR4HaWDbWqFHLkxsg1d/top-tracks")
    .then(response => response.json())
    .then(data => console.log(data))


}


function topTracks(){

    const albumImage = document.getElementByClassName('album-image')
    const trackName = document.getElementsByClassName('track-name')
    const artist = document.getElementByClassName('artist')
    const albumName = dococument.getElementByClassName('album-name')
    const releaseDate = document.getElementsByClassName('release-date')
   



}






document.addEventListener('DOMContentLoaded', init)