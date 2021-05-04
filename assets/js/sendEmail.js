function sendMail(contactForm) {
	emailjs
		.send('service_h2aehq8', 'template_e484apl', {
			from_name: contactForm.name.value,
			from_email: contactForm.emailaddress.value,
			project_request: contactForm.projectsummary.value,
		})
		.then(
			function (response) {
				console.log('SUCCESS', response);
				alert('Thanks Thank you we will resume contact soon will resume ');
			},
			function (error) {
				console.log('FAILED', error);
				alert('UPS!!! Something get wrong... Try again.');
			}
		);
	return false; // To block from loading a new page
}
