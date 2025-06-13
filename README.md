# YouTube Audio Panner (Web Audio API Trick)

A quick and easy script to force a YouTube tab (or any HTML5 video/audio) to play in only one ear (left or right, duh), using the Web Audio API.

## 「 ✦ How It Works ✦ 」

It takes the `<video>` element’s audio stream, routes it through a stereo panner, and sends the result to your speakers/headphones.

## 「 ✦ How To Use ✦ 」

1. Open YouTube (or any video site using HTML5 `<video>`).
2. Open DevTools Console (`F12` or `Ctrl+Shift+I`, then go to **Console**).
3. Paste the following:

```
const ctx = new AudioContext();
const source = ctx.createMediaElementSource(document.querySelector('video'));
const panNode = ctx.createStereoPanner();
panNode.pan.value = -1; // -1 = left, 1 = right, 0 = center
source.connect(panNode).connect(ctx.destination);
```
4. Change panNode.pan.value to 1 if you want right channel instead.

## Notes
- Only works while the video is actively playing.
- May cause weird audio duplication if run multiple times.
- This is a quick console hack so it doesn’t persist across page loads.
- Tested in Chrome and Firefox.

## 「 ✦ Why Though? ✦ 」
I've been using a layered audio setup to help my brain focus better. BUT I'm sick and tired of downloading audio/video to manually split L + R audio channels. So I use this trick to do it in-browser while I keep the youtube tab open for each.

I play a familiar/motivating song inro my left ear to get the emotional and creative processing going, and then play the audio of whichever Youtube tutorial I'm learning into my right ear to target the brain’s language centers. 
Then I add soft White Noise and Beta-Wave tones in both ears to reduce distractions and keep me locked in. 

Might be weird, but it helps me absorb and retain the material more easily.
