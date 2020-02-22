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
        const a = document.createElement("a");
        a.setAttribute("href", json.data.children[i].data.url);
        a.className = "post-link";
        const li = document.createElement("li");
        li.className = "post";
        const title = document.createElement("p");
        const ups = document.createElement("span");
        title.innerHTML = json.data.children[i].data.title;
        title.className = "post-title";
        ups.innerHTML = json.data.children[i].data.ups + " ups";
        const user = document.createElement("span");
        user.innerHTML = " by " + json.data.children[i].data.author + " ";
        const comm = document.createElement("span");
        comm.innerHTML = json.data.children[i].data.num_comments + " comments";
        a.append(title, ups, user, comm);
        //li.append(title, ups, user, comm);
        li.append(a);
        container.append(li);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
getData();
//document.getElementById("votes").innerHTML = ;
