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
  InputNumber,
  Tabs,
  Collapse,
  Modal,
  Checkbox,
  Card,
  Table,
  Image,
} from 'antd';
import style from './index.less';
import {
  StepBackwardFilled,
  CaretLeftFilled,
  CaretRightOutlined,
  StepForwardOutlined,
  CloseOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import moment from 'moment';
// @ts-ignore
import { CKEditor } from '@ckeditor/ckeditor5-react';
// @ts-ignore
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Divider } from 'antd';
import Scaling from '../KTPHCarePlan/images/Scaling.png';
import Periodontics from '../KTPHCarePlan/images/Periodontics.png';
import OMS from '../KTPHCarePlan/images/OMS.png';
import Removable from '../KTPHCarePlan/images/Removable.png';
import FixedProstho from '../KTPHCarePlan/images/FixedProstho.png';
import Extractionn from '../KTPHCarePlan/images/Extractionn.png';
import NHGPCarePlann from '../NHGPCarePlan/images/NHGPCarePlan.png';

const { TextArea } = Input;
const { Text } = Typography;
const { Option } = Select;
const format = 'HH:mm';
const { TabPane } = Tabs;
const { Column } = Table;

const data = [
  {
    key: '1',
    date: '4/1/2021',
    surgeon: 'Susanna Tan Li Wen',
    speciality: 'Orthodontics',
    institution: 'KTPH',
    careplan: 'Care Plan',
  },
];
const { Panel } = Collapse;
const NHGPCarePlan: React.FC = () => {
  return (
    <Card style={{ width: '100%', height: 2500 }}>
      <Row>
        <Text
          style={{ fontSize: 30, marginLeft: 20 }}
          underline={true}
          strong={true}
        >
          NHGP
        </Text>
      </Row>
      <Row>
        <Image
          src={NHGPCarePlann}
          style={{ height: 380, width: 1000 }}
          preview={false}
        />
        {/* <Image src={Periodontics} width={300} preview={false}/> */}

        <pre> </pre>
      </Row>
    </Card>
  );
};

export default NHGPCarePlan;
