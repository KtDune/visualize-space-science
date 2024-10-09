document.getElementById('minimize-btn').addEventListener('click', function() {
    const chatContainer = document.getElementById('chat-container');
    const chatMessages = document.getElementById('chat-messages');
    const chatInputContainer = document.querySelector('.chat-input-container');
    const minimizeBtn = document.getElementById('minimize-btn');
    const maximizeBtn = document.getElementById('maximize-btn');

    // Minimize the chat
    chatMessages.style.display = 'none';
    chatInputContainer.style.display = 'none';
    chatContainer.style.height = 'auto'; // Reduce height to just header
    minimizeBtn.style.display = 'none';
    maximizeBtn.style.display = 'block';
});

document.getElementById('maximize-btn').addEventListener('click', function() {
    const chatContainer = document.getElementById('chat-container');
    const chatMessages = document.getElementById('chat-messages');
    const chatInputContainer = document.querySelector('.chat-input-container');
    const minimizeBtn = document.getElementById('minimize-btn');
    const maximizeBtn = document.getElementById('maximize-btn');

    // Maximize the chat
    chatMessages.style.display = 'block';
    chatInputContainer.style.display = 'flex';
    chatContainer.style.height = '40vh'; // Restore the original height
    minimizeBtn.style.display = 'block';
    maximizeBtn.style.display = 'none';
});
