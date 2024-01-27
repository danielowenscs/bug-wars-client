<template>
  <div class="about">
    <h1 class="header">Meet The Team!</h1>
    <h2>{{ memberNames[currentMember] }}</h2>
    <div>
      <img class="image" :src="useImage()" />
    </div>
    <p>{{ memberDescription[currentMember] }}</p>
    <button @click="nextMember">Next Member</button>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue';

let currentMember = ref(0);
let memberNames = ["Joe Dirt", "John Connor", "Ellen Ripley"];
let memberImages = ["joeDirt.jpg", "johnConner.jpg", "ellenRipley.jpg"]
let memberDescription = ["Howdy folks, name's Joe Dirt. Born and raised in the heart of America, I've seen my fair share of ups and downs. Life ain't always been easy for this guy with the mullet, but I've learned to roll with the punches and keep on truckin'.Growing up, I didn't have much. My family wasn't exactly the cream of the crop, and we bounced around from trailer park to trailer park more times than I can count. But you know what they say, tough times breed tough folks, and I reckon I'm as tough as they come.I've had more odd jobs than you can shake a stick at. From janitorial work to sewage maintenance, I've done it all. But no matter where I found myself, I always had a smile on my face and a wisecrack ready to go.Now, I ain't no scholar, but I've got street smarts like you wouldn't believe. I've navigated my way through some sticky situations, let me tell ya. And along the way, I've met some characters that make my life look downright normal.Sure, some folks might laugh at my style or my accent, but I ain't never let that get me down. I'm proud of who I am and where I come from, and ain't nobody gonna change that.", "Hey, I'm John Connor. Yeah, that John Connor – the guy at the center of the whole Terminator mess. My life's been one wild ride, let me tell you.Growing up, I never knew normal. My mom, Sarah Connor, she was something else. She told me stories about how I'd lead the resistance against the machines in the future. Pretty heavy stuff for a kid, huh? But hey, she wasn't wrong.When I was a teenager, everything changed. Terminators started coming back from the future, trying to off me before I could do my thing. Talk about pressure! But I guess that's the burden of being the savior of humanity, right?I've been through it all – running, fighting, you name it. But I've also had some amazing people by my side. Kyle Reese, my mom, even a reprogrammed Terminator named Uncle Bob. Yeah, you heard that right – a Terminator, on our side.It's been a rough road, though. Losing my mom was one of the hardest things I've ever had to face. But it only made me more determined to stop Judgment Day from happening.", "Hey there, I'm Ellen Ripley. If you've heard my name, chances are you know about the horrors I've faced out there in the deep, dark reaches of space. But let me start from the beginning.I was just your average space trucker, working for the Weyland-Yutani Corporation aboard the Nostromo. Our routine job turned into a nightmare when we stumbled upon a distress signal on LV-426. That's where we found the Xenomorph – a creature beyond nightmares, vicious and relentless.I did everything I could to survive that ordeal. Lost my crew, my ship, everything. But somehow, I made it out alive. That experience changed me forever.After drifting in space for decades, they found me. The Company, always looking to exploit the Xenomorph for profit. They didn't care about what I'd been through, only what they could gain. But I wasn't about to let them weaponize that horror.I faced the Xenomorph again and again, on LV-426, on Fury 161, even on Earth. Each time, I fought with everything I had, determined not to let those monsters win."]

const useImage = () => {
  return new URL(`../${memberImages[currentMember.value]}`, import.meta.url).href;
}

const nextMember = () => {
  if(currentMember.value === memberNames.length - 1) {
    currentMember.value = 0
  } else {
    currentMember.value += 1;
  }
};
</script>

<style scoped>
.counters {
  display: flex;
  gap: 20px;
}
.about {
  margin: auto;
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;

  justify-content: center;
  gap: 20px;
}
.header {
  font-size: 40px;
}
img {
  border-radius: 50%;
  height: 50%;
  width: 50%;
}
</style>
