
var qouteList = ['“ Darkness cannot drive out darkness: only light can do that. <br> Hate cannot drive out hate: only love can do that. ” <br><br> -  Martin Luther King Jr -' ,
                 '“ Live as if you were to die tomorrow. Learn as if you were to live forever. ” <br><br> - Mahatma Gandhi -' ,
                 '“ To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. ” <br><br> - Ralph Waldo Emerson -' ,
                 '“ It is better to be hated for what you are than to be loved for what you are not. ” <br><br> - Andre Gide, Autumn Leaves -' ,
                 '“ It is our choices, Harry, that show what we truly are, far more than our abilities. ” <br><br> - J.K. Rowling, Harry Potter and the Chamber of Secrets -' ,
                 "“ We are all in the gutter, but some of us are looking at the stars. ” <br><br> - Oscar Wilde, Lady Windermere's Fan -" ,
                 '“ Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present. ” <br><br> - Bill Keane -'];

var lastQoute = null;

function displayQoute() {
    document.getElementById('quoteText').innerHTML = `<p class="w-75 mx-auto third-font text-warning my-5 pt-5">${generateQoute()}</p>`;
}

function generateQoute() {
    var nextQoute = qouteList[Math.floor(Math.random() * qouteList.length)];

    if (nextQoute === lastQoute) {
        return generateQoute();
    }
    else {
        lastQoute = nextQoute;
        return nextQoute;
    }
}

