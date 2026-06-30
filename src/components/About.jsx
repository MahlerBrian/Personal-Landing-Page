// About: a couple of short paragraphs plus an inline list of technologies.

// Edit this list to match the tools you actually use. It renders as a simple
// comma-separated inline line below the paragraphs.
const technologies = [
  'JavaScript',
  'React',
  'HTML & CSS',
  'Node.js',
  'Git',
  '[ADD MORE]',
]

export default function About() {
  return (
    <section id="about" className="section">
      <h2>About</h2>

      <p>
        [First paragraph. Who you are and what you do, in a sentence or two.
        Write the way you'd explain your work to a curious stranger.]
      </p>
      <p>
        [Second paragraph. What you enjoy building, your background, or what
        you're focused on right now. Keep it short and specific.]
      </p>

      <p className="tech-line">
        <span className="tech-label">I work with:</span>{' '}
        {technologies.join(' · ')}
      </p>
    </section>
  )
}
