<template>
  <div class="bg-gray-600 bg-opacity-80 flex-grow flex flex-col">
    <div class="bg-gray-600 h-12">
      <div class="flex items-center h-full mx-4">
        <button class="w-8 h-8 rounded-full">=</button>
        <div class="flex flex-grow mx-4 divide-x divide-white divide-opacity-10 truncate items-center">
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
        <input class="p-3 bg-gray-600 w-full shadow-inner" type="text" placeholder="Enter message" />
        <div class="absolute right-0 mr-2 grid grid-cols-2 divide-x divide-white divide-opacity-10">
          <button>emo</button>
          <button class="text-purple-500 px-2">send</button>
        </div>
      </div>
    </div>
  </div>
</template>
