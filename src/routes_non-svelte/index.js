// ### Post svelte-kit:start (initial pageload ie- onMount ) JS ### 

const anime = require('animejs')

const svelteEvents = ['sveltekit:start', 'sveltekit:navigation-end']
svelteEvents.forEach( svelteEvent => {
  //console.log(svelteEvent)
  window.addEventListener(svelteEvent, e => handleSvelte(e, svelteEvent))
})

const initialState =  {
  animComplete : false
}

const slideDuration = 5000

const handleSvelte = (e, svelteEvent) => {
  console.log(svelteEvent)
  // Establish global (window) state if not already: 
  if(!global.coinos) {
    global.coinos = initialState
    // Init index when we navigate there: 
    if(window.location.pathname === '/') return initIndex()
  } else if(global.coinos && window.location.pathname !== '/') {
    console.log('anim complete (navigated away)')
    coinos.animComplete = true 
  } else if(  svelteEvent === 'sveltekit:navigation-end' 
      && window.location.pathname === '/'  ) {
    setTimeout(initIndex, 50)
    //initIndex() //< also run init if returning; 
    //(this will stop animation and re-render the last played slide)
  }
}

const renderSlides = () => 
  document.getElementById('SLIDES').innerHTML = slideA() + slideB() + slideC()

const initIndex = async () => {
  renderSlides() 
  //Do not rerun anim if already complete 
  if(!coinos.animComplete && !coinos.currentSlide) {
    coinos.currentSlide = 'A'
    await animate()
    coinos.slideAcomplete = true
    // then do next slides:  
    if(coinos.animComplete) {
      if(window.location === '/') renderSlides()
      return
    }
    coinos.currentSlide = 'B'
    await playSlideB()
    coinos.slideBcomplete = true
    if(coinos.animComplete) {
      if(window.location === '/') renderSlides()
      return
    }
    coinos.currentSlide = 'C'
    await playSlideC()
    coinos.slideCcomplete = true
    coinos.animComplete = true 
  } else { 
    coinos.animComplete = true
    if(coinos.currentSlide === 'A' ) {
      coinos.slideAcomplete = true 
      coinos.slideBcomplete = false 
      coinos.slideCcomplete = false
      document.getElementById('SLIDE-A').classList.remove('hidden')
      document.getElementById('SLIDE-B').classList.add('hidden')
      document.getElementById('SLIDE-C').classList.add('hidden')       
    } else if(coinos.currentSlide === 'B') {
      coinos.slideAcomplete = false 
      coinos.slideBcomplete = true 
      coinos.slideCcomplete = false 
      document.getElementById('SLIDE-A').classList.add('hidden')
      document.getElementById('SLIDE-B').classList.remove('hidden')
      document.getElementById('SLIDE-C').classList.add('hidden')      
    } else if(coinos.currentSlide === 'C') {
      coinos.slideAcomplete = false 
      coinos.slideBcomplete = false 
      coinos.slideCcomplete = true 
      document.getElementById('SLIDE-A').classList.add('hidden')
      document.getElementById('SLIDE-B').classList.add('hidden')      
      document.getElementById('SLIDE-C').classList.remove('hidden')
    }
    // re-render: 
    renderSlides() 
  }
}

const animState = targets => {
  return {
    targets : targets,
    duration : 1000,
    easing: 'easeOutQuad'
  }
}

const animate = async () => {
  // ## text animation ## 
  const textAnim = anime.timeline() 

  // setup and play 'drop' in effect 
  const textAnimState = new animState('#TEXT')
  textAnimState.top = 0
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

  // show for x seconds.... 
  await new Promise(r => setTimeout(r, slideDuration))

  // then fade out: 
  if(coinos.animComplete) return 
  textAnimState.opacity = 0
  anime(textAnimState) //< re-use existing 500ms duration
  await new Promise(r => setTimeout(r, 500))
}

const signupBtn = /*html*/`
  <a href="https://coinos.io/register"
     class="text-center inline-block rounded-xl mt-6 
          bg-primary text-black py-3 px-9 sm:px-12 text-xl">
    Sign Up
  </a>
`

function slideA() {
  return /*html*/`
  <div id="SLIDE-A">
    <div id="TEXT" class="absolute z-20" style="opacity:${coinos.slideAcomplete ? 1 : 0}; top:${coinos.slideAcomplete ? '0' : '-100'}px;">
      <div class="pb-24 pt-16 xs:pt-20 sm:pt-24 w-4/5 flex-grow z-10">
        <p class="text-4xl font-medium">
          We make <span class="text-primary font-extrabold">Bitcoin</span> more usable every day.
        </p>
        <div class="text-2xl text-gray-200">
          <p class="mb-4 mt-6 font-light">
            Your Bitcoin, Liquid, and Lightning web wallet
          </p>
          ${signupBtn}
        </div>      
      </div>
    </div>
    <!-- honeycomb background animation --> 
    <div id="HONEYANIMATE" transition:fade class="absolute w-full bottom-0 right-0 flex flex-col" style="opacity:0; z-index:0">
      <div class="flex-auto"></div>
      <img style="width:100%;" src="/honeycomb.gif" />
    </div>
  </div>
  `
}

function slideB() {
  return /*html*/`
  <div id="SLIDE-B" class="absolute z-20" 
       style="opacity:${coinos.slideBcomplete ? 1 : 0}; left: ${coinos.slideBcomplete ? 41 : '-100'}px;">
    <div class="pb-24 pt-16 xs:pt-20 sm:pt-24 flex-grow z-10">
      <p class="text-4xl font-light">
        The original <span class="font-medium">Bitcoin</span> 
        <br>
        <span class="font-extrabold">Point-of-Sale</span>
      </p>
      <div class="text-2xl text-gray-200 pr-12">
        <p class="mb-4 mt-6 font-light">
          Begin accepting crypto in under 15 seconds
        </p>
        ${signupBtn}
      </div>    
    </div>
  </div>
  `
}


function slideC() {
  return /*html*/`
  <div id="SLIDE-C" class="absolute z-20" 
       style="opacity:${coinos.slideCcomplete ? 1 : 0}; top: ${coinos.slideCcomplete ? 0 : '-500'}px;">
    <div class="pb-24 pt-16 xs:pt-20 sm:pt-24 flex-grow z-10 w-4/5">
      <p class="text-4xl font-light">
        The <span class="font-bold">white label</span> <span class="font-extrabold text-green-400">NFT marketplace</span> provider for businesses & brands.</span> 
      </p>
      <div class="text-2xl text-gray-200">
        <p class="mb-4 mt-6 font-light">
          Capitalize on the next generation of crypto assets
        </p>
        <a href="/enterprise"
        class="text-center inline-block rounded-xl mt-6 
        bg-green-400 text-black py-3 px-6 sm:px-9 text-xl">
          Learn More
        </a>
      </div>    
    </div>
  </div>
  `
}

const playSlideB = async () => {  
  console.log('begin slide B')
  const slideAnim = anime.timeline() 
  const slideAnimState = new animState('#SLIDE-B')
  slideAnimState.left = 41
  slideAnim.add( slideAnimState )

  // setup fade in: 
  delete slideAnimState.left 
  slideAnimState.opacity = 1
  slideAnimState.duration = 500
  slideAnim.add(slideAnimState, '-=450') //< initiate

  await new Promise(r => setTimeout(r, slideDuration + 1000))

  if(coinos.animComplete) return //< prevent fading out if anim is complete (paused)
  slideAnimState.opacity = 0
  anime(slideAnimState)
  await new Promise(r => setTimeout(r, 500))
}

const playSlideC = async () => {
  console.log('begin slide C')
  const slideAnim = anime.timeline() 
  const slideAnimState = new animState('#SLIDE-C')
  slideAnimState.top = 0
  slideAnimState.duration = 420
  slideAnim.add( slideAnimState )

  delete slideAnimState.top 
  slideAnimState.opacity = 1
  slideAnimState.duration = 350
  slideAnim.add(slideAnimState, '-=100') //< initiate

  await new Promise(r => setTimeout(r, slideDuration))
}