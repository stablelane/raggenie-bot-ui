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
    if (chatBox.style.display === 'block') {
      chatBox.style.display = 'none';
    } else {
      chatBox.style.display = 'block';
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
    if (chatBox.style.display === 'block') {
      chatBox.style.display = 'none';
    } else {
      chatBox.style.display = 'block';
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

  // input and send button div

  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-div');
  chatBox.appendChild(inputDiv)

  const chatInput = document.createElement('input');
  chatInput.classList.add('chat-input')
  chatInput.placeholder = 'Type a reply...'

  const chatButton = document.createElement('button')
  chatButton.classList.add('chat-button')
  const sendIcon = document.createElement('img');
  sendIcon.src = '../assets/send.png';
  sendIcon.alt = 'send';
  chatButton.appendChild(sendIcon);

  inputDiv.appendChild(chatInput)
  inputDiv.appendChild(chatButton)

}