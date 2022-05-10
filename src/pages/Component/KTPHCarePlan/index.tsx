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
import Fillingg from '../KTPHCarePlan/images/Fillingg.png';

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
const KTPHCarePlan: React.FC = () => {
  return (
    <Card style={{ width: '100%', height: 2500 }}>
      <Row>
        <Image src={Scaling} width={340} preview={false} />
        {/* <Image src={Periodontics} width={300} preview={false}/> */}
      </Row>
      <Row>
        <Image
          src={Periodontics}
          width={300}
          preview={false}
          style={{ marginLeft: 20 }}
        />
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>Plan:</Text>
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>1. LASRP, XAP #17</Text>
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          2. 3/12 re-evaluation, plan for implant if pt is keen to proceed
        </Text>
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          3. Regular perio maintenance
        </Text>
      </Row>

      <pre> </pre>

      <Row>
        <Image
          src={OMS}
          width={330}
          preview={false}
          style={{ marginLeft: 20 }}
        />
      </Row>

      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>Plan:</Text>
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>LA Excision #38</Text>
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          LA Excision #48, extraction #18
        </Text>
      </Row>

      <pre> </pre>

      <Row>
        <Image
          src={Removable}
          width={330}
          preview={false}
          style={{ marginLeft: 20 }}
        />
      </Row>

      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>Tx plan:</Text>
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          1. #12, 13, 22, 23 implant placement + implant provi + implant crowns
        </Text>
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          2.Review retained #55, 65, 75 - KIV need for extraction and
          replacement in the future
        </Text>
      </Row>

      <pre> </pre>

      <Row>
        <Image
          src={FixedProstho}
          width={330}
          preview={false}
          style={{ marginLeft: 20 }}
        />
      </Row>

      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>Plan:</Text>
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          For sectioning of #45-p-47 bridge and assessment of restorability.
          Will section at #47(m) first and assess #45.{' '}
        </Text>
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          If #45 is restorable - for new crown / bridge, KIV RCT
        </Text>
      </Row>

      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          If #45 is unrestorable - for extraction and replacement with implant /
          FDP / denture.
        </Text>
      </Row>

      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          Option to replace #46 with implant / FPD / denture discussed.
        </Text>
      </Row>

      <pre> </pre>

      <Row>
        <Image
          src={Extractionn}
          width={330}
          preview={false}
          style={{ marginLeft: 20 }}
        />
      </Row>

      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>Plan:</Text>
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          Q1 - #11, 12, 13, 14
        </Text>
      </Row>
      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          Q2 - #21, 22, 23, 24
        </Text>
      </Row>

      <Row>
        <Text style={{ fontSize: 20, marginLeft: 20 }}>
          Q3 - #34, 35, 36, 37, 38
        </Text>
      </Row>

      <pre> </pre>
      <Row>
        <Image
          src={Fillingg}
          width={330}
          preview={false}
          style={{ marginLeft: 20 }}
        />
      </Row>

      <pre> </pre>
    </Card>
  );
};

export default KTPHCarePlan;
