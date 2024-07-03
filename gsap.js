let animator = gsap 
let obj = animator.to('.c21' , {

    duration : .6 ,

    y : '100%' ,

  


}).pause()


function show(){

    obj.play()
}



function hide(){
    obj.reverse()
}