// Set the date we're counting down to
const countDownDate = new Date("January 25, 2024 00:00:00").getTime();

  // Update the countdown every 1 second
  const x = setInterval(function() {

    // Get the current date and time
    const now = new Date().getTime();

    // Calculate the remaining time
    const distance = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the countdown
    document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s till our big day!`;

    // If the countdown is over, display a message
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "D-day";
    }
  }, 1000);

   //Tansparent nav bar
   document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
  
    // Function to change styles based on scroll position
    function changeStyles() {
      const scrollPosition = window.scrollY;
  
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          if (section.id === "rsvp") {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0)";
            changeTextColor("white");
          } else {
            navbar.style.backgroundColor = "rgb(245, 245, 245)";
            changeTextColor("black");
          }
        }
      });
    }
  
    // Function to change text color
    function changeTextColor(color) {
      const navLinks = document.querySelectorAll("#navbar a");
      const countdownText = document.getElementById("countdown");
  
      navLinks.forEach((link) => {
        link.style.color = color;
      });
  
      countdownText.style.color = color;
    }
  
    // Listen for scroll event
    window.addEventListener("scroll", changeStyles);
  
        // Change styles after scrolling to the target section
        setTimeout(changeStyles, 1000);
      });
  

  //open Our Story
  function openOurStory() {
    var osPath =
      "our_story.html";
      window.location.href = osPath;
  }

  //open accomodations
  function openAcc() {
    var accPath =
      "Accomodations.html";
      window.location.href = accPath;
  }

  //open Visa Info
  function openVisaInfo() {
    var visaInfoPath =
      "Visa.html";
      window.location.href = visaInfoPath;
  }

  //open Extra Info
  function openExtInfo() {
    var extInfoPath =
      "https://www.experienceoman.om";
    window.open(extInfoPath);
  }

  //open rsvp
  function openRSVP() {
    var rsvpPath =
      "https://forms.gle/9BTEgXvjN3zRbGch8";
    window.open(rsvpPath);
  }

  //open al falaj
  function openhotel1() {
    var hotel1Path =
      "https://www.booking.com/hotel/om/al-falaj.html";
    window.open(hotel1Path);
  }

  //open haffa
  function openhotel2() {
    var hotel2Path =
      "https://www.booking.com/hotel/om/haffa-house-ruwi.html?aid=390156&label=duc511jc-1FCAsorwFCCGFsLWZhbGFqSDNYA2ivAYgBAZgBMbgBF8gBD9gBAegBAfgBAogCAagCA7gCzeSBrAbAAgHSAiRiY2RhYWI4Ni01MGU4LTRhMDctYTg4Yy1hZTI5ZGQ5NzJhNTfYAgXgAgE&sid=10b81253eeafc39243ccf4ded558d654&all_sr_blocks=935588507_365694743_0_42_0;checkin=2024-02-01;checkout=2024-02-02;dist=0;group_adults=2;group_children=0;hapos=2;highlighted_blocks=935588507_365694743_0_42_0;hpos=2;matching_block_id=935588507_365694743_0_42_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=935588507_365694743_0_42_0__2108;srepoch=1702958218;srpvid=11f71b5e5e0b04ce;type=total;ucfs=1&#hotelTmpl";
    window.open(hotel2Path);
  }

  //open qurm
  function openhotel3() {
    var hotel3Path =
      "https://www.booking.com/hotel/om/al-qurum-resort.html";
    window.open(hotel3Path);
  }

  //open tulip
  function openhotel4() {
    var hotel4Path =
      "https://www.booking.com/hotel/om/golden-tulip-headington.html?aid=356980&label=gog235jc-1FCAsorwFCD2FsLXF1cnVtLXJlc29ydEgzWANorwGIAQGYATG4ARfIAQ_YAQHoAQH4AQKIAgGoAgO4AvOUn6wGwAIB0gIkNTFjOTI3ZjItNzBlYS00ZGYyLTlhNzgtNWZlZTA3MjI4YjFh2AIF4AIB&sid=10b81253eeafc39243ccf4ded558d654&age=0;all_sr_blocks=228376608_130803885_2_2_0;checkin=2024-01-20;checkout=2024-01-21;dest_id=2283766;dest_type=hotel;dist=0;group_adults=2;group_children=1;hapos=1;highlighted_blocks=228376608_130803885_2_2_0;hpos=1;matching_block_id=228376608_130803885_2_2_0;no_rooms=1;req_adults=2;req_age=0;req_children=1;room1=A%2CA%2C0;sb_price_type=total;sr_order=popularity;sr_pri_blocks=228376608_130803885_2_2_0__1607;srepoch=1703398420;srpvid=e26e2bc681980185;type=total;ucfs=1&#hotelTmpl";
    window.open(hotel4Path);
  }

  //open shorouq
  function openhotel5() {
    var hotel5Path =
      "https://www.booking.com/hotel/om/al-shorouq-apartments.html?aid=356980&label=gog235jc-1FCAsorwFCD2FsLXF1cnVtLXJlc29ydEgzWANorwGIAQGYATG4ARfIAQ_YAQHoAQH4AQKIAgGoAgO4AvOUn6wGwAIB0gIkNTFjOTI3ZjItNzBlYS00ZGYyLTlhNzgtNWZlZTA3MjI4YjFh2AIF4AIB&sid=10b81253eeafc39243ccf4ded558d654&age=0;all_sr_blocks=212735303_221135026_2_0_0;checkin=2024-01-20;checkout=2024-01-21;dest_id=2127353;dest_type=hotel;dist=0;group_adults=2;group_children=1;hapos=1;highlighted_blocks=212735303_221135026_2_0_0;hpos=1;matching_block_id=212735303_221135026_2_0_0;no_rooms=1;req_adults=2;req_age=0;req_children=1;room1=A%2CA%2C0;sb_price_type=total;sr_order=popularity;sr_pri_blocks=212735303_221135026_2_0_0__2135;srepoch=1703398697;srpvid=5a9a2c4f27c9019f;type=total;ucfs=1&#hotelTmpl";
    window.open(hotel5Path);
  }

  //mobile burger menu
  document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
  
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  
    document.addEventListener("click", (event) => {
      const isClickInsideMenu = navMenu.contains(event.target);
      const isClickOnHamburger = hamburger.contains(event.target);
  
      if (!isClickInsideMenu && !isClickOnHamburger) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      }
    });
  
    navMenu.querySelectorAll(".nav-item").forEach((navItem) => {
      navItem.addEventListener("click", (event) => {
        // Handle navigation to the selected section here
        const sectionId = navItem.getAttribute("data-section-id");
        navigateToSection(sectionId);
  
        // Close the menu
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
  
        event.stopPropagation(); // Prevent the event from reaching the document click listener
      });
    });
  
    function navigateToSection(sectionId) {
      // Add your logic to scroll to the section with the specified ID
      // For example, using the following code:
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
  