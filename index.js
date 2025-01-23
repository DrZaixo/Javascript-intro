function gototwo() {
    location.href="second.html"
}

function gotothree() {
    location.href="third.html"
}

function checkValues() {
    const answer = document.getElementById("svar").value;

    if(answer.includes("Nf3+")) {
        alert("Riktig! Trykk OK for neste puzzle")
        gototwo()
    } else {
        alert("feil prøv igjen")
    }
}

function check2() {
    const answer2 = document.getElementById("svar2").value;

    if(answer2.includes("Rb6")) {
        alert("riktig")
        gotothree()
    } else {
        alert("feil prøv igjen")
    }
}
