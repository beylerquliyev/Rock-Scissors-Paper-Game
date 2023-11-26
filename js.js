
let result1=document.querySelector("#result")
let result2=document.querySelector("#resultcomp")
let img1=document.querySelector("#img1")
let img2=document.querySelector("#img2")
let num1=document.querySelector("#num1")
let num2=document.querySelector("#num2")
let nam1=document.querySelector("#name1")
let name1=prompt("Adinizi geyd edin")
let person1=document.querySelector("#person1")
let person2=document.querySelector("#person2")
let fullDiv=document.querySelector("#fullDiv")
let lose=document.querySelector("#lose")
let loseText=document.querySelector("#loseText")
let loseText2=document.querySelector("#lose2")
let loseText3=document.querySelector("#loseText3")
nam1.innerHTML=name1
console.log(name1);





let arrComp=["r","s","p"]

function CompChoose(){

    let random=Math.random()*3
let random1=Math.floor(random)

return arrComp[random1]
}
let  nullComp=0
let nullPerson=0

window.addEventListener("keypress",function(e){
  
 

    let zz=CompChoose()

    console.log(e.key,zz);
    
  if(e.key=="r" && zz=="s"){
    result1.innerHTML="win"
    result2.innerHTML="lose"
    result1.style.color="green"
    result2.style.color="red"
    img1.src="./r.png"
    img2.src="./s.png"
    nullPerson=nullPerson+1
    person1.classList.add("win")
    person2.classList.remove("win")
    person2.classList.add("lose")
    person1.classList.remove("lose")
   
    

   
    
    
  }
 else if(e.key=="p" && zz=="r"){
    result1.innerHTML="win"
    result2.innerHTML="lose"
    img1.src="./p.jpeg"
    img2.src="./r.png"
    nullPerson=nullPerson+1
    person1.classList.add("win")
    person2.classList.remove("win")
    person2.classList.add("lose")
    result1.style.color="green"
    result2.style.color="red"
    person1.classList.remove("lose")
    
    
    
    
    
  }
  else if(e.key=="s" && zz=="p"){
    result1.innerHTML="win"
    result2.innerHTML="lose"
    img2.src="./p.jpeg"
    img1.src="./s.png"
    nullPerson=nullPerson+1
    person1.classList.add("win")
    person2.classList.remove("win")
    person2.classList.add("lose")
    result1.style.color="green"
    result2.style.color="red"
    person1.classList.remove("lose")
    
    
    
  }
  else if(e.key=="r"&&zz=="r"){
    result1.innerHTML="lose"
    result2.innerHTML="lose"
    img1.src="./r.png"
    img2.src="./r.png"
    result1.style.color="red"
    result2.style.color="red"
    person2.classList.add("lose")
    
   
    
  }
  else if(e.key=="p"&&zz=="p"){
    result1.innerHTML="lose"
    result2.innerHTML="lose"
    img1.src="./p.jpeg"
    img2.src="./p.jpeg"
    result1.style.color="red"
    result2.style.color="red"
    person2.classList.add("lose")
   
    
    
  }
  else if(e.key=="s"&&zz=="s"){
    result1.innerHTML="lose"
    result2.innerHTML="lose"
    img1.src="./s.png"
    img2.src="./s.png"
    result1.style.color="red"
    result2.style.color="red"
    person2.classList.add("lose")
   
    
  }
  else if(zz=="r"&&e.key=="s"){
    result1.innerHTML="lose"
    result2.innerHTML="win"
    result1.style.color="red"
    result2.style.color="green"
    img2.src="./r.png"
    img1.src="./s.png"
    nullComp=nullComp+1
    person1.classList.remove("win")
    person2.classList.add("win")
    person1.classList.add("lose")
    person2.classList.remove("lose")

  }
  else if(zz=="p"&&e.key=="r"){
    result1.innerHTML="lose"
    result2.innerHTML="win"
    result1.style.color="red"
    result2.style.color="green"
    img2.src="./p.jpeg"
    img1.src="./r.png"
    nullComp=nullComp+1
    person1.classList.remove("win")
    person2.classList.add("win")
    person1.classList.add("lose")
    person2.classList.remove("lose")


  }
  else if(zz=="s"&&e.key=="p"){
    result2.innerHTML="win"
    result1.innerHTML="lose"
    result1.style.color="red"
    result2.style.color="green"
    img2.src="./s.png"
    img1.src="./p.jpeg"
    nullComp=nullComp+1
    person1.classList.remove("win")
    person2.classList.add("win")
    person1.classList.add("lose")
    person2.classList.remove("lose")

 

  }
  else{
    this.alert("Zehmet olmasa dogru herf secin (r,p,s)")
  }


  num1.innerHTML=nullPerson
  num2.innerHTML=nullComp

 
  

  if(nullPerson<5&&nullComp>4){
    const ll=nullPerson
    const dd=nullComp
   
        fullDiv.classList.add("d-none")
        lose.classList.remove("d-none")
        loseText3.innerHTML=`${ll}:${dd}`


  }
  if(nullPerson>4&&nullComp<5){
    const ll=nullPerson
    const dd=nullComp
   
        fullDiv.classList.add("d-none")
        loseText2.classList.remove("d-none")
        loseText.innerHTML=`${ll}:${dd}`


  }






    
    
    
})


