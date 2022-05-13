import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
  ) { }


  professionalSummary = ["Skilled and motivated Full-stack developer with 3 years of relevant experience in developing responsive web applications",
    "I was trained in MEAN stack and later scaled up in ReactJs",
    "Conducted multiple unit-level training in Angular, React, Basics of HTML and CSS to facilitate project engagement and created POC, text and video courses for the same ",
    "Experience in projects execution using Agile and DevOps model.",
    "Constantly engaged in requirement discussions and refinement with clients from Japan, the Netherlands, and the UK"]


  about = "I am an enthusiastic, self-motivated, and highly skilled MEAN and MERN stack developer with three years of relevant experience seeking opportunities to develop my skills and advance my career. My background includes working on highly process-oriented agile projects and providing training to individuals looking to advance their knowledge of UI technologies at both unit and organizational levels. On a regular basis, I communicate with the client and teams from other organizations about our work's progress and future milestones as a team of four developers."
  resumeurl = "https://drive.google.com/file/d/1XY0xlYDX8aZA1KwCnnjH6Y3G4iTWcV-D/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '2',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT JQUERY',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'SQL , MYSQL,MONOGO, FIREBASE',
      'progress': '75%'
    },
    {
      'id': '5',
      'skill': 'REACT JS',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'PYTHON,JAVA',
      'progress': '70%'
    }
  ];

  exprienceData: any = [
    {
      id: 1,
      project: 'UI Track',
      unit: 'Education Training and development unit',
      timeline: 'May19-Jul20',
      role: 'Educator',
      summary: "Trained freshers in MEAN/MERN stack and developed tools for ETA application",
      technologies: ["Angular", "React", "Node", "Express", "HTML", "CSS", "Python", "Java", "MongoDB", "SQL(OracleDB)"],
      work: ["Trained more than 2000 trainees as an educator  in skills like HTML, CSS, JavaScript, Bootstrap, Angular MongoDB, Node and Express, Java  and RDBMS",
        "Designed and developed basic  full stack applications MEAN for training purposes",
        "Have mentored more than 20 groups in developing full stack projects",
        "Created POC,Text and video courses on UI technologies",
      ]
    }, {
      id: 2,
      project: 'Atlas',
      unit: 'Education Training and development unit',
      timeline: 'Jul20-May21',
      role: 'Full Stack Developer',
      summary: "Developed a platform for trainees to suggest the optimum learning paths form available courses as an add-on to the Wingspan learning platform",
      technologies: ["Angular", "React", "Node", "Express", "AdobeXD"],
      work: ["Developed wireframes and prototypes using adobeXD",
        "UI Development using Angular",
        "Logic to render maps with checkpoints and other intractable artifacts using fabricJs",
        "Backend development Express and mongoDB",
      ]
    }, {
      id: 3,
      project: 'Design Portal',
      unit: 'Engineering unit',
      timeline: 'May21-Dec21',
      role: 'Front End Developer',
      summary: "An Angular application with .net backend for Japanese Construction Firm to manage and optimize the design work flow",
      technologies: ["Angular", "React", "Node", "Express", "AdobeXD"],
      work: [
        "UI Development using Angular", "Draw.io customizations and integration with angular application"
      ]
    }, {
      id: 4,
      project: 'Configurator',
      unit: 'Engineering unit',
      timeline: 'Dec21-Present',
      role: 'UI Lead',
      summary: "A React application for a global health technology company to enable the users to manage CPQ tasks using the Configit Ace platform",
      technologies: ["Angular", "React", "Node", "Express", "AdobeXD"],
      work: [
        "UI development using React",
        "Discussing bottle necks and provide viable workarounds to the product owners",
        "Requirement discussion and refinement with PO and BA", "Code quality and defect analysis",
        "Work assignment to UI developers"
      ]
    },


  ]

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }
}
