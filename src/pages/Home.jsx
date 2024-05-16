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
                            As a Full-Stack Web Developer, my journey has been one of resilience, exploration, and discovering my true passion.
                        </p>
                        <p className="aboutMeParagraph">
                            My academic journey commenced at 18, where I initially pursued nursing at Ball State University. However, life threw me a curveball at 20 when I faced health challenges. Despite the obstacles, I persevered and made the decision to transfer to IvyTech Community College in 2013. Over the next four years, amidst battling health issues, I realized that nursing wasn't my destined path. Thus, I transitioned my focus to Exercise Physiology.</p>
                        <p className="aboutMeParagraph">
                            In 2021, I proudly graduated from the University of Lynchburg with a degree in Exercise Physiology. However, the onset of COVID-19 limited opportunities, prompting me to embark on a three-year journey of travel. This period allowed me to fulfill many dreams that were once hindered by illness, while also delving into the world of logistics in my spare time. I passed the Import/Export Logistics Exam in October 2023.
                        </p>
                        <p className="aboutMeParagraph">
                            Reflecting on my experiences as a patient, I realized that my interest in healthcare had waned more than anticipated. It was during this period of introspection that I discovered my newfound passion for web development. Enrolling in the Full-Stack Web Development Course at Rutgers University further solidified this passion, revealing the excitement and fulfillment I find in crafting digital solutions.
                        </p>
                        <p className="aboutMeParagraph">
                            Now, armed with a diverse skill set and a fervent enthusiasm for web development, I am actively seeking opportunities to contribute my expertise, creativity and perseverance as a Full-Stack Web Developer.
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
                                                    <p className="skillParagraph">Proficiency in MS (Excel, Word, PowerPoint & Outlook), Google Application skills. Computer Literacy </p>
                                                </div>

                                                <div>
                                                    <h3 className="skillType">Soft Skills</h3>
                                                    <p className="skillParagraph">Strong problem solving skills, exceptional time management skills. Flexible and dependable in a teamwork centered and fast paced environment. Excellent ability to maintain confidentiality. Works with a phenomenal imagination and creativity. </p>
                                                </div>
                                            </div>


                                            <div className="skillBig">
                                                <div className="skillMini">
                                                    <h3 className="skillType">Logistics Skills</h3>
                                                    <p className="skillParagraph">Familiar with ACE Business rules, HTSUS Classification, General Notes and 19 CFR. Passionate about logistics and working in the field of Duty Drawback</p>
                                                </div>

                                                <div className="skillMini">
                                                    <h3 className="skillType">Full Stack Web Development Skills</h3>
                                                    <p className="skillParagraph">JavaScript, Node.js, Express.js, MERN, React, Flexbox, Bootstrap, inquirer, jQuery, Tailwind, Object-Oriented, Programming, Object-Related Mapping, NoSQL, MySQL, MERN, State, Model-View-Controller, Web API’s</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Tab>



                                <Tab title={"Work Experience"} onClose={() => handleTabClose(index)}>
                                    <h2 className="workSectionHeader" id="workExperience">Work Experience</h2>

                                    <div className="workSectionAll">

                                        <div className="currentWork">
                                            <h3 className="currentWorkHeader">Current</h3>
                                            <div className="goatWork">
                                                <h4 className="workLocation">Location: CU@LilRedBarn Goat Farm Inc. Muncie, IN</h4>
                                                <h4 className="workDescription">Housekeeper, Landscaper, Executive Secretary, Animal Caretaker</h4>
                                                <h4 className="workTime">Years: 2017- Current School Holidays (May-August & December) 2017-2021, May 2021- Current
                                                </h4>
                                                <h4 className="workDuties">Duties:</h4>
                                                <ul className="workDutiesList">
                                                    <li>Organize veterinary appointments, medications and at home care for 14 dogs</li>
                                                    <li>In charge of food ordering for 14 dogs</li>
                                                    <li>Helped to organize CEOs daily schedule, provided backup when things did not go as planned, assisted in barn cleaning and organization</li>
                                                    <li>In charge of household cleaning, chores, groceries, meals, technical support, </li>
                                                </ul>
                                                <h4 className="workSLaD">Skills Learned and Demonstrated:</h4>
                                                <ul className="workSLaDList">
                                                    <li>Excellent communication and time management skills while managing a wide variety of tasks</li>
                                                    <li>Collaborates with a variety of businesses while procuring different services </li>
                                                    <li>Demonstrates compassion, critical thinking skills and problem solving skills simultaneously</li>
                                                    <li>Demonstrates adaptability for multiple devices and strong technical literacy</li>
                                                    <li>Demonstrates strong autonomy, organization, dependability, completion and reliability her required tasks</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="previousWorkHeader">Previous</h3>
                                            <div className="otherWork">
                                                <div className="hospitalWork">
                                                    <h4 className="workLocation">Location: Bedford Hospital Bedford, VA</h4>
                                                    <h4 lassName="workDescription">Certified Nursing Assistant</h4>
                                                    <h4 className="workTime">When: December 2018-June 2019</h4>
                                                    <h4 className="workDuties">Duties:</h4>
                                                    <ul className="workDutiesList">
                                                        <li>Assisted patients in their daily life tasks such as eating, changing and baths</li>
                                                        <li>Was king and compassionate to patients taking time to learn their names and talk to them</li>
                                                        <li>Changed bedding and sheets</li>
                                                        <li>Charted daily activities accurately in an accurate time frame</li>
                                                    </ul>

                                                    <h4 className="workSLaD">Skills Learned and Demonstrated:</h4>
                                                    <ul className="workSLaDList">
                                                        <li>Compatible with many different groups of people and personalities </li>
                                                        <li>Accomplished and dependable in teamwork and collaborative efforts </li>
                                                        <li>Able to adjust to a changing and fast paced environments quickly and with ease</li>
                                                        <li>Kept up to date on newest information and techniques</li>
                                                        <li>Completed tasks in a timely and correct manner</li>
                                                    </ul>
                                                </div>
                                                <div className="hospitalWork">
                                                    <h4 className="workLocation">Location: Petsmart Lynchburg, VA</h4>
                                                    <h4 lassName="workDescription">Service Champion</h4>
                                                    <h4 className="workTime">When: October 2017- April 2018</h4>
                                                    <h4 className="workDuties">Duties:</h4>
                                                    <ul className="workDutiesList">
                                                        <li>Provided accurate information to customers in a professional and helpful manner</li>
                                                        <li>Worked the register quickly and competently with knowledge or what was in the store</li>
                                                        <li></li>
                                                    </ul>
                                                    <h4 className="workSLaD">Skills Learned and Demonstrated:</h4>
                                                    <ul className="workSLaDList">
                                                        <li>Gained familiarity with repeat customers, learning names of pets and owners</li>
                                                        <li>Professional and capable in dealing with different groups of people and their interests</li>
                                                        <li>Utilized and strengthened teamwork and organizational skills </li>
                                                        <li>Displays ability to resolve conflicts quickly and calmly</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Tab>



                                <Tab title={"Education"} onClose={() => handleTabClose(index)}>
                                    <div>
                                        <h2 className="education" id="education">Education</h2>

                                        <h3>Rutgers Full Stack Web Development BootCamp</h3>
                                        <h4>Graduated March 6th 2024</h4>
                                        <h5>Course Instruction Included:</h5>
                                        <p>CSS, MERN, NOSQL, MySQL, JavaScript, Node.js, React, Express,js, jQuery</p>
                                        <h5>Relevant Abilities and Experience Gained:</h5>
                                        <ul>
                                            <li>Utilization of: CSS, MERN, NOSQL, MySQL, JavaScript, Node.js, React, Express,js, jQuery</li>
                                            <li>
                                                Abreast of current online trends
                                            </li>
                                            <li>
                                                Able to work independently on assigned tasks with self-disciple and time management
                                            </li>
                                        </ul>


                                        <h3>Customs Brokers License 2023</h3>
                                        <h4>Passed Brokers Licensing Exam October 2023</h4>
                                        <h4>Course Instruction Included:</h4>
                                        <p>19 CFR, ACE business rules and HTSUS classification</p>
                                        <h4>Relevant Abilities and Experience Gained:</h4>
                                        <ul>
                                            <li>Familiarized with the 19 CFR, ACE business rules and HTSUS classifcation and book</li>
                                            <li>Abreast of Duty Drawback</li>
                                            <li>Learned self regulation time management and perseverance</li>
                                            <li>Able to work independently and on assigned tasks</li>
                                        </ul>

                                        <h3>Bachelor of Science Exercise Physiology</h3>
                                        <h4>Obtained from University of Lynchburg</h4>
                                        <h4>Attended: August 2017 - June 2021</h4>
                                        <h4>Graduated: May 2021</h4>
                                        <h4>Relevant Course Work:</h4>
                                        <p>Microsoft Office, specifically with Excel, and with Google Applications, statistics, ethics, writing </p>
                                        <h4>Relevant Abilities and Experience Gained:</h4>
                                        <ul>
                                            <li>Excellent time management, team work, problem solving and organizational skills</li>
                                            <li>Demonstrated dependable and accurate abilities in analysis, creative writing, scientific writing, data collection, information transfer, memory and basic mathematics</li>
                                            <li>Exhibited interpersonal skills through communication (verbal and written) and conflict resolution</li>
                                            <li>Voiced questions and concern for minority groups</li>
                                            <li>Able to ask questions in a clear concise manner</li>
                                        </ul>


                                        <h3>Certified Nursing Assistant License</h3>
                                        <h4>Obtained at: AllHeart CNA</h4>
                                        <h4>Obtained June 2017</h4>
                                        <h4>Relevant Course Work:</h4>
                                        <p>Computer work</p>
                                        <p>keeping track of tasks in a computer setting</p>
                                        <h4>Relevant Abilities and Experience Gained:</h4>
                                        <ul>
                                            <li>Ability and experience in working with a team</li>
                                            <li>Dependable</li>
                                            <li>Willing to learn about and educate oneself on other groups and cultures</li>
                                        </ul>
                                    </div>
                                </Tab>


                                <Tab title={"Travel Experience"} onClose={() => handleTabClose(index)}>
                                    <div className="travelSection" id="travelExperience">
                                        <h2>Travel Experience</h2>
                                        <h3>Travel Experience 2021 - 2023</h3>
                                        <h4>Switzerland, France, Australia, Netherlands, Liechtenstein, Germany, Belgium, Luxembourg, Portugal, 25 States of the United States of America</h4>
                                        <h3>Life Travel Experience</h3>
                                        <h4>Canada, 49 of the United States, Italy, Switzerland, France, Germany, Puerto Rico and five Caribbean Islands</h4>
                                        <h3>Relevant Skills:</h3>
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