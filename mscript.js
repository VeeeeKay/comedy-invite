let step = 0; // Start at step 0 for "Hello"

function handleAnswer(answer) {
  const questionEl = document.getElementById("question");
  const responseEl = document.getElementById("response");
  const comedianSection = document.getElementById("comedianSection");

  // Step 0: Hello
  if (step === 0) {
    step++;
    questionEl.innerHTML = "Are you free on 12th Oct? 📅";
    responseEl.innerHTML = "";
    // Change buttons
    document.querySelector(".btn").innerText = "Yes ✅";
    let btns = document.querySelectorAll(".btn");
    if (btns.length === 1) {
      let noBtn = document.createElement("button");
      noBtn.className = "btn secondary";
      noBtn.innerText = "No ❌";
      noBtn.setAttribute("onclick", "handleAnswer(false)");
      document.getElementById("inviteCard").insertBefore(noBtn, responseEl);
    }
    return;
  }

  // Step 1
  if (step === 1) {
    if (!answer) {
      responseEl.innerHTML = "Oops okay :/"; 
      return;
    }
    step++;
    questionEl.innerHTML = "Do you like standups? 🎤😂";
    responseEl.innerHTML = "";
    return;
  }

  // Step 2
  if (step === 2) {
    if (!answer) {
      responseEl.innerHTML = "Oops okay :/"; 
      return;
    }
    step++;
    questionEl.innerHTML = "Are you coming to <b>Swati Sachdeva's</b> show? 🤩";
    responseEl.innerHTML = "";
    comedianSection.style.display = "block"; // Show image
    return;
  }

  // Step 3
  if (step === 3) {
    if (!answer) {
      responseEl.innerHTML = "Okay... next time maybe 😅"; 
      return;
    }
    responseEl.innerHTML = "Lesssgoooooo! 🚀🔥😂";
  }
}
