
let Keyboard = window.SimpleKeyboard.default;
var mail="";

setInterval(function(){ 
 redirect();
}, 300000);


let myKeyboard = new Keyboard({
  onChange: input => onChange(input),
  onKeyPress: button => onKeyPress(button)
});

function onChange(input) {
  document.querySelector(".input").value = input;
  console.log("Input changed", input);
  mail=input;
}

function onKeyPress(button) {
  console.log("Button pressed", button);
  if (button=="{enter}"){
  	console.log("YA", mail);
    socket.emit('send', { r:mail,g:"gval",b:"bval" });
  	redirect();
  }
}

function myFunction() {
  location.reload();
}

function redirect(){
  window.location.href = "http://127.0.0.1:9030/animations/p5/p5animate/";
}

