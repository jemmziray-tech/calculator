const STORAGE_KEY = "team_poll_state_v1";

const defaultPoll = {
  question: "What should our team build next sprint?",
  options: [
    { id: 1, text: "Real-time Chat Widget", votes: 4 },
    { id: 2, text: "AI Code Reviewer", votes: 7 },
    { id: 3, text: "Dark Mode Dashboard", votes: 2 },
  ],
};

let poll = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultPoll;

function savePoll() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(poll));
}

function getTotalVotes() {
  return poll.options.reduce((sum, opt) => sum + opt.votes, 0);
}

function renderPoll() {
  document.getElementById("poll-question").textContent = poll.question;
  const total = getTotalVotes();
  document.getElementById("total-votes").textContent = `Total votes: ${total}`;

  const listEl = document.getElementById("options-list");
  listEl.innerHTML = "";

  poll.options.forEach((opt) => {
    const pct = total === 0 ? 0 : Math.round((opt.votes / total) * 100);
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.onclick = () => vote(opt.id);

    btn.innerHTML = `
      <div class="option-fill" style="width: ${pct}%"></div>
      <div class="option-content">
        <span>${opt.text}</span>
        <span>${opt.votes} votes (${pct}%)</span>
      </div>
    `;
    listEl.appendChild(btn);
  });
}

function vote(optionId) {
  const option = poll.options.find((o) => o.id === optionId);
  if (option) {
    option.votes += 1;
    savePoll();
    renderPoll();
  }
}

document.getElementById("add-option-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.getElementById("new-option-input");
  const text = input.value.trim();
  if (!text) return;

  poll.options.push({
    id: Date.now(),
    text,
    votes: 0,
  });

  input.value = "";
  savePoll();
  renderPoll();
});

renderPoll();
