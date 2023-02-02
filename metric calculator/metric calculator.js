/** 
* @license ToolScript © 2023 by Hyyped is licensed under CC BY-NC-SA 4.0 
* All Reproduction of this code MUST be a remix and attribution is required 
* Any PUBLIC copy of this work is not legal and a DMCA takedown of said repo or website will be submitted
* WARNING:
* I am not responsible for any trouble you get in for using any of the scripts included in ToolScript© 
**/

for (;;) {
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: kilo and hecto") == true) {
        var kilo = prompt("Enter a kilo conversion number");
        var hecto = prompt("Enter a hecto conversion number");
        var hik = kilo * 10;
        var kih = hecto / 10;
        if (isNaN(hik || kih)) {
            alert("error.invalidSyntax");
        }
        else {
            alert("There are " + hik + " hecto in " + kilo + " kilo.\n\nThere are " + kih + " kilo in " + hecto + " hecto.");
        };
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: hecto and deca") == true) {
        var hecto = prompt("Enter a hecto conversion number");
        var deca = prompt("Enter a deca conversion number");
        var dih = hecto * 10;
        var hid = deca / 10;
        if (isNaN(dih || hid)) {
            alert("error.invalidSyntax");
        }
        else {
            alert("There are " + dih + " deca in " + hecto + " hecto.\n\nThere are " + hid + " hecto in " + deca + " deca.");
        };
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: deca and unit") == true) {
        var deca = prompt("Enter a deca conversion number");
        var unit = prompt("Enter a unit conversion number");
        var uid = deca * 10;
        var diu = unit / 10;
        if (isNaN(uid || diu)) {
            alert("error.invalidSyntax");
        }
        else {
            alert("There are " + uid + " units in " + deca + " deca.\n\nThere are " + diu + " deca in " + unit + " units.");
        };
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: unit and deci") == true) {
        var unit = prompt("Enter a unit conversion number");
        var deci = prompt("Enter a deci conversion number");
        var diun = unit * 10;
        var unid = deci / 10;
        if (isNaN(diun || unid)) {
            alert("error.invalidSyntax");
        }
        else {
            alert("There are " + diun + " deci in " + unit + " units.\n\nThere are " + unid + " units in " + deci + " deci.");
        };
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: deci and centi") == true) {
        var deci = prompt("Enter a deci conversion number");
        var centi = prompt("Enter a centi conversion number");
        var cid = deci * 10;
        var dic = centi / 10;
        if (isNaN(cid || dic)) {
            alert("error.invalidSyntax");
        }
        else {
            alert("There are " + cid + " centi in " + deci + " deci.\n\nThere are " + dic + " deci in " + centi + " centi.");
        };
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
    if(confirm("Confirm to select a metric conversion\nCurrent conversion: centi and milli") == true) {
        var centi = prompt("Enter a centi conversion number");
        var milli = prompt("Enter a milli conversion number");
        var mic = centi * 10;
        var cim = milli / 10;
        if (isNaN(mic || cim)) {
            alert("error.invalidSyntax");
        }
        else {
            alert("There are " + mic + " milli in " + centi + " centi.\n\nThere are " + cim + " centi in " + milli + " milli.");
        };
        if (confirm("Cancel to end process") == false) {
            throw error("Calculation Completed");
        }
    };
};