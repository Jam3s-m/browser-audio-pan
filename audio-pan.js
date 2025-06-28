const ctx = new AudioContext();
const source = ctx.createMediaElementSource(document.querySelector('video'));
const panNode = ctx.createStereoPanner();
panNode.pan.value = -1; // -1 = left, 1 = right, 0 = center
source.connect(panNode).connect(ctx.destination);
