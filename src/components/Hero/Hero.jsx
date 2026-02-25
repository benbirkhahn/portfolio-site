import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <div className="hero-content animate-fade-in">
                <h2 className="hero-greeting">Hi, I'm</h2>
                <h1 className="hero-name gradient-text">Ben Birkhahn</h1>
                <p className="hero-subtitle">
                    Software Engineer building premium, high-performance web applications and AI-driven solutions.
                </p>
                <div className="hero-cta">
                    <a href="#projects" className="btn-primary">View Projects</a>
                    <a href="#about" className="btn-secondary">About Me</a>
                </div>
            </div>
            <div className="hero-visuals animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="glowing-orb orb-1"></div>
                <div className="glowing-orb orb-2"></div>
                <div className="glass-panel mockup-panel">
                    <div className="mockup-header">
                        <span className="dot dot-red"></span>
                        <span className="dot dot-yellow"></span>
                        <span className="dot dot-green"></span>
                    </div>
                    <pre className="mockup-code">
                        <code>
                            <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}
                            {'\n'}  <span className="code-property">name</span>: <span className="code-string">"BenBirkhahn"</span>,
                            {'\n'}  <span className="code-property">skills</span>: [<span className="code-string">"React"</span>, <span className="code-string">"Python"</span>, <span className="code-string">"AI"</span>, <span className="code-string">"Backend"</span>],
                            {'\n'}  <span className="code-property">passion</span>: <span className="code-string">"Building Next-Gen Experiences"</span>{'\n'}
                            {'}'};
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Hero;
