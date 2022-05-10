import React, { useState } from 'react';
import { Collapse, Image, Popconfirm } from 'antd';
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
  Table,
  Tabs,
  Card,
  Space,
  Checkbox,
  Menu,
  Dropdown,
  Radio,
  Tooltip,
  List,
  Popover,
} from 'antd';
import DentalChart00 from '../images/DentalChart00.png';
import DentalChart11 from '../images/DentalChart11.png';
import DentalChart22 from '../images/DentalChart22.png';
import DentalChart33 from '../images/DentalChart33.png';
import DentalChart44 from '../images/DentalChart44.png';
import DentalChart55 from '../images/DentalChart55.png';
import DentalChart66 from '../images/DentalChart66.png';
import DentalChart77 from '../images/DentalChart77.png';
import DentalChart88 from '../images/DentalChart881.png';
import DentalChart99 from '../images/DentalChart991.png';
import DentalChart111 from '../images/DentalChart1111.png';
import DentalChart100 from '../images/DentalChart1001.png';
import DentalChart102 from '../images/DentalChart1002.png';
import DentalChart9999 from '../images/dentalchart9999.png';
import DentalChart9998 from '../images/dentalchart9998.png';
import DentalChart9997 from '../images/dentalchart9997.png';
import DentalChart9996 from '../images/dentalchart9996.png';
import DentalChart9995 from '../images/dentalchart9995.png';
import DentalChart9994 from '../images/dentalchart9994.png';
import icon1 from '../images/icon1.png';
import icon2 from '../images/icon2.png';
import icon3 from '../images/icon3.png';
import icon4 from '../images/icon4.png';
import icon5 from '../images/icon5.png';
import icon6 from '../images/icon6.png';
import icon7 from '../images/icon7.png';
import icon8 from '../images/icon8.png';
import icon9 from '../images/icon9.png';
import icon10 from '../images/icon10.png';
import icon11 from '../images/icon11.png';
import icon12 from '../images/icon12.png';
import icon13 from '../images/icon13.png';
import icon14 from '../images/icon14.png';
import icon15 from '../images/icon15.png';
import icon16 from '../images/icon16.png';
import icon17 from '../images/icon17.png';
import icon18 from '../images/icon18.png';
import icon19 from '../images/icon19.png';
import icon20 from '../images/icon20.png';
import icon21 from '../images/icon21.png';
import icon22 from '../images/icon22.png';
import icon23 from '../images/icon23.png';
const { Text } = Typography;

const Chart: React.FC = () => {
  const [image, setImage] = useState(1);
  const { Panel } = Collapse;
  const changeImage = () => {
    if (image === 6) setImage(1);
    else setImage((pre) => pre + 1);
  };
  const getImage = () => {
    switch (image) {
      // case 1:
      //   return DentalChart00;
      // case 2:
      //   return DentalChart22;
      // case 3:
      //   return DentalChart33;
      // case 4:
      //   return DentalChart00;
      // case 5:
      //   return DentalChart44;
      // case 6:
      //   return DentalChart55;
      // case 7:
      //   return DentalChart66;
      // case 8:
      //   return DentalChart77;
      // case 9:
      //   return DentalChart88;
      // case 10:
      //   return DentalChart99;
      // case 11:
      //   return DentalChart111;
      // case 12:
      //   return DentalChart100;
      // case 1:
      //   return DentalChart88;
      // case 2:
      //   return DentalChart99;
      // case 3:
      //   return DentalChart111;
      // case 4:
      //   return DentalChart100;
      // case 5:
      //   return DentalChart102;
      case 1:
        return DentalChart9999;
      case 2:
        return DentalChart9998;
      case 3:
        return DentalChart9997;
      case 4:
        return DentalChart9996;
      case 5:
        return DentalChart9995;
      case 6:
        return DentalChart9994;
    }
  };
  return (
    <Collapse defaultActiveKey={['chart']}>
      <Panel header="Chart" key={'chart'}>
        <a>
          <Row>
            <Col span={1}>
              <Text style={{ fontSize: 20, marginLeft: '10px' }}>Legend: </Text>
            </Col>

            <Col span={12}>
              <Tooltip title="Missing/Extracted" placement="top">
                <Image src={icon1} preview={false} />
              </Tooltip>
              <Tooltip title="Decay" placement="top">
                <Image src={icon2} preview={false} />
              </Tooltip>
              <Tooltip title="Recurrent Decay" placement="top">
                <Image src={icon3} preview={false} />
              </Tooltip>

              <Tooltip title="NCCL" placement="top">
                {' '}
                <Image src={icon4} preview={false} />
              </Tooltip>

              <Tooltip title="Fractured Tooth" placement="top">
                {' '}
                <Image src={icon5} preview={false} />
              </Tooltip>

              <Tooltip title="Filling(Amalgam)" placement="top">
                {' '}
                <Image src={icon6} preview={false} />
              </Tooltip>

              <Tooltip title="Filling(Tooth Coloured)" placement="top">
                {' '}
                <Image src={icon7} preview={false} />
              </Tooltip>

              <Tooltip title="Temporary Dressing" placement="top">
                <Image src={icon8} preview={false} />
              </Tooltip>

              <Tooltip title="Filling (Inlay)" placement="top">
                <Image src={icon9} preview={false} />
              </Tooltip>

              <Tooltip title="Onlay/ Veneer" placement="top">
                {' '}
                <Image src={icon10} preview={false} />
              </Tooltip>

              <Tooltip title="Cerec" placement="top">
                {' '}
                <Image src={icon11} preview={false} />
              </Tooltip>

              <Tooltip title="Crown/Bridge" placement="top">
                <Image src={icon12} preview={false} />
              </Tooltip>

              <Tooltip title="Pontic" placement="top">
                <Image src={icon13} preview={false} />
              </Tooltip>

              <Tooltip title="Implant" placement="top">
                <Image src={icon14} preview={false} />
              </Tooltip>

              <Tooltip title="Fissure Sealant" placement="top">
                <Image src={icon15} preview={false} />
              </Tooltip>

              <Tooltip title="Root" placement="top">
                {' '}
                <Image src={icon16} preview={false} />
              </Tooltip>

              {/* <Tooltip
                title="Impacted"
                placement="top"
              > <Image src={icon17} />
              </Tooltip> */}

              <Tooltip title="Partially Enrupted" placement="top">
                {' '}
                <Image src={icon18} preview={false} />
              </Tooltip>

              <Tooltip title="Exo/LA op(site mark)" placement="top">
                {' '}
                <Image src={icon19} preview={false} />
              </Tooltip>

              <Tooltip title="RCT(Site Marking)" placement="top">
                {' '}
                <Image src={icon20} preview={false} />
              </Tooltip>

              <Tooltip title="Milk Teeth" placement="top">
                {' '}
                <Image src={icon21} preview={false} />
              </Tooltip>

              <Tooltip title="Bridge" placement="top">
                {' '}
                <Image src={icon22} preview={false} />
              </Tooltip>

              <Tooltip title="Implant Bridge" placement="top">
                {' '}
                <Image src={icon23} preview={false} />
              </Tooltip>
            </Col>

            {/* <Col span={3} style={{marginLeft:160}}>
            <Text style={{fontSize:20}}>Dentition:</Text>  
            <Button onClick={changeImage} style={{width:'100px'}} > Permanent</Button>
              <Button onClick={changeImage} style={{width:'100px'}}>Mixed</Button>
              </Col> */}
          </Row>
          <Image
            onClick={changeImage}
            src={getImage()}
            preview={false}
            style={{ width: 1500 }}
          />
        </a>
      </Panel>
    </Collapse>
  );
};

export default Chart;
