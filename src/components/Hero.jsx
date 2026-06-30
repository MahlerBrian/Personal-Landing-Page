// Hero: the first thing visitors see — name, tagline, intro, and two links.

export default function Hero() {
  return (
    <header className="hero">
      {/*
        Optional photo. Drop an image at /public/profile.jpg and it will show.
        If you don't want a photo, delete this <img> entirely.
        The alt text is important for accessibility — describe yourself.
      */}
      <img className="avatar" src="/profile.jpg" alt="Photo of [YOUR NAME]" />

      <h1>[YOUR NAME]</h1>
      <p className="tagline">[A ONE-LINE TAGLINE — e.g. "Frontend developer & lifelong tinkerer"]</p>

      <p className="intro">
        [A short intro paragraph. Two or three sentences about who you are, what
        you build, and what you care about. Keep it warm and human — this sets
        the tone for the whole page.]
      </p>

      <p className="hero-links">
        {/* Opens the CV in a new tab. Drop your file at /public/cv.pdf */}
        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          View CV
        </a>
        {/* Anchor link scrolls down to the Projects section (id="projects") */}
        <a href="#projects">See projects ↓</a>
      </p>
    </header>
  )
}
