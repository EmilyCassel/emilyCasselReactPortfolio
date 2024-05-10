import freeLancer from "../assets/images/freeLancer.png"


function Portfolio() {
  return (
    <div>
      <h1 className="portfolioHeader">My Projects</h1>

      <body className="portfolioList">

          <div className="projectFreeLancer">
            <h2 className="freeLancerHeader">freeLancer</h2>
            <div className="freeLancerBody">
                <div className="freeLancerInnerBody">
                  <p className="freeLancerLink"><a href="https://salty-coast-36768-7c025fc4e535.herokuapp.com/">Link</a></p>
                  <p className="freeLancerParagraph">freeLancer is</p>
                </div>
              <img src={freeLancer} className="freeLancerImage"/>
            </div>
          </div>



          <div className="projectGoats">
            <h2 className="goatsHeader">CU@LilRedBarn Nigerian Dwarf Dairy Goat Farm</h2>
            <div className="goatsBody">
                <div className="goatsInnerBody">
                  <p className="goatsLink"><a href="">Link</a></p>
                  <p className="goatsParagraph"></p>
                </div>
              <img className="goatsImage"/>
            </div>
          </div>


      </body>
     

    </div>
  )
}

export default Portfolio;