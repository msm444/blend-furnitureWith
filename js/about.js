// Function to inject CSS styles dynamically
function injectAboutStyles() {
  var style = document.createElement("style");
  style.textContent = `
    .about-hero {
      position: relative;
    }
    .about-page-root {
      overflow-x: hidden;
    }
    .about-hero__img {
      width: 100%;
      height: 60vh;
      object-fit: cover;
      display: block;
      transition: height 0.4s ease, transform 0.4s ease;
    }
    .about-hero__down {
      position: absolute;
      left: 50%;
      bottom: 12px;
      transform: translateX(-50%);
      color: #ab1f65;
      background: #ffffffdd;
      border-radius: 50%;
      width: 34px;
      height: 34px;
      display: grid;
      place-items: center;
    }
    .about-intro {
      padding: 30px 0;
      text-align: center;
    }

    /* Shrink state on scroll */
    .about-hero.shrink .about-hero__img {
      height: 280px;
      transform: scale(1.02);
    }

    @media (min-width: 992px) {
      .about-hero__img {
        height: 70vh;
      }
      .about-hero.shrink .about-hero__img {
        height: 360px;
      }
    }
    .about-title {
      color: #ab1f65;
      font-size: 1.2rem;
      margin-bottom: 18px;
    }
    .about-body {
      display: grid;
      gap: 12px;
      color: #0000007c;
      line-height: 1.9;
    }
    .about-body p {
      font-size: 21px;
    }
    .clients-section {
      padding: 30px 0 50px;
      text-align: center;
    }
    .clients-section img {
      max-width: 100%;
      width: 100%;
      height: auto;
      display: block;
      margin: 0 auto;
    }
    .clients-subheads {
      max-width: 100%;
    }
    /* responsive single logos image */
    .clients-section .responsive-logos {
      width: 100%;
      height: auto;
      max-width: 1030px;
      display: block;
      margin: 0 auto;
    }
  `;
  document.head.appendChild(style);
}

// Smooth scroll for the hero down arrow
document.addEventListener("click", function (e) {
  var target = e.target;
  if (target.closest && target.closest(".about-hero__down")) {
    e.preventDefault();
    var anchor = document.querySelector("#who");
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});

// Mark About link active in header nav + shrink hero on scroll
document.addEventListener("DOMContentLoaded", function () {
  // Inject CSS styles dynamically
  injectAboutStyles();

  var links = document.querySelectorAll("nav .links a");
  links.forEach(function (a) {
    if (/about(?:[-\s]?us)?\.html$/i.test(a.getAttribute("href") || "")) {
      a.classList.add("active");
    } else {
      a.classList.remove("active");
    }
  });

  // Render About content dynamically
  var root = document.getElementById("about-root");
  if (root) {
    root.classList.add("about-page-root");
    // Hero
    var hero = document.createElement("section");
    hero.className = "about-hero";
    var heroImg = document.createElement("img");
    heroImg.src = "./images/About/about.jpeg";
    heroImg.alt = "About hero";
    heroImg.className = "about-hero__img";
    var down = document.createElement("a");
    down.href = "#who";
    down.className = "about-hero__down";
    down.innerHTML = '<i class="fas fa-angle-down"></i>';
    hero.appendChild(heroImg);
    hero.appendChild(down);

    // Who we are
    var who = document.createElement("section");
    who.id = "who";
    who.className = "about-intro";
    var whoContainer = document.createElement("div");
    whoContainer.className = "container";
    var whoTitle = document.createElement("h2");
    whoTitle.className = "about-title";
    whoTitle.textContent = "Who we are";
    var whoBody = document.createElement("div");
    whoBody.className = "about-body";
    var paragraphs = [
      "It is our passion to make people forget their daily stress while indulging in one of our many exclusive pieces. Every piece is a blend of quality, simplicity and style. Blend collection is set out as a wide diversified choice and includes systems and furnishing accessories for the whole house or project.",
      "Over the years, Blend continuously adapted its range of proposals to the furniture market, demonstrating a deep ability in gathering the requirements and the tastes of our audience and to anticipate and interpret trends in living.",
      "Blend is an Egyptian Public limited company that was established in 2012. Starting the journey with our first showroom in Nasr city, Cairo. Followed by the launch of the second showroom in Heliopolis in 2015, and after that, our third branch in New Cairo in 2019. and in 2021 Blend launched its 4th Location at Arkan Plaza, West of Cairo.",
      "Our showrooms serve as a source of inspiration, thanks to the comfort and timelessness of its products, with their strong design, expressed in harmony with the collection. Our goal is to create the perfect blend of furniture for each home with impeccable design and quality standards. Original minimalistic contemporary designs with a unique sense of detail are all hallmarks of every Blend product.",
      "We’ve worked with International brands that possess the keen attention to detail. Some of our international brands originate from countries known for their history in the design industry such as Italy, Spain, Portugal and the Netherlands that have been creating cutting-edge designs since the early 1900s.",
      "Blend isn’t just a brand, it’s also a platform that strives on encouraging local talent. Our strength is our endless passion for seeking out new designs and local talent. We take pride in our collaborations with Egyptian designers and innovators who excel in their field, showcasing their innovative creations in our showrooms.",
      "We make sure everything we do honours that connection between our commitment to excellence and unmatched comfort. All Blend products are ISO 9001 or equivalent certified to guarantee their safety and environmental soundness.",
      "We’re here to help you make your house a home.",
    ];
    paragraphs.forEach(function (t) {
      var p = document.createElement("p");
      p.textContent = t;
      whoBody.appendChild(p);
    });
    whoContainer.appendChild(whoTitle);
    whoContainer.appendChild(whoBody);
    who.appendChild(whoContainer);

    // Clients
    var clients = document.createElement("section");
    clients.className = "clients-section";
    var clientsContainer = document.createElement("div");
    clientsContainer.className = "container";
    var subheads = document.createElement("div");
    subheads.className = "clients-subheads";
    var subImg = document.createElement("img");
    subImg.src = "./images/About/clients3.png";
    subImg.alt = "";
    subheads.appendChild(subImg);
    var logos = document.createElement("img");
    logos.src =
      "./images/About/about-us-companies-designers-logos-1-1030x824.jpg";
    logos.alt = "";
    logos.className = "responsive-logos";
    clientsContainer.appendChild(subheads);
    clientsContainer.appendChild(logos);
    clients.appendChild(clientsContainer);

    // Append to root
    root.appendChild(hero);
    root.appendChild(who);
    root.appendChild(clients);

    // Shrink hero on scroll
    var lastState = false;
    function onScroll() {
      var shouldShrink = window.scrollY > 80;
      if (shouldShrink !== lastState) {
        lastState = shouldShrink;
        if (shouldShrink) hero.classList.add("shrink");
        else hero.classList.remove("shrink");
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});
