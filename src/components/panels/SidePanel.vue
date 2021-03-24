<template>
  <div class="bg-gray-700 bg-opacity-80 w-0 md:w-60 flex flex-col is-collapsed">
    <div class="bg-gray-700 h-12 d-none">
      <div class="flex items-center h-full mx-4">
        <span class="truncate flex-grow mr-6 font-medium text-base">{deck.name}</span>
        <button class="w-8 h-8 rounded-full">v</button>
      </div>
    </div>
    <div class="flex-grow d-none">
      <div class="grid grid-cols-1 divide-y divide-white divide-opacity-10">
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
              <li class="p-2 disk-space relative border-transparent border-l-4">
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
              <li class="p-2 disk-space relative border-transparent border-l-4">
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
</template>
