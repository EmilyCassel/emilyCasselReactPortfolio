import emilyCassel from "../assets/images/emilyCassel.jpeg"


function Home (){
   return (
    <div className="aboutMe">
      <div className="aboutMeImageResume">
         <img className="myPhoto" src={emilyCassel} alt="myPhoto" />
         <h2><a className="linkedInLink" href="https://www.linkedin.com/in/emily-cassel-5a2980245/">LinkedIn</a></h2>
         <h2><a className="resumeLink" href="/Resume">Resume</a></h2>
      </div>
      <div className="aboutMeInformation">
         <h1 className="aboutMeHeader">About Me</h1>
         <p className="aboutMeParagraph">My name is Emily Cassel</p>
      </div>
    </div>
    )
}

export default Home 