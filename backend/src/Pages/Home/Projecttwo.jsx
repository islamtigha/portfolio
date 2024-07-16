import React from "react";

const Projecttwo = () => {
  return (
    <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">Moubli </span>
        </h1>
        <p className="hero--section-description">
        est une boutique en ligne dédiée à la vente de meubles et d'accessoires décoratifs. Le site est construit avec React.js pour une interaction utilisateur réactive, et utilise Redux pour une gestion optimisée de l'état des applications. Le backend est développé en Node.js avec le framework Express, assurant une gestion fluide des requêtes et une intégration efficace avec MongoDB pour le stockage des données. La sécurité des sessions utilisateurs est renforcée par des JWT, et l'infrastructure sur AWS garantit une excellente scalabilité et fiabilité. 
        </p>
      </div>
      
    </div>
    
    
    



    <div className="hero--section--img">
      <img src="./img/moubli.png" alt="project Section" />
    </div>
    <footer className="footer">
        <div className="footer--links">
          <a href="https://github.com/islamtigha" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/islamtigha" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="footer--text">Group 20 &copy; 2024</p>
      </footer>
  </section>
  );
};

export default Projecttwo;
