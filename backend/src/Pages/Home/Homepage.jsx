import React from "react";

const Homepage = () => {
    return (
      <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/about-me.jpg" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <p className="hero--section-description">
          Un développeur web hautement qualifié et créatif avec plus de 5 ans d'expérience dans la conception et la mise en œuvre d'applications web. Compétent en développement front-end et back-end, . Collaboratif, passionné par l'apprentissage de nouvelles technologies et l'amélioration continue des solutions existantes.
          </p>
          <p className="section--title">Skills</p>
          <p className="hero--section-description">
          HTML5, CSS3, JavaScript, React.js, Angular, Vue.js, Bootstrap,
          Node.js, Express.js,  MySQL, PostgreSQL, MongoDB, Git.
          </p>
          <p className="section--title">Education</p>
          <p className="hero--section-description">
            DEC programmation informatique au college la cite
          </p>
          
        </div>
      </div>
      <footer className="footer">
        <div className="footer--links">
          <a href="https://github.com/islamtigha" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/islamtigha/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="footer--text">Group 20 &copy; 2024</p>
      </footer>
    </section>
    )
}

export default Homepage;