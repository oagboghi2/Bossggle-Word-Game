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

var score = 0;
var word = "";
var num = document.getElementById("num1");
console.log(num);
var myVar;
var library = [].reverse();
//alert(num1);
//document.getElementById("userText").style.display = "block";



/////
myBtn.addEventListener('click', function(){
  //var wordCount = function(word){
  var newDiv = document.createElement("div");
  var newContent = document.createTextNode(word);
  newDiv.appendChild(newContent);

  var sideA = document.getElementById("sideA")
  sideA.appendChild(newDiv);

    for(var i = 0; i < word.length + 1; i++){
      if( i>= 1 === true){
        //console.log(word);
        score += 9;
        library.push("\n" +  word);
        word = "";
        console.log(score);
      }else{
        score += 0 ;
        //console.log(score);
      }

    }
    //var newDiv = document.createElement("div");
    //var newContent = document.createTextNode(word);
    //newDiv.appendChild(newContent);

    //var sideA = document.getElementById("sideA")
    //sideA.appendChild(newDiv);
    //document.getElementById("userScore").innerHTML = score;
    //document.getElementById("userLib").innerHTML = '<p>'+library+'</p>';
  //};
});

myClear.addEventListener('click', function(){
  score = 0;
  word = "";
  document.getElementById("userScore").innerHTML = score;
});


/////
//num1.addEventListener('click',
var key1 = function(){
  num1.style.borderColor = "orange";
  word+=("A");
  document.getElementById("userText").innerHTML = word
  console.log(word);
  //wordCount;
  console.log(score);
};

/*var key1MouseUp = function(){
  num1.style.borderColor = "black";
  document.getElementById("userText").innerHTML = word
};*/

key1MouseUp = function(){setInterval(function(){num1.style.borderColor = "black" },  1000)} ;
  //myVar = setInterval(function(
    //num1.style.borderColor = "black";
  //} 3000)
//}


var key2 = function(){
  num2.style.borderColor = "orange";
  word+=("Z")
  document.getElementById("userText").innerHTML = word
  console.log(word)
};

  var key2MouseUp = function(){
    num2.style.borderColor = "black";
};

var key3 = function(){
  num3.style.borderColor = "orange";
  word+=("C");
  document.getElementById("userText").innerHTML = word
  console.log(word)
};

  var key3MouseUp = function(){
    num3.style.borderColor = "black";
};

var key4 =  function(){
  num4.style.borderColor = "orange";
  word+=("F")
  document.getElementById("userText").innerHTML = word
  console.log(word)
};

  var key4MouseUp = function(){
    num4.style.borderColor = "black";
};

var key5 = function(){
  num5.style.borderColor = "orange";
  word+=("W");
  document.getElementById("userText").innerHTML = word
  console.log(word)
  //wordCount;
};

var key5MouseUp = function(){
  num5.style.borderColor = "black";
};

var key6 = function(){
  num6.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("O");
  console.log(word);
  //wordCount;
};

var key6MouseUp = function(){
  num6.style.borderColor = "black";
};

var key7 = function(){
  num7.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("L");
  console.log(word)
  //wordCount;
};

var key7MouseUp = function(){
  num7.style.borderColor = "black";
};

var key8 = function(){
  num8.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("E");
  console.log(word)
  //wordCount;
};

var key8MouseUp = function(){
  num8.style.borderColor = "black";
};

var key9 = function(){
  num9.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("N");
  console.log(word)
  //wordCount;
};

var key9MouseUp = function(){
  num9.style.borderColor = "black";
};

var key10 = function(){
  num10.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("A");
  console.log(word)
  //wordCount;
};

var key10MouseUp = function(){
  num10.style.borderColor = "black";
};

var key11 = function(){
  num11.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("Q");
  console.log(word)
  //wordCount;
};

var key11MouseUp = function(){
  num11.style.borderColor = "black";
};

var key12 = function(){
  num12.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("M");
  console.log(word)
  //wordCount;
};

var key12MouseUp = function(){
  num12.style.borderColor = "black";
};

var key13 = function(){
  num13.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("D");
  console.log(word)
  //wordCount;
};

var key13MouseUp = function(){
  num13.style.borderColor = "black";
};

var key14 = function(){
  num14.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("R");
  console.log(word)
  //wordCount;
};

var key14MouseUp = function(){
  num14.style.borderColor = "black";
};

var key15 = function(){
  num15.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("U");
  console.log(word)
  //wordCount;
};

var key15MouseUp = function(){
  num15.style.borderColor = "black";
};

var key16 = function(){
  num16.style.borderColor = "orange";
  document.getElementById("userText").innerHTML = word
  word+=("I");
  console.log(word)
  //wordCount;
};

var key16MouseUp = function(){
  num.style.borderColor = "black";
};
