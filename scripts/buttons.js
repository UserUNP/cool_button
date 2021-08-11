var bonus_sfx=0;
var lightswitch = false;
var secret_button=false;
var idk_what_to_name_this_lol;
var secret_secret_button=false;
var secret_secret_secret_button=false;
const Http = new XMLHttpRequest();

Http.open("GET","https://api.ipify.org/");
Http.send();
Http.onreadystatechange = (e) => {
  idk_what_to_name_this_lol = (Http.responseText);
}

function buttonClick(type) {
switch (type) {
	case 'default':
		if (!secret_button) {
			if (bonus_sfx >= 5) {
				new Audio("sounds/click1_bonus.mp3").play();
				secret_button=true;
				bonus_sfx=0;
				
				var hiddenbutton = document.createElement("BUTTON");
				hiddenbutton.setAttribute("id", "hiddenbutton");
				hiddenbutton.setAttribute("onclick", "buttonClick('smol')");
				hiddenbutton.classList.add("button");
				hiddenbutton.innerText = "Button";
				document.body.appendChild(hiddenbutton);
				const secret_reveal = new Audio("sounds/secret_reveal.mp3");
				secret_reveal.volume = 0.15;
				secret_reveal.play();
				break;
			}
			bonus_sfx++;
		}
		new Audio("sounds/click1.mp3").play();
		break
	case 'smol':
		if (!secret_secret_button) {
			console.log(bonus_sfx)
			if (bonus_sfx >= 10) {
				new Audio("sounds/click1_bonus.mp3").play()
				secret_secret_button=true;
				bonus_sfx=0;
				
				var hiddenbutton = document.createElement("BUTTON");
				hiddenbutton.setAttribute("id", "hiddenbutton2");
				hiddenbutton.setAttribute("onclick", "buttonClick('smoller')");
				hiddenbutton.classList.add("button");
				hiddenbutton.innerText = "Button";
				document.body.appendChild(hiddenbutton);
				const secret_reveal = new Audio("sounds/secret_reveal.mp3");
				secret_reveal.volume = 0.25;
				secret_reveal.play();
				break;
			}
			bonus_sfx++;
		}
		new Audio("sounds/click2.mp3").play();
		break
	case 'smoller':
		if (!secret_secret_secret_button) {
			console.log(bonus_sfx)
			if (bonus_sfx >= 10) {
				new Audio("sounds/click1_bonus.mp3").play()
				secret_secret_button=true;
				bonus_sfx=0;
				
				var hiddenbutton = document.createElement("BUTTON");
				hiddenbutton.setAttribute("id", "hiddenbutton3");
				hiddenbutton.setAttribute("onclick", "buttonClick('epic secret secret secret button')");
				hiddenbutton.classList.add("button");
				hiddenbutton.innerText = "Secret";
				document.body.appendChild(hiddenbutton);
				const secret_reveal = new Audio("sounds/secret_reveal.mp3");
				secret_reveal.volume = 0.25;
				secret_reveal.play();
				break;
			}
			bonus_sfx++;
		}
		new Audio("sounds/click2_alt.mp3").play();
		break
	case 'epic secret secret secret button':
		new Audio("sounds/click.mp3").play();
		if (lightswitch) {
			lightswitch = false;
			document.body.style.backgroundColor = "white";
			document.getElementById("title???").style.color = "black";
			document.getElementById("title???").innerHTML = "Random stupid website";
		}else {
			lightswitch = true;
			document.body.style.backgroundColor = "black";
			document.getElementById("title???").style.color = "white";
			document.getElementById("title???").innerHTML = idk_what_to_name_this_lol;
		}
		
		break
	
}
}