import React, { useRef, useLayoutEffect } from "react"
import { gsap } from "gsap"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
// import heroImg from "../assets/images/hero.svg"
import { StaticImage } from "gatsby-plugin-image"
import heroImg from "../assets/images/hero9.svg"

const Hero = () => {
  const boxRef = useRef()
  const boxRefTwo = useRef()
  const boxRefThree = useRef()
  useLayoutEffect(() => {
    gsap.from(boxRef.current, {
      duration: 1,
      opacity: 0,
      y: -100,
      ease: "bounce",
    })
  })
  useLayoutEffect(() => {
    gsap.from(boxRefTwo.current, {
      duration: 1,
      opacity: 0,
      x: -180,
      delay: 0.75,
    })
  })
  // useEffect(() => {
  //   gsap.from(boxRefThree.current, {
  //     duration: 1,
  //     opacity: 0,
  //     rotationX: "10",
  //     delay: 1.0,
  //   })
  // })

  return (
    <header className="hero">
      <section className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1 ref={boxRef}>i'm justin</h1>
            <h4 ref={boxRefTwo}>front end web developer</h4>
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
        <StaticImage
          src="../assets/images/hero21.svg"
          alt="portfolio"
          className="hero-img"
          placeholder="blurred"
        />
        {/* <img src={heroImg} alt="portfolio" className="hero-img-svg" /> */}
      </section>
    </header>
  )
}

export default Hero
