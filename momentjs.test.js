import { isDateTimeValid, getRecentInstanceOfWeekday } from "./src/time-utils"

describe("isDateTimeValid", () => {
    it("should return true for YYYY-MM-DD", () => {
        const requestWithDate = {
            dateTime: "2020-11-12"
        }
        expect(isDateTimeValid(requestWithDate)).toBe(true)

    })

    it("should return true for YYYY-MM-DDThh:mm:ss", () => {
        const requestWithDateTime = {
            dateTime: "2022-03-17T10:00:00"
        }
        expect(isDateTimeValid(requestWithDateTime)).toBe(true)
    })
    
    it("should return true for ISO string", () => {
        const requestWithISOString = {
            dateTime: "2022-03-17T15:16:52.538Z"
        }
        expect(isDateTimeValid(requestWithISOString)).toBe(true)
    })

    it.each([
        null, 
        1,
        -1,
        12312312,
        "hehe"
    ])("should return false for %p", (dateTime) => {
        const request = { dateTime }
        expect(isDateTimeValid(request)).toBe(false)
    })
})

describe("getRecentInstanceOfWeekday", () => {
    it.each([
        ["given day is Wed, when today is Tue", "2022-03-15", 3, "2022-03-09"],
        ["given day is Wed, when today is Mon", "2022-03-14", 3, "2022-03-09"],
    ])
    ("should return given weekday from last week - %s", 
    (testCase, today, givenWeekday, expectedDate) => {
        expect(getRecentInstanceOfWeekday(today, givenWeekday)).toBe(expectedDate);
    })

    it.each([
        ["given day is Wed, when today is Wed (same day)", "2022-03-16", 3, "2022-03-16"],
        ["given day is Wed, when today is Thu", "2022-03-17", 3, "2022-03-16"],
        ["given day is Wed, when today is Sun", "2022-03-20", 3, "2022-03-16"],
    ])
    ("should return given weekday from current week - %s", 
    (testCase, today, givenWeekday, expectedDate) => {
        expect(getRecentInstanceOfWeekday(today, givenWeekday)).toBe(expectedDate);
    })
})