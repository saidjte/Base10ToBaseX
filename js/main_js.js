function convert(){
    function calc(base) {
    let decimal = document.getElementById("decimal").value;
    let modi="";
    while (parseInt(decimal)/base > 0) {
            if (base === 16) {
                if (parseInt(decimal) % base < 10) {
                    modi = modi + (parseInt(decimal) % base );
                } else if (parseInt(decimal) % base === 10) {
                    modi = modi + "A";
                }else if (parseInt(decimal) % base === 11) {
                    modi = modi + "B";
                }else if (parseInt(decimal) % base === 12) {
                    modi = modi + "C";
                }else if (parseInt(decimal) % base === 13) {
                    modi = modi + "D";
                }else if (parseInt(decimal) % base === 14) {
                    modi = modi + "E";
                }else if (parseInt(decimal) % base === 15) {
                    modi = modi + "F";
                }
            } else {
                modi = modi + (parseInt(decimal) % base );
            }
        decimal = parseInt(decimal)/base;
    }
    function reverseString(str) {
        return str.split("").reverse().join("");
    }       
    
    return reverseString(modi)
}
    document.getElementById("binary").innerHTML = calc(2);
    document.getElementById("octal").innerHTML = calc(8);
    document.getElementById("hexadecimal").innerHTML = calc(16);
}
