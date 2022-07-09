const firstSection = document.querySelector('.section-1')
const header = document.querySelector('.unical')

document.addEventListener('scroll', () => {
   const top = firstSection.getBoundingClientRect().top
   console.log(top);

   if (top <= 0) {
      header.classList.add('_active')
   } else {
      header.classList.remove('_active')
   }

})





