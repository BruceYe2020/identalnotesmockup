import React, { useState } from 'react';
import {
  Input,
  Button,
  Form,
  Select,
  Row,
  Col,
  DatePicker,
  Typography,
  TimePicker,
  Tabs,
  Modal,
  Checkbox,
  Card,
  Space,
  Table,
  List,
} from 'antd';
import style from './index.less';
import {
  StepBackwardFilled,
  CaretLeftFilled,
  CaretRightOutlined,
  StepForwardOutlined,
  CloseOutlined,
  PlusOutlined,
  FieldTimeOutlined,
} from '@ant-design/icons';
import moment from 'moment';
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';
// @ts-ignore
//import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Editor from '@medisys/ckeditor5-custom-build';
import { Divider } from 'antd';
import IntraOpModal from './components/IntraOpModal';
import IntraPeriOpModal from './components/IntraPeriOpModal';
import OTRecords from './components/OTRecords';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const format = 'HH:mm';
const { TabPane } = Tabs;

const Nurseform: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { Column } = Table;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };

  const [isModalVisible2, setIsModalVisible2] = useState(false);
  const showModal2 = () => {
    setIsModalVisible2(true);
  };

  const handleOk2 = () => {
    setIsModalVisible2(false);
  };

  const handleCancel2 = () => {
    setIsModalVisible2(false);
  };

  const [isModalVisiblesignout, setIsModalVisiblesignout] = useState(false);
  const showModalsignout = () => {
    setIsModalVisiblesignout(true);
  };
  const handleOksignout = () => {
    setIsModalVisiblesignout(false);
  };

  const handleCancelsignout = () => {
    setIsModalVisiblesignout(false);
  };

  const [isModalVisiblefallrisk, setIsModalVisiblefallrisk] = useState(false);
  const showModalfallrisk = () => {
    setIsModalVisiblefallrisk(true);
  };
  const handleOkfallrisk = () => {
    setIsModalVisiblefallrisk(false);
  };

  const handleCancelfallrisk = () => {
    setIsModalVisiblefallrisk(false);
  };
  const data3 = [
    {
      key: '1',
      consumables: 'Implant, Crown, Simple',
      code: 'BPC012',
      unit: '1',
      price: '300',
      lotnumber: 'LOT00332211',
    },
    {
      key: '1',
      consumables: 'Create and fix',
      code: 'HPB013',
      unit: '2',
      price: '200',
      lotnumber: 'LOT00332212',
    },
    {
      key: '1',
      consumables: 'Replace',
      code: 'HKK014',
      unit: '3',
      price: '100',
      lotnumber: 'LOT00332213',
    },
    {
      key: '1',
      consumables: 'Crown',
      code: 'PLK014',
      unit: '4',
      price: '700',
      lotnumber: 'LOT00332214',
    },
    {
      key: '1',
      consumables: 'Simple',
      code: 'HDR014',
      unit: '5',
      price: '800',
      lotnumber: 'LOT00332215',
    },
    {
      key: '1',
      consumables: ' wipes, gloves and disposable aprons',
      code: 'HEA011',
      unit: '3',
      price: '500',
      lotnumber: 'LOT00332216',
    },
  ];
  console.log(moment());
  return (
    <div className={style.Globalsettings}>
      <Row>
        <Col span={21}>
          <Row>
            <StepBackwardFilled style={{ fontSize: 25, color: 'royalblue' }} />
            <CaretLeftFilled style={{ fontSize: 25, color: 'royalblue' }} />
            <Input style={{ width: '2%', height: '30px' }} />
            <Text style={{ fontSize: 16 }}> of 42 </Text>
            <CaretRightOutlined style={{ fontSize: 25, color: 'royalblue' }} />
            <StepForwardOutlined style={{ fontSize: 25, color: 'royalblue' }} />
            <pre> </pre>
            <Select style={{ width: '10%' }}>
              <Option value="Completed">Completed</Option>
            </Select>
            <pre> </pre>
            <Button>New</Button>
            <pre> </pre>
            <Button>Save As Final</Button>
            <pre> </pre>
            <Button>Save As Draft</Button>
            <pre> </pre>
            <Button>Delete</Button>
            <pre> </pre>
            <Button>Unlock</Button>
            <pre> </pre>
            <Select style={{ width: '5%' }} defaultValue="Print">
              <Option value="Print">Print</Option>
            </Select>
            <pre> </pre>
            <Button> SMS</Button>
          </Row>
          <Row>
            <Col span={22}>
              <Form
                labelCol={{ span: 0 }}
                wrapperCol={{ span: 500 }}
                layout="horizontal"
              >
                <Row>
                  <Col span={8}>
                    <Form.Item
                      label="Date"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <DatePicker style={{ width: '70%' }} />
                    </Form.Item>
                  </Col>
                  <Col span={2}></Col>
                  <Col>
                    <Form.Item
                      label="Location"
                      labelCol={{ span: 7 }}
                      labelAlign={'left'}
                    >
                      <Input style={{ width: '145%' }} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row>
                  <Col span={8}>
                    <Form.Item
                      label="Nurse"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <Input style={{ width: '70%' }} />
                    </Form.Item>
                  </Col>

                  <Col span={2}></Col>

                  <Col span={8}>
                    <Form.Item
                      label="Doctor"
                      labelCol={{ span: 3 }}
                      labelAlign={'left'}
                    >
                      <Input style={{ width: '51%' }} />
                    </Form.Item>
                  </Col>
                  {/* <Col span={2} /> */}

                  {/* <Col>
                  <Form.Item
                      label="Doctor"
                      labelCol={{ span: 7 }}
                      labelAlign={'left'}
                    >
                      <Input style={{ width: '145%' }} />
                    </Form.Item></Col> */}
                  {/* <Col> */}
                  {/* <Form.Item
                      label="Doctor"
                      labelCol={{ span: 7 }}
                      labelAlign={'left'}
                    >
                      <Input style={{ width: '150%' }} />
                    </Form.Item> */}
                  {/* <Form.Item
                      label="Time in"
                      labelCol={{ span: 9 }}
                      labelAlign={'left'}
                    >
                      <TimePicker format={format} style={{ width: '110%' }} />
                    </Form.Item> */}
                  {/* </Col> */}
                </Row>
                <Row>
                  <Col span={8}>
                    <Form.Item
                      label="Time in"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <TimePicker format={format} style={{ width: '69%' }} />
                    </Form.Item>
                    {/* <Form.Item
                      label="location"
                      labelCol={{ span: 4 }}
                      labelAlign={'left'}
                    >
                      <Select style={{ width: '70%' }} />
                    </Form.Item> */}
                  </Col>
                  <Col span={2} />
                  <Col>
                    <Form.Item
                      label="Time out"
                      labelCol={{ span: 9 }}
                      labelAlign={'left'}
                    >
                      <TimePicker format={format} style={{ width: '199%' }} />
                    </Form.Item>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
          <Divider />

          {/* <div style={{ color: 'red' }}>
            *This will be linked to TOSP procedure for Billing
          </div> */}

          <Row>
            <Col span={21}>
              {/* <Form.Item label="Material and consumables"> */}
              <Form.Item label="">
                <Table
                  style={{ width: '99%' }}
                  //pagination={false}
                  pagination={{
                    defaultPageSize: 5,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '20', '30'],
                  }}
                  dataSource={data3}
                  size="small"
                >
                  <Column
                    title="Consumables"
                    dataIndex="consumables"
                    key="consumables"
                    width="8%"
                  />
                  <Column title="Code" dataIndex="code" key="code" width="5%" />
                  <Column title="Unit" dataIndex="unit" key="unit" width="5%" />
                  <Column
                    title="Price"
                    dataIndex="price"
                    key="price"
                    width="5%"
                  />
                  <Column
                    title="Lot Number"
                    dataIndex="lotnumber"
                    key="lotnumber"
                    width="5%"
                  />
                  <Column
                    width="1%"
                    title={() => {
                      return (
                        <div>{/* <Button type="primary">Add</Button> */}</div>
                      );
                    }}
                    key="action"
                    render={() => (
                      <Space size="middle">
                        <a>Add </a>
                        <a>Delete</a>
                      </Space>
                    )}
                  />
                </Table>
              </Form.Item>
            </Col>
          </Row>
          <Divider />
          <Row>
            <Col span={1}>
              <Text>Notes</Text>
            </Col>
            {/* <Col span={11} /> */}
            <Col span={15} />

            <Col span={8}>
              <Row>
                {/* <Button
                  style={{ color: 'black', width: '15%' }}
                  onClick={showModalfallrisk}
                >
                  Fall Risk
                </Button> */}

                <Modal
                  title=""
                  visible={isModalVisiblefallrisk}
                  onOk={handleOkfallrisk}
                  onCancel={handleCancelfallrisk}
                  width={600}
                  style={{ fontSize: 20 }}
                >
                  <Card>
                    <Row>
                      <Col span={2}>
                        <Checkbox />
                      </Col>
                      <Col span={22}>
                        <Text style={{ fontSize: 20 }}>
                          ✔Extraction/Root Canal Treatment (No giddiness after
                          procedure)
                        </Text>
                        <br></br>
                        <Text style={{ fontSize: 20 }}>
                          Patient is discharged after bleeding stops, not
                          feeling giddy and has pain score less than 4.
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={2}>
                        <Checkbox />
                      </Col>
                      <Col span={22}>
                        <Text style={{ fontSize: 20 }}>
                          ✔Extraction/Root Canal Treatment (Giddiness after
                          procedure)
                        </Text>
                        <br></br>
                        <Text style={{ fontSize: 20 }}>
                          1. Patient is assisted to recovery room.
                        </Text>
                        <br></br>
                        <Text style={{ fontSize: 20 }}>
                          2. Patient is only discharged after bleeding stops,
                          not feeling giddy and pain score less than 4.
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={2}>
                        <Checkbox />
                      </Col>
                      <Col span={22}>
                        <Text style={{ fontSize: 20 }}>
                          ✔Surgical procedures under LA
                        </Text>
                        <br></br>
                        <Text style={{ fontSize: 20 }}>
                          1. Patient is assisted to recovery room.
                        </Text>
                        <br></br>
                        <Text style={{ fontSize: 20 }}>
                          2. Patient is only discharged after bleeding stops,
                          not feeling giddy and pain score less than 4.
                        </Text>
                      </Col>
                    </Row>
                    {/* <Row>
                      <Col span={3}>
                        <Checkbox />
                      </Col>
                      <Col span={21}>
                        <Text style={{ fontSize: 20 }}>Correct site</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={3}>
                        <Checkbox />
                      </Col>
                      <Col span={21}>
                        <Text style={{ fontSize: 20 }}>
                          Correct documents/radiographs
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={3}>
                        <Checkbox />
                      </Col>
                      <Col span={21}>
                        <Text style={{ fontSize: 20 }}>
                          Functioning Equipment
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={3}>
                        <Checkbox />
                      </Col>
                      <Col span={21}>
                        <Text style={{ fontSize: 20 }}>Consent taken</Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={2}>
                        <Checkbox />
                      </Col>
                      <Col span={22}>
                        <Text style={{ fontSize: 20 }}>
                          Site Marking Done (Dental Chart)
                        </Text>
                      </Col>
                    </Row> */}
                    {/* <p />
                    <strong>
                      <Text style={{ fontSize: 20 }}> Time Out: </Text>
                    </strong>
                    <TimePicker />
                    <p /> */}
                    <pre> </pre>
                    <strong>
                      <Text style={{ fontSize: 20 }}> Documented by:</Text>
                    </strong>
                    <Row>
                      <Input style={{ width: '60%' }} />
                    </Row>
                    <p />
                    <Row>
                      <Col span={19} />
                      <Col>
                        <Button style={{ fontSize: 20, height: '40px' }}>
                          Export
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Modal>
                <pre> </pre>
                {/*start*/}
                {/* <Button
                  style={{ color: 'black', width: '15%' }}
                  onClick={showModalsignout}
                >
                  Sign Out
                </Button>

                <Modal
                  title=""
                  visible={isModalVisiblesignout}
                  onOk={handleOksignout}
                  onCancel={handleCancelsignout}
                  width={600}
                  style={{ fontSize: 20 }}
                >
                  <Card>
                    <Row>
                      <Col span={3}>
                        <Text style={{ fontSize: 20 }}>Time : </Text>
                      </Col>

                      <Col span={17}>
                        <TimePicker></TimePicker>
                      </Col>
                    </Row>
                    <pre> </pre>
                    <Row>
                      <Col span={3}>
                        <Checkbox />
                      </Col>
                      <Col span={21}>
                        <Text style={{ fontSize: 20 }}>
                          ✔Procedure unchanged
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={3}>
                        <Checkbox />
                      </Col>
                      <Col span={21}>
                        <Text style={{ fontSize: 20 }}>
                          ✔Complete instrument and needle count
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={3}>
                        <Checkbox />
                      </Col>
                      <Col span={21}>
                        <Text style={{ fontSize: 20 }}>
                          ✔Labelling of specimens (if applicable) 
                        </Text>
                      </Col>
                    </Row>
                    <Row>
                      <Col span={3}>
                        <Checkbox />
                      </Col>
                      <Col span={21}>
                        <Text style={{ fontSize: 20 }}>
                          ✔Functioning equipment
                        </Text>
                      </Col>
                    </Row>

                    <pre> </pre>

                    <strong>
                      <Text style={{ fontSize: 20 }}> Documented by:</Text>
                    </strong>
                    <Row>
                      <Input style={{ width: '60%' }} />
                    </Row>
                    <p />
                    <Row>
                      <Col span={19} />
                      <Col>
                        <Button style={{ fontSize: 20, height: '40px' }}>
                          Export
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                </Modal> */}
                <pre> </pre>
                <Button onClick={showModal2} style={{ width: '20%' }}>
                  {/* INTRAOP */}
                  OT RECORDS
                </Button>
                {/* <IntraOpModal
                  isVisible={isModalVisible2}
                  handleOk={handleOk2}
                  handleCancel={handleCancel2}
                /> */}
                <OTRecords
                  isVisible={isModalVisible2}
                  handleOk={handleOk2}
                  handleCancel={handleCancel2}
                />
                <pre> </pre>
                {/*end*/}

                <Button
                  onClick={showModal}
                  style={{ color: 'black', width: '20%' }}
                >
                  {/* INTRA-PERI-OP */}
                  PERIOP
                </Button>
                <IntraPeriOpModal
                  isVisible={isModalVisible}
                  handleOk={handleOk}
                  handleCancel={handleCancel}
                />
                <pre> </pre>
                <Button onClick={showModal1} style={{ width: '20%' }}>
                  Discharge
                </Button>
                <Modal
                  title="Discharge"
                  visible={isModalVisible1}
                  onOk={handleOk1}
                  onCancel={handleCancel1}
                  width={600}
                  style={{ fontSize: 20 }}
                >
                  <strong>
                    <Text style={{ fontSize: 20 }}> Discharged with:</Text>
                  </strong>
                  <Row>
                    <Col span={2}>
                      <Checkbox />
                    </Col>
                    <Col span={22}>
                      <Text style={{ fontSize: 20 }}>Procedure summary</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={2}>
                      <Checkbox />
                    </Col>
                    <Col span={22}>
                      <Text style={{ fontSize: 20 }}>
                        Postoperative instructions
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={2}>
                      <Checkbox />
                    </Col>
                    <Col span={22}>
                      <Text style={{ fontSize: 20 }}>Gauze pack</Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={2}>
                      <Checkbox />
                    </Col>
                    <Col span={22}>
                      <Text style={{ fontSize: 20 }}>
                        Instructions to collect medication
                      </Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={2}>
                      <Checkbox />
                    </Col>
                    <Col span={22}>
                      <Text style={{ fontSize: 20 }}>Review appointment</Text>
                    </Col>
                  </Row>
                  <p />
                  <strong>
                    <Text style={{ fontSize: 20 }}> Remarks:</Text>
                  </strong>
                  <TextArea style={{ height: 80 }} />
                  <p />
                  <strong>
                    <Text style={{ fontSize: 20 }}> Recorded by:</Text>
                  </strong>
                  <Row>
                    <Input style={{ width: '60%' }} />
                    <Text style={{ fontSize: 20 }}>@</Text>
                    <TimePicker style={{ width: '36%' }} />
                  </Row>
                  <p />

                  <Row>
                    <Col span={19} />
                    <Col>
                      <Button
                        style={{ fontSize: 20, height: '40px', width: '130%' }}
                      >
                        Export
                      </Button>
                    </Col>
                  </Row>
                </Modal>
                <pre> </pre>
                <Button style={{ color: 'black', width: '20%' }}>
                  Template
                </Button>
              </Row>
            </Col>
          </Row>
          <Form
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 200 }}
            layout="horizontal"
          >
            <Row>
              <Col span={23}>
                <Form.Item labelCol={{ span: 5 }} labelAlign={'left'}>
                  <div className="App">
                    <CKEditor
                      style={{ width: '90%' }}
                      editor={Editor}
                      data="<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>"
                    />
                  </div>
                </Form.Item>
              </Col>
              <col span={1} />
            </Row>
          </Form>
        </Col>
        <Col span={3}>
          <Tabs tabPosition="bottom" style={{ height: '100%' }}>
            <TabPane tab="Instrument" key="1" style={{ width: '90%' }}>
              <Row>
                <Button type="primary" icon={<PlusOutlined />}>
                  Add
                </Button>
                <pre> </pre>
                <Button type="primary" icon={<CloseOutlined />}>
                  delete
                </Button>
              </Row>
              <TextArea style={{ height: 1200 }} />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
};

export default Nurseform;
