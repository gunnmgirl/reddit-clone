function createNode(element) {
  return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

async function getData() {
  try {
    const response = await fetch("https://www.reddit.com/r/popular.json");
    if (response.ok) {
      const json = await response.json();
      const container = document.getElementById("mydata");
      for (var i = 0; i < json.data.dist; i++) {
        const markup = `
            <li class="post">
              <a class="post-link" href=${json.data.children[i].data.url}>
                <p class="post-title">
                  ${json.data.children[i].data.title}
                </p>
                <span>${json.data.children[i].data.ups + " ups"}</span>
                <span>${" by " + json.data.children[i].data.author}</span>
                <span>${
                  json.data.children[i].data.num_comments + " comments"
                }</span>
              </a>
            </li>
          `;
        container.insertAdjacentHTML("beforeend", markup);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
getData();
