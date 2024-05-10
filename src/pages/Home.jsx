import emilyCassel from "../assets/images/emilyCassel.jpeg"


function Home() {
   return (
      <div className="aboutMe">
         <div className="aboutMeImageResume">
            <img className="aboutMeImage" src={emilyCassel} alt="myPhoto" />
         </div>
            <div className="aboutMeBasics">
               <h1 className="aboutMeHeader">About Me</h1>
               <div className="aboutMeGrouping">
                  <p className="introduction">
                  As a Full-Stack Web Developer, my journey has been one of resilience, exploration, and discovering my true passion.
                  </p>
               <div className="aboutMeLinks">
                  <h2><a className="linkedInLink" href="https://www.linkedin.com/in/emily-cassel-5a2980245/">LinkedIn</a></h2>
                  <h2><a className="resumeLink" href="/Resume">Resume</a></h2>
                  <h2><a className="aboutMeLink" href="/AboutMe">About Me</a></h2>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home 