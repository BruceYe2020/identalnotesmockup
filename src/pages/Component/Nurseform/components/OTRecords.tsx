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
  Modal,
  Checkbox,
  Card,
  List,
  Collapse,
} from 'antd';
import { useState } from 'react';
import style from '../index.less';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const { Panel } = Collapse;
// const [ischecked, setIsChecked] = useState(true);
// const showShared = () => {
//   setIsChecked(!ischecked);

// };

const OTRecords = ({
  isVisible,
  handleOk,
  handleCancel,
}: {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}) => {
  const [isCheckBox1Click, setisCheckBox1Click] = useState(false);
  const [isCheckBox2Click, setisCheckBox2Click] = useState(false);
  const [isCheckBox3Click, setisCheckBox3Click] = useState(false);
  const [isCheckBox4Click, setisCheckBox4Click] = useState(false);
  function toggleCheckBox1() {
    setisCheckBox1Click(!isCheckBox1Click);
  }
  function toggleCheckBox2() {
    setisCheckBox2Click(!isCheckBox2Click);
  }
  function toggleCheckBox3() {
    setisCheckBox3Click(!isCheckBox3Click);
  }
  function toggleCheckBox4() {
    setisCheckBox4Click(!isCheckBox4Click);
  }
  return (
    <Modal
      title="OT RECORDS"
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={750}
      style={{ fontSize: 20 }}
    >
      <Card>
        <Collapse defaultActiveKey={['1']}>
          <Panel
            header="Operative procedure"
            key="1"
            style={{ backgroundColor: isCheckBox1Click ? 'red' : 'white' }}
          >
            <Row className={style['recorded-by']}>
              {/* <Checkbox   onClick={toggleCheckBox1} defaultChecked={isCheckBox1Click}></Checkbox> */}
              {/* <Checkbox onClick={toggleCheckBox1}></Checkbox>
              <pre> </pre>
              <strong
                className={style['textInOTRecords']}
                style={{ backgroundColor: 'lightgray', width: '35%' }}
              >
                Operative procedure
              </strong> */}

              {/* <div>
                                <Input />
                                <p className={style.amphersand}>@</p>
                                <TimePicker />
                            </div> */}
              <TextArea style={{ height: '80px' }}></TextArea>
            </Row>
            <pre> </pre>

            <Row>
              <Col span={7}>
                <Text className={style['textInOTRecords']}>Surgeon: </Text>
              </Col>
              <Col>
                <Select mode="multiple" style={{ width: 315 }}></Select>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Text className={style['textInOTRecords']}>Assistant: </Text>
              </Col>
              <Col>
                <Select mode="multiple" style={{ width: 315 }}></Select>
              </Col>
            </Row>
            <Row>
              <Col span={7}>
                <Text className={style['textInOTRecords']}>Scrub Nurse: </Text>
              </Col>
              <Col>
                <Select mode="multiple" style={{ width: 315 }}></Select>
              </Col>
            </Row>

            <Row>
              <Col span={7}>
                <Text className={style['textInOTRecords']}>
                  Circulating Nurse:
                </Text>
              </Col>
              <Select mode="multiple" style={{ width: 315 }}></Select>
            </Row>

            <Row>
              <Col span={7}>
                <Text className={style['textInOTRecords']}>Surgery Start:</Text>
              </Col>
              <Col span={5}>
                <TimePicker></TimePicker>
              </Col>
              <pre> </pre>

              <Col span={2}>
                <Text className={style['textInOTRecords']}>end: </Text>
              </Col>
              <Col span={5}>
                <TimePicker></TimePicker>
              </Col>
            </Row>

            <Row>
              <strong>
                <Text style={{ fontSize: 20 }}> Remarks:</Text>
              </strong>
            </Row>

            <Row>
              <TextArea style={{ height: '80px' }}></TextArea>
            </Row>

            <p />
            <strong>
              <Text style={{ fontSize: 20 }}> Recorded by:</Text>
            </strong>
            <Row>
              {/* <Input style={{ width: '60%' }} /> */}
              {/* <Button style={{ fontSize: 20, height: '40px' }}>
                            Export
                          </Button> */}
            </Row>

            <Row>
              <Col span={20}></Col>
              <Col span={4}>
                <Button style={{ fontSize: 20, height: '40px' }}>Export</Button>
              </Col>
            </Row>
            <p />
          </Panel>
        </Collapse>

        {/* <Collapse defaultActiveKey={['1']}> */}
        <Collapse accordion defaultActiveKey={['1']}>
          <Panel
            header="Sign In"
            key="2"
            style={{ backgroundColor: isCheckBox2Click ? 'red' : 'white' }}
          >
            <Row className={style['recorded-by']}>
              <Col span={1}>
                {/* <Checkbox onClick={toggleCheckBox2}></Checkbox> */}
              </Col>
              <Col span={16}>
                {/* <strong>
                  <Text
                    style={{
                      fontSize: 20,
                      backgroundColor: 'lightgray',
                      width: '100%',
                    }}
                  >
                    {' '}
                    Sign In
                  </Text>
                </strong> */}
              </Col>

              <Col>
                <p className={style.amphersands}>@</p>
                <TimePicker />
              </Col>
            </Row>

            <pre> </pre>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Patient identify and records verified{' '}
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Medical history and diagnosis updated
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Medications reviewed{' '}
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Site of operation confirmed and marked if applicable
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Procedure reviewed and consented for
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Equipment available and functional
                </Text>
              </Col>
            </Row>

            <Row>
              <strong>
                <Text style={{ fontSize: 20 }}> Allergies:</Text>
              </strong>
            </Row>

            <Row>
              <TextArea style={{ height: '80px' }}></TextArea>
            </Row>
          </Panel>

          <Panel
            header="Time-out"
            key="3"
            style={{ backgroundColor: isCheckBox3Click ? 'red' : 'white' }}
          >
            <Row className={style['recorded-by']}>
              <Col span={1}>
                {/* <Checkbox onClick={toggleCheckBox3}></Checkbox> */}
              </Col>
              <Col span={16}>
                {/* <strong>
                  <Text
                    style={{
                      fontSize: 20,
                      backgroundColor: 'lightgray',
                      width: '100%',
                    }}
                  >
                    {' '}
                    Time-out
                  </Text>
                </strong> */}
              </Col>

              <Col>
                <p className={style.amphersands}>@</p>
                <TimePicker />
              </Col>
            </Row>

            <pre> </pre>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Correct patient{' '}
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Correct procedure
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>Correct site </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Correct radiographs/ documents if applicable
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Equipment functional
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Instruments processed
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Anti-coagulant/platelet reviewed (Manually ticked)
                </Text>
              </Col>
            </Row>
          </Panel>
          <Panel
            header="Sign-out"
            key="4"
            style={{ backgroundColor: isCheckBox4Click ? 'red' : 'white' }}
          >
            <Row className={style['recorded-by']}>
              <Col span={1}>
                {/* <Checkbox onClick={toggleCheckBox4}></Checkbox> */}
              </Col>
              <Col span={16}>
                {/* <strong>
                  <Text
                    style={{
                      fontSize: 20,
                      backgroundColor: 'lightgray',
                      width: '100%',
                    }}
                  >
                    {' '}
                    Sign-out
                  </Text>
                </strong> */}
              </Col>

              <Col>
                <p className={style.amphersands}>@</p>
                <TimePicker />
              </Col>
            </Row>

            <pre> </pre>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Procedure as planned{' '}
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Blood loss less than 50ml
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Instrument, needle and swab counts complete
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  {' '}
                  Specimen(s) labelled (manually ticked)
                </Text>
              </Col>
            </Row>
            <Row>
              <Col span={2}>
                <Checkbox></Checkbox>
              </Col>
              <Col span={21}>
                <Text className={style['textInOTRecords']}>
                  Equipment(s) functional
                </Text>
              </Col>
            </Row>

            <Row>
              <strong>
                <Text style={{ fontSize: 20 }}>
                  {' '}
                  Post-op concerns and management
                </Text>
              </strong>
            </Row>

            <Row>
              <TextArea style={{ height: '80px' }}></TextArea>
            </Row>
          </Panel>
        </Collapse>
      </Card>
    </Modal>
  );
};

export default OTRecords;
