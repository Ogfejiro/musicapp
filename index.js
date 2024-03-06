let progress = document.getElementById("progress");
let song = document.getElementById("song");
let cntrlIcon = document.getElementById("control");
let songNameElement = document.getElementById("songName");
let artistElement = document.getElementById("artist");
let currentSongIndex = 0;

// Define an array of music sources and corresponding song names and artists
let musicData = [
  { source: "media/Troye_Sivan_-_Angel_Baby.mp3", name: "Angel_Baby", artist: "Troye_Sivan" },
  { source: "media/Beyonc_-_Poison_[NaijaGreen.Com]_.mp3", name: "Poison", artist: "Beyonce" },
  { source: "media/Broken Angel(PagalWorld).mp3", name: "Broken Angel", artist: "PagalWorld" },
  { source: "media/Larry-Gaaga-ft-Flavour-Tene-[TrendyBeatz.com].mp3", name: "Tene", artist: "Larry Gaaga ft Flavour" }
  // Add more music data as needed
];

song.onloadedmetadata = function() {
  progress.max = song.duration;
  progress.value = song.currentTime;

  // Update the initial song name and artist
  updateSongInfo();
}

function playPause() {
  if (cntrlIcon.classList.contains("fa-pause")) {
    song.pause();
    cntrlIcon.classList.remove("fa-pause");
    cntrlIcon.classList.add("fa-play-circle");
  } else {
    song.play();
    cntrlIcon.classList.remove("fa-play-circle");
    cntrlIcon.classList.add("fa-pause");
  }
}

function playNext() {
  // Increment the current song index
  currentSongIndex++;

  // Check if the index is within bounds
  if (currentSongIndex >= musicData.length) {
    currentSongIndex = 1; // Wrap around to the first song
  }

  // Change the source of the audio element to the next song
  song.src = musicData[currentSongIndex].source;
  song.load(); // Load the new song
  song.play(); // Start playing the new song

  // Update the song name and artist
  updateSongInfo();
}

//for the prev
function playBack(){
    currentSongIndex--;

    // Check if the index is within bounds
  if (currentSongIndex <= musicData.length) {
    currentSongIndex = 0; // Wrap around to the first song
  }

  // Change the source of the audio element to the next song
  song.src = musicData[currentSongIndex].source;
  song.load(); // Load the new song
  song.play(); // Start playing the new song

  // Update the song name and artist
  updateSongInfo();
}

// Update the progress bar continuously
setInterval(() => {
  progress.value = song.currentTime;
}, 500);

function updateSongInfo() {
  // Update the song name and artist based on the current song index
  songNameElement.textContent = musicData[currentSongIndex].name;
  artistElement.textContent = musicData[currentSongIndex].artist;
}
