import { Grid, Typography, Avatar, IconButton, Button, LinearProgress, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import React from 'react';
import myimg from '../img/MyImg.jpg';
import angular from '../img/angular.png';
import react from '../img/mern.png';
import aspnet from '../img/web.png';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import ChatIcon from '@mui/icons-material/Chat';
import GitHubIcon from '@mui/icons-material/GitHub';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Profile = () => {
  return (
    <>
    <div className='full-page-content' > 
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
            <Button variant='outlined' ><ChatIcon/>Lets Connect</Button>
            <Button variant='contained' className='m-2'> <PermContactCalendarIcon/> Resume</Button>
            <br/>
            <div>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <LinkedInIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <GitHubIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <Avatar alt="Your Name" src={myimg} sx={{ width: 300, height: 300 }} />
          </Grid>
        </Grid>
    </div>
    <div className='full-page-content'>
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
    <div className='full-page-content'>
      <Grid container spacing={2}>
         <Grid item xs={12} md={12} >
          <div className='shadow-lg p-3 mb-5 color'>
            
          </div>
         </Grid>
      </Grid>
    </div>
    </>
  );
};

export default Profile;
