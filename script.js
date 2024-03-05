const scrollers = document.querySelectorAll(".scroller")
const menuIcon = document.querySelector(".menu-icon")
const menuOpen = document.querySelector(".menu-open")

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
    addAnimation()
}

function addAnimation(){
    scrollers.forEach(scroller => {
        scroller.setAttribute('data-animated', true)

        const scrollerInner = scroller.querySelector(".scroller__inner")
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach(item => {
            const duplicatedItem = item.cloneNode(true);
            duplicatedItem.setAttribute('aria-hidden', true);
            scrollerInner.appendChild(duplicatedItem)
        })
    })
}

menuIcon.addEventListener('click', ()=>{
    menuOpen.classList.toggle('open')
})

