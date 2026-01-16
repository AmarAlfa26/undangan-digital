//music
const music = document.getElementById('music');
const cover = document.getElementById('cover');
const content = document.getElementById('content');

let audioUnlocked = false;

function openInvitation() {
  cover.style.display = 'none';
  content.classList.remove('hidden');

  if (!audioUnlocked) {
    music.muted = false;
    music.play()
      .then(() => {
        audioUnlocked = true;
      })
      .catch(() => {
        console.log('Audio masih diblokir browser');
      });
  }
}


// Countdown
// const target = new Date("2026-01-31T09:00:00").getTime();
// setInterval(() => {
//   const now = new Date().getTime();
//   const diff = target - now;
//   if (diff < 0) return;

//   const d = Math.floor(diff / (1000*60*60*24));
//   const h = Math.floor(diff / (1000*60*60) % 24);
//   const m = Math.floor(diff / (1000*60) % 60); 

//   document.getElementById('countdown').innerText =
//     `${d} Hari ${h} Jam ${m} Menit`;
// }, 1000);

const target = new Date("2026-01-31T09:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(d).padStart(2, "0");
  document.getElementById("hours").textContent = String(h).padStart(2, "0");
  document.getElementById("minutes").textContent = String(m).padStart(2, "0");
  document.getElementById("seconds").textContent = String(s).padStart(2, "0");

}, 1000);
// animasi countdown
function updateValue(id, value) {
  const el = document.getElementById(id);
  if (el.textContent !== value) {
    el.textContent = value;
    el.classList.remove('animate');
    void el.offsetWidth; // reset animation
    el.classList.add('animate');
  }
}


//gallery
const modal = document.getElementById('galleryModal');
const modalImg = document.getElementById('modalImg');

function openGallery(img) {
  modal.style.display = 'flex';
  modalImg.src = img.src;
}

function closeGallery() {
  modal.style.display = 'none';
}


// RSVP
const sheetURL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ6pmz1IAXqzeu7SWRzVy99_jqVUEtyBlG_yO0F1cFSfVkb_kRnmJwUgkPLmMcfxxsS3GmlEtR9if5z/pub?gid=1756523433&single=true&output=csv";

fetch(sheetURL)
  .then(res => res.text())
  .then(csv => {
    const rows = csv.split('\n').slice(1).reverse();
    const list = document.getElementById('rsvpList');

    rows.forEach(row => {
      const cols = row.split(',');

      const nama = cols[1];
      const hadir = cols[2];
      const pesan = cols[3];

      if (!nama) return;

      list.innerHTML += `
        <div class="rsvp-item">
          <strong>${nama}</strong> (${hadir})<br>
          <small>${pesan || ''}</small>
        </div>
      `;
    });
  })
  .catch(err => {
    console.error("Gagal load RSVP:", err);
  });

