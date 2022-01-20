canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
color="blue";
width=5;
document.getElementById("colour_input").value=color;
document.getElementById("width_input").value=width;
var last_position_of_x,last_position_of_y;
var screenwidth=screen.width;
new_width=screen.width-150;
new_height=screen.height-300;
if (screenwidth<992){
document.getElementById("myCanvas").height=new_height;
document.getElementById("myCanvas").width=new_height;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",touch_start);
function touch_start(e){
color=document.getElementById("colour_input").value;
width=document.getElementById("width_input").value;
console.log("color="+color);
console.log("width="+width);
console.log("Touchstart");
last_position_of_x= e.touches[0].clientX - canvas.offsetLeft;
last_position_of_y= e.touches[0].clientY - canvas.offsetTop;
}
    canvas.addEventListener("touchmove",touch_move);
    function touch_move(e){
        current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
        current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
        console.log("touchmove");
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        
        ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_touch_x + "y = " + current_position_of_touch_y);
        
        ctx.stroke();
    last_position_of_x = current_position_of_touch_x;
    last_position_of_y = current_position_of_touch_y;
};
function clear_area(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}
var mouseEvent="empty";
console.log(mouseEvent);
//we will declare a variable to store the mouse event as it occurs, so that we
//can track which mouse event is happening
//We have kept its value as empty because when the page loads no mouse event has occurred.
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("colour_input").value;
width=document.getElementById("width_input").value;
console.log("color="+color);
console.log("width="+width);
mouseEvent="mousedown";
console.log(mouseEvent);
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
console.log(mouseEvent);
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseup";
    console.log(mouseEvent);
    }
    canvas.addEventListener("mousemove",my_mousemove);
    function my_mousemove(e){
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        console.log("mousemove+mousedown");
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        console.log("Last position of x and y coordinates = ");
        console.log("x = " + last_position_of_x + "y = " + last_position_of_y);
        
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        console.log("Current position of x and y coordinates = ");
        console.log("x  = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
};
function clear_area(){
ctx.clearRect(0,0,canvas.width,canvas.height);
}