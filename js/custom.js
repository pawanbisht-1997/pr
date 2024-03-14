document.addEventListener('DOMContentLoaded', function () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      lerp: 0.1,
    });
  
    const header = document.getElementById('header');
    
    // Show the header with animation when the page loads
    setTimeout(function() {
      header.classList.add('visible');
    }, 500);
  
    scroll.on('scroll', function (args) {
      // Calculate the scroll progress
      const scrollProgress = Math.min(args.scroll.y / window.innerHeight, 1);
      
      // Update header background color based on scroll progress
      header.style.backgroundColor = `rgba(255, 255, 255, ${scrollProgress})`;
    });
  });



  document.addEventListener("DOMContentLoaded", function() {
    const strips = document.querySelectorAll('.strips');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    });
    strips.forEach(strip => {
        observer.observe(strip);
    });
});



// testimonial
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const progressDots = document.getElementById("progress-dots");

const testimonials = [
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!"
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
    text:
      "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him."
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    text:
      "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future."
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text:
      "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!"
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text:
      "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results."
  }
];

let idx = 0;
let interval;

testimonials.forEach((testimonial, index) => {
  const dot = document.createElement("div");
  dot.classList.add("progress-dot");
  dot.addEventListener("click", () => {
    idx = index;
    displayTestimonial();
  });
  progressDots.appendChild(dot);
});

function displayTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  testimonial.classList.remove("fade-in");
  testimonial.offsetWidth; // Trigger reflow to apply fade-in animation
  testimonial.classList.add("fade-in");

  userImage.classList.remove("slide-in");
  userImage.offsetWidth; // Trigger reflow to apply slide-in animation
  userImage.classList.add("slide-in");

  username.classList.remove("slide-in");
  username.offsetWidth; // Trigger reflow to apply slide-in animation
  username.classList.add("slide-in");

  role.classList.remove("slide-in");
  role.offsetWidth; // Trigger reflow to apply slide-in animation
  role.classList.add("slide-in");

  updateProgressDots();
}

function updateProgressDots() {
  const dots = progressDots.children;
  [...dots].forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === idx) {
      dot.classList.add("active");
    }
  });
}

function nextTestimonial() {
  idx === testimonials.length - 1 ? (idx = 0) : idx++;
  console.log(idx);

  displayTestimonial();
}

function startInterval() {
  interval = setInterval(nextTestimonial, 5000); // Change interval time as needed (in milliseconds)
}

function stopInterval() {
  clearInterval(interval);
}

startInterval();

displayTestimonial();