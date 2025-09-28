// Navigation Smooth Scrolling
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Hamburger toggle menu
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Demo Tab Switching
document.getElementById('demo-tabs').addEventListener('click', function(event) {
  if (event.target.classList.contains('tab-btn')) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const target = event.target.getAttribute('data-target');
    document.querySelectorAll('.demo-content').forEach(content => {
      content.classList.add('hidden');
    });
    document.getElementById(target).classList.remove('hidden');
  }
});

// Multilingual Support
const messages = {
  en: "Welcome to BharatGyan! Choose your preferred language for personalized learning.",
  hi: "[translate:भारतज्ञान में आपका स्वागत है! व्यक्तिगत शिक्षा के लिए अपनी पसंदीदा भाषा चुनें।]",
  ta: "பாரதியான் க்கு வரவேற்கிறோம்! தனிப்பயனாக்கப்பட்ட கல்விக்கான உங்கள் விருப்பமான மொழியைத் தேர்ந்தெடுக்கவும்.",
  bn: "ভারতজ্ঞানে স্বাগতম! ব্যক্তিগত শিক্ষার জন্য আপনার পছন্দের ভাষা নির্বাচন করুন।"
};

function changeLanguage() {
  const select = document.getElementById('language-select');
  const msg = messages[select.value] || messages.en;
  document.getElementById('lang-message').textContent = msg;
}

// Offline Access Toggle
let online = true;
function toggleOnlineStatus() {
  online = !online;
  document.querySelector('#offline p strong').textContent = online ? 'Online' : 'Offline';
}

// Chat Send Message (dummy append)
function sendMsg() {
  const input = document.getElementById('chat-input');
  const msg = input.value.trim();
  if (msg) {
    const chatBox = document.getElementById('chat-box');
    const newMsg = document.createElement('div');
    newMsg.classList.add('chat-msg', 'student');
    newMsg.textContent = msg;
    chatBox.appendChild(newMsg);
    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = '';
  }
}
