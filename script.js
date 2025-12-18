function spin() {
  const mainWheel = document.getElementById("main-wheel");
  const subWheel = document.getElementById("sub-wheel");

  // Add a random rotation between 2000 and 6000 degrees
  const subRandomSpin = Math.floor(Math.random() * 4000) + 2000;
  const mainRandomSpin = Math.floor(Math.random() * 4000) + 2000;

  mainWheel.style.transform = `rotate(${mainRandomSpin}deg)`;
  subWheel.style.transform = `rotate(${subRandomSpin}deg)`;
}


// let names = [];
// // let currentIndex = 0;

// function showName() {
//     let values = document.getElementById("nameInput").value;
//     names.push(values);

//     console.log(names);

//     const container = document.querySelectorAll(".players");

//     names.forEach((name) => {
//       container.innerHtml = `<span>${name}</span>`;
//     });

// }

let names = [];
let currentIndex = 0;

function showName() {
    const input = document.getElementById("nameInput");
    const value = input.value.trim();

    if (value === "") return;

    // main wheel spans
    const mainSpans = document.querySelectorAll(
        "#main-wheel > .players .players-name"
    );

    // sub wheel spans
    const subSpans = document.querySelectorAll(
        "#sub-wheel .players-name"
    );

    if (currentIndex < mainSpans.length && currentIndex < subSpans.length) {
        names.push(value);

        // fill both wheels at the same index
        mainSpans[currentIndex].textContent = value;
        subSpans[currentIndex].textContent = value;

        currentIndex++;
        input.value = "";
    } else {
        alert("All player slots are filled!");
    }

    console.log(names);
}

