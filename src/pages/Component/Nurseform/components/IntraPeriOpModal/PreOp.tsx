import { Input, Row, Col, TimePicker, Checkbox, Card, Button } from 'antd';

const { TextArea } = Input;

import style from './index.less';

const PreOp = ({ span }: { span: number }) => {
  return (
    <Col span={span}>
      <Card style={{ height: '100%' }}>
        <Row className={style.header}>
          <h1>Pre-Operative Check List</h1>
        </Row>

        {/**Checkbox */}
        <Row className={style['checkbox-list']}>
          <Checkbox>Correct patient</Checkbox>
          <Checkbox>Vaild consent</Checkbox>
          <Checkbox>Operation site and side verified </Checkbox>
          {/* <Checkbox>Fall precautions</Checkbox> */}
        </Row>

        {/**Parameters */}
        <Row className={style['field-list']}>
          <strong className={style.h2}>Parameters</strong>
          <div>
            <label className={style['parametertext']}>PR/min:</label>
            <Input className={style['parametertextbox']} />
          </div>

          <div>
            <label className={style['parametertext']}>Bp/mmHg:</label>
            <Input className={style['parametertextbox']} />
          </div>

          <div>
            <label className={style['parametertext']}>O₂ saturation:</label>
            <Input className={style['parametertextbox']} />
          </div>

          <div>
            <label className={style['parametertext']}>Pain score:</label>
            <Input className={style['parametertextbox']} />
          </div>
        </Row>

        {/**Remarks */}
        <Row className={style.remarks}>
          <strong className={style.h2}>Remarks</strong>
          <TextArea className={style['remarks-textarea']} />
        </Row>

        {/**Recorded by */}
        <Row className={style['recorded-by']}>
          <strong className={style.h2}>Recorded by:</strong>
          <div>
            <Input />
            <p className={style.amphersand}>@</p>
            <TimePicker />
          </div>
        </Row>

        <Row className={style['export']}>
          <Button>Export</Button>
        </Row>
      </Card>
    </Col>
  );
};

export default PreOp;
