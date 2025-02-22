//your JS code here. If required.
function daysOfAYear(input){
	if(input%400===0)
		return true;
	else if(input%4===0 && input%100===0)
		return true;
	else 
		return false;
		
}