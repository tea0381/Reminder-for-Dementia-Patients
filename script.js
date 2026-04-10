const reminders = [
  {
    text: "약 드실 시간이에요",
    image: "pill.png"
  },
  {
    text: "물 드세요",
    image: "water.png"
  },
  {
    text: "산책 가실 시간이에요",
    image: "walk.png"
  }
];

let currentIndex = 0;

function updateReminder() {
  document.getElementById("reminderText").innerText =
    reminders[currentIndex].text;

  document.getElementById("reminderImage").src =
    reminders[currentIndex].image;

  playVoice();
}

function nextReminder() {
  currentIndex = (currentIndex + 1) % reminders.length;
  updateReminder();
}

function playVoice() {
  const text = reminders[currentIndex].text;

  const speech = new SpeechSynthesisUtterance(text);
  speech.lang = "ko-KR";
  speech.rate = 0.8; // 천천히 말하기

  window.speechSynthesis.speak(speech);
}

// 처음 실행
updateReminder();
