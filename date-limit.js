var date = new Date();
	var tdate = date.getDate();
	var month = date.getMonth() + 1;

	if (tdate < 10) {
		tdate = '0' + tdate;
	}
	if (month < 10) {
		month = '0' + month;
	}
	var year = date.getUTCFullYear();
	var minDate = year + '-' + month + '-' + tdate;
	document.getElementById('date-input').setAttribute('min', minDate);
	console.log(minDate);