document.addEventListener('DOMContentLoaded', function() {
    const imagesContainer = document.querySelector('.images');
    const addButton = document.querySelectorAll('.ajouter');

    const clickedElementsList = document.getElementById('elements-cliques');

    addButton.forEach(function(button) {
        button.addEventListener('click', function() {
            const image = this.parentNode.querySelector('img');
            const title = this.parentNode.querySelector('h3').textContent;
            
            const clickedElement = createClickedElement(title);
            clickedElementsList.appendChild(clickedElement);
        });
    });

    function createClickedElement(description) {
        const listItem = document.createElement('li');
        listItem.textContent = description;
        return listItem;
    }
});
