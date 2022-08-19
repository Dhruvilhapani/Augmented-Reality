// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
    const progressBar = event.target.querySelector('.progress-bar');
    const updatingBar = event.target.querySelector('.update-bar');
    updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
    if (event.detail.totalProgress === 1) {
      progressBar.classList.add('hide');
    } else {
      progressBar.classList.remove('hide');
      if (event.detail.totalProgress === 0) {
        event.target.querySelector('.center-pre-prompt').classList.add('hide');
      }
    }
  };
  document.querySelector('model-viewer').addEventListener('progress', onProgress);
  

function fun1(){
    document.getElementById("cam").innerHTML = 
    '<model-viewer enable-pan src="chair1/chair1.gltf" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="chair1/poster.webp" shadow-intensity="2"><div class="progress-bar hide" slot="progress-bar"><div class="update-bar"></div></div><button slot="ar-button" id="ar-button">View in your space</button><div id="ar-prompt"><img src="chair1/ar_hand_prompt.png"></div></model-viewer>';
};

function fun2(){
    document.getElementById("cam").innerHTML = 
    '<model-viewer enable-pan src="chair2/chair1.gltf" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="chair2/poster.webp" shadow-intensity="2"><div class="progress-bar hide" slot="progress-bar"><div class="update-bar"></div></div><button slot="ar-button" id="ar-button">View in your space</button><div id="ar-prompt"><img src="chair1/ar_hand_prompt.png"></div></model-viewer>';
};

function fun3(){
    document.getElementById("cam").innerHTML = 
    '<model-viewer enable-pan src="chair3/chair1.gltf" ar ar-modes="webxr scene-viewer quick-look" camera-controls poster="chair3/poster.webp" shadow-intensity="2"><div class="progress-bar hide" slot="progress-bar"><div class="update-bar"></div></div><button slot="ar-button" id="ar-button">View in your space</button><div id="ar-prompt"><img src="chair1/ar_hand_prompt.png"></div></model-viewer>';
};