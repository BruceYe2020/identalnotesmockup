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
import treatmentchart001 from '../images/treatmentchart/treatmentchart001.png';
import treatmentchart002 from '../images/treatmentchart/treatmentchart002.png';
import treatmentchart003 from '../images/treatmentchart/treatmentchart003.png';
import treatmentchart004 from '../images/treatmentchart/treatmentchart004.png';
import treatmentchart005 from '../images/treatmentchart/treatmentchart005.png';
import treatmentchart006 from '../images/treatmentchart/treatmentchart006.png';
import singletoothdiagram from '../images/treatmentchart/singletoothdiagram.png';
import icon99 from '../images/legendicon/icon99.png';
import icon100 from '../images/legendicon/icon100.png';
import icon101 from '../images/legendicon/icon101.png';
import icon102 from '../images/legendicon/icon102.png';
import icon103 from '../images/legendicon/icon103.png';
import icon104 from '../images/legendicon/icon104.png';
import icon105 from '../images/legendicon/icon105.png';
import icon106 from '../images/legendicon/icon106.png';
import icon107 from '../images/legendicon/icon107.png';
import icon108 from '../images/legendicon/icon108.png';
import icon109 from '../images/legendicon/icon109.png';
import icon110 from '../images/legendicon/icon110.png';
import icon111 from '../images/legendicon/icon111.png';
import icon112 from '../images/legendicon/icon112.png';
import icon113 from '../images/legendicon/icon113.png';
import icon114 from '../images/legendicon/icon114.png';

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
import icon24 from '../images/icon24.png';
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
        return treatmentchart001;
      case 2:
        return treatmentchart002;
      case 3:
        return treatmentchart003;
      case 4:
        return treatmentchart004;
      case 5:
        return treatmentchart005;
      case 6:
        return treatmentchart006;
    }
  };

  const [showSingleTooth, setSingleTooth] = useState(false);

  return (
    <Collapse defaultActiveKey={['chart']}>
      <Panel header="Chart" key={'chart'}>
        <a>
          <Row>
            <Col>
              <Button
                style={{
                  fontSize: 20,
                  marginLeft: '10px',
                  height: '50px',
                  width: '100px',
                  borderColor: 'blue',
                }}
                onClick={() => {
                  setSingleTooth(true);
                }}
              >
                Chart{' '}
              </Button>
            </Col>

            <Col span={15}>
              <div>
                {' '}
                {showSingleTooth ? (
                  <>
                    <Tooltip title="Clear" placement="top">
                      <Image
                        src={icon99}
                        preview={false}
                        style={{
                          height: '50px',
                          width: '60px',
                          borderColor: 'black',
                          marginLeft: '10px',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Milk Teeth" placement="top">
                      <Image
                        src={icon100}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Missing/Extraction" placement="top">
                      <Image
                        src={icon101}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Root" placement="top">
                      <Image
                        src={icon102}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Partially Erupted" placement="top">
                      <Image
                        src={icon103}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Onlay/Veneer" placement="top">
                      <Image
                        src={icon104}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Crown" placement="top">
                      <Image
                        src={icon105}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Implant" placement="top">
                      <Image
                        src={icon106}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Implant Bridge" placement="top">
                      <Image
                        src={icon107}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Bridge" placement="top">
                      <Image
                        src={icon108}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Pontic" placement="top">
                      <Image
                        src={icon109}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Decay" placement="top">
                      <Image
                        src={icon110}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Filling(Tooth Coloured)" placement="top">
                      <Image
                        src={icon111}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Filing" placement="top">
                      <Image
                        src={icon112}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Filling(Inlay)" placement="top">
                      <Image
                        src={icon113}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                    <Tooltip title="Root Canal" placement="top">
                      <Image
                        src={icon114}
                        preview={false}
                        style={{
                          height: '50px',
                          marginLeft: '10px',
                          width: '60px',
                          borderColor: 'black',
                        }}
                      />
                    </Tooltip>
                  </>
                ) : (
                  ''
                )}
              </div>

              {/* <Tooltip title="Clear" placement="top">
                <Image src={icon24} preview={false} />
              </Tooltip>
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
              </Tooltip> */}

              {/* <Tooltip
                title="Impacted"
                placement="top"
              > <Image src={icon17} />
              </Tooltip> */}

              {/* <Tooltip title="Partially Enrupted" placement="top">
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
              </Tooltip> */}
            </Col>

            {/* <Col span={3} style={{marginLeft:160}}>
            <Text style={{fontSize:20}}>Dentition:</Text>  
            <Button onClick={changeImage} style={{width:'100px'}} > Permanent</Button>
              <Button onClick={changeImage} style={{width:'100px'}}>Mixed</Button>
              </Col> */}
          </Row>

          <Row style={{ marginBottom: '30px' }}></Row>
          <Image
            onClick={changeImage}
            src={getImage()}
            preview={false}
            style={{ width: 1900 }}
          />

          <Button style={{ width: 250, height: 220, borderColor: 'black' }}>
            {showSingleTooth ? (
              <>
                <Image
                  src={singletoothdiagram}
                  preview={false}
                  style={{ width: 200, height: 170, marginLeft: '10px' }}
                />
              </>
            ) : (
              ''
            )}
          </Button>
        </a>
      </Panel>
    </Collapse>
  );
};

export default Chart;
