import './styling/about.css';

function About() {
  return (
    <div className="about-container">
      <h1>About This Project</h1>
      <p className="about-intro">
        This is a React application that demonstrates how to fetch and display data 
        from external APIs using modern web development practices.
      </p>

      <section className="about-section">
        <h2>What You'll Learn</h2>
        <ul className="about-features">
          <li>Making HTTP requests with Axios</li>
          <li>Managing state with React hooks (useState, useEffect)</li>
          <li>Routing with React Router</li>
          <li>Building responsive user interfaces</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>Tech Stack</h2>
        <div className="tech-tags">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Vite</span>
          <span className="tech-tag">Axios</span>
          <span className="tech-tag">React Router</span>
          <span className="tech-tag">CSS Variables</span>
        </div>
      </section>

      <section className="about-section">
        <h2>API</h2>
        <p>
          This project uses the <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">JSONPlaceholder API</a> — 
          a free online REST API for testing and prototyping.
        </p>
      </section>

      <section className="about-section">
        <h2>About Me</h2>
        <p>
          Hi! I'm a web developer passionate about building modern, interactive web applications. 
          This project was created to demonstrate practical API integration patterns in React.
        </p>
        <p className="about-contact">
          Feel free to explore the code and use it as a learning resource!
        </p>
      </section>
    </div>
  );
}

export default About;