const url = "https://s3.amazonaws.com/api-fun/author.json";
fetch(url)
  .then(res => {
    return res.json();
  })
  .then(test => {
    let author = ``;
    for (let i = 0; i < test.data.author.length; i++) {
      let book = test.data.author[i];
=
      author += `
      <div class="jumbotron p-4 p-md-5 text-white rounded bg-dark">
      <div class="col-md-6 px-0">
        <h1 class="display-4 font-italic">Title of a longer featured blog post</h1>
        <p class="lead my-3">Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.</p>
        <p class="lead mb-0"><a href="#" class="text-white font-weight-bold">Continue reading...</a></p>
      </div>
    </div>
  
        `;
    }

    document.getElementById("author").innerHTML = author;
  })
  .catch(err => console.log(err));
