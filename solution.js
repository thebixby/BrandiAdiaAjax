$(document).ready(function() {
	$.ajax({
		url: 'data.json'
	})
	.done(function (json) {
	 console.log(json);
	});
	// body...
})