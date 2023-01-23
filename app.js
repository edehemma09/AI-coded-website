// search form functionality
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('form input[name="keywords"]');
const locationInput = document.querySelector('form input[name="location"]');
const jobsList = document.querySelector('section#featured-jobs ul');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const searchKeywords = searchInput.value;
  const searchLocation = locationInput.value;
  
  //filter jobs
  const filteredJobs = allJobs.filter(job => 
    job.title.toLowerCase().includes(searchKeywords.toLowerCase()) &&
    job.location.toLowerCase().includes(searchLocation.toLowerCase()));
  
  //populate jobs list
  jobsList.innerHTML = '';
  filteredJobs.forEach(job => {
    const jobItem = document.createElement('li');
    jobItem.innerHTML = `<h3>${job.title}</h3>
    <p>${job.description}</p>
    <a href="#">Apply Now</a>`;
    jobsList.appendChild(jobItem);
  });
});

const allJobs = [
  {
    title: 'Java Developer',
    description: 'A leading software company is looking for a Java Developer to join their team.',
    location: 'New York'
  },
  {
    title: 'Python Engineer',
    description: 'A rapidly growing startup is seeking a Python Engineer to help build their cutting-edge platform.',
    location: 'San Francisco'
  },
  {
    title: 'Front-End Developer',
    description: 'A digital agency is seeking a Front-End Developer to help create beautiful and responsive websites.',
    location: 'Los Angeles'
  },
  {
    title: 'Full Stack Developer',
    description: 'A SaaS company is looking for a Full Stack Developer to help build and maintain their web applications.',
    location: 'Chicago'
  }
];
