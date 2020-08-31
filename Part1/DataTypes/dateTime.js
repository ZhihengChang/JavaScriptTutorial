//Date stores the date, time and provides methods
//for date/time management
let now = new Date();
console.log(now);

//new Date(milliseconds)
//create a date object with the time equal to number of milliseconds
//(1/1000 of second) passed after the 1/1 1970 UTC+0
let start = new Date(0);
console.log(start);

//newDate(string)
let date = new Date("2020-08-31");
console.log(date);
//NOTE: the time is 00:00:00 

//new Date(year, month, date, hours, minutes, seconds, ms)
/*
- year must be 4 digits
- month count starts with 0 up to 11
- date parameter is actually the day of month, it missing then 1
- if hours/minutes/seconds/ms missing, then set to 0
*/
date = new Date(2011, 0, 1, 2, 3, 4, 567);
console.log(date);

//methods
//getFullYear(): get the year (4 digits)
console.log(date.getFullYear());

//getMonth(): from 0 - 11
console.log(date.getMonth());

//getDate(): get the day of month from 1 to 31
console.log(date.getDate());
//getHours(), getMinutes(), getSeconds(), gietMilliseconds()

//getDay(): from 0 (Sunday) - 6(Saturday)
console.log(date.getDay());

//NOTE: all above methods are relative to the local time zone
//for the time zone UTC+0: getUTCFullYear(), getUTCMonth(), getUTCDay().

//Below methods do not have UTC variant
//getTime(): returns the timestamp for the date - a number of milliseconds passed
//           from the Jan 1st 1970 UTC+0
console.log(date.getTime());

//getTimezoneOffset(): returns the difference between UTC and the local timezone in mins
console.log(date.getTimezoneOffset());

//Date setters:
// setFullYear(year, [month], [date])
// setMonth(month, [date])
// setDate(date)
// setHours(hour, [min], [sec], [ms])
// setMinutes(min, [sec], [ms])
// setSeconds(sec, [ms])
// setMilliseconds(ms)
// setTime(milliseconds) (sets the whole date by milliseconds since 01.01.1970 UTC)

//Autocorrection:
date = new Date(2020, 7, 32);
console.log(date);
//often used to get get the date after the given period of time
date.setSeconds(date.getSeconds() + 70);
console.log(date);
//NOTE: so zero or even negative values are allowed

//Date to number
//when date is convert to number, it becomes the timestamp same as getTime()
console.log(+date);
//thus can be used in mesuring of time

//Date.now(): if we want to measure time, dont need Date object
//now() returns the current timestamp

//when time measuring, getTime is faster than subtract two date explictly
//because getTime dont have to do type conversion

//Date from string
//Date.parse("YYYY-MM-DDTHH:mm:ss.sssZ")
//returns the timestamp
/*
YYYY-MM-DD – is the date: year-month-day.
The character "T" is used as the delimiter.
HH:mm:ss.sss – is the time: hours, minutes, seconds and milliseconds.
The optional 'Z' part denotes the time zone in the format +-hh:mm. 
A single letter Z that would mean UTC+0.
*/
let time = Date.parse('2020-08-31T15:02:50.417-07:00');
console.log(time);