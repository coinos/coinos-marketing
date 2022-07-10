<script>
  import Cash from "../icons/cash.svelte";
  import Computer from "../icons/computer.svelte";
  import Fee from "../icons/fee.svelte";
  import Card from "../components/card.svelte";
  import ContactSalesBtn from "../components/contact-sales-btn.svelte";
  import anime from "animejs";
  import SignUp from "../components/signup.svelte";
  import { fade } from "svelte/transition";

  let coinos = {};

  const initialState = {
    animComplete: false,
  };

  const slideDuration = 5000;

  const initIndex = async () => {
    //Do not rerun anim if already complete
    if (!coinos.animComplete && !coinos.currentSlide) {
      coinos.currentSlide = "A";
      await animate();
      coinos.slideAcomplete = true;
      coinos.currentSlide = "B";
      document.getElementById("SLIDE-B").classList.remove("hidden");
      await playSlideB();
      coinos.slideBcomplete = true;
      coinos.currentSlide = "C";
      document.getElementById("SLIDE-B").classList.add("hidden");
      document.getElementById("SLIDE-C").classList.remove("hidden");
      await playSlideC();
      coinos.slideCcomplete = true;
      coinos.animComplete = true;
    } else {
      coinos.animComplete = true;
      if (coinos.currentSlide === "A") {
        coinos.slideAcomplete = true;
        coinos.slideBcomplete = false;
        coinos.slideCcomplete = false;
      } else if (coinos.currentSlide === "B") {
        coinos.slideAcomplete = false;
        coinos.slideBcomplete = true;
        coinos.slideCcomplete = false;
      } else if (coinos.currentSlide === "C") {
        coinos.slideAcomplete = false;
        coinos.slideBcomplete = false;
        coinos.slideCcomplete = true;
      }
    }
  };

  const animState = (targets) => {
    return {
      targets: targets,
      duration: 1000,
      easing: "easeOutQuad",
    };
  };

  const animate = async () => {
    // ## text animation ##
    const textAnim = anime.timeline();

    // setup and play 'drop' in effect
    const textAnimState = new animState("#TEXT");
    textAnimState.top = 0;
    textAnim.add(textAnimState); //< initiate 'drop'

    // setup fade in:
    delete textAnimState.top;
    textAnimState.opacity = 1;
    textAnimState.duration = 500;
    textAnim.add(textAnimState, "-=450"); //< initiate
    // (start 250ms before prev anim)

    // allow for the above anim to finish plus a slight delay:
    await new Promise((r) => setTimeout(r, 900));

    // ## honeycomb animation ##
    const honeyAnim = anime.timeline();
    honeyAnim.add({
      // fade in:
      targets: "#HONEYANIMATE",
      opacity: 0.7,
      duration: 500,
      easing: "easeInSine",
    });
    honeyAnim.add({
      // fade out:
      targets: "#HONEYANIMATE",
      opacity: 0,
      duration: 3000,
      easing: "easeInOutQuart",
    });

    // show for x seconds....
    await new Promise((r) => setTimeout(r, slideDuration));

    // then fade out:
    if (coinos.animComplete) return;
    textAnimState.opacity = 0;
    anime(textAnimState); //< re-use existing 500ms duration
    await new Promise((r) => setTimeout(r, 500));
  };

  const playSlideB = async () => {
    console.log("begin slide B");
    const slideAnim = anime.timeline();
    const slideAnimState = new animState("#SLIDE-B");
    slideAnimState.left = 41;
    slideAnim.add(slideAnimState);

    // setup fade in:
    delete slideAnimState.left;
    slideAnimState.opacity = 1;
    slideAnimState.duration = 500;
    slideAnim.add(slideAnimState, "-=450"); //< initiate

    await new Promise((r) => setTimeout(r, slideDuration + 1000));

    if (coinos.animComplete) return; //< prevent fading out if anim is complete (paused)
    slideAnimState.opacity = 0;
    anime(slideAnimState);
    await new Promise((r) => setTimeout(r, 500));
  };

  const playSlideC = async () => {
    console.log("begin slide C");
    const slideAnim = anime.timeline();
    const slideAnimState = new animState("#SLIDE-C");
    slideAnimState.top = 0;
    slideAnimState.duration = 420;
    slideAnim.add(slideAnimState);

    delete slideAnimState.top;
    slideAnimState.opacity = 1;
    slideAnimState.duration = 350;
    slideAnim.add(slideAnimState, "-=100"); //< initiate

    await new Promise((r) => setTimeout(r, slideDuration));
  };
</script>

<div style="min-height:90vh;">
  <div class="bg-black relative" style="">
    <div class="border-white border-opacity-20 border-t-4 z-50 relative" />
    <div
      id="SLIDES"
      class="text-white max-w-1100px mx-auto pl-10 pr-7 relative min-h-500px z-0 sm:min-h-430px"
    >
      <div id="SLIDE-A">
        <div
          id="TEXT"
          class="absolute z-20"
          style="opacity:${coinos.slideAcomplete
            ? 1
            : 0}; top:${coinos.slideAcomplete ? '0' : '-100'}px;"
        >
          <div class="pb-24 pt-16 xs:pt-20 sm:pt-24 w-4/5 flex-grow z-10">
            <p class="text-4xl font-medium">
              We make <span class="text-primary font-extrabold">Bitcoin</span> more
              usable every day.
            </p>
            <div class="text-2xl text-gray-200">
              <p class="mb-4 mt-6 font-light">
                Your Bitcoin, Liquid, and Lightning web wallet
              </p>
              <SignUp />
            </div>
          </div>
        </div>
        <div class="invisible z-0 select-none">
          <!-- mirror structure for responsive height -->
          <div class="pb-24 pt-16 xs:pt-20 sm:pt-24 w-4/5 flex-grow z-10">
            <p class="text-4xl font-medium">
              We make <span class="text-primary font-extrabold">Bitcoin</span> more
              usable every day.
            </p>
            <div class="text-2xl text-gray-200">
              <p class="mb-4 mt-6 font-light">
                Your Bitcoin, Liquid, and Lightning web wallet
              </p>
              <SignUp />
            </div>
          </div>
        </div>

        <!-- honeycomb background animation -->
        <div
          id="HONEYANIMATE"
          transition:fade
          class="absolute w-full bottom-0 right-0 flex flex-col"
          style="opacity:0; z-index:0"
        >
          <div class="flex-auto" />
          <img style="width:100%;" src="/honeycomb.gif" />
        </div>
      </div>

      <!-- <div -->
      <!--   id="SLIDE-B" -->
      <!--   class="absolute z-20  top-0 -->
      <!--  ${coinos.currentSlide === 'B' ? '' : 'hidden'}" -->
      <!--   style="opacity:${coinos.slideBcomplete -->
      <!--     ? 1 -->
      <!--     : 0}; left: ${coinos.slideBcomplete ? 41 : '-100'}px;" -->
      <!-- > -->
      <!--   <div class="pb-24 pt-16 xs:pt-20 sm:pt-24 flex-grow z-10"> -->
      <!--     <p class="text-4xl font-light"> -->
      <!--       The original <span class="font-medium">Bitcoin</span> -->
      <!--       <br /> -->
      <!--       <span class="font-extrabold">Point-of-Sale</span> -->
      <!--     </p> -->
      <!--     <div class="text-2xl text-gray-200 pr-12"> -->
      <!--       <p class="mb-4 mt-6 font-light"> -->
      <!--         Begin accepting Bitcoin in under <span class="text-primary" -->
      <!--           >15 seconds</span -->
      <!--         > -->
      <!--       </p> -->
      <!--           <SignUp /> -->
      <!--     </div> -->
      <!--   </div> -->
      <!-- </div> -->

      <!-- <div -->
      <!--   id="SLIDE-C" -->
      <!--   class="absolute z-20 -->
      <!--  ${coinos.currentSlide === 'C' ? '' : 'hidden'}" -->
      <!--   style="opacity:${coinos.slideCcomplete -->
      <!--     ? 1 -->
      <!--     : 0}; top: ${coinos.slideCcomplete ? 0 : '-500'}px;" -->
      <!-- > -->
      <!--   <div class="pb-24 pt-16 xs:pt-20 sm:pt-24 flex-grow z-10 w-4/5"> -->
      <!--     <p class="text-4xl font-bold">Low fees</p> -->
      <!--     <div class="text-2xl text-gray-200"> -->
      <!--       <p class="mb-4 mt-6 font-light"> -->
      <!--         <span class="text-primary">Zero</span> deposit fees. -->
      <!--         <span class="text-primary">Zero</span> -->
      <!--         withdrawal fees. <span class="text-primary">1%</span> on swaps between -->
      <!--         layers. -->
      <!--       </p> -->
      <!--       <SignUp /> -->
      <!--     </div> -->
      <!--   </div> -->
      <!-- </div> -->
    </div>
    <div class="border-t-4" style="border-color:darkgray;" />
  </div>

  <div class="max-w-1100px mx-auto mt-10 md:grid lg:gap-4 grid-cols-3">
    <Card>
      <Cash slot="icon" />
      <b slot="title">Web wallet</b>

      <ul>
        <li>
          No need to download a privacy invasive app or trust any American app
          store. Login and use us from any internet enabled device
        </li>
        <li>
          We uniquely offer custodial and non-custodial options making it easy
          for newbies to get started while advanced users don’t have to trust us
          with their keys
        </li>
        <li>
          We seamlessly integrate Bitcoin and layer-2 networks Lightning and
          Liquid. Lightning makes us faster (less than a second!) and cheaper
          than the competition and Liquid means we've added confidentiality and
          the ability to manage assets and NFTs
        </li>
      </ul>
    </Card>
    <Card>
      <Computer slot="icon" />
      <b slot="title">Point of sale</b>
      <ul>
        <li>
          Your business can be accepting Bitcoin in less than 15 seconds after
          reading this
        </li>
        <li>
          You can keep payments in BTC and risk the volatility or have all sales
          converted to your national currency
        </li>
        <li>
          Instant settlement and transaction finality. Your funds belong to you
          and can be withdrawn as soon as a payment lands in your account
        </li>
      </ul>
    </Card>
    <Card>
      <Fee slot="icon" />
      <b slot="title">Low fees</b>
      <ul>
        <li>
          Coinos operated it's first 10 years without charging a single satoshi
          in fees
        </li>
        <li>
          A 1% swap fee has recently been added for exchanges between the
          on-chain, lightning and Liquid layers
        </li>
        <li>
          This is to help manage the costs of keeping each layer balanced with
          funds to create a seemless user experience
        </li>
        <li>Deposits and withdrawals remain unaffected at zero fees</li>
        <li>
          This small 1% fee will also help Coinos development continue, thank
          you for using our service!
        </li>
      </ul>
    </Card>
  </div>

  <div class="max-w-1100px mx-auto">
    <div class="px-12 mt-12">
      <h2 class="text-black text-3xl">
        Get your business on the <span class="font-black"
          >Bitcoin standard today</span
        >.
      </h2>
      <div class="mt-7 flex">
        <ContactSalesBtn />
      </div>
    </div>
  </div>

  <div class="mt-20" />
</div>

<style>
  p {
    @apply mb-4;
  }

  .mottled {
    border-radius: 0 0 0 300px;
  }

  li {
    @apply my-4;
  }
</style>
