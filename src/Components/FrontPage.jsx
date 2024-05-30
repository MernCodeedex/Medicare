import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Card, Row, Col, Modal } from 'react-bootstrap';
import { TiTick } from 'react-icons/ti';
import { IoMdSearch } from 'react-icons/io';
import USFlag from '../img/united-states.png';
import DNFlag from '../img/germany.png';
import INFlag from '../img/flag.png';
import logo from '../img/logo.png';
import image1 from "../img/image1.jpg";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
import card1 from "../img/card1.jpg";
import card2 from "../img/card2.jpg"
import card3 from "../img/card3.jpg"
import card4 from "../img/card4.jpg";
import card5 from "../img/card5.jpg";
import card6 from "../img/card6.jpg";
import card7 from "../img/card7.jpg";
import card8 from "../img/card8.jpg";
import { FaPhoneVolume } from "react-icons/fa6"; 
import { IoMailOpenOutline } from "react-icons/io5";
import { LuClock10 } from "react-icons/lu";
import '../Components/FrontPage.css';

const countries = [
  { name: 'US', flag: USFlag },
  { name: 'GM', flag: DNFlag },
  { name: 'IN', flag: INFlag },
];

const FrontPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [showModal, setShowModal] = useState(false);
  const [gender, setGender] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);
 

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  const handleRequestAppointmentClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleCheckboxChange = () => {
    setIsAgreed(!isAgreed);
  };

  const generateYears = (startYear, endYear) => {
    let years = [];
    for (let i = startYear; i <= endYear; i++) {
      years.push(i);
    }
    return years;
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const years = generateYears(1900, new Date().getFullYear());

  return (
    <div className='main-container'>
      <div className='second-container'>
        <Navbar bg="light" expand="lg" className='navbar-1'>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title={<><img src={selectedCountry.flag} alt={`${selectedCountry.name} Flag`} className="flag-icon" style={{ width: '20px', height: '20px' }} /> {selectedCountry.name}</>} id="basic-nav-dropdown">
                {countries.map((country, index) => (
                  <NavDropdown.Item key={index} onClick={() => handleCountrySelect(country)} className="country-item">
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      {selectedCountry === country && <TiTick className="tick-icon" />} {/* Display tick if selected */}
                      <img src={country.flag} alt={`${country.name} Flag`} className="flag-icon" style={{ width: '20px', height: '20px', marginRight: '5px' }} />
                      <span>{country.name}</span>
                    </div>
                  </NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
              <IoMdSearch style={{ fontSize: '24px', marginTop: "10px", color: "gray" }} />
            </Form>
            <Nav className='nav-buttons'>
              <Button className="me-2">Find a Doctor</Button>
              <Button className='req-button'onClick={handleRequestAppointmentClick}>Request Appointment</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        
        <Modal show={showModal} onHide={handleClose} className="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title><h5 className='modal-title'>Make Appointment</h5></Modal.Title>
        </Modal.Header>
        <Modal.Body className="card-body">
        <div className="row mb-3">
          <div className="col-md-6">
            <label><h6>Patient name</h6></label>
            <input type='text' placeholder='Enter Full Name' className="form-control"/>
          </div>
          <div className="col-md-6">
            <label><h6>Date of birth*</h6></label>
            <div className="d-flex">
              <select className="form-control me-3">
                <option value="">Day</option>
                {days.map(day => (
                  <option key={day} value={day}>{day}</option>
                ))}
              </select>
              <select className="form-control me-3">
                <option value="">Month</option>
                {months.map((month, index) => (
                  <option key={month} value={index + 1}>{month}</option>
                ))}
              </select>
              <select className="form-control">
                <option value="">Year</option>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label><h5>Email</h5></label>
            <input type='email' placeholder='Enter Your Email' className="form-control"/>
            <p style={{fontSize: "smaller"}}>We'll never share your email with anyone else.</p>
          </div>
          <div className="col-md-6">
            <label><h6>Contact number</h6></label>
            <input type='text' placeholder='Enter Phone Number' className="form-control"/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label><h6>Preferred doctor (if any)</h6></label>
            <input type='text'placeholder='Enter doctor name' className="form-control"/>
          </div>
          <div className="col-md-6">
            <label><h6>At the following hospital</h6></label>
            <select className="form-control">
              <option value="no-preference">No preference</option>
              <option value="labaide-hospital">Labaide Hospital</option>
              <option value="central-hospital">Central Hospital</option>
              <option value="square-hospital">Square Hospital</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
        <div className="col-md-6">
            <label><h6>Specialty</h6></label>
            <select className="form-control">
              <option value="no-preference">I am not sure</option>
              <option value="labaide-hospital">Labaide Hospital</option>
              <option value="central-hospital">Central Hospital</option>
              <option value="square-hospital">Square Hospital</option>
            </select>
          </div>
          <div className="col-md-6">
            <label><h6>Reference code (if any)</h6></label>
            <input type='text' placeholder='Enter the code' className="form-control"/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <label><h6>Address</h6></label>
            <input type='text' placeholder='Enter Your Address' className="form-control"/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label><h6>Gender</h6></label>
            <div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="male" value="male" onChange={() => setGender('male')}/>
                <label className="form-check-label" htmlFor="male">Male</label>
              </div>
              <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="gender" id="female" value="female" onChange={() => setGender('female')}/>
                <label className="form-check-label" htmlFor="female">Female</label>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <label><h6>Appointment Date</h6></label>
            <input type='date' className="form-control"/>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="terms" checked={isAgreed} onChange={handleCheckboxChange}/>
              <label className="form-check-label" htmlFor="terms">
                Confirmation and I agree with terms and conditions
              </label>
            </div>
          </div>
        </div>
        

        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" style={{ backgroundColor: 'blue' }}>
      Submit
    </Button>
    <Button variant="secondary" onClick={handleClose} style={{ backgroundColor: 'red', color: 'white' }}>
      Cancel
    </Button>
  </Modal.Footer>
      </Modal>

      </div>
      <div className="third-container">
        <div className="sub-container">
          <img className="logo" src={logo} alt='logo' />
          <div className="contact-info">
            <div className="address">
              <h3>Address</h3>
              <p>5525 W Slauson Ave, LA, CA 90056, USA</p>
            </div>
            <div className="phoneNo">
              <h3>Phone Appointment</h3>
              <p>(555) 555-1234<br />(555) 555-5678</p>
            </div>
          </div>
        </div>
      </div>
      <div className="dropdown-navbar">
        <Navbar expand="lg" variant='dark' className="nav-dropdown">
          <div className="sub-container">
            <Nav className="mr-auto">
              <Form.Select className='form-dropdown' style={{backgroundColor: "transparent"}}>
                <option>Home</option>
                <option>Header Static</option>
                <option>Header Slider</option>
                <option>Youtube Background</option>
                <option>Self hosted Video</option>
                <option>RTL</option>
              </Form.Select>
              <Form.Select className='form-dropdown' style={{backgroundColor: "transparent"}}>
                <option>Pages</option>
                <option>About</option>
                <option>Blog</option>
                <option>Blog Detail</option>
                <option>Researchers</option>
                <option>Research Detail</option>
                <option>Contact</option>
                <option>Starter</option>
              </Form.Select>
              <Form.Select className='form-dropdown' style={{backgroundColor: "transparent"}}>
                <option>Components</option>
              </Form.Select>
              <Form.Select className='form-dropdown' style={{backgroundColor: "transparent"}}>
                <option>Utitlities</option>
                <option>Borders</option>
                <option>Clearfix</option>
                <option>Close icon</option>
                <option>Colors</option>
                <option>Display</option>
                <option>Embed</option>
                <option>Flex</option>
                <option>Figures</option>
                <option>Grid</option>
                <option>Sizing</option>
                <option>Stretched Link</option>
                <option>Spacing</option>
                <option>Typography</option>
                <option>Vertical align</option>
                <option>Visibility</option>
              </Form.Select>
              <Form.Select className='form-dropdown' style={{backgroundColor: "transparent"}}>
                <option>Plugins</option>
                <option>Accordion</option>
                <option>Countup</option>
                <option>Fancyscroll</option>
                <option>Ytplayer</option>
                <option>Flexslider</option>
              </Form.Select>
              <Form.Select className='form-dropdown' style={{backgroundColor: "transparent"}}>
                <option>Documentation</option>
                <option>Getting Started</option>
                <option>File structure</option>
                <option>Customization</option>
                <option>Gulp</option>
                <option>RTL</option>
                <option>Plugins</option>
                <option>Changelog</option>
              </Form.Select>
            </Nav>
          </div>
        </Navbar>
      </div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={image1} className="d-block w-100" alt="First slide" />
      <div className="carousel-caption d-none d-md-block text-dark">
        <h2>Small Injuries May
            Lead to Big Problem</h2>
        <p>Your environment could affect your fertility</p>
        <button className='carousel-button'>Learn More{'>'}</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image2} className="d-block w-100" alt="Second slide" />
      <div className="carousel-caption d-none d-md-block text-dark carousel-text">
        <h2>Help is here
When You Need it</h2>
        <p>A&E average wait time: 30mins</p>
        <button className='carousel-button'>Learn More{'>'}</button>
      </div>
    </div>
    <div className="carousel-item">
      <img src={image3} className="d-block w-100" alt="Third slide" />
      <div className="carousel-caption d-none d-md-block text-dark carousel-text2">
        <h2>One Stop Solution
         Medical services</h2>
        <p>Call to schedule an appointment today</p>
        <button className='carousel-button'>Learn More{'>'}</button>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

      <div className="forth-container d-flex flex-column align-items-center">
        <h5>
          STAY INFORMED. CONNECT WITH US.
          <a href="link-to-facebook" className="social-link">
            <FaFacebookSquare />
          </a>
          <a href="link-to-twitter" className="twitter">
            <FaTwitter />
          </a>
          <a href="link-to-youtube" className="youtube">
            <IoLogoYoutube />
          </a>
          <a href="link-to-linkedin" className="social-link">
            <FaLinkedin />
          </a>
        </h5>
      </div>
      <div className="fifth-container">
        <div className="fifth-subcontainer">
          <p>Brigham Health</p>
          <h2>HELPING OUR PATIENTS</h2>
        </div>
      </div>
      <div className="fifth-sub-container">
        <Row className="w-100">
          <Col xs={12} md={3} className="mb-4">
            <Card className="h-100">
              <Card.Body>
                <h5>HOW CAN WE HELP YOU?</h5>
                <div className="underline"></div>
                <div className="button-group">
                  <button className="card-button">
                    <span className="button-text">Find a Doctor</span>
                    <span className="arrow-button">{'>'}</span>
                  </button>
                  <button className="card-button">
                    <span className="button-text">Request Appointment</span>
                    <span className="arrow-button">{'>'}</span>
                  </button>
                  <button className="card-button">
                    <span className="button-text">Location</span>
                    <span className="arrow-button">{'>'}</span>
                  </button>
                  <button className="card-button">
                    <span className="button-text">Services</span>
                    <span className="arrow-button">{'>'}</span>
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={card1} />
              <Card.Body>
                <Card.Title className='card-title'>Brigham Health Physicians Named 'Top Doctors'</Card.Title>
                <Card.Text>
                  More than 275 Brigham Health Physicians were included on Boston magazine's 2019 list of "Top Doctors". To prepare the annual list, Boston magazine partners with Castle Connolly Medical.
                </Card.Text>
                <div class="card-footer">
                <a href='#'>Learn More {'>'}</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3} className="mb-4">
            <Card className="h-100">
              <Card.Img variant="top" src={card2} />
              <Card.Body>
                <Card.Title>BWH Named to US News & World Report's Honor Roll</Card.Title>
                <Card.Text>
                  Brigham and Women's Hospital has ranked among the top 20 best hospitals in the nation on #[em US News and World Report's] US News and World Reports.
                </Card.Text>
                <div class="card-footer">
                <a href='#'>Learn More {'>'}</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col className='third-card'>
          <Card className=" mt-4">
              <Card.Body className='card-gap'>
                <Card.Title><h4>LATEST NEWS</h4></Card.Title>
                <Card.Text>
                  <ul>
                    <li>Scientists create molecular tool to remove toxic protein from neuronal models of dementia</li>
                    <li>Older women benefit significantly when screened with 3-D mammography</li>
                    <li>Older women benefit significantly when screened with 3-D mammography</li>
                    <li>Public announcement concerning a proposed health care project</li>
                  </ul>
                </Card.Text>
                <div className="card-footer">
                  <a href='#'>View more news {'>'}</a>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
      <div className="sixth-container" style={{ backgroundImage: `url(${image4})`, height: '600px', backgroundSize: 'cover', backgroundPosition: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <div className='sixth-sub-container'>
    <p>All Centers</p>
    <h3 className="underline-title">CENTERS OF EXCELLENCE</h3>
  </div>
  <div className="container-buttons">
  <div className="row mt-3">
      <div className="col-md-4 mb-3">
        <button className="btn btn-primary btn-block custom-btn">Cancer Center</button>
      </div>
      <div className="col-md-4 mb-3">
        <button className="btn btn-primary btn-block custom-btn">Orthopedic center</button>
      </div>
      <div className="col-md-4 mb-3">
        <button className="btn btn-primary btn-block custom-btn">Heart and vascular center</button>
      </div>
      <div className="col-md-4 mb-3">
        <button className="btn btn-primary btn-block custom-btn">The lung center</button>
      </div>
      <div className="col-md-4 mb-3">
        <button className="btn btn-primary btn-block custom-btn">Neuroscience center</button>
      </div>
      <div className="col-md-4 mb-3">
        <button className="btn btn-primary btn-block custom-btn">Women Health Center</button>
      </div>
      <div className="col-md-4 mb-3">
        <button className="btn btn-primary btn-block custom-btn">Primary Care Center</button>
      </div>
      <div className="col-md-4 mb-3">
        <button className="btn btn-primary btn-block custom-btn">All Departments & services</button>
      </div>
      </div>
  </div>
  <div className="container-text">
    <p>Although there is no magic formula for a long, healthy life, decades of research confirm certain behaviors improve your chances. After 43 years, The Nurses’ Health Study continues to find new insights for maintaining a healthy lifestyle.</p>
  </div>
</div>
<div className="fifth-container">
        <div className="fifth-subcontainer">
          <p>RECENT POSTS</p>
          <h2>FROM OUR BLOG</h2>
        </div>
      </div>
     <div className="main-card-container">
    <div className="main-card-container">
      <div className="card mb-3 seventh-container">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="card-width">
              <div className="row g-0">
                <div className="col-md-4" style={{ height: "100%" }}>
                  <img src={card3} className="img-fluid" alt="card3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Should You Be Worried About Microplastics in Your Food?</h5>
                    <p className="card-text-small">John Doe10 Jan . 2019</p>
                    <p className="card-text">Plastic — it’s in the air, sea and probably your body. Find out what are microplastics doing to your health...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-width">
              <div className="row g-0">
                <div className="col-md-4" style={{ height: "100%" }}>
                  <img src={card4} className="img-fluid" alt="card3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">What to Expect During and After a Breast Biopsy</h5>
                    <p className="card-text-small">Wiliam Petro03 Feb, 2019</p>
                    <p className="card-text">We interview Dr Lim Siew Kuan, a general surgeon at Mount Elizabeth Novena Hospital, to understand what to...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-width">
              <div className="row g-0">
                <div className="col-md-4" style={{ height: "100%" }}>
                  <img src={card5} className="img-fluid" alt="card3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">How Heart Attack Signs Differ in Men & Women</h5>
                    <p className="card-text-small">Sultan Sentu05 Mar, 2019</p>
                    <p className="card-text">Is there ‘gender equality’ in heart attacks? The short answer is no. Here’s what you need to know...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-width">
              <div className="row g-0">
                <div className="col-md-4" style={{ height: "100%" }}>
                  <img src={card6} className="img-fluid" alt="card3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Prenatal Infections and How to Avoid Them</h5>
                    <p className="card-text-small">Marry Com29 Jun, 2019</p>
                    <p className="card-text">Prenatal infections can interfere with the health of both you and your baby, so it’s important to take steps to prevent them....</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-width">
              <div className="row g-0">
                <div className="col-md-4" style={{ height: "100%" }}>
                  <img src={card7} className="img-fluid" alt="card3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">What are the Screening Options for Heart Disease?</h5>
                    <p className="card-text-small">Illiana Daina29 Jun, 2019</p>
                    <p className="card-text">We interview Dr Lim Siew Kuan, a general surgeon at Mount Elizabeth Novena Hospital, to understand what to expect...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="card-width">
              <div className="row g-0">
                <div className="col-md-4" style={{ height: "100%" }}>
                  <img src={card8} className="img-fluid" alt="card3" />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Should You Be Worried About Microplastics in Your Food?</h5>
                    <p className="card-text-small">John Doe10 Jan . 2019</p>
                    <p className="card-text">Plastic — it’s in the air, sea and probably your body. Find out what are microplastics doing to your health...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     </div>

     <div className="eigth-container">
      <div className="text-container">
        <h2>Life, Giving, Breakthroughs.</h2>
        <p>We are inspired by our patients’ courage, our caregivers’ compassion, and our scientists’ curiosity—all fueled by our donors’ generosity.</p>
        <button className="button">Join Now</button>
      </div>
      <div className="image-container">
        <img src={image5} alt="Your Image" />
      </div>
    </div>
<div className="ninth-container">
  <div className="sub-ninthcontainer">
  <div className='first-div'>
  <FaPhoneVolume className="icon" />

<h5>+(123) 456 78910</h5>
<p>Have a question? call us now</p>
  </div>
  <div className='first-div'>
  <IoMailOpenOutline className="icon" />
  <h5>help@medicare.com</h5>
  <p>Need support? Drop us an email</p>
  </div>
  <div className='first-div'>
  <LuClock10 className="icon" />
  <h5>Mon – Sat 07:00 – 21:00</h5>
  <p>We are open on</p>
  </div>
  </div>
</div>
<footer className="footer-container">
      <div className="footer-section medicare">
      <img className="logo" src={logo} alt='logo' />
        <h5>BRIGHAM AND WOMEN'S HOSPITAL</h5>
        <p>75 FRANCIS STREET, BOSTON MA 02115</p>
        <p>General information: 671-732-5500</p>
        <p>New Patients: 800-294-9999</p>
      </div>
      <div className="footer-section centers">
        <h6>CENTERS</h6>
        <ul>
          <li>Cancer Center</li>
          <li>Heart & Vascular Center</li>
          <li>The Lung Center</li>
          <li>Neurosciences Center</li>
          <li>Orthopaedic & Arthritis Center</li>
          <li>Primary Care Center</li>
          <li>Women's Health Center</li>
        </ul>
      </div>
      <div className="footer-section clinical-departments">
        <h6>CLINICAL DEPARTMENTS</h6>
        <ul>
          <li>Anesthesiology</li>
          <li>Dermatology</li>
          <li>Emergency Medicine</li>
          <li>Medicine</li>
          <li>Neurology</li>
          <li>Obstetrics and Gynecology</li>
        </ul>
      </div>
      <div className="footer-section departments">
        <h6>DEPARTMENTS</h6>
        <ul>
          <li>Anesthesiology</li>
          <li>Dermatology</li>
          <li>Emergency Medicine</li>
          <li>Medicine</li>
          <li>Neurology</li>
          <li>Neurosurgery</li>
          <li>Orthopaedic Surgery</li>
          <li>Obstetrics and Gynecology</li>
          <li>Obstetrics and Gynecology</li> {/* Duplicate entry */}
        </ul>
      </div>
    </footer>
    </div>
    
  );
}

export default FrontPage;
