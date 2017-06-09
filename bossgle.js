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
var myClear = document.getElementById("myClear");
var myReset = document.getElementById("myReset");

//////
//var wrap = document.getElementByid("wrap");


var score = 0;
var word = "";
var num = document.getElementById("num1");
var myVar;
var library = []
//var testfunction = isBasicWord("candle");

//alert(num1);
//document.getElementById("userText").style.display = "block";



/////Buttons////
myBtn.addEventListener('click', function(){
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(word);
  newDiv.appendChild(newContent);

  var sideA = document.getElementById("sideA")
  sideA.appendChild(newDiv);

      for(var i = 1; i < word.length + 1; i++){
        if( i >= 1 && isBasicWord(word.toLowerCase())){
          //console.log("test");
          score += (9 * word.length);
          library.push("\n" +  word);
          //word = word.toLowerCase();
          console.log(word);
          word = "";
          userText.removeChild(userText.firstChild);
          console.log(score);
              }else{
                alert("try a different word");
                word = "";
                return score + 0 ;
              }
          }

    document.getElementById("userScore").innerHTML = score;
});

myClear.addEventListener('click', function(){
  score = 0;
  word = "";
  document.getElementById("userScore").innerHTML = score;
  userText.removeChild(userText.firstChild);
});

myReset.addEventListener('click', function(){
  score = 0;
  word = " ";
  library = [];
  userText.removeChild(userText.firstChild);
  document.getElementById("userScore").innerHTML = score;
});

////////Timer//

myBtn.addEventListener('click', function(){
  setInterval(function(){
    return alert("Times Up");
  }, 60000);
})
/////Keys////
var key1 = function(){
  var n = word.length;
  num1.style.borderColor = "orange";
  word+=("A");
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  console.log(word)
};
/*
num1.onmouseover = function(){ mouseOver() };
function mouseOver(){
  num1.style.height = "90px";
  num1.style.width = "0px";
}
num1.onmouseout = function(){ mouseOut() };
function mouseOut(){
  num1.style.height = "80px";
  num1.style.width = "80px";
}
*/
key1MouseUp = function(){
    setInterval(function(){
        num1.style.borderColor = "black" },  1000)} ;



var key2 = function(){
  num2.style.borderColor = "orange";
  word+=("Z")
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  console.log(word)
};

  var key2MouseUp = function(){
    setInterval(function(){
        num2.style.borderColor = "black" },  1000)} ;

var key3 = function(){
  num3.style.borderColor = "orange";
  word+=("C");
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  console.log(word)
};

  var key3MouseUp = function(){
    setInterval(function(){
        num3.style.borderColor = "black" },  1000)} ;


var key4 =  function(){
  num4.style.borderColor = "orange";
  word+=("F")
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  console.log(word)
};

  var key4MouseUp = function(){
    setInterval(function(){
        num4.style.borderColor = "black" },  1000)} ;

var key5 = function(){
  num5.style.borderColor = "orange";
  word+=("W");
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  console.log(word)
  //wordCount;
};

var key5MouseUp = function(){
  setInterval(function(){
      num5.style.borderColor = "black" },  1000)} ;

var key6 = function(){
  num6.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  word+=("O");
  console.log(word);
  //wordCount;
};

var key6MouseUp = function(){
  setInterval(function(){
      num6.style.borderColor = "black" },  1000)} ;

var key7 = function(){
  num7.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  word+=("L");
  console.log(word)
  //wordCount;
};

var key7MouseUp = function(){
  setInterval(function(){
      num7.style.borderColor = "black" },  1000)} ;

var key8 = function(){
  num8.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  word+=("E");
  console.log(word)
  //wordCount;
};

var key8MouseUp = function(){
  setInterval(function(){
      num8.style.borderColor = "black" },  1000)} ;


var key9 = function(){
  num9.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  word+=("N");
  console.log(word)
  //wordCount;
};

var key9MouseUp = function(){
  setInterval(function(){
      num9.style.borderColor = "black" },  1000)} ;


var key10 = function(){
  num10.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  word+=("T");
  console.log(word)
  //wordCount;
};

var key10MouseUp = function(){
  setInterval(function(){
      num10.style.borderColor = "black" },  1000)} ;


var key11 = function(){
  num11.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  word+=("H");
  console.log(word)
  //wordCount;
};

var key11MouseUp = function(){
  setInterval(function(){
      num11.style.borderColor = "black" },  1000)} ;


var key12 = function(){
  num12.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  word+=("M");
  console.log(word)
  //wordCount;
};

var key12MouseUp = function(){
  setInterval(function(){
      num12.style.borderColor = "black" },  1000)} ;


var key13 = function(){
  num13.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  word+=("D");
  console.log(word)
  //wordCount;
};

var key13MouseUp = function(){
  setInterval(function(){
      num13.style.borderColor = "black" },  1000)} ;


var key14 = function(){
  num14.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  word+=("R");
  console.log(word)
  //wordCount;
};

var key14MouseUp = function(){
  setInterval(function(){
      num14.style.borderColor = "black" },  1000)} ;


var key15 = function(){
  num15.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  word+=("U");
  console.log(word)
  //wordCount;
};

var key15MouseUp = function(){
  setInterval(function(){
      num15.style.borderColor = "black" },  1000)} ;


var key16 = function(){
  num16.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  document.getElementById("userText2").innerHTML = word
  word+=("I");
  console.log(word)
  //wordCount;
};

var key16MouseUp = function(){
  setInterval(function(){
      num16.style.borderColor = "black" },  1000)} ;
