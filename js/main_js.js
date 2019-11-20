function convert(){
    function calc(base) {
    let decimal = document.getElementById("decimal").value;
    let modi="";
    while (parseFloat(decimal)/base > 0) {
            if (base === 16) {
                if (parseFloat(decimal) % base < 10) {
                    modi = modi + (parseFloat(decimal) % base );
                } else if (parseFloat(decimal) % base === 10) {
                    modi = modi + "A";
                }else if (parseFloat(decimal) % base === 11) {
                    modi = modi + "B";
                }else if (parseFloat(decimal) % base === 12) {
                    modi = modi + "C";
                }else if (parseFloat(decimal) % base === 13) {
                    modi = modi + "D";
                }else if (parseFloat(decimal) % base === 14) {
                    modi = modi + "E";
                }else if (parseFloat(decimal) % base === 15) {
                    modi = modi + "F";
                }
            } else {
                modi = modi + (parseFloat(decimal) % base );
            }
        decimal = parseFloat(decimal)/base;
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
