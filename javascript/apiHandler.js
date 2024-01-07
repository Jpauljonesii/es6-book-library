'use strict';
function getBookData(){
  $.get(
    'https://www.googleapis.com/books/v1/volumes?q=javascript.',
    function (data) {
      console.log(data);
    });
}

export default getBookData;