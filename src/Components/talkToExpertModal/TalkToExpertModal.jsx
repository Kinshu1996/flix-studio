import React, { useContext, useState } from "react";
import "./TalkToExpertModal.scss";
import { Context } from "../../CommonComponents/context/AppContext";
import { Form, Input, InputNumber, Modal, Select } from "antd";
import { Option } from "antd/es/mentions";
import codes from "country-calling-code";
import CountryFlagSvg from "country-list-with-dial-code-and-flag/dist/flag-svg";
import modalGif from "../../assets/images/Model Gif 1.svg";
import { CustomButton as Button } from "../../CommonComponents/button/Button";

const TalkToExpertModal = () => {

    const { isModalOpen, handleOk, handleCancel } =
    useContext(Context);

    const [countryCode, setCountryCode] = useState("US");

    const onFinish = (values) => {
      console.log("Success:", values);
    };
    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const prefixSelector = (
      <Select
        defaultValue="US"
        className="country_select"
        showSearch
        optionFilterProp="children"
        onChange={(e) => setCountryCode(e)}
        filterOption={(input, lab) =>
          lab?.children
            ? (
                lab?.children[lab?.children?.length - 2] +
                lab?.children[lab?.children?.length - 1]
              )?.includes(input) ||
              lab.value.toLocaleLowerCase().includes(input.toLocaleLowerCase())
            : ""
        }
      >
        {codes.map((elm) => (
          <Option key={elm.isoCode2} className="flag_option" value={elm.isoCode2}>
            <img
              alt=""
              width={20}
              height={20}
              src={`data:image/svg+xml;utf8,${encodeURIComponent(
                CountryFlagSvg[elm.isoCode2]
              )}`}
            />{" "}
            +{elm.countryCodes[0]}
          </Option>
        ))}
      </Select>
    );


  return (
    <div>
      <Modal
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="expert-modal"
      >
        <div className="modal-container">
          <div className="modal-gif">
            <img src={modalGif} alt="" />
          </div>
          <div className="modal-right-side-content">
            <div className="model-content">
              <div>
                <div className="title">Talk To An Expert</div>
                <div className="text">
                  Discover how FlixStock can enhance your customer's
                  <br />
                  image experience throughout their buying journey.
                </div>
              </div>
              <div className="form-container">
                <Form
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <div className="row">
                    <div className="col">
                      <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Please input your username!",
                          },
                        ]}
                      >
                        <Input placeholder="John Doe" />
                      </Form.Item>
                    </div>
                    <div className="col">
                      <Form.Item label="Contact Number" name="number">
                        {" "}
                        <InputNumber
                          className="form_inputs"
                          placeholder="989XXXXXX2"
                          controls={false}
                          addonBefore={prefixSelector}
                          min={0}
                          name="number"
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Form.Item
                        label="Business email"
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please input your email!",
                          },
                        ]}
                      >
                        <Input placeholder="John @example.com" />
                      </Form.Item>
                    </div>
                    <div className="col">
                      <Form.Item label="Organization" name="organization">
                        <Input placeholder="Organization" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col">
                      <Form.Item>
                        <Button
                          htmlType="submit"
                          text="Book a Meeting"
                          className="formbtn meeting-btn"
                        />
                      </Form.Item>
                    </div>
                    <div className="col">
                      <Form.Item>
                        <Button
                          text="Request a Call Back"
                          className="formbtn callback-btn"
                        />
                      </Form.Item>
                    </div>
                  </div>
                </Form>
              </div>
              <div className="dismiss" onClick={handleCancel}>
                Dismiss
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default TalkToExpertModal;
