import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import SingleBanner from "../../components/Banners/SingleBanner";
import coverphoto from "../../assets/coverphoto.jpg";
import futurescope from "../../assets/futurescope.jpg";
import Footer from "../../components/Footer/footer";
import "./aboutus.css";
const Aboutus = () => {
  return (
    <div className="maindiv">
      <Navbar />
      <SingleBanner heading="About Us" bannerImage={coverphoto} />
      <div className="pgleft">
        <img
          src="https://images.unsplash.com/photo-1492552181161-62217fc3076d?q=80&w=1797&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="noimg"
        />
        <div>
          <h1>Mission</h1>
          <p>
          <a href="https://swadeshibazaar.co.in/" target="_blank">SwadeshiBazaar.co.in</a> is on a mission to champion and promote
            indigenous products, fostering a platform that exclusively showcases
            Swadeshi items. Our mission is to empower local artisans,
            entrepreneurs, and sellers by providing them a free and accessible
            e-commerce portal to showcase and sell their Swadeshi products.
            Through this initiative, we aim to contribute to the growth of
            Swadeshi businesses and preserve the rich cultural heritage of our
            nation.
          </p>
        </div>
      </div>
      <div className="pgright">
        <img
          src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="noimg"
        />
        <div>
          <h1>Vision</h1>
          <p>
            Our vision at <a href="https://swadeshibazaar.co.in/" target="_blank">SwadeshiBazaar.co.in</a> is to create a thriving online
            marketplace that celebrates and supports Swadeshi enterprises. We
            aspire to be the go-to platform for consumers seeking authentic,
            locally-made products while simultaneously providing a sustainable
            and empowering space for Swadeshi sellers to showcase their
            craftsmanship. Through this vision, we hope to contribute to the
            economic empowerment of local communities across India.
          </p>
        </div>
      </div>
      <div className="pgaboutus">
        <img
          src="https://images.unsplash.com/photo-1475948164756-9a56289068fb?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="noimg"
        />
        <div>
          <h1>About Us</h1>
          <p>
            <a href="https://swadeshibazaar.co.in/" target="_blank">SwadeshiBazaar.co.in</a> is a Swadeshi e-commerce portal dedicated to
            promoting and selling only indigenous products. Born out of a desire
            to support local sellers and address the challenges faced by
            traditional vendors, our platform is a free space for Swadeshi
            businesses to reach a wider audience. From traditional handicrafts
            to Swadeshi books, especially Vidya Bharti books, our platform is a
            celebration of India's diverse cultural and economic landscape.
          </p>
        </div>
      </div>
      <div className="features">
        <img
          src="https://images.unsplash.com/photo-1519995672084-d21490e86ba6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="noimg"
        />
        <div>
          <h1>Features</h1>
          <p>
            <ul>
              <li>
                <b>Free Selling Platform</b> : <a href="https://swadeshibazaar.co.in/" target="_blank">SwadeshiBazaar.co.in</a> provides a
                free and accessible platform for sellers to showcase and sell
                their Swadeshi products, eliminating the barriers faced by
                street vendors.
              </li>
              <br/>
              <li>
                <b>Swadeshi Books</b>: A special focus on Swadeshi books,
                including Vidya Bharti publications, promotes indigenous
                literature, education, and knowledge dissemination.
              </li>
              <br />
              <li>
                <b>Support for Artisans and Entrepreneurs</b>: he platform aims
                to support local artisans and entrepreneurs by providing them
                with a digital storefront to expand their reach and connect with
                a broader customer base.
              </li>
              <br />
            </ul>
          </p>
        </div>
      </div>
      <div className="futurescope">
        <img src={futurescope} alt="noimg" />
        <div>
          <h1>Future Scope</h1>
          <p>
          <ul>
            <li>
              <b>Expanded Product Categories:</b> <a href="https://swadeshibazaar.co.in/" target="_blank">SwadeshiBazaar.co.in</a> envisions
              expanding its product categories to include a diverse range of
              Swadeshi items, from traditional clothing and accessories to
              organic food products, ensuring a comprehensive representation of
              indigenous craftsmanship.
            </li>
            <br />
            <li>
              <b>Regional Outreach Programs:</b> Initiatives to reach and
              empower sellers from different regions of India will be
              implemented, fostering a sense of inclusivity and ensuring the
              platform's impact is felt across the nation.
            </li>
            <br />
            <li>
              <b>Community Engagement:</b> <a href="https://swadeshibazaar.co.in/" target="_blank">SwadeshiBazaar.co.in</a> plans to
              introduce community engagement features, such as forums and
              discussions, to build a sense of community among sellers and
              customers, encouraging dialogue and feedback.
            </li>
            <br />
            <li>
              <b>Education and Awareness:</b> The platform aims to contribute to
              the promotion of Swadeshi ideals by integrating educational
              resources, providing information about the significance of
              indigenous products, and creating awareness about the positive
              impact of supporting local businesses.
            </li>
            <br />
          </ul>

          </p>
          
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Aboutus;
