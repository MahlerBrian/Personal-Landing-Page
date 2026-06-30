// CV / Resume: a download link plus a few highlight bullets.

export default function CV() {
  return (
    <section id="cv" className="section">
      <h2>CV</h2>

      <p>
        {/* Drop your resume at /public/cv.pdf. The `download` attribute makes
            the browser save the file instead of navigating to it. */}
        <a href="/cv.pdf" download target="_blank" rel="noopener noreferrer">
          Download CV (PDF) ↓
        </a>
      </p>

      <ul className="highlights">
        <li>
          <strong>Now —</strong> [MOST RECENT ROLE], [COMPANY] ([START YEAR]–present)
        </li>
        <li>
          <strong>Education —</strong> [DEGREE], [SCHOOL] ([YEAR])
        </li>
        <li>
          <strong>Key skills —</strong> [SKILL], [SKILL], [SKILL]
        </li>
      </ul>
    </section>
  )
}
