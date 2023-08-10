function updateEmbed() {
	console.log("Updating embed...");
}

// Update every 10 seconds
setInterval(updateEmbed, 1); // 10,000 milliseconds = 10 seconds

/*
	fetch("getcurrentrunning")
		.then((response) => response.json())
		.then((data) => {
			// Create the embed content using the data from the API
			console.log(data);
		})
		.catch((error) => {
			console.error("Error fetching data:", error);
		});
	*/
