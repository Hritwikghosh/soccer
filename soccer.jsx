import React from 'react';

function LandingPage() {
  return (
    <div>
      <header>
        <nav>
          <div className="logo">
            <img src="logo.png" alt="Soccer Mania Logo" />
          </div>
          <ul className="navigation">
            <li><a href="#about">About</a></li>
            <li><a href="#leagues">Leagues</a></li>
            <li><a href="#teams">Teams</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="hero">
        <div className="container">
          <h1>Welcome to Soccer Mania</h1>
          <p>Your Ultimate Soccer Destination</p>
          <a href="#leagues" className="cta-button">Explore Leagues</a>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2>About Soccer Mania</h2>
          <p>Soccer Mania is your one-stop destination for all things soccer. Whether you're a die-hard fan or just getting started, we have everything you need to stay up-to-date with the latest news, scores, and events.</p>
        </div>
      </section>

      <section id="leagues">
        <div className="container">
          <h2>Explore Leagues</h2>
          <p>Discover and follow your favorite soccer leagues from around the world.</p>
          <div className="league-cards">
            <div className="league-card">
              <img src="premier-league.png" alt="Premier League Logo" />
              <h3>Premier League</h3>
              <p>The top professional league in England.</p>
              <a href="#" className="league-button">Learn More</a>
            </div>
            <div className="league-card">
              <img src="la-liga.png" alt="La Liga Logo" />
              <h3>La Liga</h3>
              <p>The top professional league in Spain.</p>
              <a href="#" className="league-button">Learn More</a>
            </div>
            <div className="league-card">
              <img src="serie-a.png" alt="Serie A Logo" />
              <h3>Serie A</h3>
              <p>The top professional league in Italy.</p>
              <a href="#" className="league-button">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section id="teams">
        <div className="container">
          <h2>Featured Teams</h2>
          <p>Get to know the top soccer teams from around the world.</p>
          <div className="team-cards">
            <div className="team-card">
              <img src="manchester-united.png" alt="Manchester United Logo" />
              <h3>Manchester United</h3>
              <p>One of the most successful English clubs.</p>
              <a href="#" className="team-button">Learn More</a>
            </div>
            <div className="team-card">
              <img src="real-madrid.png" alt="Real Madrid Logo" />
              <h3>Real Madrid</h3>
              <p>One of the most successful Spanish clubs.</p>
              <a href="#" className="team-button">Learn More</a>
            </div>
            <div className="team-card">
              <img src="juventus.png" alt="Juventus Logo" />
              <h3>Juventus</h3>
              <p>One of the most successful Italian clubs.</p>
              <a href="#" className="team-button">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <h2>Contact Us</h2>
          <p>We would love to hear from you. Send us your feedback or inquiries.</p>
          <form action="#" method="POST" className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2023 Soccer Mania. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
