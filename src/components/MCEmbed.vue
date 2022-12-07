<template>
  <div id="subscribeElement" style="filter: blur(0.7px);" class="flex flex-wrap justify-center overflow-hidden m-6 px-4 lg:px-6 py-2.5 mx-auto max-w-screen-lg text-center">
    <div class="subscribe-container p-5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
      <div :id="elementId + 'mc_embed_signup'">
        <form
          :id="elementId + 'mc-embedded-subscribe-form'"
          :action="url"
          method="post"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
        >
          <div :id="elementId + 'mc_embed_signup_scroll'">
            <label v-if="title"
                   class="subscribe-container__title"
                   htmlFor="mce-EMAIL"
            >
              {{ title }}
            </label>

            <p v-if="subtitle" class="subscribe-container__subtitle glitch layers">
              <span class="font-semibold dark:text-white">{{ subtitle }}</span>
            </p>


            <input
              :id="elementId + 'mce-EMAIL'"
              type="email"
              name="EMAIL"
              class="subscribe-container__email"
              placeholder="Your email address"
              required
            />
            <div
              style="position: absolute; left: -5000px;"
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_9e1379ba4264805cb46c8968c_c585486b2d"
                tabIndex="-1"
              />
            </div>
            <div>
              <button
                :id="elementId + 'mc-embedded-subscribe'"
                type="submit"
                name="subscribe"
                class="subscribe-container__submit"
              >
                <h2 class="glitch layers" data-text="SUBSCRIBE">
                  <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">subscribe</span>
                </h2>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MCEmbed',
  props: {
    elementId: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    },
    subtitle: {
      type: String,
      required: false
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="css">
.subscribe-container {
   border-radius: 8px;
   width: 100%;
}
 .subscribe-container form {
   margin-bottom: 0;
}
 .subscribe-container__title {
   display: inline-block;
   font-size: 1.75rem;
   line-height: 1.2;
   margin-bottom: 0.5rem;
   text-align: center;
}
 .subscribe-container__subtitle {
   font-size: 1rem;
   padding-bottom: 0;
   margin-block-start: 0;
   margin-bottom: 1rem;
}
 .subscribe-container__email {
   border-color: #e6e6e6;
   border-radius: 8px;
   color: #fff;
   text-align: center;
   width: 100%;
   background: #000;
   background-color: #000 !important;
   font-size: 15px;
   padding: 12px;
   border: 1px solid #e6e6e6;
   flex: 1 0 auto;
   line-height: 1.4;
   margin: 0;
   transition: border-color 0.3s ease-out;
   overflow: visible;
   margin-bottom: 1rem;
}
 .subscribe-container__submit {
   background-color: #000;
   border-radius: 8px;
   border-color: #6B7280;
   border: 1px solid #6B7280;
   color: #fff;
   cursor: pointer;
   font-size: 1.2rem;
   font-weight: 700;
   transition: background-color 0.3s ease-in-out;
   padding: 12px 18px;
   width: 100%;
}
 .subscribe-container__submit:hover {
   background-color: #222;
}



 @-webkit-keyframes filter-animation {
  0% {
    -webkit-filter: hue-rotate(20deg);
  }

  50% {
    -webkit-filter: hue-rotate(200deg);
  }

  100% {
    -webkit-filter: hue-rotate(20deg);
  }
}

@keyframes filter-animation {
  0% {
    filter: hue-rotate(20deg);
  }

  50% {
    filter: hue-rotate(200deg);
  }

  100% {
    filter: hue-rotate(20deg);
  }
}

  @-webkit-keyframes filter-animation2 {
  0% {
    -webkit-filter: hue-rotate(80deg);
  }

  50% {
    -webkit-filter: hue-rotate(340deg);
  }

  100% {
    -webkit-filter: hue-rotate(80deg);
  }
}

@keyframes filter-animation2 {
  0% {
    filter: hue-rotate(80deg);
  }

  50% {
    filter: hue-rotate(340deg);
  }

  100% {
    filter: hue-rotate(80deg);
  }
}
  body {
  color: #000;
  background: #111;
  font-family: sans-serif;
}


.myanim {
  -webkit-animation: filter-animation 4s infinite;
  animation: filter-animation 4s infinite;
}

.myanim2 {
  -webkit-animation: filter-animation2 4s infinite;
  animation: filter-animation2 4s infinite;
}


.demo {
  height: 100px;
  background: #fff;
}

.layers {
  position: relative;
}

.layers::before,
.layers::after {
  content: attr(data-text);
  position: absolute;
  width: 110%;
  z-index: -1;
}

.layers::before {
  top: 10px;
  left: 15px;
  color: #e0287d;
}

.layers::after {
  top: 5px;
  left: -10px;
  color: #1bc7fb;
}

.single-path {
  clip-path: polygon(
    0% 12%,
    53% 12%,
    53% 26%,
    25% 26%,
    25% 86%,
    31% 86%,
    31% 0%,
    53% 0%,
    53% 84%,
    92% 84%,
    92% 82%,
    70% 82%,
    70% 29%,
    78% 29%,
    78% 65%,
    69% 65%,
    69% 66%,
    77% 66%,
    77% 45%,
    85% 45%,
    85% 26%,
    97% 26%,
    97% 28%,
    84% 28%,
    84% 34%,
    54% 34%,
    54% 89%,
    30% 89%,
    30% 58%,
    83% 58%,
    83% 5%,
    68% 5%,
    68% 36%,
    62% 36%,
    62% 1%,
    12% 1%,
    12% 34%,
    60% 34%,
    60% 57%,
    98% 57%,
    98% 83%,
    1% 83%,
    1% 53%,
    91% 53%,
    91% 84%,
    8% 84%,
    8% 83%,
    4% 83%
  );
}

.paths {
  animation: paths 3s step-end infinite;
}

@keyframes paths {
  0% {
    clip-path: polygon(
      0% 43%,
      83% 43%,
      83% 22%,
      23% 22%,
      23% 24%,
      91% 24%,
      91% 26%,
      18% 26%,
      18% 83%,
      29% 83%,
      29% 17%,
      41% 17%,
      41% 39%,
      18% 39%,
      18% 82%,
      54% 82%,
      54% 88%,
      19% 88%,
      19% 4%,
      39% 4%,
      39% 14%,
      76% 14%,
      76% 52%,
      23% 52%,
      23% 35%,
      19% 35%,
      19% 8%,
      36% 8%,
      36% 31%,
      73% 31%,
      73% 16%,
      1% 16%,
      1% 56%,
      50% 56%,
      50% 8%
    );
  }

  5% {
    clip-path: polygon(
      0% 29%,
      44% 29%,
      44% 83%,
      94% 83%,
      94% 56%,
      11% 56%,
      11% 64%,
      94% 64%,
      94% 70%,
      88% 70%,
      88% 32%,
      18% 32%,
      18% 96%,
      10% 96%,
      10% 62%,
      9% 62%,
      9% 84%,
      68% 84%,
      68% 50%,
      52% 50%,
      52% 55%,
      35% 55%,
      35% 87%,
      25% 87%,
      25% 39%,
      15% 39%,
      15% 88%,
      52% 88%
    );
  }

  30% {
    clip-path: polygon(
      0% 53%,
      93% 53%,
      93% 62%,
      68% 62%,
      68% 37%,
      97% 37%,
      97% 89%,
      13% 89%,
      13% 45%,
      51% 45%,
      51% 88%,
      17% 88%,
      17% 54%,
      81% 54%,
      81% 75%,
      79% 75%,
      79% 76%,
      38% 76%,
      38% 28%,
      61% 28%,
      61% 12%,
      55% 12%,
      55% 62%,
      68% 62%,
      68% 51%,
      0% 51%,
      0% 92%,
      63% 92%,
      63% 4%,
      65% 4%
    );
  }

  45% {
    clip-path: polygon(
      0% 33%,
      2% 33%,
      2% 69%,
      58% 69%,
      58% 94%,
      55% 94%,
      55% 25%,
      33% 25%,
      33% 85%,
      16% 85%,
      16% 19%,
      5% 19%,
      5% 20%,
      79% 20%,
      79% 96%,
      93% 96%,
      93% 50%,
      5% 50%,
      5% 74%,
      55% 74%,
      55% 57%,
      96% 57%,
      96% 59%,
      87% 59%,
      87% 65%,
      82% 65%,
      82% 39%,
      63% 39%,
      63% 92%,
      4% 92%,
      4% 36%,
      24% 36%,
      24% 70%,
      1% 70%,
      1% 43%,
      15% 43%,
      15% 28%,
      23% 28%,
      23% 71%,
      90% 71%,
      90% 86%,
      97% 86%,
      97% 1%,
      60% 1%,
      60% 67%,
      71% 67%,
      71% 91%,
      17% 91%,
      17% 14%,
      39% 14%,
      39% 30%,
      58% 30%,
      58% 11%,
      52% 11%,
      52% 83%,
      68% 83%
    );
  }

  76% {
    clip-path: polygon(
      0% 26%,
      15% 26%,
      15% 73%,
      72% 73%,
      72% 70%,
      77% 70%,
      77% 75%,
      8% 75%,
      8% 42%,
      4% 42%,
      4% 61%,
      17% 61%,
      17% 12%,
      26% 12%,
      26% 63%,
      73% 63%,
      73% 43%,
      90% 43%,
      90% 67%,
      50% 67%,
      50% 41%,
      42% 41%,
      42% 46%,
      50% 46%,
      50% 84%,
      96% 84%,
      96% 78%,
      49% 78%,
      49% 25%,
      63% 25%,
      63% 14%
    );
  }

  90% {
    clip-path: polygon(
      0% 41%,
      13% 41%,
      13% 6%,
      87% 6%,
      87% 93%,
      10% 93%,
      10% 13%,
      89% 13%,
      89% 6%,
      3% 6%,
      3% 8%,
      16% 8%,
      16% 79%,
      0% 79%,
      0% 99%,
      92% 99%,
      92% 90%,
      5% 90%,
      5% 60%,
      0% 60%,
      0% 48%,
      89% 48%,
      89% 13%,
      80% 13%,
      80% 43%,
      95% 43%,
      95% 19%,
      80% 19%,
      80% 85%,
      38% 85%,
      38% 62%
    );
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    clip-path: none;
  }
}

.movement {
  /* Normally this position would be absolute & on the layers, set to relative here so we can see it on the div */
  position: relative;
  animation: movement 4s step-end infinite;
}

@keyframes movement {
  0% {
    top: 0px;
    left: -20px;
  }

  15% {
    top: 10px;
    left: 10px;
  }

  60% {
    top: 5px;
    left: -10px;
  }

  75% {
    top: -5px;
    left: 20px;
  }

  100% {
    top: 10px;
    left: 5px;
  }
}

.opacity {
  animation: opacity 3s step-end infinite;
}

@keyframes opacity {
  0% {
    opacity: 0.1;
  }

  5% {
    opacity: 0.7;
  }

  30% {
    opacity: 0.4;
  }

  45% {
    opacity: 0.6;
  }

  76% {
    opacity: 0.4;
  }

  90% {
    opacity: 0.8;
  }

  1%,
  7%,
  33%,
  47%,
  78%,
  93% {
    opacity: 0;
  }
}

.font {
  animation: font 3s step-end infinite;
}

@keyframes font {
  0% {
    font-weight: 100;
    color: #e0287d;
    filter: blur(3px);
  }

  20% {
    font-weight: 500;
    color: #fff;
    filter: blur(0);
  }

  50% {
    font-weight: 300;
    color: #1bc7fb;
    filter: blur(2px);
  }

  60% {
    font-weight: 700;
    color: #fff;
    filter: blur(0);
  }

  90% {
    font-weight: 500;
    color: #e0287d;
    filter: blur(6px);
  }
}

.glitch span {
  animation: paths 2s step-end infinite;
}

.glitch::before {
  animation: paths 3s step-end infinite, opacity 3s step-end infinite,
    font 4s step-end infinite, movement 5s step-end infinite;
}

.glitch::after {
  animation: paths 4s step-end infinite, opacity 3s step-end infinite,
    font 4s step-end infinite, movement 3s step-end infinite;
}


</style>
