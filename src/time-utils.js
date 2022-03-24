import moment from 'moment';

moment("2022-03-17T22:16:52.538Z").utc(false)
moment("2022-03-17T22:16:52.538Z").isUTC()
moment("2022-03-17T22:16:52.538Z").isUtcOffset()
export const isDateTimeValid = (requestBody) => {
	return moment(requestBody.dateTime, moment.ISO_8601, true).isValid()
}

export const getRecentInstanceOfWeekday = (currentDate, dayOfTheWeek) => {
	if (moment(currentDate).weekday() < dayOfTheWeek) {
		return moment(currentDate).subtract(1, "weeks").weekday(dayOfTheWeek).format("YYYY-MM-DD")
	}

	return moment(currentDate).weekday(dayOfTheWeek).format("YYYY-MM-DD");
}