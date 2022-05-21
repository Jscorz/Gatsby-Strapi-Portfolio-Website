import React, { useRef, useEffect } from "react"
import { gsap } from "gsap"
import Seo from "../components/Seo"
const Contact = () => {
  const boxRef = useRef()
  const boxRefTwo = useRef()

  useEffect(() => {
    gsap.from(boxRef.current, {
      duration: 0.7,
      opacity: 0,
      rotation: "+=10",
    })
  })
  useEffect(() => {
    gsap.from(boxRefTwo.current, {
      duration: 1,
      opacity: 0,
      x: -180,
      delay: 1.1,
    })
  })
  return (
    <>
      <Seo title="Contact" />
      <section className="contact-page">
        <article className="contact-form" ref={boxRef}>
          <h3>get in touch</h3>
          <form action="https://formspree.io/f/xlezprqa" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
              />
              <input
                type="text"
                name="email"
                placeholder="email"
                className="form-control"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              submit here
            </button>
          </form>
        </article>
      </section>
    </>
  )
}

export default Contact
