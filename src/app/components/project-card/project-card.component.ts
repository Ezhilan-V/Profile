import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {

  constructor() { }

  projects = [
    {
      name: "Automobile",
      icon: "now-ui-icons transportation_bus-front-12",
      projects: [
        {
          title: "Supra - 2017",
          role: "Driver/Technical Lead",
          description: `I was the technical lead and worked with our team to
        develop a formula students vehicle by following the
        process of engineering design.I personally worked in the
        design of the powertrain,Chassis and suspension
        geometry.I was also the driver of the vehicle for the
        dynamic events`,
          imageUrl: "assets/img/supra2017.jpg"
        },
        {
          title: "Supra - 2018,FFS - 2019",
          role: "Team Captain",
          description: `I was the Team captain for our college formula students
          team. We as a team avoided our prior mistakes and
          improved our ranking.I primarly concentrated on the
          fesibilty and technical aspects of the vehicle
          manufacturing process.`,
          imageUrl: "assets/img/supra2018.jpg"
        },
        {
          title: "BFKCT - 2018",
          role: "Team Captain/Driver",
          description: `I had been the team captain and driver for a Go-kart
          design and endurance event.We have build the entire
          vehicle from scratch in record time for the event.`,
          imageUrl: "assets/img/bfkct2018.jpg"
        },
        {
          title: "Provisioning of Q-gate",
          role: "Intern",
          description: `I was an intern in Ashok Leyland in the quality control
          department. During my time as an intern we have analysed
          the data of various defects and performed root cause
          analysis and modified the production line and added
          Quality Gate to improve effiency of the unit.`,
          imageUrl: "assets/img/ashokLeyland.jpg"
        },
        {
          title: "Variable Adaptive Suspension",
          role: "Project Lead",
          description: "Compared the performance characteristics of passive and active suspension and created a active suspension model to have optimum performance in both real world roads and race tracks using Smart materials",
          imageUrl: "assets/img/vasSimulation.jpg"
        }]

    }
    , {
      name: "Computer Science",
      icon: "now-ui-icons tech_laptop",
      projects: [
        {
          title: "Atlas",
          role: "UX designer and Full Stack Developer",
          description: "Developed an application to ",
          imageUrl: "assets/img/atlasCheckPoint.jpg"
        }, {
          title: "Infy Mansions",
          role: "UX designer and Developer",
          description: "Compared the performance characteristics of passive and active suspension and created a active suspension model to have optimum performance in both real world roads and race tracks using Smart materials",
          imageUrl: "assets/img/vasSimulation.jpg"
        }, {
          title: "Design Portal",
          role: "Developer",
          description: "Compared the performance characteristics of passive and active suspension and created a active suspension model to have optimum performance in both real world roads and race tracks using Smart materials",
          imageUrl: "assets/img/vasSimulation.jpg"
        }, {
          title: "Phillips CPQ",
          role: "Developer",
          description: "Compared the performance characteristics of passive and active suspension and created a active suspension model to have optimum performance in both real world roads and race tracks using Smart materials",
          imageUrl: "assets/img/vasSimulation.jpg"
        },
      ]
    }]


}