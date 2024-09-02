<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Car Seller</title>
    <link rel="stylesheet" href="./css/index.css">
</head>
<body>
    <!-- Header Section -->
     <header>
        <div class="navbar">
            <a href="index.html">
                <img class="logo" src="./images/logo.png" width="200" height="80" alt="logo">
            </a>
            <button class="menu-button" onclick="toggleMenu()">☰ Menu</button>
            <ul class="nav-items-list">
                <li class="nav-item">
                    <a class="active" href="index.html">Home</a>
                </li>
                <li class="nav-item">
                    <a href="about-us.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a href="search.html">Search</a>
                </li>
                <li class="nav-item">
                    <a href="seller-registration.html">Register</a>
                </li>
                <li class="nav-item">
                    <a id="login" href="seller-login.html">Login</a>
                </li>
            </ul>
        </div>
     </header>
     <!-- Body Section -->
      <!-- Hero banner -->
       <section class="herobanner-section">
         <div class="hero-banner-text">
            <h1 class="hero-heading">Buy or Sell Your Dream Car Today!</h1>
            <p class="hero-sub-text">Your trusted platform for buying and selling cars online. Register as a seller to advertise your car, or search for your dream car from our extensive listings. We connect buyers and sellers with ease and reliability.</p>
            <a style="z-index: 99999;" id="register" href="seller-registration.html">Register Now!</a>
         </div>
         <div class="image-section">
            <div class="car-details">
                <h1>2018 C - HR</h1>
                <h3>20 km per liter. 800 km per tank </h3>
            </div>
            <img class="herocarImage" src="./images/hero-car.png" alt="hero-car">
         </div>
       </section>
       <!-- Feature Car section -->
        <section>
            <div class="featured-car-text-section">
                <h1 class="featured-car-heading-text">Featured Cars</h1>
                <div id="line"></div>
                <p class="featured-car-sub-text">Explore our top-quality vehicles, chosen for performance and reliability. From sleek sedans to powerful SUVs, our featured cars offer something for everyone. Each vehicle is inspected to meet the highest standards, ensuring peace of mind with every choice.</p>
            </div>
            <div class="car-card-section">
                <div class="car-card car-card-1">
                    <h4 class="price-tag">$18,000</h4>
                    <div class="car-card-details">
                        <h3>2024 Toyota Corolla</h3>
                        <p>Location: New York, NY</p>
                    </div>
                </div>
                <div class="car-card car-card-2">
                    <h4 class="price-tag">$45,000</h4>
                    <div class="car-card-details">
                        <h3>2024 Toyota Corolla</h3>
                        <p>Location: New York, NY</p>
                    </div>
                </div>
                <div class="car-card car-card-3">
                    <h4 class="price-tag">$20,000</h4>
                    <div class="car-card-details">
                        <h3>2024 Toyota Corolla</h3>
                        <p>Location: New York, NY</p>
                    </div>
                </div>
                <div class="car-card car-card-4">
                    <h4 class="price-tag">$16,000</h4>
                    <div class="car-card-details">
                        <h3>2024 Toyota Corolla</h3>
                        <p>Location: New York, NY</p>
                    </div>
                </div>
            </div>
        </section>

         <!-- Company Services -->
          <section class="company-section">
            <div class="our-services">
                <h2>Our Services</h2>
                <p>We offer car sales, seller listings, financing, maintenance, trade-in services, and personalized car search assistance to meet your automotive needs.</p>
            </div>
            <div class="contact-section">
                <div>
                    <img style="object-fit: contain;" src="./images/contactIcon.png" alt="icon">
                </div>
                <div class="contact-us-description">
                    <h1>+61 433181772</h1>
                    <div style="margin-top: 15px;">
                        <p>9:00 AM - 8:00 PM</p>
                        <p>Sunday Off</p>
                    </div>
                </div>
            </div>
          </section>


     <!-- Footer Section -->
      <footer class="footer-section">
        <p>&copy; 2024 Online Car Sale. All rights reserved.</p>
        <p>Contact us: <a href="mailto:info@onlinecarsale.com">info@onlinecarsale.com</a></p>
      </footer>
    <script src="./js/index.js"></script>
</body>
</html>