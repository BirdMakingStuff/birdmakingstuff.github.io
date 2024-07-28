const updatedElement = document.getElementById("lastupdated");
fetch("https://api.github.com/repos/BirdMakingStuff/birdmakingstuff.github.io/branches/main")
.then((response) => response.json())
.then((data) => {
    const date = new Date(data.commit.commit.author.date);
    updatedElement.innerHTML = `Last updated: ${date.toLocaleDateString(undefined, {dateStyle: "short"})}`;
})
.catch((error) => console.error(error));