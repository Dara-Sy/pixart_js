
var squares = []
var brushEl = document.querySelector(".brush")
var input = document.querySelector("#color-field")
var canvas = document.querySelector(".canvas")
var color = null

createCanvas()

document.querySelector("form").addEventListener("submit", (event) => {
 event.preventDefault()
 setColor()
})

function getColor(){
 color = input.value
}

function setColor(){
 getColor()
 brushEl.style.backgroundColor = color;
}

function createCanvas(){
   for(let i = 0; i < 8000; i++){
     // create div element
     // add class 'square' to that element
     var square= document.createElement('div')
     square.setAttribute('class', "square")
     canvas.appendChild(square)
     square.addEventListener("mouseover", function (event){
       event.target.style.backgroundColor = color;
     })
   }

}


// document.addEventListener("click", function(){
//     document.body.style.backgroundColor = "red";
// });


// * When I click the "Set Color" button, it should change the color of the "brush" box
// to the color I specify in the input field.
// // * You can use `document.querySelector` (or another document method)
// to select the element, then add an event listener.

// > **HINT:** You will notice that the page refreshes whenever you click the button.
// You need to prevent this from happening using a method you have not used before.
// Google "javascript event prevent default". You can also reference [this portion]
// (https://github.com/ga-wdi-lessons/js-events-callbacks#event-defaults-405---410-5-minutes)
//   of the Events & Callbacks lesson plan.



// <html>
// <head>
//   <meta charset="utf-8">
//   <link rel="stylesheet" href="style.css">
//   <title>i &hearts; js</title>
// </head>
// <body>
//   <h1>Pixel Art!</h1>
//   <div class="controls">
//     <form id="form">
//       <input type="text" id="color-field"></input>
//       <button id="set-color">Set Color</button>
//     </form>
//     <div class="brush"></div>
//   </div>
//   <script src="pixart.js"></script>
// </body>
// </html>
