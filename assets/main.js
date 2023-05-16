const title = document.querySelector('.title');
const tree = document.querySelector('.tree');
const leaf = document.querySelector('.leaf');
const plant = document.querySelector('.plant');
const hill1 = document.querySelector('.hill1');
const hill2 = document.querySelector('.hill2');
const hill3 = document.querySelector('.hill3');
const hill4 = document.querySelector('.hill4');
const hill5 = document.querySelector('.hill5');


window.addEventListener('scroll', () => {
    let value = window.scrollY;

    title.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
})