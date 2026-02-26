const projects = {
  "18now": {
    title: "18Now — All-in-One Golf App",
    img: "./assets/images/18-now-thumbnail.png",
    desc: "All-in-one golf app allowing users to book tee times, leave reviews, track scores, connect with other golfers.",
    links: [
      { label: "Live Demo", href: "https://18now.netlify.app/" }
    ]
  },
  "quiz-game": {
    title: "Interactive Multi-User Quiz Game",
    img: "./assets/images/game.png",
    desc: "Part of Senior Capstone Project - developed a Kahoot-style quiz game with a spy theme. Cross-platform compatibility (phones, tablets, laptops, etc.), low-latency communication via an in-game chatbox, and a Unity game functionality, accompanied by a standard web application frontend.",
    note: "*Server no longer online",
    links: [
      { label: "GitHub Repo", href: "https://github.com/jcs2249/Senior-Project-2025-" }
    ]
  },
  "legacy-refactor": {
    title: "Legacy Code Refactoring Research",
    img: "./assets/images/legacy-refactoring.png",
    desc: "Part of Software Engineering I - tasked with refactoring legacy codebases in various programming languages. Large research document (50+ pages). Worked in a small group environment following agile methodologies.",
    links: [
      { label: "Read the Paper", href: "./public/Legacy Code Refctoring.pdf" },
      { label: "GitHub Repo", href: "https://github.com/AFMS-Rowan-Software-Projects/Legacy-Code-Refactor-Fall-24" }
    ]
  }
};

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalNote = document.getElementById("modal-note");
const modalLinks = document.getElementById("modal-links");

function openModal(projectKey) {
  const project = projects[projectKey];
  if (!project) return;

  modalImg.src = project.img;
  modalImg.alt = project.title;
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.desc;

  if (project.note) {
    modalNote.textContent = project.note;
    modalNote.hidden = false;
  } else {
    modalNote.textContent = "";
    modalNote.hidden = true;
  }

  modalLinks.innerHTML = "";
  project.links.forEach(link => {
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.label;
    a.className = "modal-link-btn";
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    modalLinks.appendChild(a);
  });

  modal.removeAttribute("hidden");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.setAttribute("hidden", "");
  document.body.style.overflow = "";
}

// Open on card click
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("click", () => {
    openModal(card.dataset.project);
  });
});

// Close on ✕ button
document.getElementById("modal-close").addEventListener("click", closeModal);

// Close on overlay click (outside modal box)
modal.addEventListener("click", e => {
  if (e.target === modal) closeModal();
});

// Close on Escape key
document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
