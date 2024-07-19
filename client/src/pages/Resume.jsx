function Resume() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="resumeAll">

            <div className="inPageLinks">
                <div className="fourLinksOne">
                    <button className="resumeLinkButton" onClick={() => scrollToSection('skills')}>Skills</button>
                    <a href="/Portfolio">
                        <button className="resumeLinkButton">Projects</button>
                    </a>
                    <button className="resumeLinkButton" onClick={() => scrollToSection('workExperience')}>Work Experience</button>
                    <button className="resumeLinkButton" onClick={() => scrollToSection('education')}>Education</button>
                    <button className="resumeLinkButton" onClick={() => scrollToSection('languageSkills')}>Language Skills</button> 
                     <button className="resumeLinkButton" onClick={() => scrollToSection('references')}>References</button>
                       
                   
                 
                   
                </div>
            </div>
            
            {/* <hr></hr>
            <div className="resumeAllSections">
                <section id="skills">
                    <h2 className="summaryHeader">Summary</h2>
                        <p className="skillInformation">Recent graduate of well-respected full stack web development from Rutgers University Coding Bootcamp Program. Looking for full time employment in this exciting and creative field. I am specifically interested in Front-End Development because I enjoy the creativity and real-world applicability. Excel and specialize in JavaScript, CSS, and UI/UX design and development. Adept at collaborating within agile environments, delivering clean code, and communicating effectively. 
                    </p>
                    <p className="skillInformation">
                        I pursued this program to enrich my technological capabilities while my Customs Brokers License was being processed. During my coding I became completely engaged and recognized my passion for a career in web development.
                    </p>
                </section>
            </div> */}
            <hr></hr>
            <div className="resumeAllSections">
                <section id="skills">
                    <h2 className="sectionHeader">Skills</h2>
                    <h3 className="skillTypeSection">Technical Skills</h3>
                        <h4 className="technicalSkillType">Software Languages:</h4>
                            <p className="skillInformation">JavaScript, HTML, CSS, PostgreSQL </p>
                        <h4 className="technicalSkillType">Tools:</h4>
                            <p className="skillInformation">VS Code, Node.js, Express.js, Handlebars.js, Tailwind, Canvas, Bootstrap, React, Gitflow/Github, JSON, Wordpress, Adobe Photoshop</p>
                        <h4 className="technicalSkillType">Frameworks/Libraries:</h4>
                            <p className="skillInformation">jQuery, Bootstrap, Materialize. </p>
                        <h4 className="technicalSkillType">Additional Technical Skills:</h4>
                            <p className="skillInformation">Fluent in responsive design principles, Capable in testing frameworks, Skillful and Creative in Web design and Layout, Practiced in API Integration, Talented in Google Suite, Proficient in Microsoft Office, Competent in Debugging, Literate in Multiple Computer Products</p>
                    <h3 className="transferableSkillTypeSection">Transferable Skills</h3>
                        <ul>
                            <li className="transferableSkillInformation">Confident in Project Management</li>
                            <li className="transferableSkillInformation">Clear Communicator</li>
                            <li className="transferableSkillInformation">Value Customer Satisfaction</li>
                            <li className="transferableSkillInformation">Dependable and Flexible</li>
                            <li className="transferableSkillInformation">View Work Through Creative Lens</li>
                            <li className="transferableSkillInformation">Ability to Work Effectively Both Independently and as a Team</li>
                            <li className="transferableSkillInformation">Ability to Adapt Quickly to Changing Situations</li>
                            <li className="transferableSkillInformation">Efficiency in with Time Management/Self-Monitoring in Non-Office Work Setting</li>
                           
                        </ul>
                            
                    

                </section>
                <hr></hr>

                <section id="workExperience">
                    <h2 className="sectionHeader">Work Experience</h2>
                        <h3 className="workHeader">Executive Assistant to Family Farm (2011 - Present) </h3>
                            <h4 className="workBusiness">CU@LilRedBarn Nigerian Dwarf Dairy Goat Farm, Muncie Indiana</h4>
                                <p className="dutiesKey">Handled a diverse range of responsibilities, including assistance with filing and maintenance of pedigree documents with American Dairy Goat Association, animal care, maintenance  and care of farm property and operations, technical support for record keeping  </p>
                                <h5 className="keyAccomplishments">Key Accomplishments:</h5>
                                    <p className="dutiesKey">Played a crucial in role helping maintaining the smooth operations of the farm. </p>
                                    <p className="dutiesKey">Demonstrated adaptability and versatility in handling both administrative and hands-on tasks.</p>
                                    <p className="dutiesKey">Collaborated with other businesses to utilize their services. </p>
                                    <p className="dutiesKey">Assisted in providing excellent customer service and satisfaction.</p>
                                    <p className="dutiesKey">I successfully collaborated with my family on various projects, honing my teamwork, communication, and problem-solving skills. </p>
                                    <p className="dutiesKey">The experience of working on the family farm taught me the importance of patience, flexibility, and maintaining a positive attitude in challenging situations. </p>







                    <h3 className="variousHeader">Various Short Term Positions</h3>

                    <div className="shortRole">
                        <h4 className="shortTimeJobHeader">Certified Nursing Assistant (2018-2019)</h4>
                        <h3 className="shortTimeJobLocation">Bedford Hospital, Bedford Virginia</h3>    
                    </div>

                    <div className="shortRole">
                        <h4 className="shortTimeJobHeader">Retail Position (2017-2018)</h4>
                        <h3 className="shortTimeJobLocation">PetSmart, Lynchburg Virginia</h3>
                    </div>
                    <div className="shortRole">
                        <h4 className="shortTimeJobHeader">Volunteer Involvement (2017-Present)</h4>
                        <h3 className="shortTimeJobLocation">Continuous involvement in frequent church volunteer work.</h3>
                    </div>
                  
                </section>











                <hr></hr>
                <section id="education">
                    <h2 className="sectionHeader">Education</h2>
                    <h3 className="educationSchool">Rutgers University Full-Stack Coding Certificate: New Brunswick, NJ (Completed) | 2023 - 2024</h3>
                    
                    <h4 className="educationWhat">Certificate in Full-Stack Web Development</h4>
                    <h4 className="aboutEducation">Intensive 13-week program focusing on industry-standard coding languages and software development.</h4>

                    <h3 className="educationSchool">Customs Brokers Program: Online (Completed) | 2022 - 2023</h3>
                    
                    <h4 className="educationWhat">Customs Brokers License</h4>
                    <h4 className="aboutEducation">An intensive program focused on import and export goods for the United States of America. CBL exam passed October 2023.</h4>

                    <h3 className="educationSchool">University of Lynchburg: Lynchburg Virginia (Graduated) | 2017 - 2021</h3>
              
                    <h4 className="educationWhat">Bachelor of Science - Exercise Physiology</h4>
                </section>





                       
                     
            <hr></hr>

                <section id="languageSkills">
                    <h2 className="languageHeader">Language Skills</h2>
                        <p className="languageList">Travel Proficiency in French, Spanish and German</p>
                </section> 
               



               
                

                <hr></hr>



                <section id="references">
                    <h2 className="sectionHeader">References</h2>
                    <div className="allReferences">





                        <div className="referenceSection">
                            <div className="referenceEach">
                                <h3 className="referenceName">JD Tadlock</h3>
                                <ul className="aboutReference">
                                    <li className="referenceInformation">Email: jt7903@gmail.com</li>
                                    <li className="referenceInformation">LinkedIn: linkedin.com/in/jd-tadlock-66323184</li>
                                    <li className="referenceInformation">Relationship:Instructor at Rutgers Full Stack Web Development Course</li>
                                    <li className="referenceInformation">Known for 1 year</li>
                                </ul>
                            </div>

                            <div className="referenceEach">
                                <h3 className="referenceName">Roma Warren</h3>
                                <ul className="aboutReference">
                                    <li className="referenceInformation">Email: romawarren4710@gmail.com</li>
                                    <li className="referenceInformation">Phone Number: (765)–744–8581</li>
                                    <li className="referenceInformation">Relationship: Animal Care Liaison to CU@LilRedBarn for Boyce Animal Hospital</li>
                                    <li className="referenceInformation">Known for 20 years</li>
                                </ul>
                            </div>
                            <div className="referenceEach">
                                <h3 className="referenceName">Zachary Barnes</h3>
                                <ul className="aboutReference">
                                    <li className="referenceInformation">Email: zachhsavage@gmail.com</li>
                                    <li className="referenceInformation">LinkedIn: linkedin.com/in/zachary-r-barnes</li>
                                    <li className="referenceInformation">Relationship: TA at Rutgers University Bootcamp</li>
                                    <li className="referenceInformation">Known for 1 year</li>
                                </ul>
                            </div>



                        </div>





                     




{/* 
                        <div className="referenceSection"> */}
{/* 




                            <div className="referenceEach">
                                <h3 className="referenceName">Daniel Cassel</h3>
                                <ul className="aboutReference">
                                    <li className="referenceInformation">Email: dscassel01@gmail.com</li>
                                    <li className="referenceInformation">Phone Number: (765)–730–4331</li>
                                    <li className="referenceInformation">Relationship: Executive Vice President of CU@LilRedBarn Goat Farm/ boss/ brother </li>
                                    <li className="referenceInformation">Known for 28 years</li>
                                </ul>
                            </div>





                            <div className="referenceEach">
                                <h3 className="referenceName">Margot Cassel</h3>
                                <ul className="aboutReference">
                                    <li className="referenceInformation">Email: lilredbarn@hotmail.com</li>
                                    <li className="referenceInformation">Phone Number: (765)–730–0145</li>
                                    <li className="referenceInformation">Relationship: Executive of CU@LilRedBarn Goat Farm/ boss/ mom</li>
                                    <li className="referenceInformation">Known for 31 years</li>
                                </ul>
                            </div>
                        </div> */}
                    </div>
                </section>
                <div className="blank">
                    <button className="backToTopButton" onClick={() => scrollToSection('top')}>
                        Back to Top
                    </button>
                </div>
            </div>
                

        </div>
    )
}

export default Resume



