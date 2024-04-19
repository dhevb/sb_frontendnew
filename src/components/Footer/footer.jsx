import React from "react";

export default function Footer() {
  return (
    <div>
      {/*  <!--Footer--> */}
      <footer className="bg-neutral-200 text-center text-black lg:text-left">
        {/* dhe's logos */}
        <div className="flex items-center bg-white justify-center  border-b-2 border-gray-700   text-center  p-2 lg:justify-between">
          <div className="ml-2 hidden lg:block semi-bold text-black">
            <span>Department of Holistic Education</span>
          </div>
          {/* logos */}
          {/* dhe */}
          <div className="flex justify-center ">
            <a
              href="https://www.dhe.org.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/image/dhe.png" alt="dhe" className="h-10 w-10 mr-4" />
            </a>
            {/* rase */}
            <a
              href="https://www.rase.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/rase.png"
                alt="rase"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* VIDHYA BHARTI */}
            <a
              href="https://vidyabharti.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/vidyabharti.png"
                alt="vidya"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* sarvatr */}
            <a
              href="https://www.sarvatr.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/sarvatr.png"
                alt="sarvatr"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* temple */}
            <a
              href="https://www.alltemples.org.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/harbor.png"
                alt="temple"
                className="h-10 w-10 mr-4"
              />
            </a>
            {/* job360 */}
            <a
              href="https://jobs360degree.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/job360.png"
                alt="job"
                className="h-10 w-10 mr-4"
              />
            </a>

            {/* poojawala */}
            <a
              href="https://poojawala.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/poojawala.png"
                alt="pooja"
                className="h-10 w-10 mr-4"
              />
            </a>

            {/* swadeshi bazar */}
            <a href="" target="_blank" rel="noopener noreferrer">
              <img
                src="/image/swadeshi.png"
                alt="Logo Alt Text"
                className="h-10 w-10 mr-4"
              />
            </a>

            {/* tredul */}
            <a
              href="https://tredul.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/tredul.png"
                alt="tredul"
                className="h-10 w-10 mr-4"
              />
            </a>

            {/* itr */}
            <a
              href="https://www.itrchandigarh.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/image/itr.png" alt="itr" className="h-10 w-10 mr-4" />
            </a>

            {/* vikas india  */}
            <a
              href="https://vi.rase.co.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/image/vikasindia.png"
                alt="vikas"
                className="h-10 w-10 mr-4"
              />
            </a>

            {/*  */}
          </div>
        </div>

        {/*   help,usefull link, contact,follow us        */}
        <div className="mx-6 py-6 text-center md:text-left">
          <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* <!-- Help section --> */}
            <div className=" hidden lg:block pl-10">
              <h6 className="mb-3 flex justify-center font-semibold uppercase md:justify-start text-black ">
                Help
              </h6>
              <p className="mb-3">
                <a className="text-black ">Help Center</a>
              </p>
              <p className="mb-3">
                <a className="text-black ">Support</a>
              </p>
              <p className="mb-3">
                <a className="text-black ">Contact Us</a>
              </p>
              <p className="mb-3">
                <a className="text-black ">FAQs</a>
              </p>
              <p>
                <a className="text-black ">Team</a>
              </p>
            </div>

            {/* <!-- Useful links section --> */}
            {/* hidden in sm */}
            <div className=" hidden lg:block pl-10">
              <h6 className="mb-3 flex justify-center font-semibold uppercase md:justify-start text-black ">
                TuDu
              </h6>
              <p className="mb-3">
                <a className="text-black ">Event Status</a>
              </p>
              <p className="mb-3">
                <a className="text-black ">Booking Status</a>
              </p>
              <p>
                <a className="text-black ">About</a>
              </p>
            </div>
            {/* <!-- Contact section --> */}
            <div>
              <div className=" md:w-48 lg:w-64 pl-4 pr-4">
                <h6 className="mb-3 flex justify-center font-semibold uppercase md:justify-start text-black ">
                  Contact Us
                </h6>
                <form className="max-w-lg mx-auto">
                  <div className="mb-0">
                    <label
                      className="block text-sm font-bold mb-1 text-black "
                      htmlFor="email"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full border rounded-md py-2 px-2 text-black "
                      placeholder="abc@example.com"
                    />
                  </div>
                  <div className="mb-0">
                    <label
                      className="block text-sm font-bold mb-1 text-black "
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="1"
                      className="w-full border rounded-md py-2 px-2"
                      placeholder="Your message here"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-700 text-white py-2 px-2 rounded-md hover:bg-blue-900"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

            {/* follow us and map*/}

            <div className=" ">
              {/* follow us */}
              <h6 className="mb-3 flex justify-center font-semibold uppercase md:justify-start text-black">
                Follow Us
              </h6>
              {/* social meia icon */}
              <div className=" flex items-center justify-center md:justify-start">
                {/* facebook */}
                <a className="mr-6 text-black dark:text-neutral-200">
                  <img
                    src="/image/facebook.svg"
                    alt="Facebook"
                    className="h-5 w-5"
                  />
                </a>
                {/* twitter */}
                <a className="mr-6 text-black dark:text-neutral-200">
                  <img
                    src="/image/twitter.svg"
                    alt="twitter"
                    className="h-5 w-5"
                  />
                </a>
                {/* instagrma */}
                <a className="mr-6 text-black dark:text-neutral-200">
                  <img
                    src="/image/instagram.svg"
                    alt="instagram"
                    className="h-5 w-5"
                  />
                </a>
                {/* linkedin */}
                <a className="mr-6 text-black dark:text-neutral-200">
                  <img
                    src="/image/linkedin.svg"
                    alt="linkedin"
                    className="h-5 w-5"
                  />
                </a>
              </div>

              {/* include map */}

              <div className="mt-6  flex items-center justify-center md:justify-start ">
                <iframe
                  className="w-40 h-28 border border-gray-400"
                  src="https://www.google.com/maps/embedpb=!1m18!1m12!1m3!1d3430.6604613704103!2d76.70609037438652!3d30.699827987224253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef39a32ed3c1%3A0x9ff15a51ad5117e9!2sDepartment%20of%20Holistic%20Education!5e0!3m2!1sen!2sin!4v1708812880069!5m2!1sen!2sin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <!--Copyright section--> */}
        <div className="bg-neutral-900 p-4 text-center ">
          <span className="text-white">
            © {new Date().getFullYear()}{" "}
            <a
              href="https://www.dhe.org.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Department of Holistic Education.
            </a>
          </span>

          <div></div>
        </div>
      </footer>
    </div>
  );
}