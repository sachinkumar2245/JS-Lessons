// whenever we give some code to js it forms a gobal ec (must)

// 1. GEC also called as global execution environment
// 2. FEC
// 3. Eval execution context



let val1= 10;
let val2=20;

function addNum(num1,num2){
    let total = num1 + num2;
    return total
}

let result1= console.log(addNum(val1, val2));
let result2= addNum(2,3);

 /*
 {} its the **** memory allocation phase ****
    here it will go throught the code line by line and firstly
    creating-- val1 & val2 
                undefined into the GEC

    addNum --> it stores the definition of the function rather undefined

    result1 --> undefined

    result2 --> undefined

    *** Execution Phase ***

    val1 - 10 
    val2 - 20

    when it hits the result1 it calls for addNum function 

        here it will create a new variable environment + 
                                  Execution thread 
                                  also called as a new executional context
            
            now a again a new memory alloation phase     execution context
                    val1 --> undefined              !    num1 --> 10
                    val2 --> undefined              !    num2 --> 20
                    total --> undefined             !    total--> 30 (this get returned to the GEC)
    
    after the execution of it the newly created execution context will be deleted from the memory


        !                  !
        !                  !
        !                  !
        !!
        !__________________!
        ! global exec      !        
        !__________________!



    

 */
