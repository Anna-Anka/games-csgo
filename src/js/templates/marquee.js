export const handleMarquee = () => {
    if (document.querySelector('.marquee')) {
        // const root = document.documentElement
        // const marqueeContent = document.querySelector('.marquee__items')
        // root.style.setProperty('--marquee-elements', marqueeContent.children.length)
        // const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue('--marquee-elements-displayed')

        const marquee = document.querySelector('.marquee')
        const list = document.querySelector('.marquee__items')
        const clone = list.cloneNode(true)

        marquee.append(clone)
    }
};