function splitBill() {
    var costTotal = document.getElementById("cost").value;
    var people = document.getElementById("people").value;
    var serviceLvl = document.getElementById("serviceLvl").value;
    switch (parseInt(serviceLvl)) {
        case 3:
            var tipPercent = 0.20;
            break;
        case 2:
            var tipPercent = 0.15;
            break;
        case 1:
            var tipPercent = 0.10;
            break;
        case 0:
            var tipPercent = 0.05;
            break;
    }

    costPerPerson = (costTotal/people);
    tipPerPerson = (tipPercent*costPerPerson);

    billData =  "Tip Rate: "+(tipPercent*100)+"%\n";
    billData += "Each person pays:\n";
    billData += "$"+costPerPerson.toFixed(2)+" (bill)\n";
    billData += "$"+tipPerPerson.toFixed(2)+" (tip)\n";
    billData += "---------------------\n";
    billData += "$"+(costPerPerson+tipPerPerson).toFixed(2);

    // display strict split of bill and tip amount per person
    alert(billData);
}
