function updateEmbed() {
	fetch("api?info=true")
		.then((response) => response.json())
		.then((data) => {
			// Create the embed content using the data from the API
			let songName = document.getElementById("song");
			songName.innerHTML = data.song;

			let artistName = document.getElementById("artist");
			artistName.innerHTML = data.artist;

			let image = document.getElementById("imageId");
			image.src = `data:image/png;base64, ${data.image}`;
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
}

// Update every 10 seconds
setInterval(updateEmbed, 10000); // 10,000 milliseconds = 10 seconds
