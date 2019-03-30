export default emails => {
	if (emails.length === 0) return "Please provide a list of valid ',' seperated emails!";
	const invalidEmails = emails
		.split(",")
		.map(email => email.trim())
		.filter(email => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) === false)
		.filter(ie => ie.length);

	if (invalidEmails.length && invalidEmails) {
		return `These emails are invalid: ${invalidEmails}`;
	}
};
