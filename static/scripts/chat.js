// Collapsible





var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    let time = hours + ":" + minutes;
    return time;
}

// Gets the first message
function firstBotMessage() {
    let firstMessage = "Press <br/> 1) Beti Bachao Scheme <br/> 2) Vahali Dikri Yojana <br/> 3) Saraswati Sadhana Yojana <br/> 4) Janani Suraksha Yojana <br/> 5) Janani Shishu Suraksha Yojana <br/> 6) Fish Enterpreneur Yojana <br/> 7) Sakhi Mandal Yojana <br/> 8) Chiranjevi Yojana <br/> 9) Sat Fera Samuh Yojana <br/> 10) Kunverbai Mameru Yojana <br/> 11) Vidhva Sahay Ane Talim Yojana <br/> 12) Swayam Sidh Yojana <br/> 13) Kishori Shakti Yojana <br/> 14) Balika Samruddhi Yojana <br/> 15) Gaurav Nari Niti Yojana <br/> 16) Pradhan Mantri Matru Vandana Yojana <br/> 17) Pradhan Mantri Ujjwala Yojana <br/>&nbsp; &nbsp;Main menu-m <br/>&nbsp; &nbsp;Refresh chatbot-r <br/>&nbsp; &nbsp;Address-a1"
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHtml = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHtml);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

//Gets the text text from the input box and processes it
function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText = "You entered invalid input!";
    }

    let userHtml = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    }, 1000)

}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
    let userHtml = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHtml);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    //Uncomment this if you want the bot to respond to this buttonSendText event
    setTimeout(() => {
        getHardResponse(sampleText);
    }, 1000)
}

function sendButton() {
    getResponse();
}

// function heartButton() {
//     buttonSendText("Heart clicked!")
// }

// Press enter to send a message
$("#textInput").keypress(function (e) {
    if (e.which == 13) {
        getResponse();
    }
});