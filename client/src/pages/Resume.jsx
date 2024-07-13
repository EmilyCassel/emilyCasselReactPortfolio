function Resume() {
    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="resumeAll">

            <div className="inPageLinks">
                <button className="resumeLinkButton" onClick={() => scrollToSection('skills')}>Skills</button>
                <button className="resumeLinkButton" onClick={() => scrollToSection('projects')} href="/Portfolio">Projects</button>
                <button className="resumeLinkButton" onClick={() => scrollToSection('workExperience')}>Work Experience</button>
                <button className="resumeLinkButton" onClick={() => scrollToSection('education')}>Education</button>
                <button className="resumeLinkButton" onClick={() => scrollToSection('continuedEducation')}>Continuing Education</button>
                <button className="resumeLinkButton" onClick={() => scrollToSection('travelExperience')}>Travel Experience</button>
                <button className="resumeLinkButton" onClick={() => scrollToSection('languageSkills')}>Language Skills</button>
                <button className="resumeLinkButton" onClick={() => scrollToSection('references')}>References</button>
            </div>

            <div className="resumeAllSections">
                <section id="skills">
                    <h2 className="sectionHeader">Skills</h2> 
                        <h3 className="skillTypeSection">Transferable Skills</h3>
                            <p className="skillInformation">Creative Problem Solving, Project Management, Client Relations, Effective Communication, Customer Satisfaction, Dependability, Creativity, Adaptability and Flexibility, Learning and Training Methodology, Time Management, Analytical Thinking, Decision Making, Team Collaboration, Ability to Work Independently or as a Team, Attention to Detail</p>
                        <h3 className="skillTypeSection">Technical Skills</h3>
                            <h4 className="technicalSkillType">Software Languages:</h4>
                                <p className="skillInformation">JavaScript, HTML, CSS, PostgreSQL </p>
                            <h4 className="technicalSkillType">Tools:</h4>
                                <p className="skillInformation">VS Code, Node.js, Express.js, Handlebars.js, Tailwind, Canvas, Bootstrap, React, Gitflow/Github, JSON, Wordpress, Adobe Photoshop</p>
                            <h4 className="technicalSkillType">Frameworks/Libraries:</h4>
                                <p className="skillInformation">jQuery, Bootstrap, Materialize. </p>
                            <h4 className="technicalSkillType">Additional:</h4>
                                <p className="skillInformation">Responsive design principles, testing frameworks, Web design and Layout, API Integration, Google Suite, Microsoft Office, Computer Literacy </p>
                </section>

                
                <section id="workExperience">
                    <h2 className="sectionHeader">Work Experience</h2>
                        <h3 className="workHeader">Executive Assistant (2011 - Present) </h3>
                            <h4 className="workBusiness">CU@LilRedBarn Nigerian Dwarf Dairy Goat Farm, Muncie Indiana</h4>
                                <p className="workDuties">Handled a diverse range of responsibilities, including administrative paperwork, landscaping, animal care, daily farm operations, garden and orchard maintenance, technical support, and domestic chores. </p>
                                <p className="workDuties">Applied strong organizational skills and attention to detail to manage various responsibilities efficiently</p>
                                <p className="workDuties">Contributed significantly to the farm's operations and success through effective multitasking and problem-solving.</p>
                            <h5 className="keyAccomplishments">Key Accomplishments:</h5> 
                                <p className="keyAccList">Played a crucial role in maintaining the smooth operations of the farm. </p>
                                <p className="keyAccList">Demonstrated adaptability and versatility in handling both administrative and hands-on tasks.</p>
                                <p className="keyAccList">Collaborated with other businesses to utilize their services. </p>
                                <p className="keyAccList">Assisted in providing excellent customer service and satisfaction.</p>
                        
                            <h3 className="workHeader ">Various Short Term Roles</h3>
                            <div className="variousRoles">
                                <div className="shortRole">
                                    <h4 className="shortTimeJobHeader">Certified Nursing Assistant (2018-2019)</h4>
                                        <p className="workDuties"></p>
                                        
                                    <h5 className="keyAccomplishments">Key Accomplishments:</h5> 
                                        <p className="keyAccList"></p>
                                </div>
                        
                                <div className="shortRole">
                                    <h4 className="shortTimeJobHeader">Service Champion (2017-2018)</h4>
                                            <p className="workDuties"></p>
                                        
                                        <h5 className="keyAccomplishments">Key Accomplishments:</h5> 
                                            <p className="keyAccList"></p>
                                </div>
                        </div>
                    </section>





                <section id="education">
                    <h2 className="sectionHeader">Education</h2>
                        <h3 className="educationSubheader">Rutgers University Full-Stack Coding Certificate: New Brunswick, NJ (Completed) | 2023 - 2024</h3>
                            <h4 className="educationWhen"></h4>
                            <h4 className="educationWhat">Certificate in Full-Stack Web Development</h4>
                            <h4 className="aboutEducation">Intensive 13-week program focusing on industry-standard coding languages and software development.</h4>

                        <h3 className="educationSubheader">Customs Brokers Program: Online (Completed) | 2022 - 2023</h3>
                            <h4 className="educationWhen"></h4>
                            <h4 className="educationWhat">Customs Brokers License</h4>
                            <h4 className="aboutEducation">An intensive program focused on imports and exports for the United States of America that culminated in the taking and passing of the Custom Brokers Licensing Examination in October 2023.</h4>

                        <h3 className="educationSubheader">University of Lynchburg: Lynchburg Virginia (Graduated) | 2017 - 2021</h3>
                            <h4 className="educationWhen"></h4>
                            <h4 className="educationWhat">Bachelor of Science - Exercise Physiology</h4>
                            <h4 className="aboutEducation">A four-year program in Exercise Physiology offering a cutting-edge curriculum, small class sizes, and a focus on anatomy, physiology, and sciences. The program emphasizes analytical thinking, problem-solving, critical thinking, technical skills, and team collaboration, providing a comprehensive education. </h4>
                </section>


                <section id="continuedEducation">
                    <h2 className="sectionHeader">Continuing Education</h2>
                        <h3 className="continueEducationLocation">Udemy</h3>
                        <h3 className="continueEducationLocation">Rosetta Stone</h3>
                </section>



                <section id="travelExperience">
                    <h2 className="sectionHeader"> Extensive Travel Experience</h2>
                        <h3 className="travelYears">2021-2024</h3>
                            <h4>States: Illinois, Montana, North Dakota, South Dakota, Wyoming, Missouri, Tennessee, FLorida, Georgia, Kentucky, Virginia, West Virginia, Ohio, Idaho, Washington State, Oregon, Hawaii</h4>
                            <h4>Countries: Belgium, Germany, Portugal, Switzerland, Luxembourg, Liechtenstein, France, Netherlands, Austria </h4>
                     
                        <h3 className="travelYears">Before 2021</h3>
                            <h4>States: Alabama, Arizona, Arkansas, California, Colorado, Connecticut, Delaware, Florida, Georgia, Idaho, Illinois, Indiana, Iowa, Kansas, Kentucky, Louisiana, Maine, Maryland, Massachusetts, Michigan, Minnesota, Mississippi, Missouri, Montana, Nebraska, Nevada, New Hampshire, New Jersey, New Mexico, New York, North Carolina, North Dakota, Ohio, Oklahoma, Oregon, Pennsylvania, Rhode Island, South Carolina, South Dakota, Tennessee, Texas, Utah, Vermont, Virginia, Washington, Washington DC, West Virginia, Wisconsin, and Wyoming </h4>
                            <h4>Commonwealths: Puerto Rico</h4>
                            <h4>Countries: France, Germany, Switzerland, Italy, Canada, St. Lucia, Antigua</h4>
                        <h3>Key Skills and Personal Growth:</h3>
                            <ul>
                                <li>Cultural Awareness and Sensitivity: Gained a deep understanding of diverse cultures and customs, enhancing my ability to work effectively in multicultural environments.</li>
                                <li>Adaptability and Flexibility: Developed strong problem-solving skills and the ability to adapt quickly to new and changing environments.</li>
                                <li>Independence and Self-Reliance: Demonstrated the ability to navigate unfamiliar situations independently and make informed decisions under pressure.</li>
                                <li>Networking and Relationship Building: Established a global network of contacts and developed strong interpersonal skills through interactions with people from different walks of life.</li>
                                <li>Improved proficiency in French, German, and Spanish, enhancing reading and writing skills in these languages.</li>
                                <li>Communication Skills: Enhanced my ability to communicate clearly and effectively with people from various backgrounds.</li>
                                <li>Global Perspective: Cultivated a broad perspective on global issues and trends, enriching my understanding of the world and my role within it.</li>
                            </ul>
                        
                    <section id="languageSkills">
                            <h2 className="sectionHeader">Languages</h2>
                                <p>Elementary/Travel Proficiency in French, Spanish and German</p>    
                    </section>   
                </section>


               


                <section id="references">
                    <h2 className="sectionHeader">References</h2>
                        <h3 className="referenceName">JD Tadlock</h3>
                            <ul className="aboutReference">
                                <li className="referenceInformation">Email: </li>
                                <li className="referenceInformation">Relationship: </li>
                                <li className="referenceInformation">Known for 1 year</li>
                            </ul>
                        <h3 className="referenceName">Roma Warren</h3>
                            <ul className="aboutReference">
                                <li className="referenceInformation">Email: romawarren4710@gmail.com</li>
                                <li className="referenceInformation">Phone Number: (765)–744–8581</li>
                                <li className="referenceInformation">Relationship: Animal Care Liaison to CU@LilRedBarn for Boyce Animal Hospital</li>
                                <li className="referenceInformation">Known for 20 years</li>
                            </ul>
                        <h3 className="referenceName">Charles Swayne</h3>
                            <ul className="aboutReference">
                                <li className="referenceInformation">Email: charles@jadepuma.com</li>
                                <li className="referenceInformation">Relationship: Tutor/ Classmate at Rutgers University Full Stack Web Development Bootcamp</li>
                                <li className="referenceInformation">Known for 1 year</li>
                            </ul>
                        <h3 className="referenceName">Faith Ross</h3>
                            <ul className="aboutReference">
                                <li className="referenceInformation">Email: faithross24@gmail.com </li>
                                <li className="referenceInformation">Phone Number: (765)–748–4498</li>
                                <li className="referenceInformation">Relationship: Animal Care Liaison to CU@LilRedBarn for Boyce Animal Hospital</li>
                                <li className="referenceInformation">Known for 8 years</li>
                            </ul>
                        <h3 className="referenceName">Becky Siegler</h3>
                            <ul className="aboutReference">
                                <li className="referenceInformation">Phone Number: (434)–660–6067</li>
                                <li className="referenceInformation">Relationship: Fellow member of the BackPackers Volunteer Program at Lynchburg Methodist Church</li>
                                <li className="referenceInformation">Known for 8 years</li>
                            </ul>
                        <h3 className="referenceName">Angelica Vorderstrasse</h3>
                            <ul className="aboutReference">
                                <li className="referenceInformation">Email: romawarren4710@gmail.com</li>
                                <li className="referenceInformation">Phone Number: (765)–744–8581</li>
                                <li className="referenceInformation">Relationship: Mentor/Tutor for Customs Brokers License</li>
                                <li className="referenceInformation">Known for 5 years</li>
                            </ul>
                        <h3 className="referenceName">Daniel Cassel</h3>
                            <ul className="aboutReference">
                                <li className="referenceInformation">Email: dscassel01@gmail.com</li>
                                <li className="referenceInformation">Phone Number: (765)–730–4331</li>
                                <li className="referenceInformation">Relationship: Executive Vice President of CU@LilRedBarn Goat Farm/ boss/ brother </li>
                                <li className="referenceInformation">Known for 28 years</li>
                            </ul>
         
                        <h3 className="referenceName">Margot Cassel</h3>
                            <ul className="aboutReference">
                                <li className="referenceInformation">Email: lilredbarn@hotmail.com</li>
                                <li className="referenceInformation">Phone Number: (765)–730–0145</li>
                                <li className="referenceInformation">Relationship: Executive of CU@LilRedBarn Goat Farm/ boss/ mom</li>
                                <li className="referenceInformation">Known for 31 years</li>
                            </ul>
                    
                </section>

            </div>


            </div>
    )
}

export default Resume