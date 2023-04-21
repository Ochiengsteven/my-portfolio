// Select the hamburger, mobile menu, mobile list links, and cancel button elements
const hamburger = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobilelistlink = document.querySelectorAll('#mobilelist li a');
const cancelBtn = document.querySelector('#cancel-btn');

// Define a function to toggle the mobile menu visibility
function toggleMobileMenu() {
  // Toggle the "hide" class on the hamburger and cancel button elements
  hamburger.classList.toggle('hide');
  cancelBtn.classList.toggle('hide');
  // Toggle the display property of the mobile menu element
  if (mobileMenu.style.display === 'flex') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'flex';
  }
}

// Define a function to hide the mobile menu
function hideMobileMenu() {
  // Remove the "hide" class from the hamburger element and add it to the cancel button element
  hamburger.classList.remove('hide');
  cancelBtn.classList.add('hide');
  // Set the display property of the mobile menu element to "none"
  mobileMenu.style.display = 'none';
}

// Add a click event listener to the hamburger element that toggles the mobile menu visibility
hamburger.addEventListener('click', toggleMobileMenu);

// Add click event listeners to each mobile list link element that hides the mobile menu
for (let i = 0; i < mobilelistlink.length; i += 1) {
  mobilelistlink[i].addEventListener('click', hideMobileMenu);
}

// Add a click event listener to the cancel button element that hides the mobile menu
cancelBtn.addEventListener('click', hideMobileMenu);

// for creating a list of buttons for workcard and popup
const createButtonList = (project, techlist) => {
  project.technologies.forEach((technology) => {
    const technologyEl = document.createElement('li');
    const techbutton = document.createElement('button');
    techbutton.innerText = technology;
    technologyEl.appendChild(techbutton);
    techlist.appendChild(technologyEl);
    technologyEl.classList.add('tags');
  });
};

// Create project details object array

const projectDetails = [
  {
    name: 'Keeping track of hundreds of components',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.\n\nLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s.",
    image: 'images/popupmobile.png',
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://ochiengsteven.github.io/',
    source: 'https://github.com/yashodhicy/MyPortofolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum dolor sit amet',
    image: 'images/popupmobile.png',
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://ochiengsteven.github.io/',
    source: 'https://github.com/Ochiengsteven/my-portfolio',
  },
  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum dolor sit amet',
    image: 'images/popupmobile.png',
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://ochiengsteven.github.io/',
    source: 'https://github.com/yashodhicy/MyPortofolio',
  },

  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum dolor sit amet',
    image: 'images/popupmobile.png',
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://ochiengsteven.github.io/',
    source: 'https://github.com/yashodhicy/MyPortofolio',
  },

  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum dolor sit amet',
    image: 'images/popupmobile.png',
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://ochiengsteven.github.io/',
    source: 'https://github.com/yashodhicy/MyPortofolio',
  },

  {
    name: 'Keeping track of hundreds of components',
    description: 'Lorem ipsum dolor sit amet',
    image: 'images/popupmobile.png',
    technologies: ['Ruby on rails', 'HTML', 'CSS', 'JavaScript'],
    live: 'https://ochiengsteven.github.io/',
    source: 'https://github.com/yashodhicy/MyPortofolio',
  },
];

// implement popup window
const popup = document.querySelector('#popup');
const cancel = document.querySelector('#cancel-btn2');
const main = document.querySelector('main');

const projectdetailspopup = (project) => {
  popup.appendChild(cancel);

  popup.classList.toggle('hide');
  main.classList.add('display');

  const popupImage = document.querySelector('#popup-image');
  const popupTitle = document.querySelector('#popup-title');
  const popupTechs = document.querySelector('#popup-techs');
  const popupDescription = document.querySelector('#popup-description');
  const popuplive = document.querySelector('#popup-livelink');
  const popupsource = document.querySelector('#popup-source');
  popupTechs.textContent = '';

  popupImage.src = project.image;
  popupTitle.textContent = project.name;

  const liveDemo = document.createElement('a');
  liveDemo.href = project.live;
  popuplive.appendChild(liveDemo);

  const sourceEl = document.createElement('a');
  sourceEl.href = project.source;
  popupsource.appendChild(sourceEl);

  createButtonList(project, popupTechs);
  popupDescription.innerText = project.description;

  popup.style.display = 'flex';
};

// create work section
const workEL = document.createElement('section');
workEL.classList.add('work');

const fragment = document.createDocumentFragment();

projectDetails.forEach((project) => {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('work-card');

  const textEl = document.createElement('div');
  textEl.classList.add('text');
  projectDiv.appendChild(textEl);

  const titleEl = document.createElement('h3');
  titleEl.innerText = project.name;
  textEl.appendChild(titleEl);

  const technologiesEl = document.createElement('ul');
  createButtonList(project, technologiesEl);

  textEl.appendChild(technologiesEl);

  const seeproject = document.createElement('button');
  seeproject.innerText = 'see Project';
  seeproject.classList.add('see_project');
  textEl.appendChild(seeproject);

  seeproject.addEventListener('click', () => {
    projectdetailspopup(project);
  });

  fragment.appendChild(projectDiv);
});

workEL.appendChild(fragment);
document.body.appendChild(workEL);

// add this section after topic div
const divtopic = document.querySelector('#topic');

// add workEL as the second section below the div container
divtopic.insertAdjacentElement('afterend', workEL);

cancel.addEventListener('click', () => {
  popup.classList.toggle('hide');
  main.classList.remove('display');
});

// add validation to the form

const form = document.querySelector('#form');
const emailText = document.querySelector('input[type="email"]');

form.addEventListener('submit', (event) => {
  if (emailText.value !== emailText.value.toLowerCase()) {
    event.preventDefault();

    // Remove any previous error messages
    const previousErrorMessage = form.querySelector('.error-message');
    if (previousErrorMessage) {
      form.removeChild(previousErrorMessage);
    }

    const errorMessage = document.createElement('p');
    const formText = document.querySelector('#form textarea');
    errorMessage.textContent = 'Please enter your email in lower case.Your form is not submitted.';
    errorMessage.classList.add('error-message');

    formText.insertAdjacentElement('afterend', errorMessage);
  }
});

// get references to the form and its input fields
const formObject = {
  nameInput: form.elements.username,
  emailInput: form.elements.email,
  messageInput: form.elements.message,
};

// load data from local storage and pre-fill input fields if data exists
const localdata = JSON.parse(localStorage.getItem('formData'));
if (localdata) {
  formObject.nameInput.value = (localdata.name.length > 0) ? localdata.name : '';
  formObject.emailInput.value = (localdata.email.length > 0) ? localdata.email : '';
  formObject.messageInput.value = (localdata.message.length > 0) ? localdata.message : '';
}

// save data to local storage when input fields change
form.addEventListener('input', () => {
  const formData = {
    name: formObject.nameInput.value,
    email: formObject.emailInput.value,
    message: formObject.messageInput.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));
});
