function convertBase1OToBasex() {
    
    /** ====== virgule ou pas ======= */
    function calc(base) {
        var thenumber = parseFloat(document.getElementById("decimal").value);

        if (a_virgule(thenumber) > 0)
        {
            var p_decimal = Math.trunc(thenumber);
            var p_virgule = a_virgule(thenumber);
            var pati_gauche = calc_pati_gauche(base,p_decimal);
            var pati_droit = calc_p_v(base,p_virgule);
            return pati_gauche + "." + pati_droit;
        } else {
            return calc_pati_gauche(base,thenumber);
        }
    }
    
    
    /* ======================= outils =======================*/
    
    function a_virgule(n_virgule) {
        return (n_virgule % 1).toFixed(4);
    }
    
function hexa_number(modilo) {
    var r_hexa_number ;
    if (modilo < 10) {
        r_hexa_number = modilo;
    } else if (modilo === 10) {
        r_hexa_number = "A";
    }else if (modilo === 11) {
        r_hexa_number = "B";
    }else if (modilo === 12) {
        r_hexa_number = "C";
    }else if (modilo === 13) {
        r_hexa_number = "D";
    }else if (modilo === 14) {
        r_hexa_number = "E";
    }else if (modilo === 15) {
        r_hexa_number = "F";
    }
    return r_hexa_number;
}
    
    /** ========================= function normal =============================== */   
        
     function calc_pati_gauche(base,decimal) {
        let modi="";
        while (parseInt(decimal)/base > 0) {
                    if (base === 16) {
                        modi = modi + hexa_number(parseInt(decimal) % base);
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
    
    
    
     /** ========================= function virgule =============================== */   
    
     function calc_p_v(base,pati_virgule){
         var i = 1;
         var basexd = "";
         while (i <= 4) {
            var num = pati_virgule*base;
            pati_virgule = num - Math.trunc(num);
            if (base === 16) {
                basexd = basexd + hexa_number(Math.trunc(num));
            } else {
                basexd = basexd + Math.trunc(num);
            }
            i++;
         }
         
          return basexd;
       }
    
    
    
    /* ================== Affictation ====================== */
    
            document.getElementById("binary").innerHTML = calc(2);
            document.getElementById("octal").innerHTML = calc(8);
            document.getElementById("hexadecimal").innerHTML = calc(16);
    
    }

    
    