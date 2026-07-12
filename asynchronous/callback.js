const paymentSuccess = true;
const marks = 80;

function enroll(callback) {
    console.log("Course enrollment is in progress");

    setTimeout(function () {
        if (paymentSuccess) {
            console.log("Payment is successful...");
            callback();
        } else {
            console.log("Payment failed!");
        }
    }, 2000);
}

function progress(callback) {
    console.log("Course on progress...");

    setTimeout(function () {
        if (marks >= 80) {
            console.log("You get enough marks..");
            callback();
        } else {
            console.log("You could not get enough marks to get the certificate");
        }
    }, 3000)
}

function getCertificate() {
    console.log("Preparing your certificate! ");

    setTimeout(function () {
        console.log("Congrats! You got the certificate");
    }, 1000)
}

// send an anonimach function inside enroll and inside that function send progress as callback with progress perameter getCertificate
enroll(function () {
    progress(getCertificate);
})