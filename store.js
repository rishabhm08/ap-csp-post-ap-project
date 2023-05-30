let bigMacQty = 0;
let mcnuggetQty = 0;
let icedMochaQty = 0; 
let totalCost = 0;
let roundedTotalCost = 0;
localStorage.setItem("bigMacQty", bigMacQty);
localStorage.setItem("mcnuggetQty", mcnuggetQty);
localStorage.setItem("icedMochaQty", icedMochaQty);
localStorage.setItem("roundedTotalCost", roundedTotalCost);



function bigMac() {
    bigMacQty++;
    localStorage.setItem("bigMacQty",  bigMacQty);
}

function mcnugget() {
    mcnuggetQty++;
    localStorage.setItem("mcnuggetQty", mcnuggetQty);
}

function icedMocha() {
    icedMochaQty++;
    localStorage.setItem("icedMochaQty", icedMochaQty);
}

function addedToCartBigMac() {
    alert("Added a Big Mac to cart!");
}
function addedToCartMcNugget() {
    alert("Added a 10 pc McNugget to cart!");
}
function addedToCartMocha() {
    alert("Added an Iced Mocha to cart!");
}




