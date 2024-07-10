document.addEventListener('DOMContentLoaded', function() {
    const newsItems = document.querySelectorAll('.news-item a');
    newsItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            alert('Read more functionality coming soon!');
        });
    });
});
