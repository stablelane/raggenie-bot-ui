(function () {
  populateUI();


})();

function populateUI() {
  // Create floating button
  const floatButton = document.createElement('button');
  floatButton.classList.add('float-button');
  document.body.appendChild(floatButton);

  const buttonIcon = document.createElement('img');
  buttonIcon.classList.add('button-icon');
  buttonIcon.src = '../assets/arrow.svg';
  floatButton.appendChild(buttonIcon);

  // chatbox display=none(initially)
  const chatBox = document.createElement('div');
  chatBox.classList.add('chat-box');
  chatBox.style.display = 'none';
  document.body.appendChild(chatBox);


  // event listener for floatButton
  floatButton.addEventListener('click', () => {
    if (chatBox.style.display === 'flex') {
      chatBox.style.display = 'none';
    } else {
      chatBox.style.display = 'flex';
    }
  })

  // chat header

  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');
  chatBox.appendChild(chatHeader);

  // < minimize button
  const minButton = document.createElement('button');
  const arrowIcon = document.createElement('img');
  arrowIcon.src = '../assets/arrow.svg';
  arrowIcon.alt = 'Minimize';
  minButton.classList.add('min-btn');
  minButton.appendChild(arrowIcon);
  minButton.addEventListener('click', () => {
    if (chatBox.style.display === 'flex') {
      chatBox.style.display = 'none';
    } else {
      chatBox.style.display = 'flex';
    }
  })

  // headerlogo
  const headerLogo = document.createElement('img');
  headerLogo.src = '../assets/logo.svg'
  headerLogo.classList.add('header-logo')

  // header text(assistant)
  const headerText = document.createElement('span');
  headerText.textContent = 'Assistant';
  headerText.classList.add('header-text');

  chatHeader.appendChild(minButton)
  chatHeader.appendChild(headerLogo)
  chatHeader.appendChild(headerText)

  // Chat body for messages
  const chatBody = document.createElement('div');
  chatBody.classList.add('chat-body');
  chatBox.appendChild(chatBody);

  // action button 

  // addActionBtn('./assets/zap.svg', 'Generate Query', chatBox);
  // addActionBtn('./assets/search-lg.svg', 'Search from Splunk', chatBox);
  // addActionBtn('./assets/search-lg.svg', 'Search CVE', chatBox);
  

  // input and send button div

  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-div');
  chatBox.appendChild(inputDiv)

  const chatInput = document.createElement('div');
  chatInput.classList.add('chat-input')
  chatInput.setAttribute('contenteditable', 'true');
  chatInput.setAttribute('placeholder', 'Type a reply...');

  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      simulate(chatInput, chatBody);
    } 
  })
  // message send button
  const chatButton = document.createElement('button')
  chatButton.classList.add('chat-button')
  const sendIcon = document.createElement('img');
  sendIcon.src = '../assets/send.png';
  sendIcon.alt = 'send';
  chatButton.appendChild(sendIcon);
  chatButton.addEventListener('click', () =>  simulate(chatInput, chatBody));
  
  
  inputDiv.appendChild(chatInput)
  inputDiv.appendChild(chatButton)


  
}


// simulate bot response and chat input
function simulate(chatInput, chatBody) {
  const userMessage = chatInput.textContent.trim();
  if (userMessage) {
    appendMessage('user', userMessage, chatBody);
    chatInput.textContent = ''; // Clear input
    setTimeout(() => {
      appendMessage('bot', 'Hello! How can I assist you?', chatBody); // Simulate bot response
    }, 500); // Delay for realism
  }

}

// Function to append messages
function appendMessage(sender, message, chatBody) {

  const messageWrapper = document.createElement('div');
  messageWrapper.classList.add('message-wrapper');

  const messageDiv = document.createElement('div');
  messageDiv.classList.add(`${sender}-message`);

  if (sender === 'bot') {
    const botDp = document.createElement('img')
    botDp.src = './assets/bot-dp.svg'
    messageDiv.appendChild(botDp)

    const botResponse = document.createElement('span')
    botResponse.textContent = message
    messageDiv.appendChild(botResponse)

    messageWrapper.appendChild(messageDiv)

    const botResponseBody = document.createElement('div');
    botResponseBody.classList.add('botresponse-body')
    botResponseBody.innerHTML = "Event ID: 4624 <br> Log Name: Security  <br>Source: Microsoft-Windows-Security-Auditing <br> Date: 2024-07-24 03:15:00  <br>Task Category: Logon<br> Computer: server01.contoso.com Logon"
    messageWrapper.appendChild(botResponseBody)
    
    chatBody.appendChild(messageWrapper)
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to the latest message
    

  } else {

    messageDiv.textContent = message;
    messageWrapper.appendChild(messageDiv);
    chatBody.appendChild(messageWrapper)
  }
  
}

//function to add action button
// function addActionBtn(logoPath, action, chatBox) {
    
//   const actionDiv = document.createElement('div');
//   actionDiv.classList.add('action-div');
//   chatBox.appendChild(actionDiv);

//   const actionBtn = document.createElement('button');
//   actionBtn.classList.add('action-btn');
//   const actionBtnlogo = document.createElement('img');
//   actionBtnlogo.src = logoPath;
//   actionBtn.textContent = action;
//   actionBtn.appendChild(actionBtnlogo);
//   actionDiv.appendChild(actionBtn); 
// };