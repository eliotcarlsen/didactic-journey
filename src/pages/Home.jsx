import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/Home.css';

function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: (
        <>
          I had the pleasure of hiring Eliot as an intern at iSpot.tv, and I've watched him evolve into a <span className="highlight">stellar Frontend Engineer</span>. Eliot possesses a <span className="highlight">remarkable can-do attitude</span> and consistently embraces new challenges with enthusiasm. He not only asks the right questions but also rarely needs to ask them twice, showcasing his <span className="highlight">remarkable ability to learn and adapt</span>.
          <br /><br />
          His excellent interpersonal skills make him a <span className="highlight">true asset to any team</span>. He fosters strong working relationships with co-workers, managers, and senior leadership, contributing to a positive and collaborative work environment. His contributions have been invaluable to our organization, and I wholeheartedly recommend him.
          <br /><br />
          Since joining iSpot.tv in 2018, Eliot has gone on to be the <span className="highlight">number one contributor</span> to iSpot's core TV Ad Measurement Analytics web application with over <span className="highlight">250k lines of code</span> written over <span className="highlight">2k plus commits</span>. In recent years, he has also contributed to our internal admin tools and public API.
          <br /><br />
          What truly sets Eliot apart is his knack for <span className="highlight">combining technical excellence with exceptional people and organizational skills</span>. I foresee a bright future for him in roles such as <span className="highlight">Senior Frontend Engineer</span>, <span className="highlight">Senior Software Engineer</span>, or even an <span className="highlight">entry-level Engineering Manager</span>.
        </>
      ),
      author: "Adam Youngers",
      role: "Product Architect",
      company: "iSpot.tv"
    },
    {
      quote: (
        <>
          I worked directly, indirectly, as peers, as superior, and about any other way possible with Eliot during our time together at iSpot. With Eliot, the challenge is to <span className="highlight">push and find his limits</span>.
          <br /><br />
          His desire to learn and grow meant that Eliot was often the <span className="highlight">go-to dev for just about any project</span>. Not just within his own comfort zone, but outside of it as well. He actively collaborates within and across teams, striving to ensure the <span className="highlight">best experience for everybody involved</span>.
        </>
      ),
      author: "Travis Sinclair",
      role: "Engineering Leadership",
      company: "iSpot.tv"
    },
    {
      quote: (
        <>
          I have had the distinct pleasure of working with Eliot Carlsen over the last four years, and during this time, I've witnessed his rise from the ranks of a <span className="highlight">Frontend Intern to his current role as a Frontend Engineer</span>.
          <br /><br />
          During his tenure at iSpot, I have worked closely on projects that involved his direct development. Eliot has a <span className="highlight">quality-first mindset</span>, and his code is amongst some of the <span className="highlight">least flawed I've encountered in my 20+ year career</span>.
          <br /><br />
          In addition to being a great developer, Eliot has been very effective at <span className="highlight">leading the development activities of several high-level projects</span>. He embraces the new technological challenges that he and others encounter and strives to learn them and grow each day.
          <br /><br />
          Eliot is <span className="highlight">patient with all of his colleagues</span>, and his willingness to educate and share his knowledge is <span className="highlight">second to none</span>. He's a <span className="highlight">great communicator</span> with an extremely pleasant demeanor.
          <br /><br />
          Eliot Carlsen is a <span className="highlight">valuable employee to any company</span>, fortunate enough to land this great team player.
        </>
      ),
      author: "Michael Clark",
      role: "Director of QA Engineering",
      company: "iSpot.tv"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to My Personal Website</h1>
        <p>Software Developer | Problem Solver | Creative Thinker</p>
      </section>
      <section className="quick-links">
        <h2>Quick Links</h2>
        <div className="link-cards">
          <Link to="/bio" className="card">
            <h3>About Me</h3>
            <p>Learn more about my background and interests</p>
          </Link>
          <Link to="/cv" className="card">
            <h3>My CV</h3>
            <p>View my professional experience and skills</p>
          </Link>
          <Link to="/projects" className="card">
            <h3>Projects</h3>
            <p>Explore my recent work and contributions</p>
          </Link>
        </div>
      </section>
      <section className="testimonials">
        <h2>What My Colleagues Say</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <div className="quote">{testimonials[currentTestimonial].quote}</div>
            <div className="testimonial-author">
              <p className="author-name">{testimonials[currentTestimonial].author}</p>
              <p className="author-role">{testimonials[currentTestimonial].role}</p>
              <p className="author-company">{testimonials[currentTestimonial].company}</p>
            </div>
          </div>
          <div className="testimonial-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentTestimonial === index ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 