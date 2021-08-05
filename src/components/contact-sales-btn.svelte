<script>
  //Template vars: 
  const arrowIcon = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--ic" width="32" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path d="M10 17l5-5l-5-5v10z" fill="currentColor"></path></svg>`

  let classes = ''
</script>

<button class="bg-black text-white py-2.5 pl-0.5 pr-4 
  border border-white border-opacity-50  rounded-md 
  hover:border-opacity-100 ${classes ? classes : ''}">
  <a href="/contact" class="flex">
    <span class="">{@html arrowIcon}</span> 
    <span class="inline-block mt-0.5 font-bold text-lg">
      Contact Sales
    </span>
  </a>
</button>
