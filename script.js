const main_video = document.querySelector(".main-video video");
const main_video_title = document.querySelector(".main-video .title");
const video_playlist = document.querySelector(".video-playlist .videos");

main_video_description = document.querySelector("#video-description");
// Add these variables to your existing code
const progressBar = document.getElementById("progress-bar");
let progress = 0;

// Function to handle the "Mark as Complete" button click
function markAsComplete() {
  if (progress < 100) {
    progress += 10; // Increase progress by 10% on each click
    updateProgressBar();
  }
}

// Function to update the progress bar width
function updateProgressBar() {
  progressBar.style.width = `${progress}%`;
}

let data = [
  {
    section: "Section 1",
    id: "a1",
    title: "manipulate text background",
    name: "manipulate text background.mp4",
    duration: "2:47",
    description:
      "This video covers important topics related to manipulate text background . Learn and enhance your skills in this session.",
  },
  {
    section: " ",
    id: "a2",
    title: "build gauge with css",
    name: "build gauge with css.mp4",
    duration: "2:45",
    description:
      "This video covers important topics related to build gauge with css. Learn and enhance your skills in this session.",
  },
  {
    section: " ",
    id: "a3",
    title: "3D popup card",
    name: "3D popup card.mp4",
    duration: "24:49",
    description:
      "This video covers important topics related to 3D popup card . Learn and enhance your skills in this session.",
  },

  {
    section: "Section 2",
    id: "a4",
    title: "customize HTML5 form elements",
    name: "customize HTML5 form elements.mp4",
    duration: "3:59",
    description:
      "This video covers important topics related to customize HTML5 form elements. Learn and enhance your skills in this session.",
  },
  {
    section: " ",
    id: "a5",
    title: "custom select box",
    name: "custom select box.mp4",
    duration: "4:25",
    description:
      "This video covers important topics related to custom select box. Learn and enhance your skills in this session.",
  },
  {
    section: " ",
    id: "a6",
    title: "embed google map to contact form",
    name: "embed google map to contact form.mp4",
    duration: "5:33",
    description:
      "This video covers important topics related to embed google map to contact form. Learn and enhance your skills in this session.",
  },
  {
    section: "Section 3",
    id: "a7",
    title: "password strength checker javascript web app",
    name: "password strength checker javascript web app.mp4",
    duration: "0:29",
    description:
      "This video covers important topics related to password strength checker javascript web app. Learn and enhance your skills in this session.",
  },

  {
    section: " ",
    id: "a8",
    title: "custom range slider",
    name: "custom range slider.mp4",
    duration: "1:12",
    description:
      "This video covers important topics related to custom range slider. Learn and enhance your skills in this session.",
  },
  {
    section: " ",
    id: "a9",
    title: "animated shopping cart",
    name: "animated shopping cart.mp4",
    duration: "3:38",
    description:
      "This video covers important topics related to animated shopping cart . Learn and enhance your skills in this session.",
  },
];

data.forEach((video, i) => {
  let video_element = `
                <h2>${video.section}</h2>
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : "0" + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
  video_playlist.innerHTML += video_element;
});

let videos = document.querySelectorAll(".video");
videos[0].classList.add("active");
videos[0].querySelector("img").src = "images/pause.svg";

videos.forEach((selected_video) => {
  selected_video.onclick = () => {
    for (all_videos of videos) {
      all_videos.classList.remove("active");
      all_videos.querySelector("img").src = "images/play.svg";
    }

    selected_video.classList.add("active");
    selected_video.querySelector("img").src = "images/pause.svg";

    let match_video = data.find(
      (video) => video.id == selected_video.dataset.id
    );
    main_video.src = "videos/" + match_video.name;
    main_video_title.innerHTML = match_video.title;
    main_video_description.innerHTML = match_video.description;
  };
});
