
/*Boolean value is either true or false.
    - Write three JavaScript statement example which provide truthy value.
    - Write three JavaScript statement example which provide falsy value.*/

    //Truthy Value Examples
    //Example-1
    let num1 = 6;
    let num2 = 10;

    if(num1 < num2){
        console.log(true); 
    }else {
        console.log(false);
    }

    //Example-2

 if(num1 + num2 < 20){
        console.log(true); 
    }else {
        console.log(false);
    }

   //Example-3

   if(num1 * num2 <= 70){
    console.log(true);
   } else {
    console.log(false);
}


//Falsy Value Examples
    //Example-1

    if (num1>num2){
        console.log(true);
    } else {
        console.log(false);
    }


    //Example-2

    if (undefined){
        console.log(true);
    } else {
        console.log(false);
    }  

     //Example-3

    if (''){
        console.log(true);
    } else {
        console.log(false);
    }