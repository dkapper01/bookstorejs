const url = "https://s3.amazonaws.com/api-fun/books.json";
fetch(url)
  .then(res => {
    return res.json();
  })
  .then(test => {
    let books = ``;
    for (let i = 0; i < test.data.books.length; i++) {
      let book = test.data.books[i];
      let closeDivNow = 3;

      if (i % 2 == 0 || i == 0) {
        booksOutput += '<div class="row mb-2 ml-0 mr-0">';
      }
      booksOutput += `
      <div class="col-md-6">
        <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-secondary">Kids</strong>
            <h5 class="mb-0">${book.title}</h5>
            <div class="mb-3 mt-1 text-muted">Published: ${book.PublishDate}</div>
            <p class="block-with-text card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to additional content.text below as a natural lead-in to additional 
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

    document.getElementById("books").innerHTML = books;
  })
  .catch(err => console.log(err));