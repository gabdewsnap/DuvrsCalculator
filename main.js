document.querySelector('#calculate').addEventListener('click', checkRoute);

//Creates two arrays - One with the different route options and the other with the correspon ding values for the routes.
function checkRoute(){
	let route = document.querySelector('select').value;

	let array= ['cityOne', 'cityTwo', 'cityThree', 'cityFour', 'cityFive', 'citySix', 'citySeven', 'cityEight', 'cityNine', 'cityTen', 'cityEleven'];
	let duvrsAndPackages = [[2655,74], [2614, 61], [2653, 62], [1990, 57], 
						[2610, 69], [2471, 64], [2794, 56], [1825, 51], 
						[3415, 79], [2545, 58], [2788, 51]];

	for(let i = 0; i < array.length; i++ ){
		if(array[i] == route){
			timeDifference(duvrsAndPackages[i][0], duvrsAndPackages[i][1]);
		}	
	}
}

function timeDifference(duvrsAverage, packagesAverage){
	//Average number of duvrs(mail) and packages for routes 1 through 11
	let duvrsForToday = document.querySelector('#duvrs').value.trim();
	let packagesForToday = document.querySelector('#packages').value.trim();

	if(duvrsForToday.length == 0 || packagesForToday.length == 0){
		alert("Please fill out all information")
		return;
	}

	addBackground();

	//So 250 duvrsTime(letters) = 10min and 1 package = 2min
	let duvrsDifference = duvrsAverage - duvrsForToday;
	let packagesDifference = packagesAverage - packagesForToday;

	document.getElementById('mathShown').innerHTML= `Duvrs Average: ${duvrsAverage} - ${duvrsForToday} = ${duvrsDifference}`;
	document.getElementById('mathShown2').innerHTML= `${duvrsDifference} / 250 = ${duvrsDifference/250}`;
	
	let duvrsDifferenceCalc = ( duvrsDifference / 250 ) * -10;
	packagesDifference = packagesDifference * -1

	document.getElementById('mathShown3').innerHTML =`${Math.floor(duvrsDifference/250)} * 10 =  ${Math.floor(duvrsDifferenceCalc)} | ${Math.floor(duvrsDifferenceCalc)} + ${packagesDifference} = ${Math.floor(duvrsDifferenceCalc+packagesDifference)}`;

	let timeDifference = (Math.floor(duvrsDifferenceCalc + packagesDifference));		

	resultsDisplayed(timeDifference);
}

//Displays the time difference from average on the page
function resultsDisplayed(timeDifference){

	document.getElementById('routeAverage').innerHTML = '';

	if(timeDifference < 0){
		timeDifference = timeDifference * -1;
		document.getElementById('routeAverage').innerHTML =`It will take you ${timeDifference} min less than average.`
	}
	else if (timeDifference > 0){
		
		document.getElementById('routeAverage').innerHTML = `It will take you ${timeDifference} min more than average.`
	}
	else{
		document.getElementById('routeAverage').innerHTML = `It will take you the same time as average.`
	}
}

function addBackground(){
	document.querySelector('#image').style.backgroundImage = "url('assets/backLetter.png')";
}	