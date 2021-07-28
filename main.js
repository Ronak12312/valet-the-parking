canvas=document.getElementById("mc");
ctx=canvas.getContext("2d");
ch=225;
cw=100;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
cx=500;
cy=0;

function add() {
	bit=new Image();
    bit.onload=ub;
	bit.src=background_image;

    gct=new Image();
    gct.onload=ug;
	gct.src=greencar_image;}

function ub() {
ctx.drawImage(bit,0,0,canvas.width,canvas.height);
}

function ug() {
	ctx.drawImage(gct,cx,cy,cw,ch);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(cy>=0){
        cy=cy-10;
        console.log("when up arrow is pressed, x=" +cx+ ",y=" +cy);
		ub();
		ug();
    }
}

function down()
{
	if(cy<=300){
        cy=cy+10;
        console.log("when down arrow is pressed, x=" +cx+ ",y=" +cy);
		ub();
		ug();
    }
}

function left()
{
	if(cx>=0){
        cx=cx-10;
        console.log("when left arrow is pressed, x=" +cx+ ",y=" +cy);
		ub();
		ug();
    }
}
function right()
{
	if(cx<=900){
        cx=cx+10;
        console.log("when right arrow is pressed, x=" +cx+ ",y=" +cy);
		ub();
		ug();
    }
}
