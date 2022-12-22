const iSigma = (sig) => {
    var iSigma = 0;
    
    for (i = 0; i < sig; i++) {
        console.log(i)
        iSigma += i;
    }
    console.log("The Sigma is ", iSigma);
}
iSigma(8);

