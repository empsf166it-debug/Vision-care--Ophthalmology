// components.js - Centralized Header & Footer injection

document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Sidebar
    const sidebarHTML = `
    <div class="sidebar-overlay"></div>
    <aside class="sidebar">
        <button class="icon-btn close-sidebar" aria-label="Close Menu">✖</button>
        <nav>
            <ul class="nav-links">
                <li><a href="index.html" class="nav-home">Home</a></li>
                <li><a href="about.html" class="nav-about">About Us</a></li>
                <li><a href="services.html" class="nav-services">Services</a></li>
                <li><a href="doctors.html" class="nav-doctors">Doctors</a></li>
                <li><a href="departments.html" class="nav-departments">Departments</a></li>
                <li><a href="treatments.html" class="nav-treatments">Treatments</a></li>
                <li><a href="diagnostics.html" class="nav-diagnostics">Diagnostics</a></li>
                <li><a href="resources.html" class="nav-resources">Resources</a></li>
                <li><a href="blog.html" class="nav-blog">Blog</a></li>
                <li><a href="gallery.html" class="nav-gallery">Gallery</a></li>
                <li><a href="contact.html" class="nav-contact">Contact</a></li>
                <li><a href="book.html" class="btn btn-primary" style="margin-top: 15px; width: 100%;">Book Appointment</a></li>
            </ul>
        </nav>
    </aside>
    `;

    // 2. Inject Header
    const headerHTML = `
    <header class="header">
        <div class="container nav-container">
            <a href="index.html" class="logo">
                <img src="images/logo.png" alt="VisionCare" style="height: 32px; width: auto; object-fit: contain;">
            </a>
            <nav>
                <ul class="nav-links">
                    <li><a href="index.html" class="nav-home">Home</a></li>
                    <li><a href="about.html" class="nav-about">About</a></li>
                    <li><a href="services.html" class="nav-services">Services</a></li>
                    <li><a href="doctors.html" class="nav-doctors">Doctors</a></li>
                    <li><a href="departments.html" class="nav-departments">Departments</a></li>
                    <li><a href="treatments.html" class="nav-treatments">Treatments</a></li>
                    <li><a href="diagnostics.html" class="nav-diagnostics">Diagnostics</a></li>
                    <li><a href="contact.html" class="nav-contact">Contact</a></li>
                </ul>
            </nav>
            <div class="nav-actions">
                <button id="theme-toggle" class="icon-btn" aria-label="Toggle Theme">
                    <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </button>
                <a href="book.html" class="btn btn-primary">Book Appointment</a>
                <button class="icon-btn mobile-menu-btn" aria-label="Menu">☰</button>
            </div>
        </div>
    </header>
    `;

    // 3. Inject Footer
    const footerHTML = `
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-col">
                    <a href="index.html" class="logo" style="margin-bottom: 20px;">
                        <img src="images/logo.png" alt="VisionCare" style="height: 32px; width: auto; object-fit: contain;">
                    </a>
                    <p style="color: var(--text-light); margin-bottom: 20px;">Dedicated to preserving and enhancing your vision with world-class eye care services and advanced technology.</p>
                    <div style="display: flex; gap: 10px;">
                        <!-- Social Icons -->
                        <a href="#" class="social-icon" aria-label="Facebook">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="Twitter">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                        </a>
                        <a href="#" class="social-icon" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                        </a>
                    </div>
                </div>
                <div class="footer-col">
                    <h4>Quick Links</h4>
                    <ul class="footer-links">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="doctors.html">Our Doctors</a></li>
                        <li><a href="gallery.html">Gallery</a></li>
                        <li><a href="resources.html">Patient Resources</a></li>
                        <li><a href="blog.html">Health Tips</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Medical Services</h4>
                    <ul class="footer-links">
                        <li><a href="services.html">Cataract Surgery</a></li>
                        <li><a href="treatments.html">LASIK Laser</a></li>
                        <li><a href="services.html">Glaucoma Care</a></li>
                        <li><a href="diagnostics.html">Diagnostics</a></li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h4>Contact Info</h4>
                    <ul class="footer-links">
                        <li style="color: var(--text-light)">📍 123 Vision Way, Medical District</li>
                        <li style="color: var(--text-light)">📞 +1 (800) 123-4567</li>
                        <li style="color: var(--text-light)">✉️ info@visioncare.com</li>
                        <li style="color: var(--error); font-weight:600;">🚨 Emergency: 24/7</li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom" style="position: relative;">
                <p>&copy; 2026 VisionCare Eye Hospital. All rights reserved. | <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a></p>
                <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" style="position: absolute; right: 0; bottom: 0; background: var(--primary-color); color: white; border: none; padding: 10px 15px; border-radius: var(--border-radius); cursor: pointer;">↑ Back to Top</button>
            </div>
        </div>
    </footer>
    `;

    // Insert into DOM
    document.body.insertAdjacentHTML('afterbegin', sidebarHTML + headerHTML);
    
    // We want the footer at the very end of the body but BEFORE scripts
    const footerContainer = document.createElement('div');
    footerContainer.innerHTML = footerHTML;
    document.body.appendChild(footerContainer.firstElementChild);

    // Re-initialize Main JS Logic (since elements were just added dynamically)
    if (typeof initMainJS === 'function') {
        initMainJS();
    }

    // Set Active Nav Link
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const activeClassMap = {
        'index.html': 'nav-home',
        'about.html': 'nav-about',
        'services.html': 'nav-services',
        'doctors.html': 'nav-doctors',
        'departments.html': 'nav-departments',
        'treatments.html': 'nav-treatments',
        'diagnostics.html': 'nav-diagnostics',
        'resources.html': 'nav-resources',
        'blog.html': 'nav-blog',
        'gallery.html': 'nav-gallery',
        'contact.html': 'nav-contact'
    };
    
    const targetClass = activeClassMap[currentPath];
    if (targetClass) {
        document.querySelectorAll('.' + targetClass).forEach(el => {
            el.classList.add('active');
        });
    }

    // Hide Book Appointment CTAs if we are already on the book page
    if (currentPath === 'book.html') {
        document.querySelectorAll('a[href="book.html"].btn-primary').forEach(el => {
            el.style.display = 'none';
        });
    }
});
