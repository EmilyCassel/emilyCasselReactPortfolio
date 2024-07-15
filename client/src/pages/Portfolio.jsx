import freeLancer from "../assets/images/freeLancer.png"
import goats from "../assets/images/goats.png"


function Portfolio() {
  return (
    <div>
      <div className="allProjects">
        <div className="allCompletedProjects">
          <h1 className="projectsHeader">Completed Projects</h1>




          <h2 className="projectName">freeLancer</h2>
          <div className="projectBody">

            <div className="projectInformation">
              <h3 className="desKeyHeader">Description:</h3>
              <p className="desKey">freeLancer is an application designed to empower freelance workers by enabling them to efficiently track their work hours across multiple projects, and manage project payment statuses. With freeLancer, freelance workers can easily organize their workload and accurately bill clients.</p>
              <h3 className="desKeyHeader">Key Features:</h3>
              <ul>
                <li><p>Transparency and Security: Offers clear and detailed breakdowns of billable hours and project costs for full transparency, and implements robust security measures to ensure the protection of user data.</p></li>
                <li><p>Efficient Management: Efficiently track work hours across multiple projects, manage project payment statuses and assign payments to projects, and easily organize workload to maintain productivity.</p></li>
                <li><p>Technologies Utilized: HTML, CSS, JavaScript, API Integration, Local Storage Management, Responsive Design, Security protocols.</p></li>
                <li><p>Worked as a team to build an application with an agile environment, foster collaboration and user ease and interest.</p></li>
              </ul>
            <h3></h3>
            <h3></h3>
           </div>
            <img src={freeLancer} className="projectImage" />
          </div>









          <h2 className="projectName">StudentLink</h2>
          <div className="projectBody">

            <div className="projectInformation">
              <h3 className="desKeyHeader">Description: </h3>
              <h3 className="desKeyHeader">Key Features:</h3>



            </div>





          </div>

        </div>

        <div className="allProgressProjects">
        </div>
        <h1 className="projectsHeader">In-Progress Projects</h1>
        <h2 className="projectName">CU@LilRedBarn Nigerian Dwarf Dairy Goat Farm</h2>
        <div className="projectBody">

          <div className="projectInformation">
            <h3 className="desKeyHeader">Description: </h3>
            <h3 className="desKeyHeader">Key Features:</h3>



          </div>
        </div>

      </div>
    </div>
  )
}

export default Portfolio;