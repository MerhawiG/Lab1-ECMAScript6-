function isWeekend()
{
    const todayDate = new Date();
    const day = todayDate.getDay();

    const ArrayOfdays = ['weekend','weekday','weekday','weekday','weekday','weekday','weekend'];
    return (ArrayOfdays[day]);
}

console.log(isWeekend());