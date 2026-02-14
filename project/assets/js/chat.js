window.onload = function () {

    var sendBtn = document.getElementById("sendBtn");
    var input = document.getElementById("messageInput");
    var chat = document.getElementById("chatBody");

    sendBtn.onclick = function () {

        var text = input.value.trim();
        if (text === "") return;

        var msg = document.createElement("div");
        msg.className = "msg sent";

        msg.innerHTML =
            '<div class="bubble blue">' + text + '</div>' +
            '<img class="avatar" src="https://i.imgur.com/Z6X6M5F.png">';

        chat.appendChild(msg);
        input.value = "";
        chat.scrollTop = chat.scrollHeight;
    };

};


