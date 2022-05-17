import React, { useState } from 'react';
import {
  Input,
  Button,
  Form,
  Select,
  Row,
  Col,
  DatePicker,
  Checkbox,
  Image,
  Card,
  Divider,
  Space,
  Modal,
  Typography,
  Radio,
  Popover,
  Dropdown,
  //  Menu
} from 'antd';
import style from './index.less';

import happyface from '../KTPHhomescreenNewVersion/images/happyface.png';
import infectiousdisease from '../KTPHhomescreenNewVersion/images/infectiousdiseaselogo1.png';

import chestpain from '../NHGPhomescreen/images/chestpain.jpeg';
import breathlessness from '../NHGPhomescreen/images/Breathlessness.jpeg';
import epos_antibioticsprogram_Y from '../NHGPhomescreen/icon/epos_antibioticsprogram_Y.png';
import epos_chas_Y from '../NHGPhomescreen/icon/epos_chas_AMBER.png';
import epos_medifund_Y from '../NHGPhomescreen/icon/epos_medifund_Y.png';
import epos_PG_Y from '../NHGPhomescreen/icon/epos_PG_Y.png';
import epos_infectiousdiseases_Y from '../NHGPhomescreen/icon/epos_infectiousdiseases_Y.png';
import epos_tlc_Y from '../NHGPhomescreen/icon/epos_tlc_Y.png';
import epos_immunosupressed_Y from '../NHGPhomescreen/icon/epos_immunosupressed_Y.png';
import epos_cancer_Y from '../NHGPhomescreen/icon/cancer.png';
import warningicon from './warningicon.jpeg';
import epos_anticoagulants_Y from '../NHGPhomescreen/icon/anti-coagulants.png';
import epos_bisphosphonatetherapy_Y from '../NHGPhomescreen/icon/bisphosphonatetherapy.png';
import epos_otherfinancalassistance_Y from '../NHGPhomescreen/icon/otherfinancalassistance.png';
import epos_safcoverage_Y from '../NHGPhomescreen/icon/SAFcoverage.png';
import epos_outstandingpayment_Y from '../NHGPhomescreen/icon/outstandingpayment.png';
import Bottom from '../Bottom';
import signaturepregnancy from '../KTPHhomescreenNewVersion/images/signaturepregnancy.png';
import { EditOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const PatientAlertTitle = <span>Patient Alert</span>;
const DialogTitle = <span>Dialog</span>;

const KTPHhomescreenNewVersion: React.FC = () => {
  let isToggledOn = true;
  const [fall, setClass1] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const [pregnantModalVisible, setPregnantModalVisible] = useState(false);
  const [pregnantHistoryModalVisible, setPregnantHistoryModalVisible] =
    useState(false);
  const [isPregnantConsentSigned, setIsPregnantConsentSigned] = useState(false);

  const [iscolour, setiscolour] = useState(false);
  const [EDDDate, setEDDDateVisible] = useState(true);
  const [Signature, setSignatureVisible] = useState(true);
  const [patientAlertModalVisible, setPatientAlertModalVisible] =
    useState(false);

  const [isBisphosnateClick, setIsBisphosnateClick] = useState(false);
  const [isRadiotherapyClick, setIsRadiotherapyClick] = useState(false);
  const [isAntiCoagulantClick, setIsAntiCoagulantClick] = useState(false);
  const [isPregnancyClick, setIsPregnancyClick] = useState(false);
  const [pregnantSignModalVisible, setPregnantSignModalVisible] =
    useState(false);
  const handleBtnClick1 = () => {
    setClass1((pre) => !pre);
  };

  const [explain, setClass2] = useState<string>('defualt');
  const handleBtnClick2 = () => {
    setClass2('breathlessness');
  };
  const handleBtnClick3 = () => {
    setClass2('chestpain');
  };

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const showModal2 = () => {
    setIsModalVisible2(true);
  };
  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  const showwEDD = () => {
    setEDDDateVisible(false);
    setSignatureVisible(true);
  };

  const noshowwEDD = () => {
    setEDDDateVisible(true);
    setSignatureVisible(false);
  };
  const divStyle = { color: 'blue' };

  function togglefunction() {
    // if (true) {
    //   setIsBisphosnateClick(true);
    // } else {
    //   setIsBisphosnateClick(false);
    // }
    setIsBisphosnateClick(!isBisphosnateClick);
  }
  function togglefunction2() {
    setIsRadiotherapyClick(!isRadiotherapyClick);
  }
  function togglefunction3() {
    setIsAntiCoagulantClick(!isAntiCoagulantClick);
  }
  function togglefunction4() {
    setIsPregnancyClick(!isPregnancyClick);
  }
  const contentPatientAlert = (
    <div>
      <TextArea style={{ width: '100%', height: 250 }}></TextArea>
    </div>
  );

  const contentDialog = (
    <div>
      <Row>
        <Col>
          <button>Clear</button>
        </Col>
        <pre> </pre>
        <Col>
          <button>Save</button>
        </Col>
        <pre> </pre>
        <Col>
          <button>Delete</button>
        </Col>
        <Row></Row>
      </Row>

      <Row gutter={{ sm: 8 }}>
        <Col>
          <TextArea style={{ width: 700, height: 200 }}></TextArea>
        </Col>
      </Row>

      <Row style={{ marginBottom: 50 }}></Row>

      <Text>Saved on 7/Jan/2021 17:08 </Text>

      <p />
    </div>
  );

  // const menu = (
  //   <Menu>
  //     <Menu.Item key="10"></Menu.Item>
  //   </Menu>
  // );

  return (
    <div className={style.KTPHhome}>
      <Row gutter={{ sm: 8 }}>
        <Col span={10}>
          <Divider orientation="left" style={{ borderColor: 'black' }}>
            {/* Personal Details */}
          </Divider>
          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 100 }}
            layout="horizontal"
          >
            <Form.Item
              label="NRIC/FIN"
              name="NRIC/FIN"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Row>
                <Input style={{ width: '55%' }} />
                <pre> </pre>
                <Button
                  htmlType="submit"
                  style={{ width: '21%', borderColor: 'black' }}
                >
                  <strong>Verify</strong>
                </Button>
                <pre> </pre>
                <Button
                  // type="primary"
                  htmlType="submit"
                  style={{ width: '21%', borderColor: 'black' }}
                >
                  <strong>Label</strong>
                </Button>
              </Row>
            </Form.Item>
          </Form>

          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 100 }}
            layout="horizontal"
          >
            <Form.Item
              label="UIN"
              name="UIN"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Row>
                <Input style={{ width: '55%' }} />
                <pre> </pre>

                {/* <Input style={{ width: '10%' }} placeholder="Lab" />
                <pre> </pre> */}

                <Button
                  // type="primary"
                  htmlType="submit"
                  style={{ width: '21%', borderColor: 'black' }}
                >
                  <strong>Generate</strong>
                </Button>
                <pre> </pre>
                <Button
                  // type="primary"
                  htmlType="submit"
                  style={{ width: '21%', borderColor: 'black' }}
                >
                  <strong>UIN Label</strong>
                </Button>
              </Row>
            </Form.Item>
          </Form>

          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 200 }}
            layout="horizontal"
          >
            {/* <Form.Item
              label="Old NRIC/FIN"
              name="OldNRIC/FIN"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Input />
            </Form.Item> */}
            <Form.Item
              label={<p style={{ fontSize: 15 }}>Name</p>}
              name="Name"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Input />
            </Form.Item>

            {/* <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}> */}
            {/* <Col span={12}> */}
            {/* <Form.Item
                  label="Gender"
                  name="Gender"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <Select defaultValue="Select one" style={{ width: '30%' }}>
                    <Option value="Male">M</Option>
                    <Option value="Female">F</Option>
                  </Select>
                </Form.Item> */}
            {/* </Col> */}

            {/* <Col span={12}>
                <Form.Item label="Document Type" name="DocumentType">
                  <Select defaultValue="Select one" style={{ width: '49%' }}>
                    <Option value="SC">SC</Option>
                    <Option value="PR">PR</Option>
                    <Option value="Non-residence">Non-residence</Option>
                    <Option value="PG">PG</Option>
                    <Option value="MG">MG</Option>
                  </Select>
                  <span> </span>
                  <Input style={{ width: '49%' }} placeholder="CHAS"></Input>
                </Form.Item>
              </Col> */}
            {/* </Row> */}

            {/* <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}> */}
            {/* <Col span={12}> */}

            <Form.Item
              label="Gender"
              name="Gender"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Row>
                <Col span={15}>
                  <Select defaultValue="Select one" style={{ width: '40%' }}>
                    <Option value="Male">M</Option>
                    <Option value="Female">F</Option>
                  </Select>
                </Col>

                <Col span={9}>
                  <Form.Item
                    label="Document Type"
                    // name="DocumentType"
                    // labelCol={{ span: 6 }}
                    // style={{ width: '65%' }}
                    // labelAlign={'left'}
                  >
                    <Select defaultValue="PG" style={{ width: '100%' }}>
                      <Option value="Non-residence">NR</Option>
                      <Option value="SC">SC</Option>
                      <Option value="PR">PR</Option>
                      <Option value="MG">MG</Option>
                      <Option value="PG">PG</Option>
                    </Select>
                  </Form.Item>
                </Col>

                {/* <Form.Item
                  label="CHAS"
                  name="CHAS"
                  labelCol={{ span: 15 }}
                  style={{ width: '65%' }}
                 // labelAlign={'left'}
                >
                  <Select defaultValue="Select one" style={{ width: '100%' }}>
                    <Option value="NIL">NIL</Option>
                    <Option value="Blue">Blue</Option>
                    <Option value="Orange">Orange</Option>
                  </Select>
                </Form.Item> */}

                {/* <Form.Item
  label="Document Type"
  name="DocumentType"
  labelCol={{ span: 6 }}
  style={{ width: '65%' }}
  labelAlign={'left'}
>
  <Select defaultValue="Select one" style={{ width: '50%' }}>
    <Option value="SC">SC</Option>
    <Option value="PR">PR</Option>
    <Option value="Non-residence">Non-residence</Option>
    <Option value="PG">PG</Option>
    <Option value="MG">MG</Option>
  </Select>
</Form.Item> */}
              </Row>
            </Form.Item>

            <Form.Item
              label="Date of Birth"
              name="Dateofbirth"
              // labelCol={{ span: 8 }}
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Row>
                <Col span={15}>
                  <DatePicker style={{ width: '40%' }}></DatePicker>
                </Col>

                {/* <DatePicker style={{ width: '30%' }}></DatePicker> */}
                {/* </Form.Item> */}
                {/* </Col> */}

                {/* <Col span={10}> */}

                <Col span={9}>
                  <Form.Item
                    label="CHAS Status"
                    name="CHAS"
                    labelCol={{ span: 9 }}
                    //style={{ width: '65%' }}
                    labelAlign={'left'}
                  >
                    <Select defaultValue="Orange" style={{ width: '100%' }}>
                      <Option value="NIL">NIL</Option>
                      <Option value="Blue">Green</Option>
                      <Option value="Orange">Orange</Option>
                      <Option value="Blue">Blue</Option>
                    </Select>
                  </Form.Item>
                </Col>

                {/* <Form.Item
  label="Document Type"
  name="DocumentType"
  labelCol={{ span: 6 }}
  //style={{ width: '65%' }}
  //labelAlign={'left'}
>
  <Select defaultValue="Select one" style={{ width: '50%' }}>
    <Option value="SC">SC</Option>
    <Option value="PR">PR</Option>
    <Option value="Non-residence">Non-residence</Option>
    <Option value="PG">PG</Option>
    <Option value="MG">MG</Option>
  </Select>
</Form.Item> */}
              </Row>

              {/* <Form.Item
                  label="Document Type"
                  name="DocumentType"
                 labelCol={{ span: 6 }}
                // style={{ width: '100%' }}
                // labelAlign={'right'}
                >
                  <Select defaultValue="Select one" >
                    <Option value="SC">SC</Option>
                    <Option value="PR">PR</Option>
                    <Option value="Non-residence">Non-residence</Option>
                    <Option value="PG">PG</Option>
                    <Option value="MG">MG</Option>
                  </Select>
                </Form.Item> */}
              {/* <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: '30%' }}
                  onClick={showModal}
                  className={fall ? style.fallrish : style.nonfallrisk}
                >
                  Financial Assistance
                </Button> */}
              {/* <Modal
                  title="Financial"
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                  width={600}
                  style={{ fontSize: 20 }}
                >
                  <Card>
                    <Row>
                      <Col span={2}>
                        <button>Edit</button>
                      </Col>
                      <pre> </pre>
                      <Col>
                        <button>Save</button>
                      </Col>
                      <pre> </pre>
                      <Col>
                        <button>Delete</button>
                      </Col>
                      <Row></Row>
                    </Row>

                    <Row gutter={{ sm: 8 }}>
                      <Col span={10}>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 100 }}
                          layout="horizontal"
                        >
                          <Form.Item
                            label="Card Type"
                            name="cardType"
                            labelCol={{ span: 4 }}
                            labelAlign={'left'}
                            style={{ width: '500px' }}
                          >
                            <Select
                              defaultValue="TTSH"
                              style={{ width: '80%' }}
                            >
                              <Option value="TTHS">TTHS</Option>
                              <Option value="KTPH">KTPH</Option>
                            </Select>
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>

                    <Row gutter={{ sm: 8 }}>
                      <Col span={10}>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 100 }}
                          layout="horizontal"
                        >
                          <Form.Item
                            label="Issue Date"
                            name="issueDate"
                            labelCol={{ span: 4 }}
                            labelAlign={'left'}
                            style={{ width: '500px' }}
                          >
                            <DatePicker style={{ width: '80%' }}></DatePicker>
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>

                    <Row gutter={{ sm: 8 }}>
                      <Col span={10}>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 100 }}
                          layout="horizontal"
                        >
                          <Form.Item
                            label="Expiry Date"
                            name="expiryDate"
                            labelCol={{ span: 4 }}
                            labelAlign={'left'}
                            style={{ width: '500px' }}
                          >
                            <DatePicker style={{ width: '80%' }}></DatePicker>
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>

                    <Row gutter={{ sm: 8 }}>
                      <Col span={10}>
                        <Form
                          labelCol={{ span: 0 }}
                          wrapperCol={{ span: 100 }}
                          layout="horizontal"
                        >
                          <Form.Item
                            label="Remarks"
                            name="remarks"
                            labelCol={{ span: 4 }}
                            labelAlign={'left'}
                            style={{ width: '500px' }}
                          >
                            <TextArea style={{ width: '80%' }}></TextArea>
                          </Form.Item>
                        </Form>
                      </Col>
                    </Row>

                    <Row style={{ marginBottom: 80 }}></Row>

                    <Text>Updated By : Elaine - 7/Jan/2021 17:08 </Text>

                    <p />
                  </Card>
                </Modal> */}
            </Form.Item>

            {/*<Form.Item label="Document Type" name="DocumentType">
                  <Select defaultValue="Select one" style={{ width: '49%' }}>
                    <Option value="P">P</Option>
                  </Select>
                  <span> </span>
                  <Input style={{ width: '49%' }} placeholder='PG'></Input>
                </Form.Item>*/}
            {/* </Col> */}
            {/* </Row> */}

            <Form.Item
              label="Nationality"
              name="Nationality"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Row>
                <Col span={15}>
                  {/* <Input style={{ width: '30%' }} /> */}
                  <Select defaultValue="Select one" style={{ width: '40%' }}>
                    <Option value="SC">Singaporean</Option>
                    <Option value="PR">Malaysian</Option>
                    <Option value="PR">Indonesian</Option>
                  </Select>
                </Col>

                <Col span={6}>
                  <Button
                    //  type="primary"
                    // htmlType="submit"
                    style={{
                      width: '150%',
                      backgroundColor: '#BADEEE',
                      borderColor: 'black',
                    }}
                    onClick={showModal}

                    // className={fall ? style.fallrish : style.nonfallrisk}
                  >
                    <strong>Financial Assistance</strong>
                  </Button>
                  <Modal
                    title="Financial"
                    visible={isModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={800}
                    style={{ fontSize: 20 }}
                  >
                    <Card>
                      <Row>
                        <Col>
                          <button>Edit</button>
                        </Col>
                        <pre> </pre>
                        <Col>
                          <button>Save</button>
                        </Col>
                        <pre> </pre>
                        <Col>
                          <button>Delete</button>
                        </Col>
                        <Row></Row>
                      </Row>

                      <Row gutter={{ sm: 8 }}>
                        <Col span={10}>
                          <Form
                            labelCol={{ span: 0 }}
                            wrapperCol={{ span: 100 }}
                            layout="horizontal"
                          >
                            <Form.Item
                              label="Card Type"
                              name="cardType"
                              labelCol={{ span: 4 }}
                              labelAlign={'left'}
                              style={{ width: '500px' }}
                            >
                              <Select
                                defaultValue="PA"
                                style={{ width: '80%' }}
                              >
                                <Option value="KTPH">MFEC</Option>
                                <Option value="TTHS">PA</Option>
                                <Option value="KTPH">KTPH Medifund</Option>
                                <Option value="KTPH">SMTA</Option>
                              </Select>
                            </Form.Item>
                          </Form>
                        </Col>
                      </Row>

                      <Row gutter={{ sm: 8 }}>
                        <Col span={10}>
                          <Form
                            labelCol={{ span: 0 }}
                            wrapperCol={{ span: 100 }}
                            layout="horizontal"
                          >
                            <Form.Item
                              label="Issue Date"
                              name="issueDate"
                              labelCol={{ span: 4 }}
                              labelAlign={'left'}
                              style={{ width: '500px' }}
                            >
                              <DatePicker style={{ width: '80%' }}></DatePicker>
                            </Form.Item>
                          </Form>
                        </Col>
                      </Row>

                      <Row gutter={{ sm: 8 }}>
                        <Col span={10}>
                          <Form
                            labelCol={{ span: 0 }}
                            wrapperCol={{ span: 100 }}
                            layout="horizontal"
                          >
                            <Form.Item
                              label="Expiry Date"
                              name="expiryDate"
                              labelCol={{ span: 4 }}
                              labelAlign={'left'}
                              style={{ width: '500px' }}
                            >
                              <DatePicker style={{ width: '80%' }}></DatePicker>
                            </Form.Item>
                          </Form>
                        </Col>
                      </Row>

                      <Row gutter={{ sm: 8 }}>
                        <Col span={24}>
                          <Form
                            labelCol={{ span: 0 }}
                            wrapperCol={{ span: 100 }}
                            layout="horizontal"
                          >
                            <Form.Item
                              label="Remarks"
                              name="remarks"
                              labelCol={{ span: 3 }}
                              labelAlign={'left'}
                              //  style={{ width: '500px' }}
                            >
                              <TextArea
                                style={{ width: '100%', height: 250 }}
                              ></TextArea>
                            </Form.Item>
                          </Form>
                        </Col>
                      </Row>

                      <Row style={{ marginBottom: 50 }}></Row>

                      <Text>Updated By : Elaine - 7/Jan/2021 17:08 </Text>

                      <p />
                    </Card>
                  </Modal>
                </Col>
              </Row>
            </Form.Item>

            {/* <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
            <Col span={12}> */}

            {/* <Form.Item
              label="Document Type"
              name="DocumentType"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            > */}
            {/* <Select defaultValue="Select one" style={{ width: '30%' }}>
                <Option value="SC">SC</Option>
                <Option value="PR">PR</Option>
                <Option value="Non-residence">Non-residence</Option>
                <Option value="PG">PG</Option>
                <Option value="MG">MG</Option>
              </Select> */}
            {/* <span> </span>
                  <Input style={{ width: '49%' }} placeholder="CHAS"></Input> */}
            {/* </Form.Item> */}
            {/* </Col> */}

            {/* <Form.Item
              label="CHAS"
              name="CHAS"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Select defaultValue="Select one" style={{ width: '30%' }}>
                <Option value="NIL">NIL</Option>
                <Option value="Blue">Blue</Option>
                <Option value="Orange">Orange</Option>
              </Select>
            </Form.Item> */}

            {/* <Row>
                  <Col span={14}> */}
            {/*  */}
            {/* </Col> */}
            {/* <Col span={6}> */}

            {/* </Col>
                </Row> */}

            {/* </Row> */}

            <Form.Item
              label="Language"
              name="PatientLanguage"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Form.Item name="languageFromSAP">
                {/* <Row>
                 <Col span={7}> */}
                <Row>
                  <Select style={{ width: '25%' }}>
                    <Option value="English">English</Option>
                    <Option value="Chinese">Chinese</Option>
                    <Option value="Malay">Malay</Option>
                    <Option value="Tamil">Tamil</Option>
                    <Option value="Others">Others</Option>
                  </Select>
                  {/* </Col> */}

                  <pre> </pre>

                  {/* <Col span={8}> */}
                  <Select style={{ width: '25%' }}>
                    <Option value="English">English</Option>
                    <Option value="Chinese">Chinese</Option>
                    <Option value="Malay">Malay</Option>
                    <Option value="Tamil">Tamil</Option>
                    <Option value="Others">Others</Option>
                  </Select>
                </Row>
                {/* </Col>
                </Row> */}
              </Form.Item>

              {/* <Form.Item name="languageFromUI">
                <Select style={{ width: '40%' }}>
                  <Option value="English">English</Option>
                  <Option value="Chinese">Chinese</Option>
                  <Option value="Malay">Malay</Option>
                  <Option value="Tamil">Tamil</Option>
                  <Option value="Others">Others</Option>
                </Select>
              </Form.Item> */}
            </Form.Item>

            <Form.Item
              label="Referral Source"
              name="ReferralSource"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Row>
                <Select defaultValue="TTSH" style={{ width: '25%' }}>
                  <Option value="TTHS">TTHS</Option>
                  <Option value="KTPH">KTPH</Option>
                </Select>

                {/* <pre> </pre>

                <Form.Item
                  label="Document Type"
                  name="DocumentType"
                  labelCol={{ span: 6 }}
                  style={{ width: '65%' }}
                  labelAlign={'left'}
                >
                  <Select defaultValue="Select one" style={{ width: '50%' }}>
                    <Option value="SC">SC</Option>
                    <Option value="PR">PR</Option>
                    <Option value="Non-residence">Non-residence</Option>
                    <Option value="PG">PG</Option>
                    <Option value="MG">MG</Option>
                  </Select>
                </Form.Item> */}
              </Row>
            </Form.Item>

            <Divider orientation="left" style={{ borderColor: 'black' }}>
              {/* Contact Details */}
            </Divider>

            <Form.Item
              label="Home no"
              name="Homenumber"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Office no"
              name="Officenumber"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Handphone no"
              name="Hpnumber"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Row>
                <Input style={{ width: '80%' }} />
                <pre> </pre>
                <Button
                  htmlType="submit"
                  style={{ borderColor: 'black', width: '18%' }}
                >
                  <strong>SMS</strong>
                </Button>
              </Row>
            </Form.Item>
            <Form.Item
              label="Email"
              name="Email"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Input />
            </Form.Item>
            {/* <Form.Item
              label="Nationality"
              name="Nationality"
              labelCol={{ span: 4 }}
              labelAlign={'left'}
            >
              <Input />
            </Form.Item> */}
          </Form>
          <Row>
            <Col span={4}>
              <p>Address:</p>
            </Col>
            <Col span={20}>
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="vertical"
              >
                <Row gutter={{ xs: 2 }}>
                  <Col span={8}>
                    <Form.Item label="Building No" name="Buildingnumber">
                      <Input style={{ width: '96%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Floor" name="Floor">
                      <Input style={{ width: '96%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Unit" name="Unit">
                      <Input style={{ width: '100%' }} />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item label="Street" name="Street">
                  <Input />
                </Form.Item>
                <Row gutter={{ xs: 2 }}>
                  <Col span={8}>
                    <Form.Item label="Postal Code" name="Postalcode">
                      <Input style={{ width: '96%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Country" name="Country">
                      <Input style={{ width: '90%' }} />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 200 }}
            layout="horizontal"
          >
            <Divider
              orientation="left"
              style={{ borderColor: 'black' }}
            ></Divider>

            {/* <Row>
              <Col span={20}></Col>

              <Col span={3}>
            <Button htmlType="submit" style={{ width: '130%' }}>
                  Refresh CMIS
                </Button>

                </Col>
            </Row> */}

            <Form.Item

            // labelCol={{ span: 4 }}
            // labelAlign={'right'}
            >
              <Col offset={20}>
                <Button
                  htmlType="submit"
                  style={{ width: '100%', borderColor: 'black' }}
                >
                  <strong>Refresh CMIS</strong>
                </Button>
              </Col>
            </Form.Item>

            <Row gutter={{ xs: 4, sm: 8 }}>
              <Col span={24}>
                {/* <Row>
                  <Col span={14}>
                    <Form.Item
                      label="Referral Source"
                      name="ReferralSource"
                      labelCol={{ span: 7 }}
                      labelAlign={'left'}
                    >
                      <Select defaultValue="TTSH" style={{ width: '90%' }}>
                        <Option value="TTHS">TTHS</Option>
                        <Option value="KTPH">KTPH</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                    <Button
                      htmlType="submit"
                      style={{ width: '100%' }}
                    >
                      Refresh CMIS
                    </Button>
                  </Col>
                </Row> */}
                <Form.Item
                  label="Allergy"
                  name="Allergy"
                  labelCol={{ span: 4 }}
                  labelAlign={'left'}
                >
                  <TextArea style={{ width: '100%', height: 150 }} />
                </Form.Item>

                <Row>
                  <Col span={4}>
                    <Text>Travel / Medical Alert :</Text>

                    {/*<Form.Item
                  label="Travel / Medical Alert"
                  name="MedicalAlert"
                  labelCol={{ span: 24 }}
                  labelAlign={'left'}
                  
                >
                
                 
                {/*<TextArea style={{height:200}}></TextArea> */}

                    {/*</Form.Item>*/}

                    <pre></pre>

                    <pre></pre>
                    <pre></pre>
                    <pre></pre>
                    <pre></pre>
                    <pre></pre>
                    <pre></pre>
                    <pre></pre>
                    <pre></pre>
                    <pre></pre>
                    <pre></pre>

                    {/* <Space direction="vertical">
                      <Popover
                        placement="rightBottom"
                        title={PatientAlertTitle}
                        content={contentPatientAlert}
                        trigger="click"
                        overlayStyle={{ width: '30%' }}
                      >
                        <Button
                          style={{ width: 120 }}
                          className={fall ? style.fallrish : style.nonfallrisk}
                          type="ghost"
                          // danger
                          htmlType="submit"

                          // onClick={() => {
                          //    setPatientAlertModalVisible(true);
                          // }}
                        >
                          Patient Alert
                        </Button>
                      </Popover>

                      <Popover
                        placement="rightBottom"
                        title={DialogTitle}
                        content={contentDialog}
                        trigger="click"
                        overlayStyle={{ width: '30%' }}
                      >
                        <Button
                          style={{ width: 120 }}
                          // type="primary"
                          htmlType="submit"
                          // onClick={showModal2}
                        >
                          Dialog
                        </Button>
                      </Popover>
                    </Space> */}

                    {/* <Modal
                      title="Dialog"
                      visible={isModalVisible2}
                      onOk={handleOk2}
                      onCancel={handleCancel2}
                      width={500}
                      bodyStyle={{ height: 300 }}
                      style={{ fontSize: 20, left: -500, top: 720 }}
                    >
                      <Row>
                        <Col>
                          <button>Clear</button>
                        </Col>
                        <pre> </pre>
                        <Col>
                          <button>Save</button>
                        </Col>
                        <pre> </pre>
                        <Col>
                          <button>Delete</button>
                        </Col>
                        <Row></Row>
                      </Row>

                      <Row gutter={{ sm: 8 }}>
                        <Col>
                          <TextArea
                            style={{ width: 700, height: 100 }}
                          ></TextArea>
                        </Col>
                      </Row>

                      <Row style={{ marginBottom: 80 }}></Row>

                      <Text>Saved on 7/Jan/2021 17:08 </Text>

                      <p />
                    </Modal> */}

                    {/* <Modal
                      visible={patientAlertModalVisible}
                      title="Patient Alert"
                      onOk={() => {
                        setPatientAlertModalVisible(false);
                      }}
                      width={500}
                      bodyStyle={{ height: 300 }}
                      style={{ fontSize: 20, left: -500, top: 720 }}
                    >
                      Paitent alert content here ...
                    </Modal> */}
                  </Col>

                  <Col span={20}>
                    <TextArea style={{ height: 360 }}></TextArea>
                  </Col>
                </Row>

                <pre></pre>
              </Col>
            </Row>

            <Row>
              <Col span={20}></Col>
              <Col span={3}>
                <Space direction="vertical">
                  <Popover
                    placement="leftBottom"
                    title={PatientAlertTitle}
                    content={contentPatientAlert}
                    trigger="click"
                    overlayStyle={{ width: '30%' }}
                  >
                    <Button
                      style={{
                        width: 150,
                        backgroundColor: '#7FFF00',
                        borderColor: 'black',
                      }}
                      // className={fall ? style.fallrish : style.nonfallrisk}
                      //className={fall ? '#7FFF00' : style.nonfallrisk}
                      type="ghost"
                      // danger
                      htmlType="submit"

                      // onClick={() => {
                      //    setPatientAlertModalVisible(true);
                      // }}
                    >
                      <strong>Patient Alert</strong>
                    </Button>
                  </Popover>

                  <Popover
                    placement="leftBottom"
                    title={DialogTitle}
                    content={contentDialog}
                    trigger="click"
                    overlayStyle={{ width: '30%' }}
                  >
                    <Button
                      style={{ width: 150, borderColor: 'black' }}
                      // type="primary"
                      htmlType="submit"

                      // onClick={showModal2}
                    >
                      <strong>Dialog</strong>
                    </Button>
                  </Popover>
                </Space>
              </Col>
            </Row>
            <Divider style={{ borderColor: 'black' }}></Divider>

            {/* <Row gutter={{ xs: 4, sm: 8 }}>
              <Col span={4}>
                <Space direction="vertical">
                  <Button
                    style={{ width: 120 }}
                    className={fall ? style.fallrish : style.nonfallrisk}
                    type="ghost"
                    // danger
                    htmlType="submit"
                    onClick={() => {
                      togglefunction();
                    }}
                  >
                    Patient Alert
                  </Button>

                  <Button
                    style={{ width: 120 }}
                    // type="primary"
                    htmlType="submit"
                    onClick={showModal2}
                  >
                    Dialog
                  </Button>
                </Space>
              </Col> */}

            {/* <Col span={20}>
                <TextArea
                  style={{ height: 150 }}
                  hidden={patientAlertModalVisible}
                ></TextArea>
              </Col> */}
            {/* </Row> */}

            <Form.Item>
              {/* <Button htmlType="submit">New/Retrieve Patient</Button>
           
            <span> </span>
              <Button
                //type="primary"
                // style={{ background: 'orange', border: 'orange' }}
                htmlType="submit"
              >
                Examine
              </Button>

              <span> </span>
          
              <Button htmlType="submit">Search Patient</Button>
         
             <pre> </pre>
              
              <Button 
                htmlType="submit"
                style={{ width: '10%', background: 'orange' }}
              >
                Audit
              </Button>
               */}

              <Row>
                <Col span={6}>
                  <Button
                    htmlType="submit"
                    style={{
                      fontSize: 18,
                      height: 40,
                      width: '100%',
                      backgroundColor: '#BADEEE',
                      borderColor: 'black',
                    }}
                  >
                    <strong>New/Retrieve Patient</strong>
                  </Button>
                </Col>
                <pre> </pre>
                <Col span={4}>
                  <Button
                    //type="primary"
                    // style={{ background: 'orange', border: 'orange' }}
                    htmlType="submit"
                    style={{
                      fontSize: 18,
                      height: 40,
                      width: '100%',
                      backgroundColor: '#BADEEE',
                      borderColor: 'black',
                    }}
                  >
                    <strong>Examine</strong>
                  </Button>
                </Col>
                <pre> </pre>
                <Col span={4}>
                  <Button
                    htmlType="submit"
                    style={{
                      fontSize: 18,
                      height: 40,
                      width: '110%',
                      backgroundColor: '#BADEEE',
                      borderColor: 'black',
                    }}
                  >
                    <strong>Search Patient</strong>
                  </Button>
                </Col>
                <pre> </pre>
                <Col span={3} offset={5}>
                  {/* <Button
                    htmlType="submit"
                    style={{ width: '130%', background: 'orange' }}
                  >
                    Audit
                  </Button> */}

                  <Select
                    defaultValue="Audit"
                    style={{ width: '150%', fontSize: 18 }}
                  >
                    <Option value="DA">Document Audit</Option>
                    <Option value="XA">Xray Audit</Option>
                  </Select>
                </Col>
              </Row>
            </Form.Item>
          </Form>
        </Col>
        <Col span={0} />
        {/*<Col span={1}>
          <Space>
            <Col>
            

              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
                onClick={showModal}
              >
                {' '}
                Financial
              </Button>
              <Modal
                title="Financial"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                width={600}
                style={{ fontSize: 20 }}
              >
                <Card>
                  <Row>
                    <Col span={2}>
                      <button>Edit</button>
                    </Col>
                    <pre> </pre>
                    <Col>
                      <button>Save</button>
                    </Col>
                    <pre> </pre>
                    <Col>
                      <button>Delete</button>
                    </Col>
                    <Row></Row>
                  </Row>

                  <Row gutter={{ sm: 8 }}>
                    <Col span={10}>
                      <Form
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 100 }}
                        layout="horizontal"
                      >
                        <Form.Item
                          label="Card Type"
                          name="cardType"
                          labelCol={{ span: 4 }}
                          labelAlign={'left'}
                          style={{ width: '500px' }}
                        >
                          <Select defaultValue="TTSH" style={{ width: '80%' }}>
                            <Option value="TTHS">TTHS</Option>
                            <Option value="KTPH">KTPH</Option>
                          </Select>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>

                  <Row gutter={{ sm: 8 }}>
                    <Col span={10}>
                      <Form
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 100 }}
                        layout="horizontal"
                      >
                        <Form.Item
                          label="Issue Date"
                          name="issueDate"
                          labelCol={{ span: 4 }}
                          labelAlign={'left'}
                          style={{ width: '500px' }}
                        >
                          <DatePicker style={{ width: '80%' }}></DatePicker>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>

                  <Row gutter={{ sm: 8 }}>
                    <Col span={10}>
                      <Form
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 100 }}
                        layout="horizontal"
                      >
                        <Form.Item
                          label="Expiry Date"
                          name="expiryDate"
                          labelCol={{ span: 4 }}
                          labelAlign={'left'}
                          style={{ width: '500px' }}
                        >
                          <DatePicker style={{ width: '80%' }}></DatePicker>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>

                  <Row gutter={{ sm: 8 }}>
                    <Col span={10}>
                      <Form
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 100 }}
                        layout="horizontal"
                      >
                        <Form.Item
                          label="Remarks"
                          name="remarks"
                          labelCol={{ span: 4 }}
                          labelAlign={'left'}
                          style={{ width: '500px' }}
                        >
                          <TextArea style={{ width: '80%' }}></TextArea>
                        </Form.Item>
                      </Form>
                    </Col>
                  </Row>

                  <Row style={{ marginBottom: 80 }}></Row>

                  <Text>Updated By : Elaine - 7/Jan/2021 17:08 </Text>

                  <p />
                </Card>
              </Modal>
            </Col>
          </Space>
        </Col>*/}
        <Col span={2} />
        <Col span={11}>
          <Row gutter={{ xs: 4, sm: 16, md: 24, lg: 32 }}>
            <Col span={12} style={{ fontSize: 20 }}>
              <strong>
                <p style={{ textAlign: 'center', marginBottom: '1px' }}>
                  Health Questionnaire
                </p>
                <p style={{ marginBottom: '1px' }}>Do you get on exertion</p>
              </strong>
              <Row>
                <Col span={2}>
                  <Checkbox
                    style={{ height: 5 }}
                    className={style['ant-checkbox-input']}
                  />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    onClick={handleBtnClick3}
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Chest pain
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox className={style['ant-checkbox-input']} />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    onClick={handleBtnClick2}
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Breathlessness
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox className={style['ant-checkbox-input']} />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Palpitations
                  </Button>
                </Col>
              </Row>

              <strong>
                <p style={{ marginBottom: '1px' }}>
                  Do you have the following?
                </p>
              </strong>
              <Row>
                <Col span={2}>
                  <Checkbox className={style['ant-checkbox-input']} />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Heart Disease
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox className={style['ant-checkbox-input']} />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    High Blood Pressure
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox className={style['ant-checkbox-input']} />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Chronic Cough/Asthma
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox className={style['ant-checkbox-input']} />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Diabetes
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox className={style['ant-checkbox-input']} />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Stroke
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox className={style['ant-checkbox-input']} />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Epilepsy
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col span={2}>
                  <Checkbox
                    className={style['ant-checkbox-input']}
                    style={{ borderColor: 'black' }}
                  />
                </Col>
                <Col span={22}>
                  <Button
                    type="text"
                    style={{ color: 'black', height: 5, fontSize: 20 }}
                  >
                    Cancer
                  </Button>
                </Col>
              </Row>

              <pre></pre>

              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 200 }}
                layout="vertical"
              >
                <Form.Item
                  label={
                    <strong style={{ fontSize: '20px' }}>
                      Past or present medical condition not stated above.
                    </strong>
                  }
                  name="Ltmp"
                >
                  <TextArea style={{ height: 155 }} />
                </Form.Item>
                <Form.Item
                  label={
                    <strong style={{ fontSize: '20px' }}>
                      Please list the medications that you are taking for the
                      long term.{' '}
                    </strong>
                  }
                  name="Ltmp"
                >
                  <TextArea style={{ height: 155 }} />
                </Form.Item>
                <Form.Item
                  label={
                    <strong style={{ fontSize: '20px' }}>
                      Please list the medications that you are allergic to.
                    </strong>
                  }
                  name="allergies"
                >
                  <TextArea style={{ height: 155 }} />
                </Form.Item>
                <Form.Item
                  label={
                    <strong style={{ fontSize: '20px' }}>
                      Are you a carrier of any infectious desease eg.Hepatitis
                      B, HIV?
                    </strong>
                  }
                  name="Infectious"
                >
                  <TextArea style={{ height: 155 }} />
                </Form.Item>
                <Form.Item
                  label={
                    <strong style={{ fontSize: '20px' }}>
                      Any other medical concerns?
                    </strong>
                  }
                  name="Infectious"
                >
                  <TextArea style={{ height: 155 }} />
                </Form.Item>

                <Form
                  labelCol={{ span: 0 }}
                  wrapperCol={{ span: 200 }}
                  layout="vertical"
                >
                  {/* <Form.Item label={ 
                    <strong style={{fontSize:"20px"}}>Comment</strong>} name="Comment" >
              <TextArea style={{ height: 140 ,width:490}} />
            </Form.Item> */}

                  {/* <Form.Item name="Comment">
                    <Button style={{ fontSize: 18, height: 40 }}>
                      Blank Form
                    </Button>
                    <span> </span>
                    <Button
                      htmlType="submit"
                      style={{ fontSize: 18, height: 40 }}
                    >
                      Print
                    </Button>
                    <span> </span>
                    <Button
                      htmlType="submit"
                      style={{ fontSize: 18, height: 40 }}
                    >
                      Save
                    </Button>
                    <span> </span>
                    <Button
                      htmlType="submit"
                      style={{ fontSize: 18, height: 40 }}
                    >
                      Cancel
                    </Button>
                  </Form.Item> */}
                  <Form.Item>
                    <Row>
                      <Col span={6}>
                        <Button
                          htmlType="submit"
                          style={{
                            fontSize: 18,
                            height: 40,
                            width: '100%',
                            backgroundColor: '#BADEEE',
                            borderColor: 'black',
                          }}
                        >
                          <strong>Blank Form</strong>
                        </Button>
                      </Col>
                      <pre> </pre>
                      <Col span={5}>
                        <Button
                          //type="primary"
                          // style={{ background: 'orange', border: 'orange' }}
                          htmlType="submit"
                          style={{
                            fontSize: 18,
                            height: 40,
                            width: '100%',
                            backgroundColor: '#BADEEE',
                            borderColor: 'black',
                          }}
                        >
                          <strong>Print</strong>
                        </Button>
                      </Col>
                      <pre> </pre>
                      <Col span={5}>
                        <Button
                          htmlType="submit"
                          style={{
                            fontSize: 18,
                            height: 40,
                            width: '100%',
                            backgroundColor: '#BADEEE',
                            borderColor: 'black',
                          }}
                        >
                          <strong>Save</strong>
                        </Button>
                      </Col>
                      <pre> </pre>
                      <Col span={5}>
                        <Button
                          htmlType="submit"
                          style={{
                            fontSize: 18,
                            height: 40,
                            width: '100%',
                            backgroundColor: '#BADEEE',
                            borderColor: 'black',
                          }}
                        >
                          <strong>Cancel</strong>
                        </Button>
                      </Col>
                    </Row>
                  </Form.Item>
                </Form>
                {/* <Form.Item
                  label="Do you have any significant past medical or family history"
                  name="Pasthistory"
                >
                  <TextArea style={{ height: 90 }} />
                </Form.Item> */}
              </Form>
            </Col>
            <Col span={12}>
              {/* <Button type="primary" style={{ background: 'darkcyan',backgroundColor:'#BADEEE'  }}> */}
              <Button
                style={{ backgroundColor: '#BADEEE', borderColor: 'black' }}
              >
                <strong>NEHR</strong>
              </Button>
              <p />
              <div>
                {explain === 'defualt' && (
                  <div>
                    <TextArea style={{ height: 420 }} />
                  </div>
                )}
                {explain === 'chestpain' && (
                  <div>
                    {/* <Card style={{ height: 300 }}> */}
                    <Image src={chestpain} />
                    {/* </Card> */}
                  </div>
                )}
                {explain === 'breathlessness' && (
                  <div>
                    {/* <Card style={{ height: 300 }}> */}
                    <Image src={breathlessness} />
                    {/* </Card> */}
                  </div>
                )}
              </div>

              <div className={style.marginTop}>
                {/* <Row style={{ marginBottom: 50 }}></Row> */}
                <Row>
                  <Col span={17}>
                    {/*  <Image src={epos_PG_Y} width={70} />
                            <Image src={epos_infectiousdiseases_Y} width={70} />
                     <Image src={warningicon} width={70} />
                     
                      <Image src={epos_immunosupressed_Y} width={70} />
                      <Image src={epos_infectiousdiseases_Y} width={70} />
                     
                      <Image src={epos_anticoagulants_Y} width={70} />
                      <Image src={epos_cancer_Y} width={70} />
                <Image src={happyface} width={70} />  */}

                    <Row>
                      <Col span={8} offset={1}>
                        {/* <Image src={warningicon} width={70} /> */}
                        <Image src={infectiousdisease} width={80} height={70} />
                      </Col>
                    </Row>
                    <Row style={{ marginBottom: 20 }}></Row>

                    <Row>
                      <Button
                        //   className={fall ? style.fallrish : style.nonfallrisk}
                        onClick={handleBtnClick1}
                        style={{
                          width: '33%',
                          backgroundColor: '#7FFF00',
                          borderColor: 'black',
                        }}
                      >
                        <strong>Fall Risk</strong>
                      </Button>
                    </Row>
                    <Row style={{ marginBottom: 30 }}></Row>
                    <Row>
                      <Image
                        src={happyface}
                        width={120}
                        height={105}
                        style={{
                          borderLeftColor: 'black',
                          borderColor: 'black',
                        }}
                      />
                    </Row>
                    <pre> </pre>

                    <Form.Item
                      label={
                        <strong style={{ fontSize: 15 }}>Pain Score</strong>
                      }
                      name="Painscore"
                    >
                      {/* <Select defaultValue="0" style={{ width: '50%' }}> */}
                      <Select style={{ width: '48%' }} disabled={true}>
                        <Option value="0">0</Option>
                        <Option value="1">1</Option>
                        <Option value="2">2</Option>
                        <Option value="3">3</Option>
                        <Option value="4">4</Option>
                        <Option value="5">5</Option>
                        <Option value="6">6</Option>
                        <Option value="7">7</Option>
                        <Option value="8">8</Option>
                        <Option value="9">9</Option>
                        <Option value="10">10</Option>
                      </Select>
                    </Form.Item>
                    <pre> </pre>
                    <Row style={{ marginBottom: 10 }}></Row>
                    <Row>
                      {' '}
                      {/* <Button size="large" style={{ width: '60%' }} onClick={buttonbghandle}> */}
                      {/* <Button size="large" style={{ width: '60%', backgroundColor: isBisphosnateClick
                            ? 'blue'
                            : 'white' }} onClick={() =>{setIsBisphosnateClick(true)}}> */}
                      <Button
                        size="large"
                        style={{
                          width: '60%',
                          borderColor: 'black',
                          backgroundColor: isBisphosnateClick
                            ? '#BADEEE'
                            : 'white',
                        }}
                        onClick={togglefunction}
                      >
                        <strong>Bisphosnate Therapy</strong>
                      </Button>
                    </Row>
                    <pre></pre>
                    <Row>
                      {' '}
                      <Button
                        size="large"
                        style={{
                          width: '60%',
                          borderColor: 'black',
                          backgroundColor: isRadiotherapyClick
                            ? '#BADEEE'
                            : 'white',
                        }}
                        onClick={togglefunction2}
                      >
                        <strong>Radiotherapy</strong>
                      </Button>
                    </Row>
                    <pre></pre>
                    <Row>
                      {' '}
                      <Button
                        size="large"
                        style={{
                          width: '60%',
                          borderColor: 'black',
                          backgroundColor: isAntiCoagulantClick
                            ? '#BADEEE'
                            : 'white',
                        }}
                        onClick={togglefunction3}
                      >
                        <strong>Anti-coagulant Therapy</strong>
                      </Button>
                    </Row>
                    <pre></pre>
                    <Row>
                      {' '}
                      <Button
                        // icon={<EditOutlined style={{ fontSize: '20px'}}
                        // onClick={() => {
                        //   setPregnantSignModalVisible(true);
                        // }}></EditOutlined>}
                        // overlay={''}
                        size="large"
                        // style={{
                        //   width: '60%',
                        //   backgroundColor: isPregnantConsentSigned
                        //     ? 'red'
                        //     : 'white',
                        // }}
                        // onClick={() => {

                        //   setPregnantModalVisible(true);

                        // }}
                        style={{
                          // width: '60%',
                          // style="width: 170px",
                          width: '45%',
                          borderColor: 'black',
                          backgroundColor: isPregnancyClick
                            ? '#BADEEE'
                            : 'white',
                        }}
                        onClick={togglefunction4}
                      >
                        <strong>Pregnancy</strong>
                        {/* {isPregnantConsentSigned
                          ? 'Pregnancy'
                          : // ? 'Pregnancy '
                            'Pregnancy'} */}
                      </Button>
                      <Button
                        size="large"
                        style={{
                          // width: '60%',
                          // style="width: 170px",
                          borderColor: 'black',
                          width: '15%',
                        }}
                      >
                        <EditOutlined
                          style={{ fontSize: '20px' }}
                          onClick={() => {
                            setPregnantSignModalVisible(true);
                          }}
                        ></EditOutlined>
                        {/* {isPregnantConsentSigned
                          ? 'Pregnancy'
                          : // ? 'Pregnancy '
                            'Pregnancy'} */}
                      </Button>
                      {/* <pre> </pre>
                      <EditOutlined
                        style={{ fontSize: '20px' }}
                        onClick={() => {
                          setPregnantSignModalVisible(true);
                        }}
                      ></EditOutlined> */}
                      <Modal
                        visible={pregnantSignModalVisible}
                        //title="Pregnancy"
                        onOk={() => {
                          setPregnantSignModalVisible(false);
                          //    setIsPregnantConsentSigned(true);
                        }}
                        width={'30%'}
                      >
                        <Row>
                          <Col span={5} style={{ fontSize: '20px' }}>
                            Pregnancy :
                          </Col>
                          <Col span={3}>
                            <Checkbox className={style['ant-checkbox-input']}>
                              Yes
                            </Checkbox>
                          </Col>

                          {/* <Col span={2}>
                            <Text style={{ fontSize: '20px' }}>Yes</Text>
                          </Col> */}

                          <Col span={1}>
                            <Checkbox className={style['ant-checkbox-input']}>
                              No
                            </Checkbox>
                          </Col>
                          {/* 
                          <Col span={2}>
                            <Text style={{ fontSize: '20px' }}>No</Text>
                          </Col> */}
                        </Row>
                        <pre> </pre>

                        <Row>
                          <Col
                            span={24}

                            // style={{ height: 200 }}
                          >
                            <div className={style.signaturebox}>
                              <br></br>
                              <br></br>
                              <br></br>
                              <br></br>
                              <Row>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>

                                <pre> </pre>
                                <pre> </pre>

                                <pre> </pre>

                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>

                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>

                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>

                                {/* <h3>Signature</h3> */}
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>

                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>

                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>
                                <pre> </pre>

                                {/* <h3>Date</h3> */}
                              </Row>
                              <Row style={{ marginBottom: 10 }}></Row>
                              <Row>
                                <Col span={5}>
                                  <Text>Dated: 15/10/2021 </Text>
                                </Col>
                                <Col offset={15}>
                                  <Text>Signature</Text>
                                </Col>
                              </Row>
                            </div>

                            {/* <TextArea
                              style={{ height: 120 }}
                              // placeholder="Signature"
                              placeholder="Signature"
                            /> */}
                            {/* <div style={{
                        
                        backgroundColor: 'transparent',
                        borderColor: '#D3D3D3',
                      }}> <div >

                      </div>
                       

                      </div> */}
                          </Col>
                        </Row>
                        <pre> </pre>

                        <Row gutter={[16, 20]}>
                          <Col span={5} style={{ fontSize: '20px' }}>
                            Name :
                          </Col>
                          <Col span={17}>
                            <Text style={{ fontSize: '20px' }}>
                              Tan Mei Kuan
                            </Text>
                          </Col>

                          <Col span={5} style={{ fontSize: '20px' }}>
                            NRIC :
                          </Col>
                          <Col span={17} style={{ fontSize: '20px' }}>
                            <Text>S0000000J</Text>
                          </Col>
                        </Row>
                      </Modal>
                      <Modal
                        visible={pregnantModalVisible}
                        //title="Pregnancy"
                        onOk={() => {
                          setPregnantModalVisible(false);
                          //    setIsPregnantConsentSigned(true);
                        }}
                        width={'30%'}
                      >
                        {/* <Row >

                          <Col span={10} offset={19}>
                            <Button
                              style={{ width: "50%" }}
                              onClick={() => {
                                setPregnantHistoryModalVisible(true);
                              }}>Pregnant History</Button>



                            <Modal
                              visible={pregnantHistoryModalVisible}
                              title="Pregnancy History"
                              onOk={() => {
                                setPregnantHistoryModalVisible(false);
                              }}
                              width={'10%'}
                              bodyStyle={{ height: 200 }}

                            ></Modal>

                          </Col>
                        </Row> */}

                        <Row gutter={[16, 24]}>
                          {/* <Col span={20} offset={19}>
                            <Button
                              onClick={() => {
                                setPregnantHistoryModalVisible(true);
                              }}
                            >
                              Pregnant History
                            </Button>

                            <Modal
                              visible={pregnantHistoryModalVisible}
                              title="Pregnancy History"
                              onOk={() => {
                                setPregnantHistoryModalVisible(false);
                              }}
                              width={'20%'}
                              bodyStyle={{ height: 200 }}
                            >
                              <Row style={{ marginBottom: 8 }}>
                                <Col span={7}>Pregnant Date:</Col>
                                <Col>
                                  {' '}
                                  <DatePicker></DatePicker>
                                </Col>
                              </Row>

                              <Row style={{ marginBottom: 8 }}>
                                <Col span={7}></Col>
                                <Col>
                                  {' '}
                                  <DatePicker></DatePicker>
                                </Col>
                              </Row>
                              <Row style={{ marginBottom: 8 }}>
                                <Col span={7}></Col>
                                <Col>
                                  {' '}
                                  <DatePicker></DatePicker>
                                </Col>
                              </Row>
                              <Row style={{ marginBottom: 8 }}>
                                <Col span={7}></Col>
                                <Col>
                                  <DatePicker></DatePicker>
                                </Col>
                              </Row>
                              <Row style={{ marginBottom: 8 }}>
                                <Col span={7}></Col>
                                <Col>
                                  {' '}
                                  <DatePicker></DatePicker>
                                </Col>
                              </Row>
                            </Modal>
                          </Col> */}

                          {/* <Col span={7}>NRIC :</Col>
                          <Col span={12}>
                            <Input placeholder="S1234567D"></Input>
                          </Col> */}
                          {/* <Col span={7}>Patient Name :</Col>
                          <Col span={12}>
                            <Input placeholder="Elaine Liu"></Input>
                          </Col> */}
                          <Col span={7}>Pregnancy :</Col>
                          <Col span={12}>
                            <Radio.Group buttonStyle="solid">
                              <Radio.Button
                                onClick={() => {
                                  showwEDD();
                                  setIsPregnantConsentSigned(true);
                                }}
                                //  onClick={() =>{ setIsPregnantConsentSigned(true);setEDDDateVisible(false);
                                // setSignatureVisible(true);}}
                                type="primary"
                                value={true}
                              >
                                Yes
                              </Radio.Button>
                              <Radio.Button
                                value={false}
                                onClick={() => {
                                  noshowwEDD();
                                  setIsPregnantConsentSigned(false);
                                }}
                              >
                                {/* //  onClick={() =>{ setIsPregnantConsentSigned(false);setEDDDateVisible(true); */}
                                {/* //      setSignatureVisible(false);}}> */}
                                No
                              </Radio.Button>
                            </Radio.Group>
                          </Col>
                          {/* <Col span={7} hidden={EDDDate}>
                            EDD Date :
                          </Col>
                          <Col span={12} hidden={EDDDate}>
                            <DatePicker />
                            <Text> (To be deleted after 9 months)</Text>
                          </Col> */}

                          {/* <Col span={7} hidden={Signature}>
                            Signature :
                          </Col> */}
                          <Col
                            span={24}
                            hidden={Signature}
                            style={{ height: 200 }}
                          >
                            <TextArea
                              style={{ height: 200 }}
                              placeholder="Signature"
                            />
                          </Col>
                          {/* <Col span={7} hidden={Signature}>
                            Date of Signature :
                          </Col>
                          <Col span={12} hidden={Signature}>
                            <DatePicker />
                          </Col> */}

                          <Col span={7} hidden={Signature}>
                            Name :
                          </Col>
                          <Col span={12} hidden={Signature}>
                            <Input></Input>
                          </Col>
                          {/* <Col span={7}>Sign Consent of X-Ray :</Col> */}

                          {/* <Col span={12}>
                            <TextArea />
                          </Col> */}
                          {/* <Col span={7}>Remarks :</Col>
                          <Col span={12}>
                            <TextArea />
                          </Col> */}
                          <Col span={7} hidden={Signature}>
                            NRIC :
                          </Col>
                          <Col span={12} hidden={Signature}>
                            <Input></Input>
                          </Col>
                        </Row>
                      </Modal>
                    </Row>
                    <Row style={{ marginBottom: 50 }}></Row>

                    <Card
                      style={{
                        backgroundColor: 'transparent',
                        borderColor: '#D3D3D3',
                      }}
                    >
                      <Form
                        labelCol={{ span: 0 }}
                        wrapperCol={{ span: 200 }}
                        layout="vertical"
                      >
                        <Form.Item label="Updated On:" name="updatedon">
                          <Input style={{ width: '90%' }} />
                        </Form.Item>
                        <Form.Item label="Updated By:" name="Updatedby">
                          <Input style={{ width: '90%' }} />
                        </Form.Item>
                        <Form.Item>
                          <Button
                            htmlType="submit"
                            style={{
                              backgroundColor: '#BADEEE',
                              borderColor: 'black',
                            }}
                          >
                            <strong>Confirm</strong>
                          </Button>
                        </Form.Item>
                      </Form>
                    </Card>
                  </Col>
                  {/*<Col span={6}>
                    <Image src={epos_antibioticsprogram_Y} width={70} />
                    <Image src={epos_immunosupressed_Y} width={70} />
                    <Image src={epos_infectiousdiseases_Y} width={70} />
                    <Image src={epos_PG_Y} width={70} />
                    <Image src={warningicon} width={70} />
                  </Col>
                  <Col span={6}>
                    <Image src={epos_bisphosphonatetherapy_Y} width={70} />
                    <Image src={epos_anticoagulants_Y} width={70} />
                    <Image src={epos_cancer_Y} width={70} />
                    <Image src={happyface} width={70} />
                </Col>*/}
                </Row>
              </div>
            </Col>
          </Row>
          {/* <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 200 }}
            layout="vertical"
          > */}
          {/* <Form.Item label={ 
                    <strong style={{fontSize:"20px"}}>Comment</strong>} name="Comment" >
              <TextArea style={{ height: 140 ,width:490}} />
            </Form.Item> */}

          {/* <Form.Item name="Comment">
              <Button style={{fontSize:18,height:40}}>Blank Form</Button>
              <span> </span>
              <Button htmlType="submit"style={{fontSize:18,height:40}}>Print</Button>
              <span> </span>
              <Button htmlType="submit"style={{fontSize:18,height:40}}>Save</Button>
              <span> </span>
              <Button htmlType="submit"style={{fontSize:18,height:40}}>Cancel</Button>
            </Form.Item> */}
          {/* </Form> */}
        </Col>
      </Row>

      <Row gutter={{ xs: 4, sm: 8, md: 12 }}>
        <Col span={10}>
          {/* <Row gutter={{ xs: 4, sm: 8, md: 12 }}>
            <Col>
              <Button htmlType="submit">New/Retrieve Patient</Button>
            </Col>
            <Col>
              <Button
                //type="primary"
                // style={{ background: 'orange', border: 'orange' }}
                htmlType="submit"
              >
                Examine
              </Button>
            </Col>
            <Col>
              <Button htmlType="submit">Search Patient</Button>
            </Col>
            <Col offset={10}>
              <Button
                htmlType="submit"
                style={{ width: '130%', background: 'orange' }}
              >
                Audit
              </Button>
            </Col>
          </Row> */}
        </Col>

        <Col span={2}></Col>

        {/* <Col span={9}>
          <Row gutter={{ xs: 4, sm: 8, md: 12 }}>
            <Col>
              <Button htmlType="submit">Blank Form</Button>
            </Col>
            <Col>
              <Button htmlType="submit">Print</Button>
            </Col>
            <Col>
              <Button htmlType="submit">Save</Button>
            </Col>
            <Col>
              <Button htmlType="submit">Cancel</Button>
            </Col>
          </Row>
        </Col> */}
      </Row>
    </div>
  );
};

export default KTPHhomescreenNewVersion;
