
function Portfolio() {
  return (
    <div>
      <header>
        <nav>
          <a href="/contact" className="link">Contact Me</a>
          <a href="/" className="link">Class Projects</a>
          <a href="" className="link">Personal Projects</a>
          <a href="" className="link">Professional Projects</a>
        </nav>
      </header>
      <body className="portfolioList">
        <h1 lassName="projectTypes">Personal Projects</h1>
        <h2><a href="">United States</a></h2>
        <h2><a href="">All About Animals</a></h2>
        <h2><a href="">RedYarn Insurance</a></h2>
        <h1 lassName="projectTypes">Professional Projects</h1>
        <h2><a href="">lilRedBarn Goats</a></h2>
        <h1 className="projectTypes">In Class Projects</h1>
        <h2><a href="">freeLancer</a></h2>
      </body>
    </div>
  )
}

export default Portfolio;