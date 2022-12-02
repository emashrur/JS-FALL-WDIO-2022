const moment = require('moment');

const now = moment();

/**
 * format() -> prints timestamp in a readable format
 */
console.log(`now.format() -> ${now.format()}`);

console.log(`\nnow.date() -> ${now.date()}`);

console.log(`\nnow.month() -> ${now.month()}`);

console.log(`\nnow.year() -> ${now.year()}`);

console.log(`\nnow.hour() -> ${now.hour()}`);

console.log(`\nnow.minute() -> ${now.minute()}`);

console.log(`\nnow.second() -> ${now.second()}`);

console.log(`\nnow.millisecond() -> ${now.millisecond()}\n`);

/**
 * To format date (or timestamp) in a user defined format:
 * 
 * Dates : D -- DD -- DDD
 * Month : M -- MM -- MMM -- MMMM
 * Year : YY -- YYYY
 * Hour : h -- hh -- H -- HH
 * Minute : m -- mm 
 * Second : s -- ss 
 * Fraction of a second : SS -- SSSS -> (0.00seconds | 0.000seconds)
 * TimeZone : Z -- ZZ
 * am/pm : a -- A (a -> am/pm | A -> AM/PM)
 */

console.log(`now.format('MMM DD # YYYY hh - m - s - a') -> ${now.format('MMM DD # YYYY hh - m - s - a')})\n`);

console.log(`now.format('dddd MMM DD, YYYY hh:mm:ssa') -> ${now.format('dddd MMM DD, YYYY hh:mm:ssa')})\n`);

/**
 * To add/subtract fields in a date : 
 * add(x,y)
 * subtract(x,y)
 * 
 * x -> inputNumber
 * y -> inputUnit
 * 
 * example : now.add(23, 'days') -> add 23 days to date
 * 
 * 
 */

/**
 * To set the date in moment object to a particular time stamp
 */

const now3 = moment().month('Nov').year(1997).date(23);

console.log(`birthday -> ${now3}\n`)

console.log(`now3.format()\n`)


/**
 * To find difference between two dates:
 * function : diff()
 * 
 */

const diffInDays = now.diff(now3, 'seconds');

console.log(`now.diff(now3, 'seconds') -> ${diffInDays}\n`);

/**
 * To find if a date/moment comes after another date/moment object,
 * function : isAfter()
 * 
 * if date/moment comes after another date/moment object
 *  -> function returns true
 * otherwise
 *  -> function returnes false
 */

const present = moment();
console.log(`\n\npresent.format() -> ${present.format()}\n`);

const present2 = moment().month('Aug').year(2025).date(16);
console.log(`\n\npresent2.format() -> ${present2.format()}\n`);

const present3 = moment().month('Jan').year(1990).date(7);
console.log(`\n\npresent3.format() -> ${present3.format()}\n`);


// does present come after present2?

console.log(`present.isAfter(present2) -> ${present.isAfter(present2)}\n`);

// does present come after present3?

console.log(`present.isAfter(present3) -> ${present.isAfter(present3)}\n`);

/**
 * To find if a date/moment comes before another date/moment object,
 * function : isBefore()
 * 
 * if date/moment comes before another date/moment object
 *  -> function returns true
 * otherwise
 *  -> function returnes false
 */

// does present come before present2?

console.log(`present.isBefore(present2) -> ${present.isBefore(present2)}\n`);

// does present come before present3?

console.log(`present.isBefore(present3) -> ${present.isBefore(present3)}\n`);

/**
 * To find if a date/moment is equal to another date/moment object,
 * function : isSame()
 * 
 * if date/moment is the same as another date/moment object
 *  -> function returns true
 * otherwise
 *  -> function returnes false
 */

const isPresentSamePresent2 = present.isSame(present2);
console.log(`present.isSame(present2) -> ${isPresentSamePresent2}\n`);

const present4 = moment().month('Nov').date(21);
console.log(`present4.format() - ${present4.format()}\n`);
console.log(`present.format() -> ${present.format()}\n`);

const isPresentSamePresent4 = present.isSame(present4);
console.log(`present.isSame(present4) -> ${isPresentSamePresent4}\n`);

/**
 * To find if a date/moment is between two other date/moment objects,
 * function : isBetween()
 * 
 * if date/moment is between the two other date/moment object
 *  -> function returns true
 * otherwise
 *  -> function returnes false
 */

const isP1BetweenP2P3 = present.isBetween(present2,present3);
console.log(`\n\npresent.isBetween(present2,present3) -> ${isP1BetweenP2P3}\n`);
console.log(now.month());