AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  
  {
    title: "Software Developer Intern",
    cardImage: "assets/images/experience-page/appointy.jpg",
    place: "Appointy",
    time: "(Jan 2024 - Present)",
    desp: "<br> Currently contributing to the development of backend using Golang and SQL programming languages. Involved in building and maintaining gRPC, REST, and GraphQL APIs, with diverse API architectures. Utilizing Docker for containerization to optimize deployment processes, and streamlined maintenance.",
  },
  {
    title: "Web Developer",
    cardImage: "assets/images/experience-page/aas.png",
    place: "Prashraya",
    time: "(Sept 2022 - Nov 2022)",
    desp: "<br> Technologies used JavaScript, HTML5, CSS3, and Figma for Creating a frontend of an amazing platform. Created 10+ web pages, refining Sign In/Sign Up functionality, volunteer profile section & join us page. Acquired proficiency in version control system, GitHub while contributing to a rich learning experience.",
  },
  {
    title: "User Interface Designer",
    cardImage: "assets/images/experience-page/tbh.jpeg",
    place: "TBH Circle",
    time: "(Nov 2022 - March 2023)",
    desp: " <br> Designed Website interface using frontend technologies such as HTML5, CSS3, JavaScript and Figma. Created an amazing platform to provide online courses to 1000+ students for making an ease of growth. Learned Figma and GitHub thoroughly and got an experience of working with a team of 10+ members.",
  },
  {
    title: "User Interface Designer",
    cardImage: "assets/images/experience-page/arch.jpg",
    place: "Arch Labs",
    time: "(June 2022 - Sept 2022)",
    desp: "<br>Designed Web Interfaces, utilizing HTML5, CSS3, JavaScript and Figma, showcasing expertise in frontend. Crafted user interface of the book-sharing platform, ensuring a seamless and engaging user experience. Developed valuable leadership skills & coordination expertise while contributing to collaborative projects.",
  },
  {
    title: "Graphic Designer",
    cardImage: "assets/images/experience-page/asiana.jpg",
    place: "Asiana Times",
    time: "(May - June, 2022)",
    desp: "<br>Completed Graphic Designs using Adobe Photoshop and Illustrator. Learned Adobe illustrator thoroughly which helped in creating designs and also developed leadership qualities along with an experience of working as a team.",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Content Curation",
    subtitle: "Shankhnaad",
    image: "assets/images/experience-page/shankh.jpeg",
    desp: "Shankhnaad is an annual college Hindi fest conducted by U I T -R G P V . As the content and curation member, my responsibility was to write content for event, manage and coordinate between teams and make sure everything was going according to the plan."
  },
  {
    title: "Media and Content manager",
    subtitle: "Team ASPER",
    image: "assets/images/experience-page/asper.jpeg",
    desp: "Initiated this department to provide info about the society and upcoming events with the help of social media platforms, here we also provide various study materials and conduct several doubt sessions to solve their doubts related to SEO, SMO etc."
  },
  {
    title: "Core Coder",
    subtitle: "Team ASPER",
    image: "assets/images/experience-page/asper.jpeg",
    desp: "Initiated this department so that the students can learn the concepts of programming, data structures and algorithms from the very beginning. So, we provide them various study materials and conduct several doubt sessions to solve their doubts."
  },
  {
    title: "User Interface Designer",
    subtitle: "Team Aashraya",
    image: "assets/images/experience-page/aas.png",
    desp: "I would be responsible for creating prashraya's website frontend design for 1000s of volunteers across the globe in their first steps towards humankind, so they can serve to society and nature.",
  },
  {
    title: "Content Curation",
    subtitle: "Team Aashraya",
    image: "assets/images/experience-page/aas.png",
    desp: "Initiated this department to provide info about team aashraya and upcoming events with the help of social media platforms and I would be responsible for post captions, blog writing for website, coordinating between multiple teams and provides needy stuff.",
  },
  {
    title: "Lead Team Member",
    subtitle: "TEC Club",
    image: "assets/images/experience-page/tec.jpg",
    desp: "TEC is a Technical Club under department of information technology, I would be responsible for organising events and coordinating team. We have sucessfully organized Code Adept5.0, AR/VR talk seminar, gate prepration seminar etc.",
  },
  {
    title: "Team Coordinator",
    subtitle: "Art & Creativity Club",
    image: "assets/images/experience-page/artclub.jpg",
    desp: "It is a Creativity Club under department of information technology, I would be responsible for organising events and coordinating team. We have sucessfully organized poster making competition, SnapShot in consecutively 3 years, ewaste management and many more.",
  },
  {
    title: "Social Media Coordinator",
    subtitle: "DOIT",
    image: "assets/images/experience-page/uit.jpg",
    desp: "This is to provide info about DOIT and upcoming events with the help of social media platforms, here we also provide various study materials and conduct several doubt sessions to solve their doubts related to Tech.",
  },

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="#" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
