"use strict";

const nav = document.querySelector(".nav");

//website loop
let websiteLoop = setInterval(() => {
    const scrollTop = document.querySelector("html").scrollTop;
    if (scrollTop > 400) {
        nav.classList.add("sticky__nav")
    } else {
        nav.classList.remove("sticky__nav")
    }
}, 3);

const projects = [
    {
        link: "https://www.youtube.com/watch?v=Y7WrLGbOVqw",
        image: "logo.jpg",
        openInNewTab: true,
        title: "personnal portfolio",
        description: "ShotChain is an original Web3 project creat"
    },
    {
        link: "https://otcrconsulting.com/",
        image: "hero.jpg",
        openInNewTab: true,
        title: "OTCR Consulting Website",
        description: "This website was made as an outreach tool for OTCR Consulting to promote the firm's services and attract student consultants. Developed with Wordpress"
    },
    {
        link: "/capIndex.html",
        image: "hero.jpg",
        openInNewTab: true,
        title: "Market Capper",
        description: "A finance trivia game that uses dynamic webscraping. Developed with JS/CSS/HTML and Python for the CS124 Honors project"
    },
    {
        link: "/capIndex.html",
        image: "hero.jpg",
        openInNewTab: true,
        title: "Market Capper",
        description: "A finance trivia game that uses dynamic webscraping. Developed with JS/CSS/HTML and Python for the CS124 Honors project"
    },
]

const projectHTML = document.querySelector(".projects_content");


displayProjects();
function displayProjects() {
    projectHTML.innerHTML = '';

    for (let i = 0; i < projects.length - 1; i += 2) {
        const html = `<div class="row">
        <div class="item">
            <div class="image__container">
                <a href="${projects[i].link}">
                    <img src="${projects[i].image}">
                </a>
            </div>
            <a href="${projects[i].link}">
                <h2 class="disable-select">${projects[i].title}</h2>
            </a>
            <p>${projects[i].description}</p>
        </div>
        <div class="item">
            <div class="image__container">
                <a href="${projects[i+1].link}">
                    <img src="${projects[i+1].image}">
                </a>
            </div>
            <a href="${projects[i+1].link}">
                <h2 class="disable-select">${projects[i+1].title}</h2>
            </a>
            <p>${projects[i+1].description}</p>
        </div>
    </div>`;
        projectHTML.insertAdjacentHTML("beforeend", html);
    }

    let left = projects.length % 2;
    if (left == 1) {
        const html = `
        <div class="row">
            <div class="item">
                <div class="image__container">
                    <a href="${projects[projects.length - 1].link}">
                        <img src="${projects[projects.length - 1].image}">
                    </a>
                </div>
                <a href="${projects[projects.length - 1].link}">
                    <h2 class="disable-select">${projects[projects.length - 1].title}</h2>
                </a>
                <p>${projects[projects.length - 1].description}</p>
            </div>
        </div>`
        projectHTML.insertAdjacentHTML("beforeend", html);
    }
}