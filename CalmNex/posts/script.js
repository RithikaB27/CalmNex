function uploadFile() {
  const fileInput = document.getElementById('fileInput');
  const files = fileInput.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();

    reader.onload = function(event) {
      const postContainer = document.getElementById('postsContainer');
      const postElement = document.createElement('div');
      postElement.classList.add('post');

      if (file.type.startsWith('image')) {
        const imgElement = document.createElement('img');
        imgElement.src = event.target.result;
        postElement.appendChild(imgElement);
      } else if (file.type.startsWith('audio')) {
        const audioElement = document.createElement('audio');
        audioElement.controls = true;
        audioElement.src = event.target.result;
        postElement.appendChild(audioElement);
      } else if (file.type.startsWith('video')) {
        const videoElement = document.createElement('video');
        videoElement.controls = true;
        videoElement.src = event.target.result;
        postElement.appendChild(videoElement);
      }

      postContainer.appendChild(postElement);
    };

    reader.readAsDataURL(file);
  }
}