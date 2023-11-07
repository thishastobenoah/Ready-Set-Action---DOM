function main() {
    document.getElementById("grow-me").classList.add("big");

    document.getElementById("shrink-me").classList.remove("big");

    const listItems = document.querySelectorAll("li");
    listItems.forEach((li) => {
        console.log(li.textContent);
    });

    const link = document.querySelector("a.link");
    link.href = "https://www.example.com";
    link.textContent = "somewhere";

    document.getElementById("hide-me").style.display = "none";

    document.getElementById("show-me").style.display = "block";

    const nameInput = document.getElementById("name");
    const welcomeMessage = document.querySelector("h1");
    welcomeMessage.textContent = "Welcome " + nameInput.value + "!";
}