//alert('Connected!!!!');
let numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
let h1 = document.querySelector('.textlead')
let pickedColor = pickColor();
var colorDisplay = document.querySelector('#colorDisplay');
let messageDisplay = document.querySelector('#messageDisplay');
let resetButton = document.querySelector('#reset');
//var easyBtn = document.querySelector("#easy");
//var hardBtn = document.querySelector('#hard');
let info = document.querySelector('#info');
var modeButtons = document.querySelectorAll('.mode');



for (var i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener('click', function(){
        modeButtons[0].classList.remove('selected');
        modeButtons[1].classList.remove('selected');
        this.classList.add('selected');
        
        this.textContent === 'EASY' ? numSquares = 3 : numSquares = 6;
       /*if(this.textContent === 'EASY'){
           numSquares = 3;
       }
       else {
           numSquares = 6;
       }*/
        reset();
    });
}

function reset(){
    resetButton.textContent = 'NEW COLORS'
    h1.style.background = 'steelblue'
   messageDisplay.textContent = ''
    //change messageDisplay color back to default
   messageDisplay.style.color = 'steelblue'
    //generate all new colors
    colors = generateRandomColors(numSquares);
    //pick a random color frfom the new colors
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor.toUpperCase()
    //change colors of squares
    for (var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = 'block';
            squares[i].style.background = colors[i];
        }
        else{
            squares[i].style.display = 'none';
        }
    }
}


info.addEventListener('click', function(){
    alert('Welcome to the Great Color Game. In this game, you must guess the right color using the hint RGB(xxx, xxx, xxx). The RGB stands for Red-Green-Blue. Each color can reach a maximum of 255. You are to use the Index of each color to determine the correct color in the given squares. I hope this message was helpful! Best of luck, Comrade!!!')
})
//var name = prompt('welcome to the color game! What is your name?')





//while (name.length > 10){
  //  var name =  prompt('Name too long! Please input a new name...')
//}
  //  alert(`Welcome to the Game, ${name}`)





/*easyBtn.addEventListener('click', function(){
    h1.style.background = 'steelblue'
    easyBtn.classList.add('selected');
   hardBtn.classList.remove('selected');
   resetButton.textContent = 'NEW COLORS';
   numSquares = 3;
   colors = generateRandomColors(numSquares);
   pickedColor = pickColor();
   messageDisplay.textContent = ''
   colorDisplay.textContent = pickedColor.toUpperCase();
   for (var i = 0; i < squares.length; i++){
       if(colors[i]){
           squares[i].style.background = colors[i];
       }
       else{
           squares[i].style.display = 'none'
       }
   }
   
});
hardBtn.addEventListener('click', function(){
    h1.style.background = 'steelblue'
    hardBtn.classList.add('selected');
    easyBtn.classList.remove('selected');
    //Reseting textContents
    messageDisplay.textContent = ''
    resetButton.textContent = 'NEW COLORS';
    colorDisplay.textContent = pickedColor.toUpperCase();
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    for (var i = 0; i < squares.length; i++){
            squares[i].style.background = colors[i];
            squares[i].style.display = 'block'
    }
 });*/
colorDisplay.textContent = pickedColor.toUpperCase()
for(var i = 0; i < squares.length; i++){
    //Add initial colors to square
    squares[i].style.background = colors[i];

    //Add click listeners to squares
    squares[i].addEventListener('click', function(){
        //grab a color of clicked square
        var clickedColor = this.style.background
        //comparecolor to picked color
        if( clickedColor === pickedColor){
           messageDisplay.textContent = `You win!`;
           h1.style.background = pickedColor
            resetButton.textContent = 'PLAY AGAIN!'
            for (var i = 0; i < squares.length; i++){
                squares[i].style.background = pickedColor;
            }
        }
        else{ 
        this.style.background = 'black'
       messageDisplay.textContent = '  Incorrect!'
    }
    });
}
function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random]
}
function generateRandomColors(num){
    //Make an array
    var arr = [];
    //Repeat num times
    for (var i = 0; i < num; i++){
        //get Random color and push into arr
        arr.push(randomColor())
    }
    //return  the array
    return arr;
}
function randomColor(){
    // pick a red from 0 to 255
    var r = Math.floor(Math.random() * 256) 
    // pick a green from 0 to 255
    var g = Math.floor(Math.random() * 256) 
    // pick a blue from 0 to 255
    var b = Math.floor(Math.random() * 256) 

    return "rgb(" + r +", " + g +", "+b + ")"; 
}
resetButton.addEventListener('click', function(){
    reset();

})