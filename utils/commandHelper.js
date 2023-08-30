const COMMANDS = [
  {
    command: "about",
    description: "About Me",
  },
  {
    command: "education",
    description: "My Education",
  },
  {
    command: "skills",
    description: "My Tech Skills",
  },
  {
    command: "projects",
    description: "My Tech Projects",
  },
  {
    command: "contact",
    description: "Contact Me",
  },
  {
    command: "blog",
    description: "Visit my blog",
  },
  {
    command:
      // 'clear <span style="color: var(--primary)">(Ctrl+L shortcut)</span>',
      "clear",
    description: "Clear terminal",
  },
];

const getProjects = async () => {
  const projects = await (await fetch("/api/projects")).json();
  const projectHTML =
    `<h3>My Projects (You can scroll)</h3>` +
    projects
      .map(
        (project) => `<div class="command">
        <a href="${project.link}" target="_blank"><b class="command">${
          project.name
        }</b></a> - <b>${project.stack.join(", ")}</b>
        <p class="meaning">${project.description}</p>
      </div>`
      )
      .join("");
  return projectHTML;
};

const getContacts = async () => {
  const contactMediums = await (await fetch("/api/contacts")).json();
  return contactMediums
    .map(
      (contact) => `<div style="display: flex; justify-content: space-between;">
      <p style="font-size: 15px">${contact.medium}</p>
      <a class="meaning" href="${contact.link}" target="_blank">${contact.username}</a>
    </div>`
    )
    .join("");
};

export const CONTENTS = {
  help: () =>
    COMMANDS.map(
      (command) => `<div style="display: flex; justify-content: space-between;">
        <p style="font-size: 15px">${command.command}</p>
        <p>${command.description}</p>
      </div>`
    ).join("") +
    `<br />
      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>`,
  about: () => `My name is Dasharn. I am ${getAge(
        "Marhc 01, 2003"
      )} and I\'m an aspiring software engineer.
    <br/><br/>
    I code in Python, Java, JavaScript, CSS and HTML and have worked with frameworks like Django, Flask, React.
    <br /><br />
    I am a second year student at <a href="https://www.manchester.ac.uk/" target="_blank">University of Manchester</a>.
    <br />
    </a>
  `,
  education:
    () => `I went to the same secondary school and sixth form at <a href="http://www.qpcs.brent.sch.uk/" target="_blank">Queens Park Community School.</a>
          I achieved 9 A* and 2As at GCSE and at A level I achieved A*A*A for Maths, Further Maths and Physics. </a>`,
  skills: () => `
  I am experienced with Python, Java, JavaScript and the web technologies dominating at the time:<br />
  <div class="skill"><b>core</b>: HTML, CSS.<br /></div>
  <div class="skill"><b>frameworks</b>:Django, Flask, React.<br /></div>
  <div class="skill"><b>database</b>: MySQL.<br /></div>
  </a>
<br /><br />
  `,
  projects: getProjects,
  contact: getContacts,
  error: (input) =>
    `<div class="help-command">sh: Unknown command: ${input}</div><div class="help-command">See \`help\` for info`,
  blog: () => {
    window.open("https://www.dasharndennis.com/", "_blank");
    return "";
  },
  /*youtube: () => {
    window.open("https://youtube.com/@livecode247", "_blank");
    return "";
  },*/
  awards: () => {
    `
    • Received Merit in International Pink Kangaroo Math Challenge - ranking top 0.5% of 200,000 entrants.
    • Received 3 x Gold Award in British Senior and Intermediate Math Challenge - ranking top 3% of 300,000 entrants.
    • Received Annual Mathematics Award for top performing maths student - ranking top 3 in a cohort of 80 students.
    `
  }
};

function getAge(dateString) {
  const today = new Date();
  const birthDate = new Date(dateString);

  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--;

  return age;
}