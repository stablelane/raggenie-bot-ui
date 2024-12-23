(function () {
     // Create floating button
  const floatButton = document.createElement('button');
  floatButton.textContent = 'Chat';
  floatButton.classList.add('float-button'); 
  document.body.appendChild(floatButton);

  // chatbox display=none(initially)
  const chatBox = document.createElement('div');
  chatBox.classList.add('chat-box');
  chatBox.style.display = 'none';
  document.body.appendChild(chatBox);
  
  //toggle visibility of chatbox

  floatButton.addEventListener('click', () => {
    if (chatBox.style.display === 'block') {
      chatBox.style.display = 'none';
    } else {
      chatBox.style.display = 'block';
    }
  })

  // input and button div

  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-div');

  const chatInput = document.createElement('input');
  chatInput.classList.add('chat-input')

  const chatButton = document.createElement('button')
  chatButton.classList.add('chat-button')
  chatButton.textContent = 'send';

  inputDiv.appendChild(chatInput)
  inputDiv.appendChild(chatButton)

  chatBox.appendChild(inputDiv)

      
})();