

let input = document.getElementById("number");


let button = document.getElementById("generate");



function multiply () {

    let inputValue = Number(input.value) ;
    console.log(typeof(inputValue));

    if (inputValue > 0) {

        for(i = 1; i < 11; i++) {
            let value = i * Number(inputValue) ;
            console.log(value);
            const table = document.getElementById("table");

            const tableHeader = document.getElementById("table_header");
            tableHeader.innerHTML = `Multiplication Table Of ${inputValue}`;

            table.innerHTML += ` 
                                        <tr>
                                            <td>  ${inputValue} × ${i} = ${value}</td>
                                            
                                        </tr>
                                    `;
            console.log(table); 

            
        }  

    } else {
        alert ("Please enter a valid number");
    }

    const section = document.getElementById("inner_section");
            
            section.style.width = '80vh';
    
    
}




