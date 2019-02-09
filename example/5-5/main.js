(function () {
   console.log(_.range(1, 100));
   console.log(_.filter([1, 2, 3, 4, 5, 6], num => num % 2 == 0 ));
   console.log(_.has({ 'TW': '台灣', 'JP': '日本' }, "TW"));
   console.log(_.random(1, 100));
   console.log(_.map([1, 2, 3, 4], num => num * num));
   console.log(_.forEach({"a":1 , "b": 2}, (v, k) => console.log(k)));
   var array = [1, 2, 3, 4];
   var evens = _.remove(array, function (n) {
      return n % 2 == 0;
   });
   console.log(array);
   console.log(evens);
   console.log(_.reverse([1, 2, 3, 4]));
   console.log(_.union([1, 2, 3], [2, 3, 4], [1, 2]));
   console.log(_.intersection([1, 2, 3], [2, 3, 4]));
   console.log(_.xor([1, 2, 3], [2, 3, 4]));
   console.log(_.uniqueId());
   console.log(_.uniqueId());
   console.log(_.sampleSize([1, 2, 3, 4, 5, 6, 7, 8], 2));
})();
