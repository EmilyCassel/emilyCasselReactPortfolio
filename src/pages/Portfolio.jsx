
function Portfolio() {
  return (
    <div>
      <header>
        <nav className="projectLinkList">

          <p><a href="/" className="projectTypeLink">Class Projects</a></p>

          <p><a href="" className="projectTypeLink">Personal Projects</a></p>

          <p><a href="" className="projectTypeLink">Professional Projects</a></p>
        </nav>
      </header>

      <body className="portfolioList">

        <h1 className="projectTypeHeader">Personal Projects</h1>
          <h2 className="projectLink"><a href="">United States</a></h2>
          <h2 className="projectLink"><a href="">All About Animals</a></h2>
          <h2 className="projectLink"><a href="">RedYarn Insurance</a></h2>

        <h1 className="projectTypeHeader">Professional Projects</h1>
          <h2 className="projectLink"><a href="">lilRedBarn Goats</a></h2>
        <h1 className="projectTypeHeader">In Class Projects</h1>
          <h2 className="projectLink"><a href="">freeLancer</a></h2>

      </body>
     

    </div>
  )
}

export default Portfolio;