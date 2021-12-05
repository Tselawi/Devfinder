const select = document.getElementById("search");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const desc = document.getElementById("desc");
const img = document.getElementById("img");
const date = document.getElementById("date");
const repos = document.getElementById("repos");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const local = document.getElementById("local");
const tweet = document.getElementById("tweet");
const linkUrl = document.getElementById("linkUrl");
const company = document.getElementById("company");
const hide = document.querySelectorAll(".hide");
const moon = document.querySelector(".fa-moon");

function search() {
  select.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      hide.forEach((i) => i.classList.remove("hide"));
      const username = e.target.value;
      console.log(typeof username);
      const url = `https://api.github.com/users/${username}`;
      fetch(url, {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          title.innerHTML = data.name;
          subtitle.innerHTML = data.login;
          desc.innerHTML = data.bio;
          img.src = data.avatar_url;
          const createDate = new Date(data.created_at);
          date.innerHTML = createDate.toDateString();
          repos.innerHTML = data.public_repos;
          followers.innerHTML = data.followers;
          following.innerHTML = data.following;
          local.innerHTML = data.location;
          tweet.innerHTML = data.twitter_username;
          linkUrl.innerHTML = data.blog;
          company.innerHTML = data.company;
        })
        .catch((err) => console.log(err));
      if (username == "") {
        alert("enter the username, please?");
        hide.forEach((i) => i.classList.add("hide"));
        return false;
      }
      //   if (window["url"] === "undefined") {
      //     console.log("error");
      //     alert("enter valid username, please?");
      //     hide.forEach((i) => i.classList.add("hide"));
      //     return false;
      //   }
    } else {
      hide.forEach((i) => i.classList.add("hide"));
    }
  });
}

function toggleMode() {
  //   console.log("toggle");
  const body = document.body;
  if (body.classList.toggle("light-mode")) {
    moon.classList.remove("fa-moon");
    moon.classList.add("fa-sun");
    moon.innerHTML = " Light";
    moon.style.color = "black";
    moon.style.backgroundColor = "rgb(206, 205, 205)";
  } else {
    moon.classList.add("fa-moon");
    moon.classList.remove("fa-sun");
    moon.innerHTML = " Moon";
    moon.style.color = "white";
    moon.style.backgroundColor = "#141c2f";
  }
}
