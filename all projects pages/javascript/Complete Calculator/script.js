var defaultvalue = "";
var junaid = document.getElementById('txtbox');
function addvalue(first){
    
    defaultvalue+= first;
    junaid.value = defaultvalue;
    // var result = junaid.defaultvalue;
    
}

function calculate(){
    junaid.value = eval(defaultvalue);
    defaultvalue = '';
}

function clear1(){
   
    junaid.value ="";
    defaultvalue = "";
}

function remove(){
    defaultvalue = defaultvalue.slice(0, -1); // Remove the last character from defaultvalue
    junaid.value = defaultvalue; // Update the input value
}


    function removeterm() {
        // Split the expression into an array of terms based on operators (+, -, *, /)
        let terms = defaultvalue.split(/([+\-*/])/);
    
        // Remove any empty string elements from the array
        terms = terms.filter(term => term.trim() !== '');
    
        // Remove the last term from the array
        terms.pop();
    
        // Join the remaining terms back into an expression
        defaultvalue = terms.join('');
    
        // Update the input value
        junaid.value = defaultvalue;
    }
    
