function loadingBar(percentage) {
    if (percentage < 0 || percentage > 100) {
        console.log("Input percentage must be between 0 and 100.");
        return;
    }

    const filledBlocks = Math.floor(percentage / 10);
    const emptyBlocks = 10 - filledBlocks;

    const loadingBar = '[' + '%'.repeat(filledBlocks) + '.'.repeat(emptyBlocks) + ']';

    if (percentage < 100) {
        console.log(percentage + '% ' + loadingBar);
        console.log("Still loading...");
    } else {
        console.log("100% Complete!");
        console.log(loadingBar);
    }
}

loadingBar(100);
