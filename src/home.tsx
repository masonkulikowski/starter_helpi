import './home.css';
import engineering from "./images/engineering.jpeg";
import art from "./images/art.jpeg";
import corporate from "./images/corporate.jpeg";
import medical from "./images/medical.jpeg";


function Home(){
return(
  <>
   <div className="w3-container">
    <h3 className="w3-jumbo" property='center'><b>Career Compass</b></h3>
    <h4 className='w3-container'>Empowering Your Professional Journey with short and fun career tests.</h4>
    <div className="w3-half">
    <h4 className="w3-xxxlarge w3-text-blue"><b>Basic Questions</b></h4>
      <h5 className='w3-left-align'>A basic career test helps individuals explore potential career paths by assessing their interests, personality traits, and skills. It provides an overview of suitable career options based on the assessment results.</h5>
      <ul className='w3-left-align w3-sans-serif'>
        <li>Personality Assessment: It may assess personality traits to help identify suitable work environments and roles.</li>
        <li>Skills Assessment: Assesses skills to identify strengths and areas for development.</li>
        <li>Values Assessment: Identifies personal values related to work preferences.</li>
        <li>Career Matches: Provides a list of potential career matches based on interests, personality, skills, and values.</li>
          <li>Career Information: Offers information about various careers, including job duties, requirements, salary, and outlook.</li>
          <li>Feedback and Guidance: Provides feedback and guidance based on assessment results.</li>
          <li>Report or Summary: Provides a report summarizing strengths, preferences, and suggested career paths.</li>
          <br></br>
          <br></br>
        </ul>
      <h6><b>The Basic Assessment (2 minutes) is recommended for use when time is limited.</b></h6>
      </div>
      <div className="w3-half">
      <h4 className="w3-xxxlarge w3-text-blue"><b>Detailed Questions</b></h4>
      <h5 className='w3-left-align' >A detailed career test offers a comprehensive assessment of an individual's interests, personality, values, and skills. It provides in-depth insights into various career paths, including job descriptions, educational requirements, and career development resources.</h5>
        <ul className='w3-left-align w3-sans-serif'>
          <li>Aptitude Testing: Includes aptitude testing to identify specific abilities and strengths relevant to different career paths.</li>
          <li>Work Environment Preferences: Tests preferences for work environments, such as team vs. independent work.</li>
          <li>Industry Matching: Provides specific recommendations for industries and job roles based on assessment results.</li>
          <li>Career Path Exploration: Offers extensive information about various career paths, including job descriptions and growth opportunities.</li>
          <li>Professional Development Resources: Provides resources for networking, resume writing, and skill development.</li>
          <li>Personalized Feedback: Offers personalized feedback and career recommendations based on assessment results.</li>
        </ul>
      <h6><b>The Detailed Assessment (10 minutes) is recommended to get the best results.</b></h6>
    </div>
    </div>
    <div className="w3-container">
      <h4 className="w3-xxxlarge w3-text-blue"><b><br></br>Explore between thousands of career path wordlwide.<br></br></b></h4>
    </div>
  <div className="w3-half">
  <img src={engineering} style={{ width: "100%", height: "250px", objectFit: "cover" }} alt="" />
  <img src={art} style={{ width: "100%", height: "250px", objectFit: "cover" }} alt="" />
</div>
<div className="w3-half">
  <img src={corporate} style={{ width: "100%", height: "250px", objectFit: "cover" }} alt="" />
  <img src={medical} style={{ width: "100%", height: "250px", objectFit: "cover" }} alt="" />
</div>
    
    <div className="w3-container">
      <h4 className="w3-xxxlarge w3-text-blue"><b><br></br>Comparison of Assessments<br></br></b></h4>
    </div>
    <br></br><div className="w3-row-padding">
      <div className="w3-half w3-margin-bottom">
        <ul className="w3-ul w3-light-grey w3-center">
          <li className="w3-light-blue w3-xlarge w3-padding-32 ">Basic Questions</li>
          <li className="w3-padding-16">Purpose: Broadly assess interests and preferences.</li>
          <li className="w3-padding-16">Focus:	General career interests and preferences.</li>
          <li className="w3-padding-16">Number of questions: 7</li>
          <li className="w3-padding-16">Structure:	Multiple-choice - structured questions with predefined answers.</li>
          <li className="w3-padding-16">Quality of assessment: Moderate</li>
        </ul>
      </div>

     


      <div className="w3-half ">
        <ul className="w3-ul w3-light-grey w3-center">
          <li className="w3-blue w3-xlarge w3-padding-32">Detalied Questions</li>
          <li className="w3-padding-16">Purpose: Explore specific career-related scenarios.</li>
          <li className="w3-padding-16">Focus:	Specific career situations and challenges.</li>
          <li className="w3-padding-16">Number of questions: 7</li>
          <li className="w3-padding-16">Structure: Open-ended questions - questions requiring elaboration.</li>
          <li className="w3-padding-16">Quality of assessment: Excellent</li>
        </ul>
      </div>
      <div className="w3-row-padding w3-grayscale">
    <div className="w3-col m3 w3-margin-bottom">
      <div className="w3-light-grey">
        <div className="w3-container">
          <h3>Mason Kulikowski</h3>
          <p className="w3-opacity">Group Manager</p>
          <p className="w3-opacity">masonkul@udel.edu</p>
        </div>
      </div>
    </div>
    <div className="w3-col m3 w3-margin-bottom">
      <div className="w3-light-grey">
        <div className="w3-container">
          <h3> Gabriel Simpson</h3>
          <p className="w3-opacity">Student</p>
          <p className="w3-opacity">simpsong@udel.edu</p>
        </div>
      </div>
    </div>
    <div className="w3-col m3 w3-margin-bottom">
      <div className="w3-light-grey">
        <div className="w3-container">
          <h3>Dhir Patel</h3>
          <p className="w3-opacity">Student</p>
          <p className="w3-opacity">dhirp@udel.edu</p>
        </div>
      </div>
    </div>
    <div className="w3-col m3 w3-margin-bottom">
      <div className="w3-light-grey">
        <div className="w3-container">
          <h3> Simeon Sabev</h3>
          <p className="w3-opacity">Student</p>
          <p className="w3-opacity">simeonsb@udel.edu</p>
        </div>
      </div>
    </div>
    
  </div>
  </div>
  <div className="w3-container">
    <h4 className="w3-xxxlarge w3-text-blue"><b> Your career is a journey, not a destination.<br></br></b></h4>
    <br></br>
    </div>
    </>
);
}
export default Home;