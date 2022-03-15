const sketchArea = document.querySelector('.sketch-area');
let gridCount = 100;

let singleBoxSize = 512 / gridCount;

let ereaseMode = false;

let rainbowMode = false;

let color = 'black';



const eraseModeButton = document.querySelector('.erease');

const rainbowModeButton = document.querySelector('.rainbow');



for (let index = 0; index < (gridCount * gridCount); index++) {
    console.log('hmm')
    const singleBox = document.createElement('div');
    singleBox.classList.add('box')
    singleBox.style = ` width: ${singleBoxSize}px; height: ${singleBoxSize}px; box-sizing: border-box;`;
    sketchArea.appendChild(singleBox); 
}

const boxes = document.querySelectorAll('.box');

boxes.forEach(button => {
    button.addEventListener('mouseover', e => {
        drawOverBox(e);
    })
})

function drawOverBox(event){
    let red;
    let green;
    let blue;


if(ereaseMode) color = 'antiquewhite';
else if(rainbowMode){
    red = Math.random() * 255;
    green = Math.random() * 255;
    blue = Math.random() * 255;
    color = `rgba(${red}, ${green}, ${blue})`;

}
else color = 'black';


event.target.style = `width: ${singleBoxSize}px; height: ${singleBoxSize}px; box-sizing: border-box; background-color: ${color}`;
}

eraseModeButton.addEventListener('click', e => {
    ereaseMode = !ereaseMode;
})

rainbowModeButton.addEventListener('click', e => {
    rainbowMode = !rainbowMode;
})