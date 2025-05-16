import React from "react";


const Footer = () => {
  return (
    <div className="bg-black px-6 md:px-16 py-10 overflow-hidden relative">
      <div className="w-full max-w-7xl mx-auto text-white">
        <div className="flex flex-col md:flex-row justify-between gap-10 text-sm">
          {/* Left Section */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl sm:text-3xl font-normal mt-4 mb-6 text-left">
              Let's work Together
            </h2>

            {/* Email */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pixalivetech@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 text-base sm:text-lg cursor-pointer hover:underline block text-left"
            >
              contact@pixalivetech.com
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918778584566"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 text-base sm:text-lg cursor-pointer hover:underline block text-left"
            >
              +91 87785 84566
            </a>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:items-end">
            {/* Two-column layout on mobile and above */}
            <div className="w-full max-w-md text-base sm:text-lg grid grid-cols-2 gap-6">
              {/* Navigation */}
              <div className="flex flex-col items-start gap-2">
                <a href="/" className="hover:underline cursor-pointer">Home</a>
                <a href="/service" className="hover:underline cursor-pointer">Services</a>
                <a href="/hireus" className="hover:underline cursor-pointer">Hire U s</a>
                <a href="/contact" className="hover:underline cursor-pointer">Contact.</a>
              </div>

              {/* Social Links */}
              <div className="flex flex-col items-start gap-2">
                <a
                  href="https://www.facebook.com/profile.php?id=61572736722664"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/pixalivetech/?next=%2F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/pixalive-technology-network/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  LinkedIn
                </a>
                 <a
                  href="https://x.com/Pixalivetech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  Twitter
                </a>
              </div>
            </div>

            {/* Address */}
            <p className="mt-8 text-base sm:text-lg leading-relaxed font-normal max-w-md text-left md:text-left">
              3rd Floor, Reliance Smart Bazaar Building, Bus Stop, Hosur Rd, opp. E City, Phase II, Bengaluru, Karnataka 560100
            </p>
          </div>
        </div>

        {/* Branding - Pixalive */}
        <div className="mt-16 flex items-center justify-center relative">
          <div className="text-[3rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] bg-gradient-to-b from-white to-black bg-clip-text text-transparent text-center font-bold leading-none w-full">
            Pixalive
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
