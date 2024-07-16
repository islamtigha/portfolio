import React from "react";

const Projectone = () => {
  return (
    <section id="heroSection" className="hero--section">
    <div className="hero--section--content--box">
      <div className="hero--section--content">
        <h1 className="hero--section--title">
          <span className="hero--section-title--color">My store</span>
        </h1>
        <p className="hero--section-description">
        est un site de commerce électronique qui propose une large gamme de produits, des vêtements de mode aux gadgets technologiques. Développé avec React.js  pour une interface utilisateur dynamique, le site fonctionne sur un backend Node.js avec Express pour la gestion des requêtes et l'intégration de la base de données MongoDB. Les transactions sont sécurisées via Stripe et PayPal.
        </p>
      </div>
      
    </div>
    <div className="hero--section--img">
      <img src="./img/mystore.webp" alt="Hero Section" />
    </div>
    
      
  </section>
  );
};

export default Projectone;
