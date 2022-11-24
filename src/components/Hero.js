import React from "react"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import ProgrammingGif from "../assets/images/programming.gif"

const Hero = () => {
  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>i'm justin</h1>
            <h4>front end web developer</h4>
            <Link to="/contact" className="btn">
              contact me
            </Link>
            <div className="social-links">
              {socialLinks.map(link => {
                return (
                  <a
                    href={link.url}
                    key={link.id}
                    className="social-link"
                    target="_blank"
                  >
                    {link.icon}
                  </a>
                )
              })}
            </div>
          </div>
        </article>
        {/* <img
          src={ProgrammingGif}
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        /> */}
      </section>
    </header>
  )
}

export default Hero
