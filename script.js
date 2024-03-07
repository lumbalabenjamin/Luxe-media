document.addEventListener('DOMContentLoaded', function () {
    loadComments(); // Charger les commentaires lors du chargement de la page

    var addCommentBtn = document.getElementById('addCommentBtn');
    addCommentBtn.addEventListener('click', function () {
        addComment();
    });
});

function addComment() {
    var commentInput = document.getElementById('commentInput').value;
    if (commentInput.trim() === '') {
        alert('Please enter a comment.');
        return;
    }

    var commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.textContent = commentInput;

    document.getElementById('comments').appendChild(commentDiv);
    document.getElementById('commentInput').value = '';

    saveComment(commentInput); // Enregistrer le commentaire
}

function saveComment(comment) {
    var comments = getCommentsFromStorage();
    comments.push(comment);
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    var comments = getCommentsFromStorage();
    var commentsContainer = document.getElementById('comments');
    comments.forEach(function(comment) {
        var commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.textContent = comment;
        commentsContainer.appendChild(commentDiv);
    });
}

function getCommentsFromStorage() {
    var comments = localStorage.getItem('comments');
    return comments ? JSON.parse(comments) : [];
}
