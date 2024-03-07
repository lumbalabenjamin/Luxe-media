function goToPage() {
    var selectElement = document.getElementById("selectMenu");
    var selectedValue = selectElement.value;
    if (selectedValue !== "") {
        window.location.href = selectedValue;
    }
}


document.addEventListener('DOMContentLoaded', function () {
    loadComments(); // Charger les commentaires lors du chargement de la page

    var addCommentBtn = document.getElementById('addCommentBtn');
    addCommentBtn.addEventListener('click', function () {
        addComment();
    });
});

function addComment() {
    var nameInput = document.getElementById('nameInput').value;
    var commentInput = document.getElementById('commentInput').value;
    if (nameInput.trim() === '' || commentInput.trim() === '') {
        alert('Please enter your name and a comment.');
        return;
    }

    var commentDiv = document.createElement('div');
    commentDiv.className = 'comment';
    commentDiv.innerHTML = '<strong>' + nameInput + ':</strong> ' + commentInput;

   
    });

    commentDiv.appendChild(deleteButton);

    document.getElementById('comments').appendChild(commentDiv);
    document.getElementById('nameInput').value = '';
    document.getElementById('commentInput').value = '';

    saveComment(nameInput, commentInput); // Enregistrer le commentaire
}

function saveComment(name, comment) {
    var comments = getCommentsFromStorage();
    comments.push({ name: name, comment: comment });
    localStorage.setItem('comments', JSON.stringify(comments));
}

function loadComments() {
    var comments = getCommentsFromStorage();
    var commentsContainer = document.getElementById('comments');
    comments.forEach(function(item) {
        var commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = '<strong>' + item.name + ':</strong> ' + item.comment;
    });
}


function getCommentsFromStorage() {
    var comments = localStorage.getItem('comments');
    return comments ? JSON.parse(comments) : [];
}
