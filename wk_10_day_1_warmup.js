const timeWord = (timeStr) => {
    const hoursWords = [
        "midnight", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "noon"
    ];
    const minutesWords = [
        "oh", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
        "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen",
        "nineteen", "twenty"
    ];

    const [hours, minutes] = timeStr.split(":").map(Number);

    if (hours === 0 && minutes === 0) {
        return "midnight";
    } else if (hours === 12 && minutes === 0) {
        return "noon";
    } else {
        let timeWord = hoursWords[hours];
        if (hours === 0 || hours === 12) {
            timeWord = "twelve";
        }
        if (hours > 12) {
            timeWord = hoursWords[hours - 12];
        }

        const minuteWord = minutes < 21 ? minutesWords[minutes] : minutesWords[20] + " " + minutesWords[minutes % 10];
        const period = hours < 12 ? "am" : "pm";

        return `${timeWord} ${minutes === 0 ? "o'clock" : minuteWord} ${period}`;
    }
}

// Examples
console.log(timeWord("00:00"));  // 'midnight'
console.log(timeWord("12:00"));  // 'noon'

// WhiteBoard Explanation:
// 1. Create array for words to store words for hours and minutes.
// 2. Split the input string into hours and minutes and then convert it to number values by using map(number).
// 3. Handle special cases of noon and midnight 
// 4. Convert Hours to Words
// 5. Convert Minutes to words
// 6. Determine AM/PM by checking if the hours are less than 12 or greater
// 7. Construct final string 
// 8. Return result

