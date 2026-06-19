import React, { useState } from "react";

import {
  FaShippingFast,
  FaGlobe,
  FaClock,
  FaExclamationTriangle,
  FaHome,
  FaPhone,
  FaBoxOpen,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

export default function HomePage() {
  const [trackingId, setTrackingId] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);
  const [contactData, setContactData] = useState({
  name: "",
  email: "",
  message: "",
});

const handleContactChange = (e) => {
  setContactData({
    ...contactData,
    [e.target.name]: e.target.value,
  });
};

const handleContactSubmit = (e) => {
  e.preventDefault();

  alert("Message Sent Successfully!");

  setContactData({
    name: "",
    email: "",
    message: "",
  });
};

  const handleTrack = () => {
    if (trackingId.trim() === "") {
      alert("Please enter a tracking ID");
      return;
    }

    setTrackingResult({
      status: "In Transit",
      location: "Dubai International Hub",
      estimated: "15 May 2026",
    });
  };

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        backgroundColor: "#f5f7fb",
        overflowX: "hidden",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          backgroundColor: "#071739",
          color: "white",
          padding: "18px 60px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          ShipEase
        </h1>

        <div
          style={{
            display: "flex",
            gap: "30px",
            fontSize: "17px",
            alignItems: "center",
          }}
        >
          <p
            style={{ cursor: "pointer" }}
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
          >
            <FaHome /> Home
          </p>

          <p
            style={{ cursor: "pointer" }}
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <FaShippingFast /> Services
          </p>

          <p
            style={{ cursor: "pointer" }}
            onClick={() =>
              document
                .getElementById("tracking")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <FaBoxOpen /> Tracking
          </p>

          <p
            style={{ cursor: "pointer" }}
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <FaPhone /> Contact
          </p>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "80px 60px",
          background:
            "linear-gradient(135deg,#071739,#0d47a1,#1976d2)",
          color: "white",
          flexWrap: "wrap",
        }}
      >
        <div style={{ maxWidth: "600px" }}>
          <h1
            style={{
              fontSize: "65px",
              lineHeight: "1.2",
              fontWeight: "bold",
            }}
          >
            Smart International Shipping Platform
          </h1>

          <p
            style={{
              marginTop: "25px",
              fontSize: "20px",
              lineHeight: "1.8",
              color: "#dbe7ff",
            }}
          >
            Estimate shipping costs, customs duties, delivery timelines,
            and track international shipments instantly with ShipEase.
          </p>

          <div
            style={{
              marginTop: "40px",
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            {/* GET STARTED */}
            <button
              onClick={() =>
                document
                  .getElementById("services")
                  .scrollIntoView({ behavior: "smooth" })
              }
              style={{
                backgroundColor: "white",
                color: "#071739",
                padding: "16px 32px",
                border: "none",
                borderRadius: "12px",
                fontWeight: "bold",
                cursor: "pointer",
                fontSize: "17px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
              }}
            >
              Get Started <FaArrowRight />
            </button>

            {/* LEARN MORE */}
            <button
              onClick={() =>
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" })
              }
              style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "16px 32px",
                border: "2px solid white",
                borderRadius: "12px",
                cursor: "pointer",
                fontSize: "17px",
                fontWeight: "bold",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop"
          alt="shipping"
          style={{
            width: "520px",
            borderRadius: "25px",
            marginTop: "40px",
            boxShadow: "0 12px 40px rgba(0,0,0,0.4)",
          }}
        />
      </section>

      {/* ABOUT */}
      <section
        id="about"
        style={{
          padding: "80px 60px",
          backgroundColor: "white",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            color: "#071739",
          }}
        >
          About ShipEase
        </h2>

        <p
          style={{
            maxWidth: "1000px",
            margin: "30px auto",
            textAlign: "center",
            lineHeight: "2",
            fontSize: "19px",
            color: "#555",
          }}
        >
          ShipEase is a modern international logistics platform
          designed to simplify global deliveries. We help users
          estimate shipping costs, customs duties, delivery dates,
          and track packages worldwide with smart technology.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "30px",
            marginTop: "50px",
          }}
        >
          {[
            "Fast Worldwide Delivery",
            "Customs Clearance Support",
            "Real-Time Shipment Tracking",
            "Secure Global Logistics",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f4f7fb",
                padding: "35px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
              }}
            >
              <FaCheckCircle size={45} color="#0d47a1" />

              <h3
                style={{
                  marginTop: "20px",
                  color: "#071739",
                }}
              >
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        style={{
          padding: "80px 60px",
          backgroundColor: "#eef3ff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "45px",
            color: "#071739",
            marginBottom: "60px",
          }}
        >
          Our Services
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "35px",
          }}
        >
          {[
            {
              icon: <FaShippingFast size={55} color="#071739" />,
              title: "Shipping Cost Estimator",
              text: "Calculate shipping prices instantly worldwide.",
              link:
                "https://www.dhl.com/global-en/home/get-a-quote.html",
            },

            {
              icon: <FaGlobe size={55} color="#071739" />,
              title: "Customs & Duties",
              text: "Know customs taxes before shipping internationally.",
              link:
                "https://www.easyship.com/duties-and-taxes-calculator",
            },

            {
              icon: <FaClock size={55} color="#071739" />,
              title: "Delivery Timeline",
              text: "Get estimated delivery dates accurately.",
              link:
                "https://www.fedex.com/en-in/tracking.html",
            },

            {
              icon: (
                <FaExclamationTriangle
                  size={55}
                  color="#071739"
                />
              ),
              title: "Restricted Item Checker",
              text: "Check prohibited or restricted items instantly.",
              link:
                "https://www.ups.com/in/en/support/shipping-support/shipping-special-care-regulated-items/prohibited-items.page",
            },
          ].map((service, index) => (
            <div
              key={index}
              onClick={() =>
                window.open(service.link, "_blank")
              }
              style={{
                backgroundColor: "white",
                padding: "40px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transition: "0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform =
                  "translateY(-10px)";
                e.currentTarget.style.boxShadow =
                  "0 12px 30px rgba(0,0,0,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform =
                  "translateY(0px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 25px rgba(0,0,0,0.08)";
              }}
            >
              {service.icon}

              <h3
                style={{
                  marginTop: "25px",
                  color: "#071739",
                  fontSize: "24px",
                }}
              >
                {service.title}
              </h3>

              <p
                style={{
                  marginTop: "15px",
                  color: "#666",
                  lineHeight: "1.8",
                }}
              >
                {service.text}
              </p>

              <button
                style={{
                  marginTop: "25px",
                  backgroundColor: "#071739",
                  color: "white",
                  border: "none",
                  padding: "12px 22px",
                  borderRadius: "10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* TRACKING */}
      <section
        id="tracking"
        style={{
          padding: "90px 60px",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "45px",
            color: "#071739",
          }}
        >
          Track Shipment
        </h2>

        <p
          style={{
            color: "#666",
            marginTop: "15px",
            fontSize: "18px",
          }}
        >
          Enter your tracking number to see shipment details.
        </p>

        <div
          style={{
            marginTop: "35px",
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <input
            type="text"
            placeholder="Enter Tracking ID"
            value={trackingId}
            onChange={(e) =>
              setTrackingId(e.target.value)
            }
            style={{
              padding: "18px",
              width: "350px",
              borderRadius: "12px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />

          <button
            onClick={handleTrack}
            style={{
              padding: "18px 30px",
              border: "none",
              backgroundColor: "#071739",
              color: "white",
              borderRadius: "12px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Track Now
          </button>
        </div>

        {trackingResult && (
          <div
            style={{
              marginTop: "40px",
              backgroundColor: "#eef3ff",
              display: "inline-block",
              padding: "30px",
              borderRadius: "18px",
              textAlign: "left",
              boxShadow: "0 5px 15px rgba(0,0,0,0.08)",
            }}
          >
            <h3 style={{ color: "#071739" }}>
              Shipment Status
            </h3>

            <p>
              <strong>Tracking ID:</strong> {trackingId}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {trackingResult.status}
            </p>

            <p>
              <strong>Current Location:</strong>{" "}
              {trackingResult.location}
            </p>

            <p>
              <strong>Estimated Delivery:</strong>{" "}
              {trackingResult.estimated}
            </p>
          </div>
        )}
      </section>

     {/* CONTACT */}
<section
  id="contact"
  style={{
    background: "linear-gradient(135deg,#071739,#0d47a1)",
    minHeight: "100vh",
    padding: "100px 20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }}
>
  <h2
    style={{
      color: "white",
      fontSize: "70px",
      fontWeight: "bold",
      marginBottom: "50px",
    }}
  >
    Contact Us
  </h2>

  <div
    style={{
      width: "100%",
      maxWidth: "850px",
      backgroundColor: "#f5f5f5",
      padding: "45px",
      borderRadius: "25px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    }}
  >
    <form onSubmit={handleContactSubmit}>
      <input
        type="text"
        name="name"
        value={contactData.name}
        onChange={handleContactChange}
        placeholder="Enter Your Full Name"
        required
        style={{
          width: "100%",
          padding: "18px",
          marginBottom: "25px",
          border: "1px solid #d9d9d9",
          borderRadius: "12px",
          fontSize: "18px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      <input
        type="email"
        name="email"
        value={contactData.email}
        onChange={handleContactChange}
        placeholder="Enter Your Email Address"
        required
        style={{
          width: "100%",
          padding: "18px",
          marginBottom: "25px",
          border: "1px solid #d9d9d9",
          borderRadius: "12px",
          fontSize: "18px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      <textarea
        rows="7"
        name="message"
        value={contactData.message}
        onChange={handleContactChange}
        placeholder="Write Your Message Here..."
        required
        style={{
          width: "100%",
          padding: "18px",
          marginBottom: "25px",
          border: "1px solid #d9d9d9",
          borderRadius: "12px",
          fontSize: "18px",
          resize: "none",
          outline: "none",
          boxSizing: "border-box",
        }}
      />

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "18px",
          backgroundColor: "#071739",
          color: "white",
          border: "none",
          borderRadius: "12px",
          fontSize: "22px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Send Message
      </button>
    </form>
  </div>
</section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#051126",
          color: "white",
          textAlign: "center",
          padding: "25px",
        }}
      >
        <p>
          © 2026 ShipEase | International Shipping &
          Customs Estimator
        </p>
      </footer>
    </div>
  );
}
