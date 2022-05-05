function underscoreToCamelCase(str){
    let camelCase = '';

    let wordArray = str.split(/[_]/g);
    for(let i in wordArray){
        if(i == 0){
            camelCase += wordArray[i];
        }
        else{
            camelCase += wordArray[i].charAt(0).toUpperCase() + wordArray[i].slice(1);
        }
    }
    console.log(camelCase);
}

let str = "my_income_tax_from_2015";
underscoreToCamelCase(str);