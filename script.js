(function () {
     // Create floating button
  const floatButton = document.createElement('button');
  floatButton.classList.add('float-button'); 
  document.body.appendChild(floatButton);

  const buttonIcon = document.createElement('img');
  buttonIcon.classList.add('button-icon');
  buttonIcon.src = './arrow.png';
  floatButton.appendChild(buttonIcon); 

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

  // chat header

  const chatHeader = document.createElement('div');
  chatHeader.classList.add('chat-header');
  chatBox.appendChild(chatHeader);

  const minButton = document.createElement('button');
  const arrowIcon = document.createElement('img');
  arrowIcon.src = './arrow.png'; 
  arrowIcon.alt = 'Minimize';
  minButton.classList.add('min-btn');
  minButton.appendChild(arrowIcon);
  
    // Vector images between the minButton and headerText
  const vector = document.createElement('img');
  vector.src = './Vector.png'; 
  vector.alt = 'Vector ';
  vector.classList.add('vector');

  const vector1 = document.createElement('img');
  vector1.src = './Vector1.png'; 
  vector1.alt = 'Vector 1';
  vector1.classList.add('vector-1');

  const vector2 = document.createElement('img');
  vector2.src = './Vector2.png'; 
  vector2.alt = 'Vector 2';
  vector2.classList.add('vector-2');

  const headerText = document.createElement('span');
  headerText.textContent = 'Assistant';
  headerText.classList.add('header-text');

  chatHeader.appendChild(minButton)
  chatHeader.appendChild(vector)
  chatHeader.appendChild(vector1)
  chatHeader.appendChild(vector2)
  chatHeader.appendChild(headerText)

  // input and button div

  const inputDiv = document.createElement('div');
  inputDiv.classList.add('input-div');

  const chatInput = document.createElement('input');
  chatInput.classList.add('chat-input')
  chatInput.placeholder = 'Type a reply...'

  const chatButton = document.createElement('button')
  chatButton.classList.add('chat-button')
  const sendIcon = document.createElement('img');
  sendIcon.src = './send.png'; 
  sendIcon.alt = 'send';
  chatButton.appendChild(sendIcon);

  inputDiv.appendChild(chatInput)
  inputDiv.appendChild(chatButton)

  chatBox.appendChild(inputDiv)

      
})();