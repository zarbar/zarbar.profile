$(document).ready(function () {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize() {
    if ($("#contact-icons-small").css("display") == "inline") {
        document.getElementById("zara-kletz") = "ZK";
    }
}

// The CSS
//     .sampleClass { float: left; }
// @media only screen and(max - width: 800px){
// 	.sampleClass { float: none; }
// }