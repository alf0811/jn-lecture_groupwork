
function Paper(name, url, outline, student) {
    this.name = name;
    this.url = url;
    this.outline = outline;
    this.student_name = student;
}

testPaper = new Paper("てすと", "facebook.com", "あいうえお", "tappuntappun");


function postPaper() {
    var form = document.forms['form-inline']

    console.log(form);

    paper = new Paper(form.elements['name'].value, form.elements['url'].value, form.elements['outline'].value, form.elements['student_name'].value);

  postData('http://localhost:3000/papers', paper) 
    .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
    .catch(error => console.error(error));
}

function postData(url = '', data = {}) {
   console.log(JSON.stringify(testPaper));

  // 既定のオプションには * が付いています
    return fetch(url, {
        method: "POST",
        mode: "cors", // no-cors, cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "no-referrer", // no-referrer, *client
        body: JSON.stringify(data), // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
    })
    .then(response => response.json()); // レスポンスの JSON を解析
}