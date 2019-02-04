(function () {
    for (var i = 0; i < 10; i++) {
        console.log(i);
        setTimeout(function () {
            console.log('這執行第' + i + '次');
        }, 10);
    }
})();

(function () {
  for (let i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(function () {
      console.log('這執行第' + i + '次');
    }, 10)
  }
})()
