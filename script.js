function shortcut(s1, s2) {
  // your code here
	  if(s1.length === 0 || s2.length === 0){
        return "";
    }

    let st1 = s1.slice(0,1);
    let st2 = s2.slice(0,1);
    
   return st1+st2;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
