/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(64, 82, 98); //fill the sky blue



	//1. a cloud in the sky
	
	
	stroke(103, 106, 119); //moon
	strokeWeight(300);
	point(150, 100);
	
	stroke(59, 60, 67); //clouds
	strokeWeight(300);
	point(50, 300);
	strokeWeight(250);
	point(150, 320);
	strokeWeight(200);
	point(250, 340);
	strokeWeight(150);
	point(350, 380);
	strokeWeight(100);
	point(420, 410);
	
	
	strokeWeight(100);
	point(480, 100);
	strokeWeight(150);
	point(550, 100);
	strokeWeight(200);
	point(650, 100);
	strokeWeight(250);
	point(750, 100);
	strokeWeight(250);
	point(850, 100);
	strokeWeight(200);
	point(950, 100);


	
	noStroke();
	fill(37, 52, 45);
	rect(0, 422, 1024, 154); //draw some green ground


	//2. a mountain in the distance
	
	noStroke(); //church
	fill(30, 31, 36);
	rect(400, 330, 300, 92);
	rect(400, 270, 30, 80);
	rect(670, 270, 30, 80);
	triangle(390, 270, 440, 270, 415, 240);
	triangle(660, 270, 710, 270, 685, 240);
	triangle(460, 400, 640, 400, 550, 100);


	//3. a tree

	fill(24, 22, 21);
	triangle(830, 423, 870, 423, 850, 100);
	triangle(840, 400, 820, 310, 840, 370);
	triangle(850, 280, 870, 200, 850, 260);
	
	//4. a canyon 
	//NB. the canyon should go from ground-level to the bottom of the screen

	
	fill(27, 32, 28);
	rect(100, 422, 150, 154);
	fill(0, 0, 0, 100);
	rect(110, 422, 130, 140);
	

	//5. a collectable token - eg. a jewel, fruit, coins
	//lantern

	stroke(0, 0, 0);
	strokeWeight(7);
	fill(212, 166, 55);
	rect(400, 400, 25, 22);
	fill(0,0,0);
	triangle(398, 400, 427, 400, 412, 380);
	strokeWeight(10);
	point(412, 375);
	
}
