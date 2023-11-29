class DonutMaker {
    constructor() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
        this.multiplierCount = 0;
        this.multiplier = 1;
        this.multiplierCost = 10;
    }

    makeDonuts() {
        this.donutCount += this.multiplier;
    }

    canBuyAutoClicker() {
        return this.donutCount >= this.autoClickerCost;
    }

    buyAutoClicker() {
        if (this.canBuyAutoClicker()) {
            this.autoClickerCount++;
            this.donutCount -= this.autoClickerCost;
            this.autoClickerCost += this.autoClickerCost * 0.1;
        }
    }

    startAutoClicker(updateFunction) {
        setInterval(() => {
            this.activateAutoClicker();
            updateFunction();
        }, 1000);
    }

    activateAutoClicker() {
        this.donutCount += this.autoClickerCount * this.multiplier;
    }

    canBuyMultiplier() {
        return this.donutCount >= this.multiplierCost;
    }

    buyMultiplier() {
        if (this.canBuyMultiplier()) {
            this.multiplierCount++;
            this.multiplier = 1.2 ** this.multiplierCount;
            this.donutCount -= this.multiplierCost;
            this.multiplierCost += this.multiplierCost * 0.1;
        }
    }

    resetGame() {
        this.donutCount = 0;
        this.autoClickerCount = 0;
        this.autoClickerCost = 100;
        this.multiplierCount = 0;
        this.multiplier = 1;
        this.multiplierCost = 10;
    }
}
