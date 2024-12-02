const toggleButton = document.getElementById('Toggle-Btn') as HTMLButtonElement;
const   ProjectSections = document.querySelectorAll('.Resume-Components') as NodeListOf<HTMLElement>;

toggleButton.addEventListener('click', () => {
    ProjectSections.forEach(section => {
        if(section.style.display === "none") {
            section.style.display = "block";
        } else {
            section.style.display = "none";
        };
    })
});