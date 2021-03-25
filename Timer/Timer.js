var start = document.getElementById('start');
var stop = document.getElementById('stop');
var reset = document.getElementById('reset');

var mins;
var name;

function initialize(){
mins=document.getElementById('mins').value;
console.log(mins);
document.getElementById('minutes').innerHTML=mins;
name=document.getElementById('name').value;
console.log(name);
document.getElementById('workout').innerHTML="Remaining Time for "+name+" is : ";
}
	
	var min = document.getElementById('minutes');
	var sec = document.getElementById('seconds');
	
	var startTimer;
	
	start.addEventListener('click', function(){
	    if(startTimer === undefined){
	    				
	        startTimer = setInterval(timer, 1000)
	    } else {
	        alert("Timer is already running");
	    }
	})
	
	reset.addEventListener('click', function(){
		min.innerText=mins;
	    //min.innerText = mins;
	    sec.innerText = "00";
	
	    stopInterval()
	    startTimer = undefined;
	})
	
	stop.addEventListener('click', function(){
	    stopInterval()
	    startTimer = undefined;
	})
	
	
	//Start Timer Function
	function timer(){
	    //Work Timer Countdown
	    if(sec.innerText != 0){
	        sec.innerText--;
	    } else if(min.innerText != 0 && sec.innerText == 0){
	        sec.innerText = 59;
	        min.innerText--;
	    }
	
	    if(min.innerText == 0 && sec.innerText == 0 ){  
			min.innerText=mins;
	        sec.innerText = "00";
	
	        document.getElementById('counter').innerText++;
	    }
	}
	
	
	function stopInterval(){
	    clearInterval(startTimer);
	}
