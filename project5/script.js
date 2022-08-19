function fun1(){
    document.getElementById("cam").innerHTML = 
    '<a-scene arjs embedded renderer="logarithmicDepthBuffer: true;" vr-mode-ui="enabled: false" gesture-detector id="scene"> <a-assets> <a-asset-item id="adam" src="bungalow/scene.gltf"></a-asset-item> </a-assets> <a-marker preset="hiro" raycaster="objects: .clickable" emitevents="true" cursor="fuse: false; rayOrigin: mouse;" id="markerA"> <a-entity id="bowser-model" gltf-model="#adam" position="0 0 0" scale="0.1 0.1 0.1" class="clickable" gesture-handler> </a-entity> </a-marker> <a-entity camera></a-entity> </a-scene>';
};

function fun2(){
    document.getElementById("cam").innerHTML = 
    '<a-scene arjs embedded renderer="logarithmicDepthBuffer: true;" vr-mode-ui="enabled: false" gesture-detector id="scene"> <a-assets> <a-asset-item id="adam" src="building/scene.gltf"></a-asset-item> </a-assets> <a-marker preset="hiro" raycaster="objects: .clickable" emitevents="true" cursor="fuse: false; rayOrigin: mouse;" id="markerA"> <a-entity id="bowser-model" gltf-model="#adam" position="0 0 0" scale="0.001 0.001 0.001" class="clickable" gesture-handler> </a-entity> </a-marker> <a-entity camera></a-entity> </a-scene>';
};

