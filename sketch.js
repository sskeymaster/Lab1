//character
let gameChar = {
	gameChar_x: 512,
	gameChar_y: 280,
	gameChar_head: 40
};

let gameItem = {
	item_x: 400,
	item_y: 400
};

function setup()
{
	createCanvas(1024, 576);
	Previous_key = '';
}


function draw()
{
	background(64, 82, 98); //fill the sky blue
	
		//1. a cloud in the sky
	stroke(103, 106, 119); //moon
	strokeWeight(300);
	point(150, 100);
	
	stroke(59, 60, 67); //cloud 1
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
	
	strokeWeight(100); //cloud 2
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
	
		//draw some green ground
	noStroke();
	fill(37, 52, 45);
	rect(0, 422, 1024, 154); 


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
	
		//5. a collectable item
		//lantern
	Item();
	
	console.log(key);
	
	if (keyIsDown(65)) //character moves
	{
		left();
		gameChar.gameChar_x -= 5;
		if (gameChar.gameChar_x <= 0)
			{
				gameChar.gameChar_x = 5;
			}

	}
	else if (Previous_key == 'A' && key == ' ')
	{
	   	left_jump();
	}
	else if (keyIsDown(68))
	{
		right();
		gameChar.gameChar_x += 5;
		if (gameChar.gameChar_x >= 1024)
			{
				gameChar.gameChar_x = 1019;
			}
		
	}
	else if (Previous_key == 'D' && key == ' ')
	{
		right_jump();
	}
	else if (Previous_key == '' && key == ' ')
	{
		front_jump();
	}
	else
	{
		front();
		Previous_key = '';
	}

}


function Item() //lantern, collectable
{
	stroke(0, 0, 0);
	strokeWeight(7);
	fill(212, 166, 55);
	rect(gameItem.item_x, gameItem.item_y, 25, 22);
	fill(0,0,0);
	triangle(gameItem.item_x - 2, gameItem.item_y, gameItem.item_x + 27, gameItem.item_y, gameItem.item_x + 12, gameItem.item_y - 20);
	strokeWeight(10);
	point(gameItem.item_x + 12, gameItem.item_y - 25);
}


function left()
{
		//Character - LEFT
	stroke(255, 250, 250);
	strokeWeight(gameChar.gameChar_head);
	point(gameChar.gameChar_x, gameChar.gameChar_y); //head
	stroke(0, 0, 0);
	strokeWeight(10);
	point(gameChar.gameChar_x - 10, gameChar.gameChar_y); //left eye
	noStroke();
	fill(255, 250, 250);
	triangle(gameChar.gameChar_x, gameChar.gameChar_y + 15, gameChar.gameChar_x - 30, gameChar.gameChar_y + 100, gameChar.gameChar_x + 30, gameChar.gameChar_y + 100); // dress
	fill(169, 169, 169);
	rect(gameChar.gameChar_x - 2, gameChar.gameChar_y + 100, 5, 42); //right leg
	fill(255, 250, 250);
	rect(gameChar.gameChar_x + 2, gameChar.gameChar_y + 100, 5, 42); //left leg;
}


function left_jump()
{
		//Character - LEFT JUMP
	stroke(255, 250, 250);
	strokeWeight(gameChar.gameChar_head);
	point(gameChar.gameChar_x, gameChar.gameChar_y - 50); //head
	stroke(0, 0, 0);
	strokeWeight(10);
	point(gameChar.gameChar_x - 10, gameChar.gameChar_y - 50); //left eye
	noStroke();
	fill(255, 250, 250);
	triangle(gameChar.gameChar_x, gameChar.gameChar_y + 15 - 50, gameChar.gameChar_x - 30, gameChar.gameChar_y + 100  - 50, gameChar.gameChar_x + 30, gameChar.gameChar_y + 100  - 50); // dress
	fill(169, 169, 169);
	rect(gameChar.gameChar_x + 2, gameChar.gameChar_y + 100  - 50, 5, 21); //right leg
	rect(gameChar.gameChar_x + 2, gameChar.gameChar_y + 100  - 50 + 21, 21, 5);
	fill(255, 250, 250);
	rect(gameChar.gameChar_x - 2, gameChar.gameChar_y + 100  - 50, 5, 21); //left leg
	rect(gameChar.gameChar_x - 2, gameChar.gameChar_y + 100  - 50 + 21, 21, 5); //left leg
}


function right()
{
		//Character - RIGHT
	stroke(255, 250, 250);
	strokeWeight(gameChar.gameChar_head);
	point(gameChar.gameChar_x, gameChar.gameChar_y); //head
	stroke(0, 0, 0);
	strokeWeight(10);
	point(gameChar.gameChar_x + 10, gameChar.gameChar_y); //left eye
	noStroke();
	fill(255, 250, 250);
	triangle(gameChar.gameChar_x, gameChar.gameChar_y + 15, gameChar.gameChar_x - 30, gameChar.gameChar_y + 100, gameChar.gameChar_x + 30, gameChar.gameChar_y + 100); // dress
	fill(169, 169, 169);
	rect(gameChar.gameChar_x + 2, gameChar.gameChar_y + 100, 5, 42); //right leg
	fill(255, 250, 250);
	rect(gameChar.gameChar_x - 2, gameChar.gameChar_y + 100, 5, 42); //left leg
}


function right_jump()
{
		//Character - RIGHT JUMP
	stroke(255, 250, 250);
	strokeWeight(gameChar.gameChar_head);
	point(gameChar.gameChar_x, gameChar.gameChar_y - 50); //head
	stroke(0, 0, 0);
	strokeWeight(10);
	point(gameChar.gameChar_x + 10, gameChar.gameChar_y - 50); //left eye
	noStroke();
	fill(255, 250, 250);
	triangle(gameChar.gameChar_x, gameChar.gameChar_y + 15 - 50, gameChar.gameChar_x - 30, gameChar.gameChar_y + 100 - 50, gameChar.gameChar_x + 30, gameChar.gameChar_y + 100 - 50); // dress
	fill(169, 169, 169);
	rect(gameChar.gameChar_x - 2, gameChar.gameChar_y + 100 - 50, 5, 21); //right leg
	rect(gameChar.gameChar_x - 2 - 16, gameChar.gameChar_y + 100 - 50 + 21, 21, 5); //right leg
	fill(255, 250, 250);
	rect(gameChar.gameChar_x + 2, gameChar.gameChar_y + 100 - 50, 5, 21); //left leg
	rect(gameChar.gameChar_x + 2 - 16, gameChar.gameChar_y + 100 - 50 + 21, 21, 5); //left leg
}


function front_jump()
{
		//Character - FRONT JUMP
	stroke(255, 250, 250);
	strokeWeight(gameChar.gameChar_head);
	point(gameChar.gameChar_x, gameChar.gameChar_y - 50); //head
	stroke(0, 0, 0);
	strokeWeight(10);
	point(gameChar.gameChar_x + 10, gameChar.gameChar_y - 50); //right eye
	point(gameChar.gameChar_x - 10, gameChar.gameChar_y - 50); //left eye
	noStroke();
	fill(255, 250, 250);
	triangle(gameChar.gameChar_x, gameChar.gameChar_y + 15 - 50, gameChar.gameChar_x - 30, gameChar.gameChar_y + 100  - 50, gameChar.gameChar_x + 30, gameChar.gameChar_y + 100  - 50); // dress
	fill(169, 169, 169);
	rect(gameChar.gameChar_x - 10, gameChar.gameChar_y + 100 - 50 + 21, 5, 7); //shadow left leg
	rect(gameChar.gameChar_x + 5, gameChar.gameChar_y + 100 - 50 + 21, 5, 7); //shadow right leg
	fill(255, 250, 250);
	rect(gameChar.gameChar_x - 10, gameChar.gameChar_y + 100 - 50, 5, 21); //left leg
	rect(gameChar.gameChar_x + 5, gameChar.gameChar_y + 100 - 50, 5, 21); //right leg
}


function front()
{
		//Character - FRONT
	stroke(255, 250, 250);
	strokeWeight(gameChar.gameChar_head);
	point(gameChar.gameChar_x, gameChar.gameChar_y); //head
	stroke(0, 0, 0);
	strokeWeight(10);
	point(gameChar.gameChar_x + 10, gameChar.gameChar_y); //right eye
	point(gameChar.gameChar_x - 10, gameChar.gameChar_y); //left eye
	noStroke();
	fill(255, 250, 250);
	triangle(gameChar.gameChar_x, gameChar.gameChar_y + 15, gameChar.gameChar_x - 30, gameChar.gameChar_y + 100, gameChar.gameChar_x + 30, gameChar.gameChar_y + 100); // dress
	rect(gameChar.gameChar_x - 10, gameChar.gameChar_y + 100, 5, 42); //left leg
	rect(gameChar.gameChar_x + 5, gameChar.gameChar_y + 100, 5, 42); //right leg
}