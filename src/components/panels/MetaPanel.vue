<template>
  <div class="bg-gray-800 bg-opacity-80 w-20 md:w-60 is-collapsed is-mini flex flex-col">
    <div class="h-12">
      <div class="flex items-center h-full mx-4">
        <button class="w-8 h-8 rounded-full m-auto">=</button>
        <span class="flex-grow ml-4 font-medium text-base d-none">Crew</span>
      </div>
    </div>
    <div class="flex-grow">
      <ul>
        <li class="py-2 flex items-center px-4">
          <div class="bg-purple-300 w-8 h-8 rounded-full m-auto"></div>
          <span class="truncate flex-grow ml-4 d-none">User 1</span>
        </li>
        <li class="py-2 px-4 flex items-center text-white bg-gradient-to-r from-black">
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
</template>
