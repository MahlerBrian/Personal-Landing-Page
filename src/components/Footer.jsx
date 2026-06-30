// Contact / Footer: email plus external profile links.

export default function Footer() {
  return (
    <footer id="contact" className="section footer">
      <h2>Contact</h2>

      <p>
        {/* mailto: opens the visitor's email client */}
        <a href="mailto:[YOU@EXAMPLE.COM]">[YOU@EXAMPLE.COM]</a>
      </p>

      <p className="footer-links">
        <a href="https://github.com/[YOUR_USERNAME]" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://linkedin.com/in/[YOUR_USERNAME]" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>

      <p className="colophon">© {new Date().getFullYear()} [YOUR NAME]</p>
    </footer>
  )
}
