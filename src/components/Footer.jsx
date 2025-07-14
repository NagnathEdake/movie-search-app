import React from "react";

function Footer({Movie}) {
  return (
    <div className="footer border-top border-danger ">
      <div className="blackOverlap text-white d-flex flex-column justify-content-center align-items-center">
        <div class="text-center mt-2">
          <h4 class="text-primary">MovieSpace</h4>
          <p>Your ultimate destination for movies, reviews.</p>
          <div class=" mb-4 text-center">
            <h5 className="text-success">Follow Us</h5>
            <a href="https://x.com/?lang=en" class="text-light me-3">
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/its_nath_02/profilecard/?igsh=cjU0bnJmZHFpbXJx"
              class="text-light me-3"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href=`https://m.youtube.com/results?search_query=${Movie}+trailer`
              class="text-light"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        <div class="container mb-4">
          <div class=" border-top border-white pt-3 mt-2">
            <div class=" text-center">
              <p class="small mb-0">
                &copy; 2025 MovieMania. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
