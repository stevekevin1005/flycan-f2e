(function() {
   let html = `
        ${moment([2018, 01, 01]).format()}
        ${moment([2018, 13, 01]).format()}
        2018-07-07 is between 2018-01-01 and 2018-12-31: ${moment('2018-07-07').isBetween('2018-01-01', '2018-12-31')}
        2019-07-07 is between 2018-01-01 and 2018-12-31: ${moment('2019-07-07').isBetween('2018-01-01', '2018-12-31')}
        2018-01-01 add 7 days is: ${moment('2018-01-01').add(7, 'days').format("YYYY-MM-DD")}
        2018-01-08 remove 7 days is: ${moment('2018-01-08').add(-7, 'days').format("YYYY-MM-DD")}
        2018-01-01 is before 2019-01-01: ${moment('2018-01-01').from([2019, 01, 01])}
   `;
   
   document.getElementById("content").innerText = html;
})();
