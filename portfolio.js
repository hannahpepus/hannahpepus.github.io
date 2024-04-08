// Dynamically change image of portfolio pages 
document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('.tab-input');
    const images = document.querySelectorAll('.casestudy-image-container .tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('change', function() {
            // Hide all images
            images.forEach(image => {
                image.style.display = 'none';
            });

            // Show the clicked tab's image
            const classToShow = this.id;
            const imageToShow = document.querySelector(`.casestudy-image-container .${classToShow}`);
            imageToShow.style.display = 'block';
        });
    });
});