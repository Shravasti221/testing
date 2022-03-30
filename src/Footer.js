import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  FooterText,
  Heading,
  FooterIconRow,
} from "./helpers/css/FooterStyles";
import "./helpers/css/footer.css";
const Footer = () => {
  return (
    <>
      <Box>
        <Container>
          <Row>
            <Column>
              <Heading>Useful Links</Heading>
              <FooterLink href="#">Home</FooterLink>
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Present Projects</FooterLink>
              <FooterLink href="#">Past Projects</FooterLink>
              <FooterLink href="#">Sponsorship</FooterLink>
              <FooterLink href="#">Core Team</FooterLink>
            </Column>
            <Column>
            <Heading>Contact Us</Heading>
              <FooterLink href="mailto:teamastra@rvce.edu.in?">
                teamastra@rvce.edu.in
              </FooterLink>
              <FooterText>
                Phone Number:
                </FooterText>
              <FooterText href="#">
                Shashank: +91 76758 73584
                </FooterText>
              <FooterLink href="#">
                Kiran: +91 96208 48507
              </FooterLink>
            </Column>
            <Column>
              <Heading>Address</Heading>
              <FooterText>
                Mysore Road, RV Vidyanikethan Post, 
              </FooterText>
              <FooterText>
                 Bengaluru-560059, Karnataka,
              </FooterText>
              <FooterText>
                India
              </FooterText>
              <div className="spacer"></div>
              
              
              {/* <FooterLink href="#"><i className="fa-brands fa-instagram"></i></FooterLink> */}
              {/*<FooterIconRow>
                <FooterLink href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="xl"
                    style={{ marginRight: "20px", color: "white" }}
                  />
                </FooterLink>
                <FooterLink href="#">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="xl"
                    style={{ marginRight: "20px", color: "white" }}
                  />
                </FooterLink>
                <FooterLink href="#">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    size="xl"
                    style={{ marginRight: "20px", color: "white" }}
                  />
                </FooterLink>
              </FooterIconRow>*/}
              <FooterLink href="#">
                © Astra Robotics. All Rights Reserved.
              </FooterLink>
            </Column>
          </Row>
        </Container>
        <footer className="flex-rw">
          <section className="footer-social-section flex-rw">
            <span className="footer-social-overlap footer-social-connect">
              CONNECT <span className="footer-social-small">with</span> US
            </span>
            <span className="footer-social-overlap footer-social-icons-wrapper">
              <a
                href="https://www.linkedin.com/company/astra-robotics/"
                className="generic-anchor"
                target="_blank"
                title="LinkedIn"
                itemProp="significantLink"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCKbeaYMw6fCF2u4iXOdOfJg"
                className="generic-anchor"
                target="_blank"
                title="Youtube"
                itemProp="significantLink"
              >
                <i className="fa fa-youtube"></i>
              </a>
              <a
                href="https://github.com/astra-robotics"
                className="generic-anchor"
                target="_blank"
                title="Github"
                itemProp="significantLink"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://twitter.com/astrarobotics"
                className="generic-anchor"
                target="_blank"
                title="Twitter"
                itemProp="significantLink"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/astra_robotics/"
                className="generic-anchor"
                target="_blank"
                title="Instagram"
                itemProp="significantLink"
              >
                <i className="fa fa-instagram"></i>
              </a>
            </span>
          </section>
        </footer>
        <section className="footer-bottom-section flex-rw">
          <div className="made-with-love">
            Made with <i>♥</i> by <a target="_blank">Astra Webdev Team</a>
          </div>
        </section>
      </Box>
    </>
  );
};
export default Footer;
