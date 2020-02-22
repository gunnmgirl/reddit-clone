function post(url, title, ups, username, comments) {
  return `<a href="${url} class="post-link"><li class="post"><p class="post-title">${title}</p><span>${ups} ups </span><span>by ${username} </span><span>${comments} comments</span></li></a>`;
}

async function getPopularPosts() {
  try {
    document.getElementById("loading").textContent = "Loading...";
    const response = await fetch("https://www.reddit.com/r/popular.json");
    const json = await response.json();
    document.getElementById("loading").textContent = "";

    const posts = json.data.children;
    const list = document.getElementById("mydata");

    posts.forEach(element => {
      list.insertAdjacentHTML(
        "beforeend",
        post(
          element.data.url,
          element.data.title,
          element.data.ups,
          element.data.author,
          element.data.num_comments
        )
      );
    });
  } catch (err) {
    console.log("err - ", err);
  }
}

getPopularPosts();
