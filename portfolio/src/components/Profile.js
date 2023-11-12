import { Grid, Typography, Avatar, IconButton, Button, LinearProgress, Accordion, AccordionSummary, AccordionDetails, SpeedDial, SpeedDialAction } from '@mui/material';
import React from 'react';
import myimg from '../img/MyImg.jpg';
import angular from '../img/angular.png';
import react from '../img/mern.png';
import aspnet from '../img/web.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GigBazaar from '../img/B.mp4'
import Unimentor from '../img/Uni-Mentor.mp4'
import wallsoft from '../img/wallsoft.jpg'
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import ProfileIcon from '@mui/icons-material/AccountBox';
import SkillsIcon from '@mui/icons-material/Category';
import ProjectsIcon from '@mui/icons-material/AccountTree';
import ExperienceIcon from '@mui/icons-material/Work';

const Profile = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
    {/* Profile */}
    <div id="profile-section" className='full-page-content' > 
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant='h4'>
              <b>Hello, I'm Haris Muhammad Imran</b>
            </Typography>
            <br/>
            <Typography variant='h5' color='darkblue'>
              <b>Software Developer</b>
            </Typography>
            <br/>
            <a href={`${process.env.PUBLIC_URL}/Resume Haris Muhammad Imran.pdf`} download="Haris_Muhammad_Imran_Resume.pdf">
              <Button variant='contained' className='m-2'>
                <PermContactCalendarIcon/> Resume
              </Button>
            </a>

            <br/>
            <div>
              <IconButton>
              <a href="https://www.linkedin.com/in/haris-muhammad-imran-838b63230/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon />
              </a>
              </IconButton>
              <IconButton>
              <a href="https://twitter.com/HarisMImran" target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
              </IconButton>
              <IconButton>
              <a href="https://github.com/Haris357" target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <Avatar alt="Your Name" src={myimg} sx={{ width: 300, height: 300 }} />
          </Grid>
        </Grid>
    </div>
    {/* Skills */}
    <div id="skills-section" className='full-page-content'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className='shadow-lg p-3 mb-5 bg-white'>
            <img src={aspnet} width={35} alt="Logo" />
            <h4>ASP .NET | MVC</h4>
            <LinearProgress variant="determinate" color='success' value={100} />
            <h6><b>Expert</b></h6>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className='shadow-lg p-3 mb-5 bg-white'>
            <img src={react} width={60} alt="Logo" />
            <h4>MERN STACK</h4>
            <LinearProgress variant="determinate" value={50} />
            <h6><b>Intermediate</b></h6>
            
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className='shadow-lg p-3 mb-5 bg-white'>
            <img src={angular} width={30} alt="Logo" />
            <h4>AngularJS</h4>
            <LinearProgress variant="determinate" color='error' value={20} />
            <h6><b>Beginner</b></h6>

          </div>
        </Grid>
        <Grid item xs={12} md={12}>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                <b>ASP.NET | MVC</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography variant="h6">HTML5</Typography>
                <LinearProgress variant="determinate" value={100} />
              </div>
              <div>
                <Typography variant="h6">CSS3</Typography>
                <LinearProgress variant="determinate" value={50} />
              </div>
              <div>
                <Typography variant="h6">C#</Typography>
                <LinearProgress variant="determinate" value={100} />
              </div>
              <div>
                <Typography variant="h6">SQL SERVER</Typography>
                <LinearProgress variant="determinate" value={50} />
              </div>
              <div>
                <Typography variant="h6">MVC Expert</Typography>
                <LinearProgress variant="determinate" value={100} />
              </div>
              <div>
                <Typography variant="h6">Entity Framework</Typography>
                <LinearProgress variant="determinate" value={100} />
              </div>
              <div>
                <Typography variant="h6">JQuery</Typography>
                <LinearProgress variant="determinate" value={50} />
              </div>
              <div>
                <Typography variant="h6">Bootstrap</Typography>
                <LinearProgress variant="determinate" value={100} />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                <b>MERN STACK</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography variant="h6">React.js</Typography>
                <LinearProgress variant="determinate" value={50} />
              </div>
              <div>
                <Typography variant="h6">ES7 JavaScript</Typography>
                <LinearProgress variant="determinate" value={50} />
              </div>
              <div>
                <Typography variant="h6">Material UI</Typography>
                <LinearProgress variant="determinate" value={50} />
              </div>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="h6">
                <b>ANGULAR JS</b>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div>
                <Typography variant="h6">TypeScript</Typography>
                <LinearProgress variant="determinate" value={20} />
              </div>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </div>
    {/* Projects */}
    <div id="projects-section" className='full-page-content'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <div className='shadow-lg p-3 mb-5 bg-white rounded video-container'>
            <img src={wallsoft} style={{ width: '100%' }} alt="Logo" />
            <div className="description">
              As a software developer, I bring a wealth of skills and expertise to the table. With proficiency in .NET MVC, SQL, HTML, CSS, Entity Framework, and Bootstrap, I excel at crafting robust and user-friendly web applications. My role as a problem solver and troubleshooter is instrumental in identifying and resolving complex issues, ensuring seamless product development. My dedication to detail and passion for staying updated on the latest industry trends make me a valuable asset to any software development team.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className='shadow-lg p-3 mb-5 bg-white rounded video-container'>
            <video autoPlay loop muted playsInline style={{ width: '100%' }}>
              <source src={GigBazaar} type="video/mp4" />
            </video>
            <div className="description">
            Gig Bazaar, a dynamic marketplace powered by the MERN stack (React, MongoDB, Express, and Node.js), connects freelancers with job opportunities and clients with top talent. This platform is enriched with Web3 integration, facilitating Ethereum-based payments, making it a cutting-edge solution. Currently in active development, Gig Bazaar promises to revolutionize the gig economy.
            </div>
          </div>
        </Grid>
        <Grid item xs={12} md={4}>
          <div className='shadow-lg p-3 mb-5 bg-white rounded video-container'>
            <video autoPlay loop muted playsInline style={{ width: '100%' }}>
              <source src={Unimentor} type="video/mp4" />
            </video>
            <div className="description">
            Unimentor is your ultimate student guide to navigating the university experience. Built with AngularJS and powered by Firebase, Unimentor provides a seamless and dynamic platform to help students succeed in their academic journey. With a sleek and user-friendly interface designed using Material UI, Unimentor offers students a comprehensive set of tools and resources to enhance their university life. From academic support to social connections, Unimentor is your trusted companion on the path to educational success.
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
    {/* Work Experience */}
    <div id="work-experience-section" className='full-page-content' >
      <Grid container spacing={2} >
        <Grid item xs={12} >
        <div className='shadow-lg p-3 bg-white rounded' >
          <Grid container spacing={1} >
            <Grid item xs={2} >
            <img src={wallsoft} width={100} className='img-fluid' alt="Logo" />
            </Grid>
            <Grid item xs={10} >
            <h4><b>Wallsoft Technologies</b></h4>
            <h6><b>Part-time ' More Than 2 yrs</b></h6>
            <h6>Karachi,Sindh,Pakistan ' On-site</h6>
            </Grid>
            <Grid item xs={12}>
              <h4><b>Software Developer</b></h4>
              <h5>Nov 2021 - Present</h5>
              <h6><b>MVC5 | .NET Entity FrameWork | SQL SERVER</b></h6>
              <h6><b>Skills</b></h6>
              <p>HTML5 ' CSS ' Bootstrap(FrameWork) ' Microsoft SQL Server ' ASP .NET MVC ' JavaScript</p>
            </Grid>
            <br/>
            <Grid item xs={12}>
              <h4><b>Internship Trainee</b></h4>
              <h5>Aug 2021 - Nov 2021</h5>
            </Grid>
          </Grid>
          </div>
        </Grid>
      </Grid>
    </div>

    {/* Speed Dial */}
    <SpeedDial
        ariaLabel="SpeedDial navigation"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
      >
        <SpeedDialAction
          icon={<ProfileIcon />}
          tooltipTitle="Profile"
          onClick={() => scrollToSection('profile-section')}
        />
        <SpeedDialAction
          icon={<SkillsIcon />}
          tooltipTitle="Skills"
          onClick={() => scrollToSection('skills-section')}
        />
        <SpeedDialAction
          icon={<ProjectsIcon />}
          tooltipTitle="Projects"
          onClick={() => scrollToSection('projects-section')}
        />
        <SpeedDialAction
          icon={<ExperienceIcon />}
          tooltipTitle="Work Experience"
          onClick={() => scrollToSection('work-experience-section')}
        />
      </SpeedDial>
    </>
  );
};

export default Profile;
