const toggleButton = document.getElementById('Toggle-Btn');
const ProjectSections = document.querySelectorAll('.Resume-Components');
toggleButton.addEventListener('click', () => {
    ProjectSections.forEach(section => {
        if (section.style.display === "none") {
            section.style.display = "block";
        }
        else {
            section.style.display = "none";
        }
        ;
    });
});
