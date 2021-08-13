
var button1;
var greet1;
var gameState=0;
//var body
var select1
var greet3

function setup(){
createCanvas(600,600)
button1=createButton("Change Text")
button1.position(400,400)
button1.size(100,40)
greet1=createElement("h2")
greet2=createElement("h2")
greet1.html("Before Click")
greet1.position(400,500)

greet3=createElement("h2")
greet3.html("Select you subcategory")
greet3.position(600,150)


select1 = createSelect();
select1.position(400,200)
  //.option([contentValue],[value])
  //If 1 param, it's both content AND
  //value. Values treated as strings.
  select1.option("Category1");
  select1.option("Category2");
  select1.option("Category3");
  //If changed, call select1Changed 
  select1.changed(select1Changed);
/*button1 = document.createElement("button");
button1.innerHTML = "Generate Short Password";
body = document.getElementsByTagName("body")[0];
button1.style.background='red'
body.appendChild(button1);*/

}

function draw(){
    background(255)
    button1.mousePressed(()=>{
        greet1.hide()
        gameState=1
        if(gameState===1){
            greet2.html("After Click")
            greet2.position(400,500)
           
        }
        
    })
    /*button1.addEventListener("click",function(){
        gameState=1
        if(gameState===1){
            greet2.html("After Click")
            greet2.position(400,500)
           
        }
    })*/
}

function select1Changed() {
    switch (select1.value()) {
      case "Category1":
        category1()
        break;
      case "Category2":
        category2()
        break;
      case "Category3":
        category3()
        break;
    }
  }


function category1(){
    gameState=1
        if(gameState===1){
            greet3.html("Select subcat1")
            greet3.position(600,150)
           
        }
    gameState=0
}

function category2(){
    gameState=1
        if(gameState===1){
            greet3.html("Select subcat2")
            greet3.position(600,150)
           
        }
    gameState=0
}
function category3(){
    gameState=1
        if(gameState===1){
            greet3.html("Select subcat3")
            greet3.position(600,150)
           
        }
        gameState=0
}