var typed= new Typed(".text", {
    strings: ["Web Designer" , "Sotware Developer" , "Ethical hacker"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


document.addEventListener("DOMContentLoaded", function() {

    const contactForm = document.querySelector('.contact-form form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = contactForm.querySelector('input[placeholder="Enter Your Name"]').value;
        const email = contactForm.querySelector('input[placeholder="Enter Your Email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Enter Your Subject"]').value;
        const message = contactForm.querySelector('textarea[placeholder="Enter Your Message"]').value;


        if (name && email && message) {
            alert('Form submitted successfully!');
  
        } else {
            alert('Please fill in all required fields.');
        }
    });

  
    const contactIcons = document.querySelectorAll('.contact-icons i');
    contactIcons.forEach((icon, index) => {
        icon.style.setProperty('--i', index + 1); 
    });
});

const contactListItems = document.querySelectorAll('.contact-list li');
contactListItems.forEach(item => {
    item.addEventListener('click', () => {
        alert(`You clicked on ${item.textContent.trim()}`);
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const downloadButton = document.getElementById('downloadResumeBtn');

    downloadButton.addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = 'https://docs.google.com/document/d/1phaeAg4woXhyITFvjIAkk3UFXhsFySqtUTt8LzXjYiQ/edit'; 
        link.download = 'PortfolioGarima_files/garimaUpdatatedCV.pdf'; 
        link.click();
    });
});
