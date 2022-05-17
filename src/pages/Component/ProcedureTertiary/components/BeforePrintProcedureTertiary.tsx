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

import React, { useState } from 'react';

const { TextArea } = Input;

import style from '../index.less';

import print1 from '../images/print1.png';
import ktphlogo from '../images/ktphlogo.png';
import patientinformation from '../images/patientinformation.png';
import dentalsurgeon from '../images/dentalsurgeon.png';
const { Text } = Typography;

const BeforePrintProcedureTertiary = ({
  isVisible,
  handleOk,
  handleCancel,
}: {
  isVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
}) => {
  const [isVisibleReport, setIsVisibleReport] = useState(false);
  const showModalReport = () => {
    setIsVisibleReport(true);
  };

  const handleOkReport = () => {
    setIsVisibleReport(false);
  };
  const handleCancelReport = () => {
    setIsVisibleReport(false);
  };

  return (
    <div>
      <Modal
        title="Patient Report"
        visible={isVisible}
        onOk={showModalReport}
        onCancel={handleCancel}
        width={1000}
        style={{ fontSize: 20 }}
        bodyStyle={{ overflowY: 'scroll' }}
      >
        <Row>
          <Text style={{ fontSize: 20 }}>Dental Surgeon</Text>
          <TextArea
            style={{ height: 100 }}
            placeholder="Full access:    MCR: 4444"
          ></TextArea>
        </Row>

        <Row>
          <Text style={{ fontSize: 20 }}>Diagnosis</Text>
          <TextArea
            style={{ height: 100 }}
            placeholder="Diagnosis text"
          ></TextArea>
        </Row>

        <Row>
          <Text style={{ fontSize: 20 }}>Procedure</Text>
          <TextArea
            style={{ height: 100 }}
            placeholder="Procedure text"
          ></TextArea>
        </Row>

        <Row>
          <Text style={{ fontSize: 20 }}>Procedure Description</Text>
          <TextArea
            style={{ height: 100 }}
            placeholder="Procedure Description text"
          ></TextArea>
        </Row>

        <Row>
          <Text style={{ fontSize: 20 }}>Post Procedure Advice</Text>
          <TextArea style={{ height: 100 }} placeholder=""></TextArea>
        </Row>

        {/* 
            <Row className={style.header}>
            <h1>Dental Surgeon</h1>
          </Row> */}
      </Modal>

      <Modal
        title={false}
        footer={false}
        visible={isVisibleReport}
        onOk={handleOkReport}
        onCancel={handleCancelReport}
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
    </div>
  );
};

export default BeforePrintProcedureTertiary;
