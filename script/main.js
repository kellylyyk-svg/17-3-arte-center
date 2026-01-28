document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const nav = document.querySelector('.header .nav');
    const body = document.querySelector('body');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');

    if (hamburgerBtn && nav) {
        hamburgerBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            
            if (nav.classList.contains('active')) {
                body.style.overflow = 'hidden'; // Prevent background scrolling
                if(mobileOverlay) mobileOverlay.classList.add('active');
            } else {
                body.style.overflow = '';
                if(mobileOverlay) mobileOverlay.classList.remove('active');
            }
        });

        // Close menu when clicking overlay
        if(mobileOverlay) {
            mobileOverlay.addEventListener('click', function() {
                hamburgerBtn.classList.remove('active');
                nav.classList.remove('active');
                this.classList.remove('active');
                body.style.overflow = '';
            });
        }
    }

    // Mobile Accordion for Section 2 (News)
    // Only active on mobile view (check width or simple toggle logic that works on both but styled for mobile)
    const noticeItems = document.querySelectorAll('.section2-content .noticebox li');

    noticeItems.forEach(item => {
        const title = item.querySelector('a');
        
        // Add click event listener to the link
        title.addEventListener('click', function(e) {
            // Check if we are in mobile view (you can adjust this breakpoint)
            if (window.innerWidth <= 1024) {
                e.preventDefault(); // Prevent default link behavior on mobile
                
                // Toggle active class on the clicked item
                const parentLi = this.parentElement;
                
                // Close other items if you want a true accordion behavior (optional)
                noticeItems.forEach(otherItem => {
                    if (otherItem !== parentLi) {
                        otherItem.classList.remove('active');
                    }
                });

                parentLi.classList.toggle('active');
            }
        });
    });

    // Mobile GNB Accordion (Submenu toggle)
    const gnbItems = document.querySelectorAll('.header .nav .gnb > li');
    
    gnbItems.forEach(item => {
        const link = item.querySelector('a');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 1024) {
                 // If item has sub-menu
                 if (item.querySelector('.lnb')) {
                    e.preventDefault();
                    item.classList.toggle('active');
                 }
            }
        });
    });
});
