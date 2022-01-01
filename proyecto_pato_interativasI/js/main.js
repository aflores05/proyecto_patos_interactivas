let score = 0;

function updateScore(){
    let showScore = document.body.getElementsByClassName("score")[0];
    showScore.textContent = score;
}

function onClickDuck(event){
    console.log("click"+event.target.id);
    score += 10;
    updateScore();
    event.target.removeEventListener("click", onClickDuck);
}

function createDucks(qty, container, tag){

    for(let i=0; i<qty; i++){
        let tmp = document.createElement("div");
        tmp.classList.add("duck");
        tmp.id = tag+i;
        tmp.addEventListener("click", onClickDuck);

        container.appendChild(tmp);
        let containerWidth = container.style.width;
        container.style.width = (i+1) * 144 + "px";
    }

}

function animateDucks(){
    gsap.to(".top-duck", {duration: 22, x:-3000});
    gsap.to(".bottom-duck", {duration: 17, x:-2700});
}

document.addEventListener('DOMContentLoaded', (event) =>{

    animateDucks();

    updateScore();

    let topDucks = document.body.getElementsByClassName("top-duck")[0];
    createDucks(15, topDucks, "t");

    let bottomDucks = document.body.getElementsByClassName("bottom-duck")[0];
    createDucks(15, bottomDucks, "b");
});