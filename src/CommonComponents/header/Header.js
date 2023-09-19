import { Col, Dropdown, Layout, Menu, Row, Space } from "antd";
import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import arrow1 from "../../assets/images/downarrow-icon.svg";
import arrow2 from "../../assets/images/orange-arrow.svg";
import { CustomButton as Button } from "../button/Button";
import TalkToExpertModal from "../../Components/talkToExpertModal/TalkToExpertModal";

const { Header } = Layout;

const AllProducts = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const items = [
    {
      key: "1",
      label: (
        <a href="#" className="item-text">
          Editing Bots (API’s)
        </a>
      ),
    },
    {
      type: "divider",
    },
    {
      key: "2",
      label: (
        <a href="#" className="item-text">
          Adaptation
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a href="#" className="item-text">
          Flix+
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a href="#" className="item-text">
          Meta Models
        </a>
      ),
    },
    {
      key: "5",
      label: (
        <a href="#" className="item-text">
          Tag scanner
        </a>
      ),
    },
    {
      key: "6",
      label: (
        <a href="#" className="item-text">
          World of Villa
        </a>
      ),
    },
    {
      key: "7",
      label: (
        <a href="#" className="item-text">
          FlixEasy
        </a>
      ),
    },
    {
      key: "8",
      label: (
        <a href="#" className="item-text">
          Scale shot
        </a>
      ),
    },
    {
      key: "9",
      label: (
        <a href="#" className="item-text">
          FlixShoot
        </a>
      ),
    },
    {
      key: "9",
      label: (
        <a href="#" className="item-text">
          Flix360
        </a>
      ),
    },
  ];
  return (
    <Dropdown
      className="all-product-dropdown"
      placement="bottom"
      trigger={["click"]}
      menu={{
        items,
      }}
      visible={openDropdown}
      onVisibleChange={(status) => setOpenDropdown(status)}
    >
      {openDropdown ? (
        <Space className="space" style={{color: "#DE6B32"}}>
          All Products
          <img src={arrow2} alt="arrow-icon" loading="lazy" />
        </Space>
      ) : (
        <Space className="space">
          All Products
          <img src={arrow1} alt="arrow-icon" loading="lazy" />
        </Space>
      )}
     
    </Dropdown>
  );
};

const Services = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <Dropdown
      trigger={["click"]}
      placement="bottom"
      overlay={
        <Menu
          defaultSelectedKeys={["1"]}
          style={{ padding: "2rem 0", width: "741px", height: "444px" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>
                  <span>Catalog Images</span>
                </th>
                <th>
                  <span>Creative Images</span>
                </th>
                <th>
                  <span>Video</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Menu.Item key="1">
                    <span className="item-text">E2E</span>
                  </Menu.Item>
                </td>
                <td>
                  <Menu.Item key="2">
                    <span className="item-text">Flix+</span>
                  </Menu.Item>
                </td>
                <td>
                  <Menu.Item key="3">
                    <span className="item-text">Product 360 video</span>
                  </Menu.Item>
                </td>
              </tr>
              <tr>
                <td>
                  <Menu.Item key="4">
                    <span className="item-text">FlixModels </span>
                  </Menu.Item>
                </td>
                <td></td>
                <td>
                  <Menu.Item key="5">
                    <span className="item-text">Virtual Walk</span>
                  </Menu.Item>
                </td>
              </tr>
              <tr>
                <td>
                  <Menu.Item key="6">
                    <span className="item-text">Flix3D</span>
                  </Menu.Item>
                </td>
                <td></td>
                <td>
                  <Menu.Item key="7">
                    <span className="item-text">Product Explainer Video</span>
                  </Menu.Item>
                </td>
              </tr>
              <tr>
                <td>
                  <Menu.Item key="8">
                    <span className="item-text">Ghost image creation</span>
                  </Menu.Item>
                </td>
                <td></td>
                <td>
                  <Menu.Item key="9">
                    <span className="item-text">Stop Motion</span>
                  </Menu.Item>
                </td>
              </tr>
              <tr>
                <td>
                  <Menu.Item key="10">
                    <span className="item-text">Colour ways</span>
                  </Menu.Item>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <Menu.Item key="11">
                    <span className="item-text">Flaylay</span>
                  </Menu.Item>
                </td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>
                  <Menu.Item key="12">
                    <span className="item-text">Hanger shot</span>
                  </Menu.Item>
                </td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Menu>
        
      }
      visible={openDropdown}
      onVisibleChange={(status) => setOpenDropdown(status)}
    >
      {openDropdown ? (
        <Space className="space" style={{color: "#DE6B32"}}>
          Services
          <img src={arrow2} alt="arrow-icon" loading="lazy" />
        </Space>
      ) : (
        <Space className="space">
          Services
          <img src={arrow1} alt="arrow-icon" loading="lazy" />
        </Space>
      )}
    </Dropdown>
  );
};

const Teams = () => {
  const [activeTeams, setActiveTeams] = useState("0");
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleTeamsActive = (e) => {
    setActiveTeams(e.target.id);
  };
  return (
    <Dropdown
      trigger={["click"]}
      placement="bottom"
      overlay={
        <Menu
          defaultSelectedKeys={["1"]}
          style={{ width: "1059px", height: "386px", margin: "0 6rem" }}
        >
          <div className="teams-header">
            <span
              className={
                activeTeams === "0"
                  ? "active-teams-header-title"
                  : "teams-header-title"
              }
              id={"0"}
              onClick={handleTeamsActive}
            >
              Catalog
            </span>
            <span
              className={
                activeTeams === "1"
                  ? "active-teams-header-title "
                  : "teams-header-title"
              }
              id={"1"}
              onClick={handleTeamsActive}
            >
              Marketing
            </span>
            <span
              className={
                activeTeams === "2"
                  ? "active-teams-header-title"
                  : "teams-header-title"
              }
              id={"2"}
              onClick={handleTeamsActive}
            >
              Creative Team
            </span>
            <span
              className={
                activeTeams === "3"
                  ? "active-teams-header-title"
                  : "teams-header-title"
              }
              id={"3"}
              onClick={handleTeamsActive}
            >
              Listing Team
            </span>
          </div>
          <div className="teams-bottom-section">
            <div className="teams-bottom-container">
              {activeTeams === "0" ? (
                <Row gutter={[48, 16]}>
                  <Col span={8}>
                    <Menu.Item key="1">
                      <span className="team-title">
                        Ship and Sip Coffee-E2E
                      </span>
                    </Menu.Item>
                    <div className="team-text">
                      Send Us Your Product, We'll Handle the <br /> Rest: Wake
                      Up to Stunning Images with <br /> Your Morning Coffee!"
                    </div>
                  </Col>
                  <Col span={8}>
                    <Menu.Item key="2">
                      <span className="team-title">FlixModels </span>
                    </Menu.Item>
                    <div className="team-text">
                      Enhance Your in house Studio Shoots: <br />
                      Choose from 1000+ Meta Models for <br />
                      Your Mannequin-Based Photography!"{" "}
                    </div>
                  </Col>
                  <Col span={8}>
                    <Menu.Item key="3">
                      <span className="team-title">Ghost Image Creation</span>
                    </Menu.Item>
                    <div className="team-text">
                      Transparently Showcase Your Products <br />
                      at Low Catalog Costs: Choose Ghost <br />
                      Image Creation!"{" "}
                    </div>
                  </Col>
                  <Col span={8}>
                    <Menu.Item key="4">
                      <span className="team-title">Color ways</span>
                    </Menu.Item>
                    <div className="team-text">
                      Boost Conversion Chances: Cut Visualisation <br />
                      Time & Display all Product Colours on <br />
                      Models images, Not Just Swatches!{" "}
                    </div>
                  </Col>
                  <Col span={8}>
                    <Menu.Item key="5">
                      <span className="team-title">Virtual Walk</span>
                    </Menu.Item>
                    <div className="team-text">
                      Elevate Buyer Experience: Utilize Virtual <br />
                      Walk to Showcase Fit, Fall, Length, Weight <br />& Garment
                      Characteristics!
                    </div>
                  </Col>
                  <Col span={8}>
                    <Menu.Item key="3">
                      <span className="team-title">360 Product Video</span>
                    </Menu.Item>
                    <div className="team-text">
                      Product videos has better engagement <br />
                      compared to images. Use product video <br />
                      as versatile marketing content.
                    </div>
                  </Col>
                </Row>
              ) : activeTeams === "1" ? (
                <Row gutter={[48, 16]}>
                  <Col span={8}>
                    <Menu.Item key="1">
                      <span className="team-title">
                        Website Banner Creation - Flix+{" "}
                      </span>
                    </Menu.Item>
                    <div className="team-text">
                      Elevate Your website Imagery: Transform <br /> White
                      Background product images into <br /> Website Banners
                      worthy images!
                    </div>
                  </Col>
                  <Col span={8}>
                    <Menu.Item key="2">
                      <span className="team-title">
                        Product Explainer video Flix3D{" "}
                      </span>
                    </Menu.Item>
                    <div className="team-text">
                      Empower Sales with Explainer Videos: <br />
                      Let Your Products Speak Clearly & Boost <br />
                      Complex Product Sales!
                    </div>
                  </Col>
                  <Col span={8}>
                    <Menu.Item key="3">
                      <span className="team-title">
                        Campaign specific creatives
                      </span>
                    </Menu.Item>
                    <div className="team-text">
                      Cost-Efficient Campaign Shoots: Use <br />
                      Flix+ to Generate Custom Shoots from <br />
                      Your Office for Any Campaign!
                    </div>
                  </Col>
                  <Col span={8}>
                    <Menu.Item key="4">
                      <span className="team-title">Instagram Creatives</span>
                    </Menu.Item>
                    <div className="team-text">
                      Transform Catalog Images: Turn Plain <br /> White
                      Backgrounds into Instagram-
                      <br />
                      Worthy Posts!
                    </div>
                  </Col>
                </Row>
              ) : activeTeams === "2" ? (
                <Row gutter={[48, 16]}>
                  <Col span={8}>
                    <Menu.Item key="1">
                      <span className="team-title">Life style images</span>
                    </Menu.Item>
                    <div className="team-text">
                      Enrich Product Storytelling: Transform E-
                      <br />
                      commerce Imagery into Lifestyle Shots, <br />
                      Enabling Buyers to Visualise Products in <br />
                      Specific Scenarios!
                    </div>
                  </Col>
                  <Col span={8}>
                    <Menu.Item key="2">
                      <span className="team-title">Instagram Creatives </span>
                    </Menu.Item>
                    <div className="team-text">
                      Instagram creatives creation made <br />
                      easy. Turn Plain White Backgrounds into <br />
                      Instagram-Worthy Posts!
                    </div>
                  </Col>
                  <Col span={8}>
                    <Menu.Item key="3">
                      <span className="team-title">
                        Outdoor content creation from home
                      </span>
                    </Menu.Item>
                    <div className="team-text">
                      Simplify Outdoor Product Photography: <br />
                      Generate Images in Any Location from <br />
                      the Comfort of Your Home!
                    </div>
                  </Col>
                </Row>
              ) : (
                <Row gutter={[48, 16]}>
                  <Col span={8}>
                    <Menu.Item key="1">
                      <span className="team-title">
                        Ship and Sip Coffee-E2E
                      </span>
                    </Menu.Item>
                    <div className="team-text">
                      "Garment Tag Scanner: AI-Enabled,
                      <br /> Copy Product Attributes from garment <br /> tag in
                      a Giffy, No More Manual Entries for <br />
                      product listing csv!"
                    </div>
                  </Col>
                </Row>
              )}
            </div>
          </div>
        </Menu>
      }
      visible={openDropdown}
      onVisibleChange={(status) => setOpenDropdown(status)}
    >
      {openDropdown ? (
        <Space className="space" style={{color: "#DE6B32"}}>
          Teams
          <img src={arrow2} alt="arrow-icon" loading="lazy" />
        </Space>
      ) : (
        <Space className="space">
          Teams
          <img src={arrow1} alt="arrow-icon" loading="lazy" />
        </Space>
      )}
    </Dropdown>
  );
};

const Company = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const items = [];
  return (
    <Dropdown
      trigger={["click"]}
      menu={{
        items,
      }}
      visible={openDropdown}
      onVisibleChange={(status) => setOpenDropdown(status)}
    >
       {openDropdown ? (
        <Space className="space" style={{color: "#DE6B32"}}>
          Company
          <img src={arrow2} alt="arrow-icon" loading="lazy" />
        </Space>
      ) : (
        <Space className="space">
          Company
          <img src={arrow1} alt="arrow-icon" loading="lazy" />
        </Space>
      )}
    </Dropdown>
  );
};

export const CustomHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [active, setActive] = useState("1");

  const handleActive = (e) => {
    setActive(e.target.id);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  

  return (
    <Header
      className="header-section"
    >
      <div className="top-header">
        <div className="top-header-container">
          <span
            className={active === "0" ? "active" : "top-header-text"}
            id={"0"}
            onClick={handleActive}
          >
            FlixStock
          </span>
          <span style={{ color: "#a8a8a8" }}>|</span>
          <span
            className={active === "1" ? "active" : "top-header-text"}
            id={"1"}
            onClick={handleActive}
          >
            FlixStudio
          </span>
          <span style={{ color: "#a8a8a8" }}>|</span>
          <span
            className={active === "2" ? "active" : "top-header-text"}
            id={"2"}
            onClick={handleActive}
          >
            ImageEdit.ai
          </span>
        </div>
      </div>
      <div className="bottom-header">
        <div className="bottom-header-container">
          <div className="logo">
            <img src={logo} alt="logo" loading="lazy" />
          </div>
          <div className="logo-right-side">
            <AllProducts />
            <Services />
            <Teams />
            <Company />
            <Button
              className="primaryBtn Button"
              text="Talk to an expert"
              width="174px"
              onClick={showModal}
            />
            <TalkToExpertModal isModalOpen={isModalOpen} handleCancel={handleCancel} />
          </div>
        </div>
      </div>
    </Header>
  );
};
