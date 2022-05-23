import React from "react";
import Container from "../UI/Container";

const AboutMe = () => {
  const myAge = new Date().getFullYear() - 1995;

  return (
    <React.Fragment>
      <Container>
        <p>
          I am Mustafa, <span>{myAge}</span> years old pursuing my passion to
          become a full-stack web developer. Apart from love of coding, I have
          also spend some good time digital drawing which is a hobby I picked up
          this year.
        </p>
        <br />
        <p>
          I have a diploma of Software Development where I created
          multiple projects using C#, .NET Core, Java and created a game for mobile phone using Unity. I have a good understanding of
          relational database and SQL Server Management Studio.
        </p>
        <br />

        <p>
          Apart from my diploma, I also have a good understanding of HTML, CSS and JavaScript. 
          I have taken multiple online courses and completed multiple simple and
          complex projects using HTML, CSS and JavaScript. I have a good
          understanding of React and React hooks and complex state management using useContext and useReducer and I am currently learning Redux. 
          Some examples of projects that I have created using React is available under my portfolio.
        </p>
        <br />
        <p>
          <strong>JavaScript</strong>
          <br />I love JavaScript and I think I have a good understanding of the syntax which makes me able to create introductory .
        </p>
        <br />
        <p>
          <strong>CSS</strong>
          <br />I am familiar with CSS grids, flexbox and responsive web apps. I
          also understand the benefits of using CSS variables in using a
          consistent styling across a web page.
        </p>
        <br />
        <br />
        <div>
          <h3>Phone: +61406585283</h3>
          <h3>Email: mhaidarpoor@gmail.com</h3>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default AboutMe;
