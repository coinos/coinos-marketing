// ### Post svelte-kit page render JS ### 

const anime = require('animejs')

// async from top level: 
;(async () => {
  
  //wait for Svelte to render the initial page: 
  await new Promise(r => setTimeout(r, 400))

  document.getElementById('SLIDES').innerHTML = /*html*/`
    <div id="TEXT" class="absolute z-20" style="opacity:0; top:-100px;">
      <div class="pb-24 pt-20 md:pt-24 w-4/5 flex-grow z-10">
        <p class="text-4xl font-medium">
          We make <span class="text-primary font-extrabold">Bitcoin</span> more usable every day.
        </p>
        <div class="text-2xl text-gray-200">
          <p class="mb-4 mt-6 font-light">
            Your Bitcoin, Liquid, and Lightning web wallet
          </p>

          <a href="https://coinos.io/register"
              class="text-center inline-block rounded-xl mt-6 bg-primary text-black py-3 px-9 sm:px-12 text-xl"
            >Sign Up</a
          >
        </div>      
      </div>
    </div>
    <!-- honeycomb background animation --> 
    <div id="HONEYANIMATE" transition:fade class="absolute w-full bottom-0 right-0 flex flex-col" style="opacity:0; z-index:0">
      <div class="flex-auto"></div>
      <img style="width:100%;" src="/honeycomb.gif" />
    </div>      
  `
  // ## text animation ## 
  const textAnim = anime.timeline() 

  // setup 'drop' in effect 
  const textAnimState = {
    targets : '#TEXT',
    top: 0,
    duration : 1000,
    easing: 'easeOutQuad'
  }
  textAnim.add(textAnimState) //< initiate 'drop'
  
  // setup fade in: 
  delete textAnimState.top 
  textAnimState.opacity = 1
  textAnimState.duration = 500
  textAnim.add(textAnimState, '-=450') //< initiate
  // (start 250ms before prev anim) 
   
  // allow for the above anim to finish plus a slight delay: 
  await new Promise(r => setTimeout(r, 900))

  // ## honeycomb animation ## 
  const honeyAnim = anime.timeline() 
  honeyAnim.add({ // fade in: 
    targets : '#HONEYANIMATE',
    opacity: 0.7, 
    duration: 500,
    easing: 'easeInSine'
  })
  honeyAnim.add({ // fade out: 
    targets : '#HONEYANIMATE',
    opacity: 0, 
    duration: 3000,
    easing: 'easeInOutQuart'
  })

})()