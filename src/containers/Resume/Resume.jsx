import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utils/ScreenHeading/ScreenHeading";
import ScrollService from "../../utils/ScrollService";
import Animations from "../../utils/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "Java", ratingPercentage: 85 },
    { skill: "Spring", ratingPercentage: 85 },
    { skill: "JavaScript", ratingPercentage: 50 },
    { skill: "TypeScript", ratingPercentage: 50 },
    { skill: "NodeJS", ratingPercentage: 40 },
    { skill: "ReactJS", ratingPercentage: 60 },
    { skill: "SQL", ratingPercentage: 60 },
    { skill: "Postgres", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 65 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2021", toDate: "2021" },
      description: "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: JS, React JS, Bootsrap, HTML and CSS",
    },
    {
      title: "DocAdmin",
      duration: { fromDate: "2020", toDate: "2022" },
      description: "Software developed to manage the company's trade&marketing area.",
      subHeading: "Technologies Used: Java, Spring, Postegres, TS, ReactJS, HTML and CSS",
    },
    {
      title: "API Heroes",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "API developed during DIO bootcamp, its main function is hero management using Spring WebFlux along with Reactor reactive library.",
      subHeading:
        "Technologies Used: Java, SpringWebFulx and DynamoDB",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"UNIARA, Brazil"}
        subHeading={"BACHELOR OF ANALYSIS AND SYSTEMS DEVELOPMENT"}
        fromDate={"2019"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"ITA (Inst. Tecnológico de Aeronáutica), Brazil"}
        subHeading={"JAVA DEVELOPER"}
        fromDate={"2020"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"High School, Brazil"}
        subHeading={"DATA PROCESSING TECHNICIAN"}
        fromDate={"1997"}
        toDate={"1999"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Jácomo Aricó"}
          subHeading={"COMMERCIAL MANAGER"}
          fromDate={"2018"}
          toDate={"Present"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
          Currently working as commercial manager and full stack developer.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
          - Responsible for marketing strategies and resource allocation in the sector.
          </span>
          <br />
          <span className="resume-description-text">
          - Full stack solutions developer for marketing management.{" "}
          </span>
          <br />
          <span className="resume-description-text">
          - Requirements engineering for the company's e-commerce development.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Family"
        description="I am married and the father of two kids. My wife and I enjoy having guests at home, my oldest daughter talks a lot about books, politics and LGBTQI+ rights and with my youngest daughter we play soccer and volleyball and play minecraft."
      />
      <ResumeHeading
        heading="Sports"
        description="I practiced several sports during my teenage years, especially swimming and jiu-jitsu. I currently practice boxing, swimming and running."
      />
      <ResumeHeading
        heading="Music"
        description="Deep Purple, Pink Floyd, Nina Simone, Queen, Greta Van Fleet, James Brown, Criolo, Emicida, Titãs, Alceu Valença are some of my favorite artists and bands."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;