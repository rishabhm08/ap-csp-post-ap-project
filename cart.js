let bigMacQty = localStorage.getItem("bigMacQty");
let mcnuggetQty = localStorage.getItem("mcnuggetQty");
let icedMochaQty = localStorage.getItem("icedMochaQty");

let displayBigMacQty = "Big Mac - $5.99 [" + bigMacQty + "]";
let displayMcnuggetMacQty = "10 pc McNuggets - $4.99 [" + mcnuggetQty + "]";
let displayIcedMochaQty = "Iced Mocha - $3.50 [" + icedMochaQty + "]";



document.getElementById('listOfItems').innerHTML += ('<li id="bigMacListItem">'+ displayBigMacQty + '<button type= "submit" id="addBigMacBtn" onclick="addBigMacQty(); newtotal()">' + "+" + '</button>' +'<button id="subtractBigMacBtn" onclick="subtractBigMacQty(); newtotal()">' + "-" + '</button>' + '</li>');
document.getElementById('listOfItems').innerHTML += ('<li id="mcnuggetListItem">'+ displayMcnuggetMacQty + '<button type="submit" id="addNuggetBtn" onclick="addMcNuggetQty(); newtotal()">' + "+" + '</button>' +'<button id="subtractNuggetBtn" onclick="subtractMcNuggetQty()">' + "-" + '</button>' + '</li>');
document.getElementById('listOfItems').innerHTML += ('<li id="icedMochaListItem">'+ displayIcedMochaQty +'<button type="submit" id="addMochaBtn" onclick="addMochaQty(); newtotal()">' + "+" + '</button>' +'<button id="subtractMochaBtn" onclick="subtactMochaQty()">' + "-" + '</button>' + '</li>');
newtotal();

function addBigMacQty() {
    bigMacQty++;
    displayBigMacQty = "Big Mac - $5.99 [" + bigMacQty + "]";
    document.getElementById('bigMacListItem').innerHTML = ('<li id="bigMacListItem">'+ displayBigMacQty + '<button type= "submit" id="addBigMacBtn" onclick="addBigMacQty(); newtotal()">' + "+" + '</button>' +'<button id="subtractBigMacBtn" onclick="subtractBigMacQty(); newtotal()">' + "-" + '</button>' + '</li>');
}
function subtractBigMacQty() {
    if(bigMacQty > 0) {
        bigMacQty--;
        displayBigMacQty = "Big Mac - $5.99 [" + bigMacQty + "]";
        document.getElementById('bigMacListItem').innerHTML = ('<li id="bigMacListItem">'+ displayBigMacQty + '<button type= "submit" id="addBigMacBtn" onclick="addBigMacQty(); newtotal()">' + "+" + '</button>' +'<button id="subtractBigMacBtn" onclick="subtractBigMacQty(); newtotal()">' + "-" + '</button>' + '</li>');
    }
    
}

function addMcNuggetQty() {
    mcnuggetQty++;
    displayMcnuggetMacQty = "10 pc McNuggets - $4.99 [" + mcnuggetQty + "]";
    document.getElementById('mcnuggetListItem').innerHTML = ('<li id="mcnuggetListItem">'+ displayMcnuggetMacQty + '<button type= "submit" id="addNuggetBtn" onclick="addMcNuggetQty(); newtotal()">' + "+" + '</button>' +'<button id="subtractNuggetBtn" onclick="subtractMcNuggetQty(); newtotal()">' + "-" + '</button>' + '</li>');
}
function subtractMcNuggetQty() {
    if(mcnuggetQty > 0) {
        mcnuggetQty--; 
        displayMcnuggetMacQty = "10 pc McNuggets - $4.99 [" + mcnuggetQty + "]";
        document.getElementById('mcnuggetListItem').innerHTML = ('<li id="mcnuggetListItem">'+displayMcnuggetMacQty+ '<button type="submit" id="addNuggetBtn" onclick="addMcNuggetQty(); newtotal()">' + "+" + '</button>' +'<button id="subtractNuggetBtn" onclick="subtractMcNuggetQty(); newtotal()">' + "-" + '</button>' + '</li>');
    }
    
}

function addMochaQty() {
    icedMochaQty++;
    displayIcedMochaQty = "Iced Mocha - $3.50 [" + icedMochaQty + "]";
    document.getElementById('icedMochaListItem').innerHTML = ('<li id="icedMochaListItem">'+displayIcedMochaQty+'<button type="submit" id="addMochaBtn" onclick="addMochaQty(); newtotal()">' + "+" + '</button>' +'<button id="subtractMochaBtn" onclick="subtactMochaQty(); newtotal()">' + "-" + '</button>' + '</li>');
}
function subtactMochaQty() {
    if(icedMochaQty > 0) {
        icedMochaQty--;
        displayIcedMochaQty = "Iced Mocha - $3.50 [" + icedMochaQty + "]";
        document.getElementById('icedMochaListItem').innerHTML = ('<li id="icedMochaListItem">'+displayIcedMochaQty+'<button type="submit" id="addMochaBtn" onclick="addMochaQty(); newtotal()">' + "+" + '</button>' +'<button id="subtractMochaBtn" onclick="subtactMochaQty(); newtotal()">' + "-" + '</button>' + '</li>');
    }
}

function newtotal() {
   
        totalCost = (5.99*bigMacQty) + (4.99*mcnuggetQty) + (3.50*icedMochaQty);
        roundedTotalCost = totalCost.toFixed(2);

    document.getElementById('totalLabel').innerHTML = "Total: " + roundedTotalCost;
}