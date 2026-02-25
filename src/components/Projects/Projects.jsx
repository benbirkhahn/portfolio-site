import React from 'react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: 'AI DJ Automixer',
        description: 'An intelligent audio engineering platform that analyzes, beatsyncs, and automixes tracks using advanced DJ transitions, powered by a custom Python backend.',
        tags: ['Python', 'Audio Processing', 'AI', 'Full Stack'],
        link: '#',
        github: 'https://github.com/benbirkhahn/ai-dj-automixer'
    },
    {
        id: 2,
        title: 'ClarityCheck',
        description: 'A full-stack SaaS platform featuring secure payment integrations and zero-width character detection, built for text authenticity verification.',
        tags: ['React', 'Node.js', 'Stripe', 'SaaS'],
        link: '#',
        github: 'https://github.com/benbirkhahn/claritycheck'
    },
    {
        id: 3,
        title: 'Plasma Crab',
        description: 'An interactive frontend prototype showcasing a dynamic particle system, advanced glassmorphism, and neon aesthetic micro-animations.',
        tags: ['Frontend', 'UI/UX', 'Animations', 'Canvas'],
        link: '#',
        github: 'https://github.com/benbirkhahn/plasma-crab'
    },
    {
        id: 4,
        title: 'YouTube MP3 Downloader',
        description: 'A responsive automated batch downloader pipeline to extract, convert, and organize high-quality audio from video sources.',
        tags: ['Automation', 'Scripting', 'Node.js/Python'],
        link: '#',
        github: 'https://github.com/benbirkhahn/youtube-mp3-downloader'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="section-header text-center">
                <h2 className="section-title gradient-text">Featured Projects</h2>
                <p className="section-subtitle">A selection of my recent work in web development, AI, and software engineering.</p>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="project-card glass-panel animate-fade-in"
                        style={{ animationDelay: `${index * 0.15}s` }}
                    >
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>
                        </div>
                        <div className="project-links">
                            <a href={project.github} className="project-link">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                Code
                            </a>
                            <a href={project.link} className="project-link">
                                <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                Live Demo
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
