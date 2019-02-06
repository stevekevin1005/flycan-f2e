(function () {
  console.log('string text line 1\n' +
    'string text line 2');
  console.log(`string text line 1
string text line 2`);

  var a = 5;
  var b = 10;
  console.log('Fifteen is ' + (a + b) + ' and not ' + (2 * a + b) + '.');
  console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);


  const classDeatail = {
    teacher: "Steve",
    students: ["Lily", "Paul"]
  }
  function renderList(students) {
    return `
    <div>上課名單</div>
    <ul>
      ${students.map(student => `<li>${student}</li>`).join('')}
    </ul>
  `
  }
  let template = `
  <div class="template">
  <h2>導遊：${classDeatail.teacher}</h2>
  ${renderList(classDeatail.students)}
  </div>
`
  document.getElementsByTagName("body")[0].insertAdjacentHTML('beforeend', template);

})();
