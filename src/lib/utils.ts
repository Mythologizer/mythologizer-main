type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export function formatDate(date: string, dateStyle: DateStyle = 'medium', locales = 'en') {
	// Check if the date string is a valid date format
	// If it contains non-numeric characters other than common date separators, return as is
	if (!/^\d{4}[-/]\d{1,2}[-/]\d{1,2}$/.test(date.replace(/\s/g, ''))) {
		return date;
	}

	// Safari is mad about dashes in the date
	const dateToFormat = new Date(date.replaceAll('-', '/'));

	// Check if the date is valid
	if (isNaN(dateToFormat.getTime())) {
		return date; // Return original string if date is invalid
	}

	const dateFormatter = new Intl.DateTimeFormat(locales, { dateStyle });
	return dateFormatter.format(dateToFormat);
}
