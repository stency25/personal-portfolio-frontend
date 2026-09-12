// skills.js — fetches and displays skills from the backend

const skillsContainer = document.querySelector('.skills-container');

fetch('http://localhost:8080/api/skills')
    .then(response => response.json())
    .then(skills => {
        skills.forEach(skill => {
            const skillCard = document.createElement('div');
            skillCard.classList.add('skill');

            skillCard.innerHTML = `
                <h3>${skill.category}</h3>
                <p>${skill.name}</p>
            `;

            skillsContainer.appendChild(skillCard);
        });
    })
    .catch(error => {
        console.error('Error fetching skills:', error);
    });