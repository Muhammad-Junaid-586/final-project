let junaidSelectorBtn = document.getElementById('junaid-selector');
let samiSelectorBtn = document.getElementById('sami-selector');
let chatHeader = document.querySelector('.chat-header');
let chatMessage = document.querySelector('.chat-messages');
let chatInputForm = document.querySelector('.chat-input-form');
let chatInput = document.querySelector('.chat-input');
let clearChatBtn = document.querySelector('.clear-chat-button');

// let messages = [];
let messages = JSON.parse(localStorage.getItem('messages')) || [];


let createChatMessageElement = (message)=>
   `<div class="message ${message.sender === 'Junaid' ? 'blue-bg' : 'gray-bg'}">
    <div class="message-sender">${message.sender}</div>
    <div class="message-text">${message.text}</div>
    <div class="message-timestamp">${message.timestamp}</div>
</div>`

window.onload = ()=>{
    messages.forEach(message => {
        chatMessage.innerHTML +=  createChatMessageElement(message);
    });
}


let messageSender = 'Junaid';

let updateMessageSender = (name)=>{
    messageSender = name;
    chatHeader.innerText = `${messageSender} chatting....`;
    chatInput.placeholder = `Type here, ${messageSender}....`;

    if (name === 'Sami') {
        samiSelectorBtn.classList.add('active-person');
        junaidSelectorBtn.classList.remove('active-person');
    }
    if (name === 'Junaid') {
        junaidSelectorBtn.classList.add('active-person');
        samiSelectorBtn.classList.remove('active-person');
    }
    chatInput.focus();
}

samiSelectorBtn.onclick = ()=> updateMessageSender('Sami');
junaidSelectorBtn.onclick = ()=> updateMessageSender('Junaid');

let sendMessage = (e)=>{
    e.preventDefault();

    let timestamp = new Date().toLocaleString('en-US', {hour : 'numeric', minute : 'numeric', hour12 : true});
    let message = {
        sender : messageSender,
        text : chatInput.value,
        timestamp,
    }

    messages.push(message)
    localStorage.setItem('messages', JSON.stringify(messages))
    chatMessage.innerHTML += createChatMessageElement(message);
    chatInputForm.reset();
    chatMessage.scrollTop = chatMessage.scrollHeight;

}
chatInputForm.addEventListener('submit', sendMessage);

clearChatBtn.addEventListener('click', function () {
    localStorage.clear();
    chatMessage.innerHTML = '';
})