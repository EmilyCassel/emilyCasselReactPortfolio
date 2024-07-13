import emilyCassel from "../assets/images/emilyCassel.jpeg"



function Home() {
    return (

        <div className="aboutMeImageResume">
            <div className="homeMeAll">
                <div className="aboutMeGrouping">
                    <div className="imageContainer">
                        <img className="aboutMeImage" src={emilyCassel} alt="myPhoto" />
                    </div>
                    <div className="introductionAndLinkedIn">
                        <h2 className="aboutMeHeader">About Me Summary</h2>
                           
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

                        <div className="externalHomeLinks">
                            <h2><a href="https://www.linkedin.com/in/emily-cassel-5a2980245/" target="_blank">LinkedIn</a></h2>
                            <h2><a href="https://github.com/EmilyCassel" className="githubLink">Github</a></h2>
                        </div>    
                    </div>
                        

                    </div>

                </div>
                
           

        </div>
    )
}

export default Home;