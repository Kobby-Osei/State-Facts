console.log(stateData.ny);


let selectMenu = document.getElementById('state-list');
console.log(selectMenu.value);

console.log(stateData[selectMenu.value]);

let selectedState = stateData[selectMenu.value];
console.log(selectedState.mammal);
console.log(selectedState.bird);
console.log(selectedState.tree);
console.log(selectedState.nickname);

console.log(selectMenu.options.length);
console.log(selectMenu.options[32]);

selectMenu.addEventListener('change', displayStateInfo)


let infoPicImg = document.getElementById('info-pic');
let infoNameFgCptn = document.getElementById('info-name');
let infoAbbrP = document.getElementById('info-abbr');
let infoCptlP = document.getElementById('info-capitol');
let infoPopltnP = document.getElementById('info-population')
let infoStatehoodP = document.getElementById('info-statehood');
let infoMammalP = document.getElementById('info-mammal');
let infoBirdP = document.getElementById('info-bird')
let infoTreeP = document.getElementById('info-tree');
let infoFlowerP = document.getElementById('info-flower');
let infoNicknameP = document.getElementById('info-nickname')


function displayStateInfo() {
    console.log(this.value)

    let selectedState = stateData[selectMenu.value];
    let infoPicSrc = selectMenu.value
    infoPicImg.src = 'img/' + infoPicSrc + '.jpg ';
    infoNameFgCptn.textContent = selectedState.name ;
    infoAbbrP.textContent = selectedState.abbr;
    infoCptlP.textContent = selectedState.capitol ;
    infoPopltnP.textContent = selectedState.pop;
    infoStatehoodP.textContent = selectedState.statehood;
    infoMammalP.textContent = selectedState.mammal;
    infoBirdP.textContent = selectedState.bird;
    infoTreeP.textContent = selectedState.tree; 
    infoFlowerP.textContent = selectedState.flower;
    infoNicknameP.textContent = selectedState.nickname ;

    console.log(' "img/' + infoPicSrc + '.jpg" ')

}



