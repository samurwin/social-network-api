module.exports = dateFormat = date => {
    const day = date.toDateString();
    const hours = date.getHours();
    const mins = date.getMinutes();

    if(hours > 12) {
        const time = hours - 12 + mins + 'pm'
    } else {
        const time = hours + mins + 'am'
    }
    return `${day}, ${time }`;
};