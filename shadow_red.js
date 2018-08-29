var coordinat_shadow_x = 0;
var shadow_x = +25;
var shadow_y = +28;
var commands = [];
var shagi=0;
var command;
function chasing(){
	if(life==0){
		return;
	}
	if(shadow_x==pacman_x && shadow_y==pacman_y){
		pacman_x=0;
		pacman_y=0;
		pacman.style.top=0;
		pacman.style.left=0;
		life=life-1;
		hearts[life].style.display="none";
		if(life==0){
			var gameover = document.querySelector('.gameover');
			gameover.style.display = "block"
		}
		else{
			death.style.display = "block";
		}
	}
	var options = getComputedStyle(shadow);
	if(command==null){
		commands = ["nalevo","napravo","vverh","vniz"];
		var i = Math.floor(Math.random()*commands.length);
		console.log(commands[i]);
		shagi = 0;
		command = commands[i]
	}
			console.log(command);
			if(command=='nalevo'){
				coordinat_shadow_x = +options.left.replace("px","");
				coordinat_shadow_y = +options.top.replace("px","");
				if (shadow_x>0 && map[shadow_y][shadow_x-1]==0){
					shadow_x = shadow_x-1;
					shadow.style.left =	coordinat_shadow_x - 25 +"px";
				}
				else{
					command=null;
					return chasing();
					
				}	
			}
			if(command=='napravo'){
				coordinat_shadow_x = +options.left.replace("px","");
				coordinat_shadow_y = +options.top.replace("px","");
				if (shadow_x<25 && map[shadow_y][shadow_x+1]==0){
					shadow_x = shadow_x+1;
					shadow.style.left =	coordinat_shadow_x + 25 +"px";
				}
				else{
					command=null;
					return chasing();
				}
			}
			if(command=='vverh'){
				coordinat_shadow_x = +options.left.replace("px","");
				coordinat_shadow_y = +options.top.replace("px","");
				if (shadow_y>0 && map[shadow_y-1][shadow_x]==0){
					shadow_y = shadow_y-1;
					shadow.style.top =	coordinat_shadow_y - 25 +"px";
				}
				else{
					command=null;
					return chasing();
				}
			}
			if(command=='vniz'){
				coordinat_shadow_x = +options.left.replace("px","");
				coordinat_shadow_y = +options.top.replace("px","");
				if (shadow_y<28 && map[shadow_y+1][shadow_x]==0){
					shadow_y = shadow_y+1;
					shadow.style.top =	coordinat_shadow_y + 25 +"px";
				}
				else{
					command=null;
					return chasing();
				}
			}
			if(command=='nalevo'){
				if (shadow_y>0 && map[shadow_y-1][shadow_x]==0){
					var random = Math.floor(Math.random()*2);
					if(random==1){
						command='vverh';
					}
					if(random==0){
						command='nalevo';
					}
				}
				if(command!='vverh'){
					if (shadow_y<28 && map[shadow_y+1][shadow_x]==0){
						var random = Math.floor(Math.random()*2);
						if(random==1){
							command='vniz';
						}
						if(random==0){
							command='nalevo';
						}
					}
				}
				return
			}
			if(command=='napravo'){
				if (shadow_y>0 && map[shadow_y-1][shadow_x]==0){
					var random = Math.floor(Math.random()*2);
					if(random==1){
						command='vverh';
					}
					if(random==0){
						command='napravo';
					}
				}
				if(command!='vverh'){
					if (shadow_y<28 && map[shadow_y+1][shadow_x]==0){
						var random = Math.floor(Math.random()*2);
						if(random==1){
							command='vniz';
						}
						if(random==0){
							command='napravo';
						}
					}
				}
				return
			}
			if(command=='vverh'){
				if (shadow_x>0 && map[shadow_y][shadow_x-1]==0){
					var random = Math.floor(Math.random()*2);
					if(random==1){
						command='nalevo';
					}
					if(random==0){
						command='vverh';
					}
				}
				if(command!='nalevo'){
					if (shadow_x<25 && map[shadow_y][shadow_x+1]==0){
						var random = Math.floor(Math.random()*2);
						if(random==1){
							command='napravo';
						}
						if(random==0){
							command='vverh';
						}
					}
				}
				return
			}
			if(command=='vniz'){
				if (shadow_x>0 && map[shadow_y][shadow_x-1]==0){
					var random = Math.floor(Math.random()*2);
					if(random==1){
						command='nalevo';
					}
					if(random==0){
						command='vniz';
					}
				}
				if(command!='nalevo'){
					if (shadow_x<25 && map[shadow_y][shadow_x+1]==0){
						var random = Math.floor(Math.random()*2);
						if(random==1){
							command='napravo';
						}
						if(random==0){
							command='vniz';
						}
					}
				}
				return
			}
			shagi++;	
			console.log(command);
		}	
		setInterval(chasing,250);	
		