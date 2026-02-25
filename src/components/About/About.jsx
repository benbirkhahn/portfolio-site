import React from 'react';
import './About.css';

const skills = [
    { category: 'Frontend', items: ['React', 'JavaScript (ES6+)', 'TypeScript', 'CSS3/HTML5', 'Tailwind CSS', 'Vite'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'Express', 'Flask', 'REST API', 'WebSockets'] },
    { category: 'Tools & DB', items: ['PostgreSQL', 'Redis', 'Git', 'Docker', 'AWS', 'Linux'] },
    { category: 'Specialized', items: ['AI Integrations', 'Audio Processing', 'Stripe API', 'Web Scraping'] }
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-content animate-fade-in">
                    <h2 className="section-title gradient-text text-center">About Me</h2>
                    <div className="about-text glass-panel">
                        <p>
                            I'm a full-stack developer with a passion for building complex, user-centric applications. My work spans across varying domains from interactive frontend prototypes and SaaS platforms with secure payment integrations, to intensive Python-based automated processing pipelines.
                        </p>
                        <p>
                            When I'm not coding, I enjoy exploring the intersection of audio engineering and AI, finding new ways to create premium digital experiences. I thrive in challenging environments where I can leverage my diverse skill set to solve real-world problems.
                        </p>
                    </div>
                </div>

                <div className="skills-content animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <h3 className="skills-header text-center">Technical Arsenal</h3>
                    <div className="skills-grid">
                        {skills.map((skillGroup, index) => (
                            <div key={skillGroup.category} className="skill-category glass-panel" style={{ animationDelay: `${index * 0.1}s` }}>
                                <h4 className="category-title">{skillGroup.category}</h4>
                                <ul className="skill-list">
                                    {skillGroup.items.map(item => (
                                        <li key={item} className="skill-item">
                                            <span className="skill-dot"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
