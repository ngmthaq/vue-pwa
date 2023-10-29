<template>
  <div class="banner-container">
    <h1 class="quote">
      <span>“And I am experiencing</span>
      <span>the most beautiful days of my life”</span>
    </h1>
    <div class="video-container">
      <video src="@/assets/videos/banner.mp4" muted autoplay loop></video>
      <div class="paragraph-background">
        <p>ALIVE</p>
      </div>
    </div>
    <div class="slideshow">
      <div class="stack">
        <p v-for="(tech, index) in app.techStacks.value" :key="index">{{ tech }}</p>
        <p v-for="(tech, index) in app.techStacks.value" :key="index">{{ tech }}</p>
        <p v-for="(tech, index) in app.techStacks.value" :key="index">{{ tech }}</p>
        <p v-for="(tech, index) in app.techStacks.value" :key="index">{{ tech }}</p>
        <p v-for="(tech, index) in app.techStacks.value" :key="index">{{ tech }}</p>
        <p v-for="(tech, index) in app.techStacks.value" :key="index">{{ tech }}</p>
        <p v-for="(tech, index) in app.techStacks.value" :key="index">{{ tech }}</p>
        <p v-for="(tech, index) in app.techStacks.value" :key="index">{{ tech }}</p>
        <p v-for="(tech, index) in app.techStacks.value" :key="index">{{ tech }}</p>
        <p v-for="(tech, index) in app.techStacks.value" :key="index">{{ tech }}</p>
        <p v-for="(tech, index) in app.techStacks.value" :key="index">{{ tech }}</p>
      </div>
    </div>
    <div class="images">
      <div class="d-flex flex-column gap-4">
        <img src="@/assets/images/img1.jpg" alt="Nguyen Manh Thang" />
        <video src="@/assets/videos/video3.mp4" muted autoplay loop></video>
        <img src="@/assets/images/img4.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img7.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img10.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img13.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img16.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img19.jpg" alt="Nguyen Manh Thang" />
      </div>
      <div class="d-flex flex-column gap-4">
        <img src="@/assets/images/img2.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img5.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img8.jpg" alt="Nguyen Manh Thang" />
        <video src="@/assets/videos/video2.mp4" muted autoplay loop></video>
        <img src="@/assets/images/img11.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img14.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img17.jpg" alt="Nguyen Manh Thang" />
      </div>
      <div class="d-flex flex-column gap-4">
        <img src="@/assets/images/img3.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img6.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img9.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img12.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img15.jpg" alt="Nguyen Manh Thang" />
        <img src="@/assets/images/img18.jpg" alt="Nguyen Manh Thang" />
        <video src="@/assets/videos/video1.mp4" muted autoplay loop></video>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { Component, defineClassComponent } from "@/plugins/component.plugin";

const app = defineClassComponent(
  class BannerComponent extends Component {
    public techStacks: Ref<string[]> = this.ref([
      "Nguyen Manh Thang",
      "Developer",
      "Programming",
      "Fullstack",
      "Thuong Mai University",
      "Management information system",
      "Travel",
      "Sea",
      "Mountain",
      "Gymnastic",
      "Netflix",
      "Imagine Dragon",
      "Den Vau",
      "Cat",
      "Dragon",
      "01",
      "12",
      "2000",
      "History",
      "World war I & II",
      "Coffee",
    ]);
  },
);
</script>

<style scoped lang="scss">
.banner-container {
  padding: 200px 16px 0px;

  & .quote {
    display: flex;
    flex-direction: column;
    padding-bottom: 36px;

    & span {
      font-size: 48px;
      font-weight: 600;
    }

    & span:last-child {
      display: inline-block;
      margin-left: 24px;
    }
  }

  & .video-container {
    position: relative;
    width: 100%;
    height: 1000px;
    overflow: hidden;

    & video {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    & .paragraph-background {
      background: #000;
      color: #fff;
      mix-blend-mode: multiply;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      & p {
        font-size: 42vw;
        font-weight: 700;
        user-select: none;
        transform: scale(1, 1.5);
        font-family: "Oswald", sans-serif;
      }
    }
  }

  & .slideshow {
    width: 100%;
    height: 100px;
    position: relative;
    overflow: hidden;
    transform: translate3d(0, 0, 0);

    & div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      height: 100%;
      width: 2000px;
      position: absolute;
      transform: translate3d(0, 0, 0);
      animation: moveSlideshow 100s linear infinite;

      & p {
        font-size: 16px;
        min-width: 160px;
        padding: 20px;
        margin: 0;
        text-transform: uppercase;
        text-align: center;
        flex-shrink: 0;
      }
    }
  }

  & .images {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    & > div {
      width: calc(100% / 3.1);
      height: auto;

      & > img,
      & > video {
        filter: grayscale(100%);
        width: 100%;
        height: auto;
        transition: all 0.2s linear;
        cursor: pointer;

        &:hover {
          filter: none;
        }
      }
    }
  }
}

@keyframes moveSlideshow {
  100% {
    transform: translateX(-600%);
  }
}
</style>
