const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl() {
  var originalUrl = document.getElementById("originalUrl").value;
  var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
  shortenedUrlTextarea = document.getElementById("shortenedUrl");

  fetch(apiUrl).then(response => response.text()).then(data => {
    shortenedUrlTextarea.value = data;
  }).catch(error => {
    shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
  });
}

function copyShortenedUrl() {
  const shortenedUrl = document.getElementById("shortenedUrl").value;
  navigator.clipboard.writeText(shortenedUrl).then(() => {
    console.log("Shortened URL copied to clipboard!");
  }, (err) => {
    console.error('Failed to copy: ', err);
  });
}

reloadBtn.addEventListener('click', () => {
  location.reload();
});
