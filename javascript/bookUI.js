function renderBooks(data){
  $("#book-catalogue").html('')
  //data = JSON.parse(data);
  console.log(data);


data.items.forEach((items)=> {
  console.log(items)
  $("#book-catalogue").append(
    `<div class="card m-3 mx-auto text-bg-primary text-center" >
  <div class="card-body border-dark">
    <p> ${items.volumeInfo.title} </p>
    <p> ${items.volumeInfo.authors} </p>
    <p> ${items.volumeInfo.description} </p>
  </div>
</div>`
  );
});
}

export default renderBooks;