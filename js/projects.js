// projects.js — fetches and displays projects from the backend

const projectsContainer = document.querySelector('.projects-container');

fetch('http://localhost:8080/api/project')
    .then(response => response.json())
    .then(projects => {
        projects.forEach(project => {
            const projectCard = document.createElement('article');
            projectCard.classList.add('project');

            projectCard.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>${project.techStack}</p>
                <a href="${project.githubUrl}" target="_blank">GitHub</a>
                ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank">Live Demo</a>` : ''}
            `;

            projectsContainer.appendChild(projectCard);
        });
    })
    .catch(error => {
        console.error('Error fetching projects:', error);
    });