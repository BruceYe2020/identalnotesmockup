import {
  Input,
  Row,
  Col,
  TimePicker,
  Checkbox,
  Card,
  Button,
  Modal,
  Image,
  Typography,
  DatePicker,
  Affix,
} from 'antd';

const { TextArea } = Input;

import style from '../index.less';

import print1 from '../images/print1.png';
import ktphlogo from '../images/ktphlogo.png';
import patientinformation from '../images/patientinformation.png';
import dentalsurgeon from '../images/dentalsurgeon.png';
const { Text } = Typography;
const PrintProcedureTertiary = ({
  isVisible,
  handleOk,
  handleCancel,
}: {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}) => {
  return (
    <Modal
      title={false}
      footer={false}
      visible={isVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width={1000}
      style={{ fontSize: 20 }}
      bodyStyle={{ overflowY: 'scroll' }}
    >
      <Image src={print1} preview={false} />
      <Row>
        <Col span={8}></Col>

        <Col>
          {' '}
          <Text
            style={{ fontSize: 40, color: 'blue' }}
            className={style['patientreportword']}
            underline={true}
          >
            Patient Report
          </Text>{' '}
        </Col>
      </Row>

      <Row>
        <Col span={10}>
          {/* <Image src={ktphlogo} preview={false}  style={{width:"70%" , height:"100%"}}/> */}
          <Image
            src={patientinformation}
            preview={false}
            style={{ width: '205%', height: '100%' }}
          />
        </Col>
      </Row>

      {/* <Row>
              <Col span={2}>
              <Text style={{fontSize: 20}}>Date:</Text>
              </Col>
              <DatePicker></DatePicker>
          </Row> */}
      {/* <pre> </pre> */}

      <Row>
        <Image
          src={dentalsurgeon}
          preview={false}
          style={{ width: '105%', height: '100%' }}
        />
      </Row>

      {/* 
          <Row className={style.header}>
          <h1>Dental Surgeon</h1>
        </Row> */}
    </Modal>
  );
};

export default PrintProcedureTertiary;
