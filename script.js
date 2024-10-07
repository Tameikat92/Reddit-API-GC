
//const awwButton = document.getElementById('aww-button');
const awwDiv = document.getElementById('aww-results"');
const awwParagraph = document.getElementById('aww-stuff');

document.getElementById('aww-button').addEventListener('click', function() {
    
    const url = 'https://www.reddit.com/r/aww/.json';

    fetch(url)
.then(response => response.json())
.then(redditData => {
  // reddit data contains all the data in this json API
    const post = redditData.data.children;

    





})


})