export const uniqueDates = (tasks) => {
    const unique = [];

    tasks.forEach( tasks => {
        if (!unique.includes(tasks.dateFormat)) unique.push(tasks.dateFormat);
    });

    return unique;
};

export const orderDates = (date) => {
    return date.sort ((a,b) => {
        const firstDate = moment (a, 'DD/MM/YYYY');
        const secondDate = moment (b, 'DD/MM/YYYY');
        return firstDate - secondDate;
    });
};