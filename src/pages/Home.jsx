import emilyCassel from "../assets/images/emilyCassel.jpeg"


function Home (){
   return (
    <div className="aboutMe">
      <div className="aboutMeImageResume">
         <img className="aboutMeImage" src={emilyCassel} alt="myPhoto" />
         <h2><a className="linkedInLink" href="https://www.linkedin.com/in/emily-cassel-5a2980245/">LinkedIn</a></h2>
         <h2><a className="resumeLink" href="/Resume">Resume</a></h2>
      </div>
      <div className="aboutMeInformation">
         <h1 className="aboutMeHeader">About Me</h1>
            <p className="aboutMeParagraph">
               As a Full-Stack Web Developer, my journey has been one of resilience, exploration, and discovering my true passion. <br/>

               My academic journey commenced at 18, where I initially pursued nursing at Ball State University. However, life threw me a curveball at 20 when I faced health challenges. Despite the obstacles, I persevered and made the decision to transfer to IvyTech Community College in 2013. Over the next four years, amidst battling health issues, I realized that nursing wasn't my destined path. Thus, I transitioned my focus to Exercise Physiology.<br/>

               In 2021, I proudly graduated from the University of Lynchburg with a degree in Exercise Physiology. However, the onset of COVID-19 limited opportunities, prompting me to embark on a three-year journey of travel. This period allowed me to fulfill many dreams that were once hindered by illness, while also delving into the world of logistics in my spare time. I passed the Import/Export Logistics Exam in October 2023. <br/>

               Reflecting on my experiences as a patient, I realized that my interest in healthcare had waned more than anticipated. It was during this period of introspection that I discovered my newfound passion for web development. Enrolling in the Full-Stack Web Development Course at Rutgers University further solidified this passion, revealing the excitement and fulfillment I find in crafting digital solutions. <br/>

               Now, armed with a diverse skill set and a fervent enthusiasm for web development, I am actively seeking opportunities to contribute my expertise and creativity as a Full-Stack Web Developer. <br/>
            </p>
      </div>
    </div>
    )
}

export default Home 