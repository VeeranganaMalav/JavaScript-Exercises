function timeConversion(seconds){
    let hours = Math.floor(seconds/3600);
    let minutes = Math.floor( (seconds%3600)/60 );
    let secs = (seconds%3600) % 60;
    
    return (hours + "hr(s)" + minutes + "min(s)" + secs + "sec(s)");
}

console.log(timeConversion(4353636));