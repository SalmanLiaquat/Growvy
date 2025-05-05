
// Toggle nav on mobile
document.getElementById("menu-toggle").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("show");
  });
  
  // Highlight active page
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });

  document.getElementById("growvyForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
      companyname: document.getElementById("companyname").value,
      email: document.getElementById("email").value,
      city: document.getElementById("city").value,
      comment: document.getElementById("comment").value
    };

    fetch("https://script.google.com/macros/s/AKfycbzeztRDhiLwShwPTRIdtf8aMnUfAd0t2fL7v6Klsx2EdKSQzPl2lxTYYKd2Zl-EC0Ho/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response => {
        alert("Thank you! Your submission has been received.");
        document.getElementById("growvyForm").reset();
      })
      .catch(error => {
        alert("Error! Please try again.");
        console.error(error);
      });
  });
  
  



