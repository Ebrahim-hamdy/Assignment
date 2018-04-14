function formatDate (date) {

	let validDate = date.replace(/(\d+)(?:st|nd|rd|th)/, "$1");
	let newFormat = new Date(validDate)
	let day = newFormat.getDate();
	let month = newFormat.getMonth(); 
	let year = newFormat.getFullYear();

	return  day + "-" +(month + 1) + "-" + year;
}
