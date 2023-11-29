// Header Elements
const companyInfoBtn = document.getElementById("company-info-button");
const companyInfo = document.getElementById("company-info");
const developerInfoBtn = document.getElementById("developer-info-button");
const developerInfo = document.getElementById("developer-info");

// Main Section Display Elements
const donutCountDisplay = document.getElementById("donut-count");
const autoClickerCountDisplay = document.getElementById("auto-clicker-count");
const autoClickerCostDisplay = document.getElementById("auto-clicker-cost");
const multiplierCountDisplay = document.getElementById("multiplier-count");
const multiplierCostDisplay = document.getElementById("multiplier-cost");
const donutMultiplier = document.getElementById("donut-multiplier");

// Main Section Button Elements
const makeDonutsButton = document.getElementById("make-donuts");
const buyAutoClickerButton = document.getElementById("auto-clicker-button");
const buyMultiplierButton = document.getElementById("multiplier-button");
const resetButton = document.getElementById("reset-button");

const donutMaker = new DonutMaker();
donutMaker.startAutoClicker(updateUI);
updateUI();

function updateUI() {
    donutCountDisplay.textContent = Math.floor(donutMaker.donutCount);
    donutMultiplier.textContent = donutMaker.multiplier.toFixed(1);
    autoClickerCountDisplay.textContent = donutMaker.autoClickerCount;
    autoClickerCostDisplay.textContent = Math.ceil(donutMaker.autoClickerCost);
    multiplierCountDisplay.textContent = donutMaker.multiplierCount;
    multiplierCostDisplay.textContent = Math.ceil(donutMaker.multiplierCost);
    console.log(donutMaker.donutCount);
    console.log(donutMaker.multiplierCost);

    buyAutoClickerButton.disabled = !(donutMaker.canBuyAutoClicker());
    buyMultiplierButton.disabled = !(donutMaker.canBuyMultiplier());
}


companyInfoBtn.onclick = function () {
    if (companyInfo.style.display === "none") {
        companyInfo.style.display = 'block';
    } else {
        companyInfo.style.display = 'none';
    }
}

developerInfoBtn.onclick = function () {
    if (developerInfo.style.display === "none") {
        developerInfo.style.display = 'block';
    } else {
        developerInfo.style.display = 'none';
    }
}

resetButton.onclick = function () {
    donutMaker.resetGame();
    updateUI();
}

makeDonutsButton.onclick = function () {
    donutMaker.makeDonuts();
    updateUI();
}

buyAutoClickerButton.onclick = function () {
    donutMaker.buyAutoClicker();
    updateUI();
}

buyMultiplierButton.onclick = function () {
    donutMaker.buyMultiplier();
    updateUI();
}
