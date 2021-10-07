// const init = () => {

// 	const token = 'BQAnXkxyZ755aAocueBBATwN-VwJJnpQZ7gfYqoLzsScUjxIpXe89RYLDXcycu0igl6sDOrXcZo_lFwfHiQrPQnILRsmSSHfU7ByRYf9_hAd7T8fFT2ix-CtCfwnfEO1DmJa5p4AaCi_QfI5uODOJzr8SGZ5pdPpX8i5YALEzg'
// 	const topTrack= []
// 	const init = () =>{
// 	  fetch('https://api.spotify.com/v1/artists/3TVXtAsR1Inumwj472S9r4/top-tracks?market=US', {
// 		headers: {
// 		  'Accept': 'application/json',
// 		  'Content-Type': 'application/json',
// 		  'Authorization': 'Bearer ' + token   
// 	  }
// 	  })
// 		.then(res => res.json())
// 		.then(res => { topTracks(res) 
// 		})
// 	}
//   }
// })
//   .then(res => res.json())

//     fetch("https://api.spotify.cm/v1/artists/1dfeR4HaWDbWqFHLkxsg1d/top-tracks")
//     .then(response => response.json())
//     .then(data => console.log(data))


// }


// function topTracks(){

//     const albumImage = document.getElementByClassName('album-image')
//     const trackName = document.getElementsByClassName('track-name')
//     const artist = document.getElementByClassName('artist')
//     const albumName = dococument.getElementByClassName('album-name')
//     const releaseDate = document.getElementsByClassName('release-date')

// }

// function renderCourses(courses) {			
// 	const coursesMenu = document.getElementById('courses');
// 	coursesMenu.replaceChildren();

// 	courses.forEach(course => {

// 		const img = document.createElement('img');
// 		img.src = course.image;

// 	img.addEventListener("click", () => {
// 		const title = document.getElementById('course_title');
// 		title.textContent = course.title;

// 		const description = document.getElementById('course_description');
// 		description.textContent = course.description;

// 		const duration = document.getElementById('course_duration');
// 		duration.textContent = course.duration;

// 		const spaces = document.getElementById('course-spaces');
// 		spaces.textContent = course.capacity - course.students_enrolled;

// 	coursesMenu.appendChild(img);
// 	})
// },

   



// }

// document.addEventListener('DOMContentLoaded', init)