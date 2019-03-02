const url = "https://s3.amazonaws.com/api-fun/books.json";
fetch(url)
  .then(res => {
    return res.json();
  })
  .then(dataApi => {
    let booksOutput = `
      <div class="image-banner my-4" style="height:270px; padding-top:4rem">
        <div class="col-md-12 text-center px-0">
          <h1 class="display-4 font-italic text-white">${dataApi.data.author}</h1>
          <p class="lead my-3">Birthday: ${dataApi.data.birthday}</p>
          <p class="lead my-3">Birthday: ${dataApi.data.birthPlace}</p>
        </div>
      </div>
      <div class="container">
      `;
    for (let i = 0; i < dataApi.data.books.length; i++) {
      let book = dataApi.data.books[i];
      if (i % 2 == 0 || i == 0) {
        booksOutput += '<div class="row mb-2 ml-0 mr-0">';
      }
      booksOutput += `
      <div class="col-md-6">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-lg h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-warning">Kids</strong>
            <h4 class="mb-0 hide-text-title">${book.title}</h4>
            <div class="mb-3 mt-1 text-muted">Published: ${
              book.PublishDate
            }</div>
            <p class="hide-text-summary card-text mb-auto">This is a wider card with text below as a natural lead-in to additional content.text below as a natural lead-in to additional 
            </p>

            <a href="${
              book.purchaseLink
            }" role="button" class="btn btn-primary mt-3" target="_blank">Buy Now</a>
          </div>
          <div class="col-auto d-none d-lg-block mt-4 mb-3">
          <img src="${book.imageUrl}">

          </div>
        </div>
      </div>
        `;
    }

    document.getElementById("books").innerHTML = booksOutput;
  })
  .catch(err => console.log(err));
