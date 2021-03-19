<template>
  <div class="text-center">
    <h2>Aww, Quack!</h2>

    <div class="">
      <p class="line"><span>request</span>. <em>lost_in_space</em> = true;</p>
      <p class="line">
        <span>if</span> ( <b>you_spelt_it_wrong</b>) &#123;
        <span>try_again()</span>; &#125;
      </p>
      <p class="line">
        <span>else if ( <b>we_ducked_up</b>) </span>
        {' '} &#123;
        <em>alert</em>(
        <i>"We're really sorry about that."</i>
        );{' '}
        <span>window</span>. <em>location</em> = home; &#125;
      </p>
    </div>

    <router-link to="/">HOME</router-link>
  </div>
</template>
