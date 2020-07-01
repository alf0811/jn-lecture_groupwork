let base_uri = 'http://localhost:3000';
let papers = [];

function Paper(name, url, outline, student) {
    this.name = name;
    this.url = url;
    this.outline = outline;
    this.student = student;
}

function paperClassToContainerItem(paper){
    var html = '<div class="item"><p class="name">'+ paper.name + '</p><p class="url">'+ '<a href="' + paper.url + '">' + paper.url + '</a>' + '</p><p class="outline">'+ "概要: " + paper.outline + '</p><p class="student_name">' + "読んだ人: " + paper.student + '</p></div>';
    return html;
}

function setPapers(){
    var container = document.getElementById('container');

    papers = papers.reverse();

    papers.forEach(paper => {
        console.log(paper);
        document.getElementById('container').innerHTML += paperClassToContainerItem(paper);
    });
}

function fetchAllPaper(){
   fetch(base_uri + '/papers', {

   })
  .then(response => response.json())
  .then(json => {
    for (var i = 0; i < json.length; i++) {
        papers.push(new Paper(json[i].name, json[i].url, json[i].outline, json[i].student_name));
    }
    console.log(papers);
      setPapers();
  })
  .then(json => {
  })
}

fetchAllPaper();
