let x = document.getElementById("Square1")
x.addEventListener("mouseenter",function(){
    let r = Math.floor(Math.random()*100)
    x.innerHTML= `<h1>${r}</h1>`
})
x.addEventListener("mouseleave",function(){
    x.innerHTML="<h1>1</h1>"
})

let y = document.getElementById("Square2")
    let clr = "red";
    y.addEventListener("mouseenter",function(){
        if (clr=="red"){
            y.style.backgroundColor="red";
            clr="green";
        }
        else if (clr == "green") {
            y.style.backgroundColor="green";
            clr = "blue";
        } 
        else {
             y.style.backgroundColor="blue";
            clr="red";
        }

    })


y.addEventListener("mouseleave",function(){
    y.style.backgroundColor="white";
    y.style.color= "black"
})

let z = document.getElementById("Square3")
z.addEventListener("mouseenter",function(){
    let r1 = Math.floor(Math.random()*256)
    let r2 = Math.floor(Math.random()*256)
    let r3 = Math.floor(Math.random()*256)
    z.style.backgroundColor=`rgb(${r1},${r2},${r3})`
   
})
z.addEventListener("mouseleave",function(){
   z.style.backgroundColor="white";
    z.style.color= "black"
})

let l = document.getElementById("Square4")
l.addEventListener("click",function(){
    let r1 = Math.floor(Math.random()*256)
    let r2 = Math.floor(Math.random()*256)
    let r3 = Math.floor(Math.random()*256)
    x.style.backgroundColor=`rgb(${r1},255,255)`
    y.style.backgroundColor=`rgb(255,${r2},255)`
    z.style.backgroundColor=`rgb(255,255,${r3})`
   
})
l.addEventListener("mouseleave",function(){
   x.style.backgroundColor="white";
    y.style.backgroundColor= "white"
    z.style.backgroundColor="white"
})
let main = document.getElementById("main");
let crsr = document.getElementById("cursor");

main.addEventListener("mousemove",function(dets){

    
crsr.style.left = dets.clientX + "px";
crsr.style.top = dets.clientY + "px";
})
