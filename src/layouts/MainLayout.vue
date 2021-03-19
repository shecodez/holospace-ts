<template>
  <div
    class="flex text-gray-300 h-screen bg-red-500 overflow-hidden flex-wrap md:flex-nowrap"
  >
    <!-- fixed panel -->
    <div
      class="bg-gray-900 bg-opacity-80 flex flex-row h-16 w-full md:flex-col md:w-20 md:h-full items-center"
    >
      <div class="m-2">
        <button class="bg-purple-600 w-12 h-12 rounded-full">@</button>
      </div>
      <div
        class="border-l md:border-t md:border-l-0 border-white border-opacity-10 m-2 sm:py-2 md:pt-2"
      >
        <span class="uppercase text-xs font-medium p-2">Decks</span>
      </div>
      <ul class="sm:overflow-x-auto md:overflow-y-auto flex md:flex-col">
        <li class="p-2">
          <div class="bg-purple-300 deck w-12 h-12 rounded-full"></div>
        </li>
        <li class="p-2">
          <div class="bg-purple-300 deck active w-12 h-12 rounded"></div>
        </li>
        <li class="p-2">
          <div class="bg-purple-300 deck w-12 h-12 rounded-full"></div>
        </li>
      </ul>
      <div class="sticky sm:right-0 md:bottom-0 p-2">
        <button
          class="border-dashed hover-border-solid border-3 border-white w-12 h-12 rounded-full"
        >
          +
        </button>
      </div>
    </div>
    <!-- stretch column -->
    <div class="w-full h-full flex flex-col">
      <!-- banner -->
      <div class="bg-black max-h-14 overflow-hidden">
        <div
          class="banner ribbon-tail border-blue-600 border-l-4 bg-blue-700 bg-opacity-30 flex items-center max-h-full h-12 p-2 relative"
        >
          <div class="bg-blue-600 rounded-full px-2">i</div>
          <!-- max character count 200 + click ...modal of full text -->
          <div class="flex-grow mx-4">
            <span class="text-blue-600"
              >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.</span
            >
            <!-- <button class="px-2">Action</button> -->
          </div>
          <button class="bg-blue-600 px-2 mr-6">x</button>
        </div>
      </div>

      <!-- Side, Stretch, Meta panels-->
      <div class="flex h-full">
        <!-- Side panel -->
        <div
          class="bg-gray-700 bg-opacity-80 w-0 md:w-60 flex flex-col is-collapsed"
        >
          <div class="bg-gray-700 h-12 d-none">
            <div class="flex items-center h-full mx-4">
              <span class="truncate flex-grow mr-6 font-medium text-base"
                >{deck.name}</span
              >
              <button class="w-8 h-8 rounded-full">v</button>
            </div>
          </div>
          <div class="flex-grow d-none">
            <div
              class="grid grid-cols-1 divide-y divide-white divide-opacity-10"
            >
              <div class="expander expander--opened">
                <div class="expander-heading py-2">
                  <div class="flex justify-between items-center mx-4">
                    <div>
                      <button class="px-2">+</button>
                      <span class="uppercase">Text Spaces</span>
                    </div>
                    <button class="w-8 h-8">v</button>
                  </div>
                </div>
                <div class="expander-content">
                  <ul>
                    <li
                      class="p-2 disk-space relative border-transparent border-l-4"
                    >
                      <div class="flex justify-between mx-2 ribbon-tail">
                        <span class="truncate">Task 1</span>
                        <div class="actions flex">
                          <button class="px-2">u</button>
                          <button class="px-2">s</button>
                        </div>
                      </div>
                    </li>
                    <li
                      class="p-2 disk-space relative active text-white border-purple-500 border-l-4 bg-gradient-to-r from-gray-600"
                    >
                      <div class="flex justify-between mx-2 ribbon-tail">
                        <span class="truncate">Task 2</span>
                        <div class="actions flex">
                          <button class="px-2">u</button>
                          <button class="px-2">s</button>
                        </div>
                      </div>
                    </li>
                    <li
                      class="p-2 disk-space relative border-transparent border-l-4"
                    >
                      <div class="flex justify-between mx-2 ribbon-tail">
                        <span class="truncate">Task 3</span>
                        <div class="actions flex">
                          <button class="px-2">u</button>
                          <button class="px-2">s</button>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="expander expander--closed">
                <div class="expander-heading py-2">
                  <div class="flex justify-between items-center mx-4">
                    <div>
                      <button class="px-2">+</button>
                      <span class="uppercase">VoIP Spaces</span>
                    </div>
                    <button class="w-8 h-8">v</button>
                  </div>
                </div>
                <div class="expander-content"></div>
              </div>
              <div class="expander expander--closed">
                <div class="expander-heading py-2">
                  <div class="flex justify-between items-center mx-4">
                    <div>
                      <button class="px-2">+</button>
                      <span class="uppercase">Holo Spaces</span>
                    </div>
                    <button class="w-8 h-8">v</button>
                  </div>
                </div>
                <div class="expander-content"></div>
              </div>
            </div>
          </div>
          <!--<div class="flex justify-center mb-2 d-none">
              <div class="bg-green-500 w-40 h-40">Ad</div>
            </div>-->
        </div>

        <!-- Stretch panel-->
        <div class="bg-gray-600 bg-opacity-80 flex-grow flex flex-col">
          <div class="bg-gray-600 h-12">
            <div class="flex items-center h-full mx-4">
              <button class="w-8 h-8 rounded-full">=</button>
              <div
                class="flex flex-grow mx-4 divide-x divide-white divide-opacity-10 truncate items-center"
              >
                <span class="font-medium text-base pr-2">{diskSpace.name}</span>
                <span class="font-thin pl-2">{diskSpace.topic}</span>
              </div>
              <div class="flex">
                <button class="px-2">s</button>
                <button class="px-2">n</button>
                <button class="px-2">c</button>
              </div>
              <button class="w-8 h-8 rounded-full">.</button>
            </div>
          </div>
          <div class="flex-grow"><slot></slot></div>
          <div class="h-16 my-2 mx-4">
            <div class="flex relative items-center justify-between">
              <input
                class="p-3 bg-gray-600 w-full shadow-inner"
                type="text"
                placeholder="Enter message"
              />
              <div
                class="absolute right-0 mr-2 grid grid-cols-2 divide-x divide-white divide-opacity-10"
              >
                <button>emo</button>
                <button class="text-purple-500 px-2">send</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Meta panel -->
        <div
          class="bg-gray-800 bg-opacity-80 w-20 md:w-60 is-collapsed is-mini flex flex-col"
        >
          <div class="h-12">
            <div class="flex items-center h-full mx-4">
              <button class="w-8 h-8 rounded-full m-auto">=</button>
              <span class="flex-grow ml-4 font-medium text-base d-none"
                >Crew</span
              >
            </div>
          </div>
          <div class="flex-grow">
            <ul>
              <li class="py-2 flex items-center px-4">
                <div class="bg-purple-300 w-8 h-8 rounded-full m-auto"></div>
                <span class="truncate flex-grow ml-4 d-none">User 1</span>
              </li>
              <li
                class="py-2 px-4 flex items-center text-white bg-gradient-to-r from-black"
              >
                <div class="bg-purple-300 w-8 h-8 rounded-full m-auto"></div>
                <span class="truncate flex-grow ml-4 d-none">User 2</span>
              </li>
              <li class="py-2 px-4 flex items-center">
                <div class="bg-purple-300 w-8 h-8 rounded-full m-auto"></div>
                <span class="truncate flex-grow ml-4 d-none">User 3</span>
              </li>
            </ul>
          </div>
          <div class="bg-gray-800 h-14">
            <div class="flex items-center h-full px-4">
              <div class="bg-purple-300 w-10 h-10 rounded-full m-auto"></div>
              <div class="truncate flex-grow ml-4 d-none">
                <span class="font-medium text-base">Me</span>
                <span class="text-xs font-extralight">#1234</span>
              </div>
              <div class="actions flex d-none">
                <button class="px-2">^</button>
                <button class="px-2">*</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'MainLayout',
  props: {
    view: {
      type: String,
      required: true,
    },
  },
});
</script>

<style>
.border-3 {
  border-width: 3px;
}
button {
  position: relative;
}
button:before {
  background-color: currentColor;
  border-radius: inherit;
  bottom: 0;
  color: inherit;
  content: '';
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.6, 1);
}
button:hover:before {
  opacity: 0.08;
}
.hover-border-solid:hover {
  border-style: solid;
}
.ribbon-tail:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 0;
  /* TODO: calc dynamic width w/ JS */
  background: transparent;
  clip-path: polygon(50% 50%, 0 100%, 100% 100%);
  transform: rotate(270deg);
}
.banner.ribbon-tail:before {
  width: 3rem;
  background: black;
}
.disk-space.active > .ribbon-tail:before {
  width: 2.5rem;
  background: rgba(235, 235, 235, 0.1);
}
.disk-space .actions {
  visibility: hidden;
}
.disk-space:hover .actions {
  visibility: visible;
}
.deck.active:hover {
  animation: none;
}
.deck:hover {
  border-radius: 10%;
  animation: borders 0.5s ease-in-out;
}
@keyframes borders {
  0% {
    border-radius: 50%;
  }
  33% {
    border-radius: 15%;
  }
  66% {
    border-radius: 25%;
  }
  100% {
    border-radius: 10%;
  }
}
.is-collapsedx .d-none {
  display: none;
}
</style>
