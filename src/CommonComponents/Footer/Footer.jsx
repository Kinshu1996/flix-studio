import { Divider, Layout } from "antd";
import React from "react";
import "./Footer.scss";
import logo from "../../assets/images/footer-logo.svg";
import { CustomButton as Button } from "../button/Button";
import icon from "../../assets/images/studioIcon.svg";

const { Footer } = Layout;

export const CustomFooter = () => {
  return (
    <>
      <Footer className="footer-section">
        <div className="footer-container">
          <div className="footer-top">
            <div className="logo">
              <img src={logo} alt="logo" loading="lazy" />
            </div>

            <div className="table">
              <table>
                <tr>
                  <th>what we do</th>
                  <th>whatever you sell</th>
                  <th>pricing</th>
                  <th>company</th>
                </tr>
                <tr>
                  <td>End to End Catalog Handling</td>
                  <td>Garments</td>
                  <td>build your own</td>
                  <td>about us</td>
                </tr>
                <tr>
                  <td>Meta Models</td>
                  <td>Products</td>
                  <td>packs</td>
                  <td>blog</td>
                </tr>
                <tr>
                  <td>Packshot</td>
                  <td>Utility Apparel</td>
                  <td>become preferred</td>
                  <td>updates</td>
                </tr>
                <tr>
                  <td>Colourways</td>
                  <td>Wearables</td>
                  <td></td>
                  <td>careers</td>
                </tr>
                <tr>
                  <td>Flix3D</td>
                  <td>jewellery</td>
                  <td></td>
                  <td>ourstudios</td>
                </tr>
                <tr>
                  <td>Creative Images</td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>

                {/* -------------------- */}

                <tr className="table-sec-heading">
                  <th>wherever you sell</th>
                  <th>tools</th>
                  <th>how it works</th>
                  <th>support</th>
                </tr>
                <tr>
                  <td>Amazon</td>
                  <td>Background generation</td>
                  <td>shipping and return policies</td>
                  <td>schedule a call</td>
                </tr>
                <tr>
                  <td>Shopify</td>
                  <td>Imageresizer</td>
                  <td>how to build a shoot</td>
                  <td>contact us</td>
                </tr>
                <tr>
                  <td>Etsy</td>
                  <td>Meta Models</td>
                  <td>reviews</td>
                  <td>help center</td>
                </tr>
                <tr>
                  <td>Instagram</td>
                  <td>see more tools</td>
                  <td>faqs</td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>live demo + QA</td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
          <div className="footer-medium">
            <div className="form">
              <form>
                <label>Subscribe to our emails</label>
                <br />
                <input placeholder="Your email" type="email" />

                <Button
                  text="SIGN UP"
                  className="primaryBtn Button"
                  width="175px"
                />
              </form>
            </div>
          </div>
          <Divider style={{ backgroundColor: "#352C24", height: "1.8px" }} />
          <div className="footer-bottom">
            <div className="bottom-up">
              <div className="left">
                <div className="link-text">press room</div>
                <div className="link-text">terms of use</div>
                <div className="link-text">preferred terms</div>
                <div className="link-text">privacy policy</div>
              </div>
              <div className="right">
                <div className="text">@Flixstudios</div>
                <div className="icon">
                  <img src={icon} alt="icon" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="bottom-down text">® 2023 Flixstock</div>
          </div>
        </div>
      </Footer>
    </>
  );
};
