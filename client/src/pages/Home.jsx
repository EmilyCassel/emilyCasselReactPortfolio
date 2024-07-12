import emilyCassel from "../assets/images/emilyCassel.jpeg"
import { Tab, Tabs } from "../components"


function Home() {
    return (

        <div className="aboutMeImageResume">
            <div className="homeMeAll">
                <div className="aboutMeGrouping">
                    <div className="imageContainer">
                        <img className="aboutMeImage" src={emilyCassel} alt="myPhoto" />
                    </div>
                    <div className="introductionAndLinkedIn">
                        <h2 className="aboutMeHeader">About Me</h2>
                            <p className="aboutMeParagraph">
                                Versatile Full Stack Web Developer with comprehensive training from Rutgers University Coding Bootcamp, specializing in JavaScript, CSS, and UI/UX design and development. Adept at collaborating within Agile environments, delivering clean code, and communicating effectively. Dedicated to continuous learning and innovation in both front-end and back-end technologies.</p>
                            <p className="aboutMeParagraph">
                                Reflecting on my experiences and newfound interests, I discovered a passion for web development. Enrolling in the Full-Stack Web Development Course at Rutgers University solidified this passion, as I found excitement and fulfillment in crafting digital solutions. Now, with a diverse skill set and fervent enthusiasm, I am eager to contribute my expertise, creativity, and perseverance as a Full-Stack Web Developer.
                            </p>
                            <p className="aboutMeParagraph">
                                Now, armed with a diverse skill set and a fervent enthusiasm for web development, I am actively seeking opportunities to contribute my expertise, creativity and perseverance as a Full-Stack Web Developer.
                            </p>
                            <p className="aboutMeParagraph">
                                I am eager to leverage my diverse skill set and passion for web development to pursue a career in full-stack JavaScript development.
                            </p>



                        <div className="tabsAll">
                            <Tabs>

                                <Tab title={"Skills"} onClose={() => handleTabClose(index)}>
                                    <div className="skillsSection">
                                        <h2 className="skillsHeading" id="skills">Skills</h2>
                                        <div className="resumeSkillsList">
                                            <div className="skillBig">
                                                <div className="skillMini">
                                                    <h3 className="skillType">Technical Skills</h3>
                                                    <p className="skillParagraph">
                                                    Software Languages: JavaScript, HTML, CSS, PostgreSQL
                                                    Tools: VS Code, Node.js, Express.js, Handlebars.js, Tailwind, Canvas, Bootstrap, React, Gitflow/Github, JSON, Wordpress, Adobe Photoshop
                                                    Frameworks/Libraries: jQuery, Bootstrap, Materialize.
                                                    Additional Skills: Responsive design principles, testing frameworks, Web design and Layout, API Integration, Google Suite, Microsoft Office, Computer Literacy          

                                                    </p>
                                                </div>

                                                <div>
                                                    <h3 className="skillType">Transferable Skills</h3>
                                                    <p className="skillParagraph">
                                                    Creative Problem Solving, Project Management, Client Relations, Effective Communication, Customer Satisfaction, Dependability, Creativity, Adaptability and Flexibility, Learning and Training Methodology, Time Management, Analytical Thinking, Decision Making, Team Collaboration, Ability to Work Independently or as a Team, Attention to Detail, Abreast of Current Online Trends
                                                         </p>
                                                </div>
                                            </div>


                                            <div className="skillBig">
                                                <div className="skillMini">
                                                    <h3 className="skillType">Logistics Skills</h3>
                                                    <p className="skillParagraph">Familiar with ACE Business rules, HTSUS Classification, General Notes and 19 CFR. Passionate about logistics and working in the field of Duty Drawback</p>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </Tab>



                                <Tab title={"Work Experience"} onClose={() => handleTabClose(index)}>
                                    <h2 className="workSectionHeader" id="workExperience">Work Experience</h2>

                                    <div className="workSectionAll">

                                        <div className="currentWork">
                                            <h3 className="currentWorkHeader">Current Work</h3>
                                                <div className="goatWork">
                                                    <h4 className="workLocation">Executive Secretary | CU@LilRedBarn Goat Farm Inc. | 2011 - Current</h4>
                                                
                                                
                                                    <h4 className="workDuties">Duties & Responsibilities:</h4>
                                                        <ul className="workDutiesList">
                                                            <li>Handled a diverse range of responsibilities, including administrative paperwork, landscaping, animal care, daily farm operations, garden and orchard maintenance, technical support, and domestic chores. </li>
                                                            <li>Applied strong organizational skills and attention to detail to manage various responsibilities efficiently. </li>
                                                            <li>Contributed significantly to the farm's operations and success through effective multitasking and problem-solving. </li>
                                                    
                                                        </ul>
                                                    <h4 className="workSLaD">Key Accomplishments:</h4>
                                                        <ul className="workSLaDList">
                                                            <li>Played a crucial role in maintaining the smooth day to day operations of the farm. </li>
                                                            <li>Organized care and feeding of 14 dogs at one time.</li>
                                                            <li>Collaborated with other businesses to utilize their services. </li>
                                                            <li>Assisted in providing excellent customer service and satisfaction.</li>
                                                            <li>Successfully worked daily with family members, utilizing effective conflict resolution skills to maintain a harmonious working environment.</li>
                                                        </ul>
                                                </div>
                                         </div>        
                                        <div className="shortWork">
                                            <h3 className="currentWorkHeader">Various Short Term Roles</h3>
                                                <h4 className="shortRole">Certified Nursing Assistant | Bedford Hospital | 2017-2018</h4>
                                                    <h5>Duties & Responsibilities</h5>
                                                        <ul>
                                                            <li></li>
                                                        </ul>
                                                    <h5>Key Accomplishments</h5>
                                                        <ul>
                                                            <li></li>
                                                        </ul>
                                                <h4 className="shortRole"></h4>
                                                    <h5>Duties & Responsibilities</h5>
                                                        <ul>
                                                            <li></li>
                                                        </ul>
                                                    <h5>Key Accomplishments</h5>
                                                        <ul>
                                                            <li></li>
                                                        </ul>
                                                


                                        </div>
                                       

                                        
                                        
                                    </div>

                                </Tab>



                                <Tab title={"Education"} onClose={() => handleTabClose(index)}>
                                    <div>
                                        <h2 className="education" id="education">Education</h2>
                                            <h3>Rutgers Full Stack Web Development BootCamp(Certificate Received) | New Brunswick, NJ </h3>
                                                <h4>Intensive 13-week program focusing on industry-standard coding languages and software development.</h4>

                        
                                            <h3>Customs Brokers License 2023 | Online | Passed Examination October 2023</h3>
                                                <h4>An intensive program focused on imports and exports for the United States of America that culminated in the taking and passing of the Custom Brokers Licensing Examination in October 2023.</h4>
                                       
                            
                                            <h3>University of Lynchburg | Bachelor of Science - Exercise Physiology | 2017 -2021 </h3>
                                                <h4>A four-year program in Exercise Physiology offering a cutting-edge curriculum, small class sizes, and a focus on anatomy, physiology, and sciences. The program emphasizes analytical thinking, problem-solving, critical thinking, technical skills, and team collaboration, providing a comprehensive education. </h4>
                                    </div>
                                </Tab>


                                <Tab title={"Volunteer Experience"} onClose={() => handleTabClose(index)}>
                                    <div className="volunteerSection" id="volunteerExperience"></div>
                                    <h1>Volunteer Experience</h1>
                                    <h2>Location: Lynchburg Methodist Church</h2>
                                      
                                        <h3>Backpacking Lunch Program:</h3>
                                            <h4>The Backpacking Lunch Program packed food for the weekend for those in food desserts. Lynchburg Methodist Church was linked to two local elementary schools. We received a list of from the school fo those who wished to participate in the program. Each Thursday we would pack grocery bags with enough food to get the individual families through the weekend.</h4>
                                            <h4>When: September 2017 - April 2020</h4>
                                                <h5>Stopped volunteering because program altered due to COVID</h5>
                                            <h4>Relevant Skills:</h4>
                                                <ul>
                                                    <li>Awareness of the world around me</li>
                                                    <li>Teamwork</li>
                                                    <li>Increased compassion for others</li>
                                                    <li>Commitment to a more caring world</li>
                                                </ul>

                                    <h2>United Methodist Women Group</h2>
                                        <h3>When: September 2017 - Current</h3>
                                        <h3>Activities:</h3>
                                            <ul>
                                                <li>Worked with the United Methodist Women's Group raise money to help educate families that want to become child advocates</li>
                                                <li>Worked in the backpacking program</li>
                                            </ul>


                                </Tab>

                                <Tab title={"Travel Experience"} onClose={() => handleTabClose(index)}>
                                    <div className="travelSection" id="travelExperience">
                                        <h2>Travel Experience 2021 - 2023</h2>
                                        <h3>Switzerland, France, Australia, Netherlands, Liechtenstein, Germany, Belgium, Luxembourg, Portugal, 25 States of the United States of America</h3>
                                        <h2>Life Travel Experience</h2>
                                        <h3>Canada, 49 of the United States, Italy, Switzerland, France, Germany, Puerto Rico and five Caribbean Islands</h3>
                                        <h2>Relevant Skills:</h2>
                                        <ul>
                                            <li>Ability to speak and read travel French, German and Spanish</li>
                                            <li>Increased French, Spanish and German language skills</li>
                                            <li>Respect for different cultures and people</li>
                                            <li>Increased communication skills within many different cultures and with many of people</li>
                                            <li>Time management skills</li>
                                            <li>Perseverance: Keeps going even when things did not go as planned</li>
                                            <li>Exceptional ability to adapt to changing circumstances and when things do not go as planned</li>
                                            <li>Ability to face physical and mental challenges head on with laughter, imagination, creativity and strength</li>
                                        </ul>
                                    </div>
                                </Tab>
                               


                            </Tabs>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home;