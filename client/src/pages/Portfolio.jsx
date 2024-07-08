import freeLancer from "../assets/images/freeLancer.png"
import goats from "../assets/images/goats.png"


function Portfolio() {
  return (
    <div>
      <h1 className="portfolioHeader">My Projects</h1>

      <body className="portfolioList">

        <div className="projectFreeLancer">
          <div className="freeLancerBody">
            <div className="freeLancerInnerBody">
              <h2 className="freeLancerHeader">freeLancer</h2>
              <p className="freeLancerParagraph">freeLancer is an application designed to empower freelance workers by enabling them to efficiently track their work hours across multiple projects, and manage project payment statuses. With freeLancer, freelance workers can easily organize their workload and accurately bill clients.</p>
              <p className="freeLancerLink"><a href="https://salty-coast-36768-7c025fc4e535.herokuapp.com/">freeLancer Link</a></p>
            </div>
            <img src={freeLancer} className="freeLancerImage" />
          </div>
        </div>

        {/* <div className="projectGoats">
          <div className="goatsBody">
            <div className="goatsInnerBody">
              <h2 className="goatsHeader">CU@LilRedBarn Nigerian Dwarf Dairy Goat Farm</h2>
              <p className="goatsParagraph">CU@LilRedBarn Nigerian Dairy Dwarf Goat Farm is </p>

            </div>

            <img src={goats} className="goatsImage" />
          </div>
        </div> */}





      </body>


    </div>
  )
}

export default Portfolio;