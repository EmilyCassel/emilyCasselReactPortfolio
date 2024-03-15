import freeLancer from "../assets/images/freeLancer.png"


function Portfolio() {
  return (
    <div>
      <header>
        {/* <nav className="projectLinkList">

          <h1><a href="" className="projectTypeLink">Class Projects</a></h1>

          <h1><a href="" className="projectTypeLink">Personal Projects</a></h1>

          <h1><a href="" className="projectTypeLink">Professional Projects</a></h1>
        </nav> */}
      </header>




      <body className="portfolioList">

        <h1 className="projectTypeHeader">Personal Projects</h1>
          <div className="projectType1">
            <h2 className="projectHeader1">United States</h2>
              <p className="projectLink"><a href="">Link</a></p>
          </div>
          <div className="projectType2">
            <h2 className="projectHeader2">All ABout Animals</h2>
              <p className="projectLink"><a href="">Link</a></p>
          </div>
          <div className="projectType1">
            <h2 className="projectHeader2">RedYarn Insurance</h2>
            <p className="projectLink"><a href="">Link</a></p>
          </div>


        <hr className="line"/>





        <h1 className="projectTypeHeader">Professional Projects</h1>

          <div className="projectType2">
            <h2 className="projectHeader2">lilRedBarn Goats</h2>
              <p className="projectLink"><a href="">Link</a></p>
          </div>


        <hr className="line"/> 




        <h1 className="projectTypeHeader">In Class Projects</h1>




          <div className="projectType1">
            <h2 className="projectHeader2">freeLancer</h2>
            <p className="projectLink"><a href="https://salty-coast-36768-7c025fc4e535.herokuapp.com/">Link</a></p>
            <img src={freeLancer} className="freeLancerImage"/>
          </div>


      </body>
     

    </div>
  )
}

export default Portfolio;