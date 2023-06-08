const form = document.getElementById('form');
	const name = document.getElementById('name');
	const email = document.getElementById('email');
	const pnumber = document.getElementById('pnumber');
	const bookdate = document.getElementById('date-input');

	form.addEventListener('submit', (e) => {
		e.preventDefault();

		validateInputs();
	});

	const validateInputs = () => {
		const nameValue = name.value;
		const emailValue = email.value;
		const pnumberValue = pnumber.value;
		const bookdateValue = bookdate.value;

		if (nameValue !== '' && emailValue !== '' && pnumberValue !== '' && bookdateValue !== '') {
			swal("Good job!", "You clicked the button!", "success");
			window.location = "index.html";
		} else {
			alert("\nPlease fill up form");
		}
	};