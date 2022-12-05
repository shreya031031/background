const button=document.getElementById("b");
const body=document.body;
const colors=['red','green','pink','blue']
button.addEventListener('click',changeb)
function changeb(){
    const colorIndex=Math.floor(Math.random()*colors.length)
    body.style.backgroundColor=colors[colorIndex]
}