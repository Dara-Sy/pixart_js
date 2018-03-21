

// commit 1

let setColor = document.querySelector('#set-color');

setColor.addEventListener('click', function() {
  document.brush.style.backgroundColor = "red";
});


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
