(function () {
     // Create floating button
  const button = document.createElement('button');
  button.textContent = 'Chat';
  button.classList.add('chat-button'); 
  document.body.appendChild(button);

  // chatbox display=none(initially)
  const chatBox = document.createElement('div');
  chatBox.classList.add('chat-box');
  chatBox.style.display = 'none';
  document.body.appendChild(chatBox);
  
  //toggle visibility of chatbox

  button.addEventListener('click', () => {
    if (chatBox.style.display === 'block') {
      chatBox.style.display = 'none';
    } else {
      chatBox.style.display = 'block'
    }
  })


      
})();