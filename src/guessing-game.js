class GuessingGame {

    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        console.log(min);
        console.log(max);
    }

    guess() {
        console.log('guess = ' + (Math.round((this.min + this.max) / 2)));
        return (Math.round((this.min + this.max) / 2));
    }

    lower() {
        this.max = (Math.round((this.min + this.max) / 2));
        console.log('lowerMax' + this.max);
    }

    greater() {
        this.min = (Math.round((this.min + this.max) / 2));
        console.log(' greaterMin' + this.min);
    }

}

module.exports = GuessingGame;
