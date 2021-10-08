
// const imageClick = null

const init = () => {
    fetch("http://localhost:3000/topHits")
    .then(response => response.json())
    .then(data => renderAlbumMenu(data))


//     const form = document.getElementById('new-submission')
//    form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         const albumObj = {}
//             albumObj.name = document.getElementById('new_comment').value;
//             renderAlbumMenu([albumObj])

            const reviewForm = document.getElementById('review-form');
        reviewForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const review = document.getElementById('review').value;
            const reviewList = document.getElementById('review-list');
            //console.log(e.target.review.value)
            // comment.replaceChildren('li')
            const newReviewLi = document.createElement('li');
            newReviewLi.textContent = review;
            reviewList.appendChild(newReviewLi);
            reviewForm.reset();
        })
}
function renderAlbumMenu(topHits) {
    const albumMenu = document.getElementById('album-list');

    console.log('hi')
    topHits.forEach(track => {
            const image = document.createElement('img');
            image.src = track.image;    
            image.addEventListener( 'click', () => {




                document.getElementById('album-image').src = track.image;
                document.getElementById('track-name').innerHTML = track.title;
                document.getElementById('ranking').innerHTML = track.rating;
                document.getElementById('album-name').innerHTML = track.album;
            })
            albumMenu.appendChild(image);
    })
}
document.addEventListener("DOMContentLoaded", init)