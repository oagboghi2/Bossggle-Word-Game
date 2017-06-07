//alert("Testing, Testing, 123");

var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");
var num6 = document.getElementById("num6");
var num7 = document.getElementById("num7");
var num8 = document.getElementById("num8");
var num9 = document.getElementById("num9");
var num10 = document.getElementById("num10");
var num11 = document.getElementById("num11");
var num12 = document.getElementById("num12");
var num13 = document.getElementById("num13");
var num14 = document.getElementById("num14");
var num15 = document.getElementById("num15");
var num16 = document.getElementById("num16");

///////
var myBtn = document.getElementById("myBtn");
var myReset = document.getElementById("myReset");

var score = 0;
var word = "";
var num = document.getElementById("num1")
console.log(num);
//alert(num1);
//document.getElementById("userText").style.display = "block";



/////
myBtn.addEventListener('click', function(){
  //var wordCount = function(word){
    for(var i = 0; i < word.length + 1; i++){
      if( i>= 4 === true){
        //console.log(word);
        score += 100;
        word = "";
        console.log(score);
      }else{
        score += 0 ;
        //console.log(score);
      }
    }
    document.getElementById("userScore").innerHTML = score;
  //};
})

myReset.addEventListener('click', function(){
  score = 0;
  word = "";
  document.getElementById("userScore").innerHTML = score;
  document.getElementById("userText").innerHTML = word;
})


/////
//num1.addEventListener('click',
var key1 = function(){
  num.style.borderColor = "orange";
  word+=("A")
  document.getElementById("userText").innerHTML = word
  console.log(word)
  //wordCount;
  console.log(score)
}

var key1MouseUp = function(){
  num.style.borderColor = "black";
  word+=("A")
  document.getElementById("userText").innerHTML = word
  console.log(word)
  //wordCount;
  console.log(score)
}
num2.addEventListener('click', function(){
  num.style.borderColor = "orange";
  word+=("Z")
  document.getElementById("userText").innerHTML = word
  console.log(word)
  //wordCount;
})

num3.addEventListener('click', function(){
  num.style.borderColor = "orange";
  word+=("C")
  document.getElementById("userText").innerHTML = word
  console.log(word)
  //wordCount;
})

num4.addEventListener('click', function(){
  num.style.borderColor = "orange";
  word+=("F")
  document.getElementById("userText").innerHTML = word
  console.log(word)
  //wordCount;
})

num5.addEventListener('click', function(){
  num.style.borderColor = "orange";
  word+=("W")
  document.getElementById("userText").innerHTML = word
  console.log(word)
  //wordCount;
})

num6.addEventListener('click', function(){
  num.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("O")
  console.log(word)
  //wordCount;
})

num7.addEventListener('click', function(){
  num.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("L")
  console.log(word)
  //wordCount;
})

num8.addEventListener('click', function(){
  num.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("E")
  console.log(word)
  //wordCount;
})

num9.addEventListener('click', function(){
  num.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("N")
  console.log(word)
  //wordCount;
})

num10.addEventListener('click', function(){
  num.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("A")
  console.log(word)
  //wordCount;
})

num11.addEventListener('click', function(){
  num.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("Q")
  console.log(word)
  //wordCount;
})

num12.addEventListener('click', function(){
  num.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("M")
  console.log(word)
  //wordCount;
})

num13.addEventListener('click', function(){
  num.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("D")
  console.log(word)
  //wordCount;
})

num14.addEventListener('click', function(){
  num.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("R")
  console.log(word)
  //wordCount;
})

num15.addEventListener('click', function(){
  num.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("U")
  console.log(word)
  //wordCount;
})

num16.addEventListener('click', function(){
  num.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("I")
  console.log(word)
  //wordCount;
})
