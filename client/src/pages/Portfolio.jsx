import freeLancer from "../assets/images/freeLancer.png"
import goats from "../assets/images/goats.png"


function Portfolio() {
  return (
    <div>
      <h1 className="portfolioHeader">Completed Projects</h1>

      <div className="portfolioList">

        <div className="projectFreeLancer">
          <div className="freeLancerBody">
            <div className="freeLancerInnerBody">
              <h2 className="freeLancerHeader">freeLancer</h2>
              <h3>Description</h3>
                <p className="freeLancerParagraph">freeLancer is an application designed to empower freelance workers by enabling them to efficiently track their work hours across multiple projects, and manage project payment statuses. With freeLancer, freelance workers can easily organize their workload and accurately bill clients.</p>
              <h3>Key Features:</h3>
                <p>Transparency and Security: Offers clear and detailed breakdowns of billable hours and project costs for full transparency, and implements robust security measures to ensure the protection of user data.</p>
                <p>Efficient Management: Efficiently track work hours across multiple projects, manage project payment statuses and assign payments to projects, and easily organize workload to maintain productivity.</p>
                <p>Technologies Utilized: HTML, CSS, JavaScript, API Integration, Local Storage Management, Responsive Design, Security protocols. </p>
                <p>Worked as a team to build an application with an agile environment, foster collaboration and user ease and interest.</p>
              <div className="freeLancerLinks">
                <p className="freeLancerLink"><a href="https://salty-coast-36768-7c025fc4e535.herokuapp.com/">freeLancer Demo</a></p>
                <p className="freeLancerLink"><a href="https://github.com/dann9109/freeflow">freeLancer Github</a></p>
              </div>
            </div>
            <img src={freeLancer} className="freeLancerImage" />
          </div>
        </div>


        <div className="projectStudentLink">
          <div className="studentLinkBody">
            <div className="studentLinkInnerBody">
              <h2 className="studentLinkHeader">StudentLink</h2>
              <h3>Description</h3>
                <p className="studentLinkParagraph">Student Link' empowers students to take control of their study sessions by easily finding study partners or forming groups with a few clicks. Tailor-made for students of all levels, our app fosters collaborative learning through a user-friendly interface that simplifies posting study requests and scheduling sessions. 'Student Link' stands out for its simplicity and efficiency, connecting students effortlessly for shared academic success.</p>
              <h3>Key Features:</h3>
                <p>Connectivity and User Experience: Quickly find study partners or form study groups with a few clicks through an intuitive design for posting study requests and scheduling sessions. Supports students of different languages and abilities, fostering a diverse learning environment.</p>
                <p>Efficient Study Management: Streamlines the process of organizing and managing study sessions, ensuring efficient study management.</p>
                <p>Technologies Utilized: HTML, CSS, JavaScript, API Integration, Local Storage Management, Responsive Design, Security protocols. </p>
                <p>Collaboratively developed the application in an agile environment, focusing on its usefulness, user-friendly atmosphere, ease of use, and user interest to enhance the overall experience.</p>
              <div className="studentLinkLinks">
                <p className="studentLinkLink"><a href="https://salty-coast-36768-7c025fc4e535.herokuapp.com/">StudentLink Demo</a></p>
                <p className="studentLinkLink"><a href="https://github.com/shannontice/Student-Link">StudentLink Github</a></p>
              </div>
            </div>
            <img  />
          </div>
        </div>








        <h2 className="portfolioHeader" >Projects In Progress</h2>

        <div className="projectGoats">
          <div className="goatsBody">
            <div className="goatsInnerBody">
              <h2 className="goatsHeader">CU@LilRedBarn Nigerian Dwarf Dairy Goat Farm</h2>
              <p className="goatsParagraph">CU@LilRedBarn Nigerian Dairy Dwarf Goat Farm is </p>

            </div>

            <img src={goats} className="goatsImage" />
          </div>
        </div>





      </div>


    </div>
  )
}

export default Portfolio;