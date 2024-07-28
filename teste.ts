function calculateDaysBetweenDates(begin, end) {
    var beginDate = new Date(begin);
    var endDate = new Date(end);
    var difference = endDate.getTime() - beginDate.getTime();
    return Math.ceil(difference / (1000 * 3600 * 24));
}

//create a typescrpit function to randomize an array 
