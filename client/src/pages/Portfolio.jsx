import freeLancer from "../assets/images/freeLancer.png"
import goats from "../assets/images/goats.png"
import studentLink from "../assets/images/studentLink.jpg"


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
                <p className="desKey">  freeLancer is an application designed to empower freelance workers by enabling them to efficiently track their work hours across multiple projects, and manage project payment statuses. With freeLancer, freelance workers can easily organize their workload and accurately bill clients.</p>
              <h3 className="desKeyHeader">Key Features:</h3>
                
                  <p className="desKey"> Transparency and Security: Offers clear and detailed breakdowns of billable hours and project costs for full transparency, and implements robust security measures to ensure the protection of user data.</p>
                  <p className="desKey">Efficient Management: Efficiently track work hours across multiple projects, manage project payment statuses and assign payments to projects, and easily organize workload to maintain productivity.</p>
                <p className="desKey">Technologies Utilized: HTML, CSS, JavaScript, API Integration, Local Storage Management, Responsive Design, Security protocols.</p>
                  <p className="desKey">Worked as a team to build an application with an agile environment, foster collaboration and user ease and interest.</p>
              <h3></h3>
              <h3></h3>
           </div>
          
              <img src={freeLancer} className="projectImage" />
            
          </div>









          <h2 className="projectName">StudentLink</h2>
          <div className="projectBody">

            <div className="projectInformation">
              <h3 className="desKeyHeader">Description:</h3>
                <p className="desKey">Student Link' empowers students to take control of their study sessions by easily finding study partners or forming groups with a few clicks. Tailor-made for students of all levels, our app fosters collaborative learning through a user-friendly interface that simplifies posting study requests and scheduling sessions. 'Student Link' stands out for its simplicity and efficiency, connecting students effortlessly for shared academic success.</p>
              <h3 className="desKeyHeader">Key Features:</h3>
                
                  <p className="desKey">Connectivity and User Experience: Quickly find study partners or form study groups with a few clicks through an intuitive design for posting study requests and scheduling sessions. Supports students of different languages and abilities, fostering a diverse learning environment.</p>
                  <p className="desKey">Efficient Study Management: Streamlines the process of organizing and managing study sessions, ensuring efficient study management.</p>
                  <p className="desKey">Technologies Utilized: HTML, CSS, JavaScript, API Integration, Local Storage Management, Responsive Design, Security protocols.</p>
                  <p className="desKey">Collaboratively developed the application in an agile environment, focusing on its usefulness, user-friendly atmosphere, ease of use, and user interest to enhance the overall experience.</p>
                
              <h3></h3>
              <h3></h3>
                </div>
                  <img src={studentLink} className="projectImage" />
              </div>
        </div>
      </div>












        <div className="allProgressProjects">
        


  <h1 className="projectsHeader">In-Progress Projects</h1>


    <h2 className="projectName">CU@LilRedBarn Nigerian Dwarf Dairy Goat Farm</h2>



    <div className="projectBody">

      <div className="projectInformation">
        <h3 className="desKeyHeader">Description:</h3>
          <p className="desKey">The CU@LilRedBarn app is designed to streamline the process of purchasing goats from the family-owned CU@LilRedBarn Nigerian Dwarf Dairy Goat Farm. It allows users to easily contact farm owners, view detailed pedigrees and photos, and check farm standards, ensuring a seamless and transparent purchasing experience.</p>
        <h3 className="desKeyHeader">Key Features:</h3>
          
            <p className="desKey">Seamlessly explore the goats through a user-friendly interface, with access to comprehensive lineage data for each goat to make informed purchasing decisions. Transparent insights into the quality and care dedicated to raising the goats.</p>
            <p className="desKey">Direct Contact for Purchasing: Users must contact the farm owner directly for purchases. The owner's contact information is easily accessible on the site, with the option to send an email through the app for direct communication.</p>
            <p className="desKey">Technologies Utilized: HTML, CSS, JavaScript, API Integration, Local Storage Management, Responsive Design, MongoDB.</p>
            <p className="desKey">Designed in collaboration with the farm team and owner to meet their approval, ensuring a clear-cut and efficient application.</p>
          
            <h3></h3>
            <h3></h3>
          </div>
            <img src={goats} className="projectImage" />
          </div>
           

            



      
          
      </div>
      <div className="blank"></div>
      
    </div>
  )
}

export default Portfolio;