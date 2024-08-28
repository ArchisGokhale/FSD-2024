function postMessage() {
    const username = document.getElementById('username').value || 'Anonymous';
    const messageText = document.getElementById('messageText').value;

    fetch('/api/post_message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: username, message: messageText }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.reload();
    })
    .catch(error => console.error('Error:', error));
}

function likeMessage(index) {
    fetch('/api/like_message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ index: index }),
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        window.location.reload();
    })
    .catch(error => console.error('Error:', error));
}
