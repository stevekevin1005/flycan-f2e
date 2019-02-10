(function () {
    const START = new Date().getTime();
    let arr = [2, 32, 134, 214, 12, 4, 124, 24564, 564, 564, 54, 5, 456, 456, 5, 54, 45, 45, 66, 46, 465, 46, 46, 46, 465, 46, 465, 4654, 564, 654, 564, 654];
    let text = `
        original array: ${arr}
        sort array: ${bubble(arr)}
        time: ${new Date().getTime() - START} millsecs
    `;
    document.getElementById("content").innerText = text;
    
})();
