const bar = document.querySelector(".loading__bar--inner");
const counterNumber = document.querySelector(".loading__counter--number");
let currentWidth = 0;
const barInterval = setInterval(()=>{
    counterNumber.textContent = `${currentWidth}%`;
    bar.style.width = `${currentWidth++}%`;
    if (currentWidth === 101) clearInterval(barInterval);
}, 20);

//# sourceMappingURL=index.b4ce7916.js.map
