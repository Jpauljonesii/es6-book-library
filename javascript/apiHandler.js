'use strict';
import renderBooks from './bookUI.js';
function getBookData() {
  $.get(
    'https://www.googleapis.com/books/v1/volumes?q=javascript.',
    renderBooks
  );
}

export default getBookData;
