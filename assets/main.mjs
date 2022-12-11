/* import fetch from "node-fetch"; */
/* const $content = document.querySelector("#content");
const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC_qspxIbv_iMtfg7rJfbyOg&part=snippet%2Cid&order=date&maxResults=9";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a6e4011891msh7efa8bd1ca77e95p18bacbjsn66ab78f39a97",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

function checkResponse(response) {
  if (!response.ok) throw new Error("No se ha logrado la operacion con exito");
  return response.json();
}

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = checkResponse(response);
  return data;
}

(async () => {
  try {
    const dataChannelYT = await fetchData(API);
    const numberVideos = 4;
    const dataVideos = dataChannelYT.items.slice(0, numberVideos);
    const viewVideos = dataVideos.reduce((StrHTML, video) => {
      const { title, description, thumbnails } = video.snippet;
      const viewVideo = `<div class="group relative">
              <div
                  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                  <img src="${thumbnails.high.url}" alt="${description}" class="w-full">
              </div>
              <div class="mt-4 flex justify-between">
                  <h3 class="text-sm text-gray-700">
                      ${title}
                  </h3>
              </div>
          </div>`;
      return (StrHTML += viewVideo);
    }, "");
    $content.innerHTML = viewVideos;
  } catch (ex) {
    console.error(ex);
  }
})(); */
/* import fetch from "node-fetch"; */
const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UC_qspxIbv_iMtfg7rJfbyOg&part=snippet%2Cid&order=date&maxResults=9";
const $content = document.querySelector("#content");
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a6e4011891msh7efa8bd1ca77e95p18bacbjsn66ab78f39a97",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlAPI) {
  const response = await fetch(urlAPI, options);
  const data = response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    const view = videos.items
      .map(
        (video) =>
          `
          <div class="group relative">
              <div
                  class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                  <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
              </div>
              <div class="mt-4 flex justify-between">
                  <h3 class="text-sm text-gray-700">
                      <span aria-hidden="true" class="absolute inset-0"></span>
                      ${video.snippet.title}
                  </h3>
              </div>
          </div>
          `
      )
      .slice(0, 4)
      .join("");
    console.log(view);
    $content.innerHTML = view;
  } catch (ex) {
    console.error(ex);
  }
})();
