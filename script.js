document.getElementById("datetime").innerHTML = Date();

var aboutwindow = document.getElementById('aboutwin');
var x = Math.floor(Math.random()*300);
var y = Math.floor(Math.random()*300);
  aboutwindow.style.top = x + 'px';
  aboutwindow.style.left = y + 'px';
  var texteditwin = document.getElementById('texteditorwin');
var x = Math.floor(Math.random()*300);
var y = Math.floor(Math.random()*300);
  texteditwin.style.top = x + 'px';
  texteditwin.style.left = y + 'px';
  var terminalwin = document.getElementById('terminalwin');
  var x = Math.floor(Math.random()*300);
  var y = Math.floor(Math.random()*300);
    terminalwin.style.top = x + 'px';
    terminalwin.style.left = y + 'px';
    var calculatorwin = document.getElementById('calculatorwin');
    var x = Math.floor(Math.random()*300);
    var y = Math.floor(Math.random()*300);
      calculatorwin.style.top = x + 'px';
      calculatorwin.style.left = y + 'px';
      var flappyBirdwin = document.getElementById('flappyBirdwin');
    var x = Math.floor(Math.random()*300);
    var y = Math.floor(Math.random()*300);
    flappyBirdwin.style.top = x + 'px';
    flappyBirdwin.style.left = y + 'px';
function changeDate() {
document.getElementById("datetime").innerHTML = Date();
}
setInterval(function(){ changeDate() }, 1000);



    //Get a reference to the link on the page
    // with an id of "mylink"
    var link1 = document.getElementById("about");
    var link2 = document.getElementById("closeabout");
    var link3 = document.getElementById("text-editor");
    var link4 = document.getElementById("texteditclose");
    var link5 = document.getElementById("terminal");
    var link6 = document.getElementById("terminalclose");
    var link7 = document.getElementById("calculater");
    var link8 = document.getElementById("calculatorclose");
    var link9 = document.getElementById("flappybird");
    var link10 = document.getElementById("flappyBirdclose");

    //Set code to run when the link is clicked
    // by assigning a function to "onclick"
    link1.onclick = function() {
      openAbout()
      return false;
    }
    link2.onclick = function() {
      closeAbout()
      return false;
    }
    link3.onclick = function() {
      openTextEditor()
      return false;
    }
    link4.onclick = function() {
      closeTextEditor()
      return false;
    }
    link5.onclick = function() {
      openTerminal()
      return false;
    }
    link6.onclick = function() {
      closeTerminal()
      return false;
    }
    link7.onclick = function() {
      openCalculator()
      return false;
    }
    link8.onclick = function() {
      closeCalculator()
      return false;
    }
    link9.onclick = function() {
      openFlappyBird()
      return false;
    }
    link10.onclick = function() {
      closeFlappyBird()
      return false;
    }
    function openAbout() {
      document.getElementById("aboutwin").style.display = "initial";
    }
    function closeAbout() {
      document.getElementById("aboutwin").style.display = "none";
      
    
    }
    function openTextEditor() {
      document.getElementById("texteditorwin").style.display = "initial";
    }
    function closeTextEditor() {
      document.getElementById("texteditorwin").style.display = "none";
      
    
    }
    function openTerminal() {
      document.getElementById("terminalwin").style.display = "initial";
    }
    function closeTerminal() {
      document.getElementById("terminalwin").style.display = "none";
    }
    function openCalculator() {
      document.getElementById("calculatorwin").style.display = "initial";
    }
    function openFlappyBird() {
      document.getElementById("flappyBirdwin").style.display = "initial";
    }
    function closeFlappyBird() {
      document.getElementById("flappyBirdwin").style.display = "none";
    }
    function clr() 
  { 
      document.getElementById("result").value = "" 
  } 
    function closeCalculator() {
      document.getElementById("calculatorwin").style.display = "none";
      clr();
    }
    
    var mydragg = function(){
      return {
          move : function(divid,xpos,ypos){
              divid.style.left = xpos + 'px';
              divid.style.top = ypos + 'px';
          },
          startMoving : function(divid,container,evt){
              evt = evt || window.event;
              var posX = evt.clientX,
                  posY = evt.clientY,
              divTop = divid.style.top,
              divLeft = divid.style.left,
  eWi = parseInt(divid.style.width),
  eHe = parseInt(divid.style.height),
  cWi = parseInt(document.getElementById(container).style.width),
  cHe = parseInt(document.getElementById(container).style.height);
  document.getElementById(container).style.cursor='pointer';
              divTop = divTop.replace('px','');
              divLeft = divLeft.replace('px','');
              var diffX = posX - divLeft,
                  diffY = posY - divTop;
              document.onmousemove = function(evt){
                  evt = evt || window.event;
                  var posX = evt.clientX,
                      posY = evt.clientY,
                      aX = posX - diffX,
                      aY = posY - diffY;
      if (aX < 0) aX = 0;
      if (aY < 0) aY = 0;
      if (aX + eWi > cWi) aX = cWi - eWi;
      if (aY + eHe > cHe) aY = cHe -eHe;
                  mydragg.move(divid,aX,aY);
              }
          },
          stopMoving : function(container){
              var a = document.createElement('script');
  document.getElementById(container).style.cursor='default';
              document.onmousemove = function(){}
          },
      }
  }();

  function save(id) {
    var target = document.getElementById(id).value;
    localStorage.setItem("save", target)
  }
  var texteditval = localStorage.getItem("save");
  document.getElementById("texteditval").value = texteditval;

  function clearText() {
    document.getElementById("texteditval").value = "";
    localStorage.clear();
  }
  //function that display value 
  function dis(val) 
  { 
      document.getElementById("result").value+=val 
  } 
    
  //function that evaluates the digit and return result 
  function solve() 
  { 
      let x = document.getElementById("result").value 
      let y = eval(x) 
      document.getElementById("result").value = y 
  } 
  function loadImage(src, width, height) {
        var img = new Image(width, height);
        img.src = src;
        return img;
    }

    function randomIntFromInterval(min,max) {
        return Math.floor(Math.random()*(max-min+1)+min);
    }


 
    
  
  

