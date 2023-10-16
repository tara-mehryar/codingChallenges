function timeWord(timeStr) {
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

