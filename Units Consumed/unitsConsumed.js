function unitsConsumed(n) {
     let cost = n-80;
     if (cost <= 150){
         console.log(cost/3);
     }
     else if(cost <= 650){
         console.log(50 + (cost-150)/5);
     }
     else{
         console.log(150 + (cost-650)/10);
     }
}