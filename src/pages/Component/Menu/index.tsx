// @ts-ignore
import React, { useContext, useState } from 'react';

import { Layout, Menu, Switch, Radio, Row } from 'antd';
import { Contains } from '@/pages/Contains';

const { SubMenu } = Menu;

const Mainmenu: React.FC = () => {
  const { div, setdiv } = useContext(Contains);
  const handleClick = (e: { key: string }) => {
    console.log('click ', e);
    if (e.key.includes('Reset')) {
      setdiv({
        top: '0',
        bot: '0',
      });
    } else if (e.key.includes('F')) {
      setdiv({
        top: div.top,
        bot: e.key,
      });
    } else {
      setdiv({
        top: div.top,
        bot: e.key,
      });
    }
  };

  const [mode, setMode] = React.useState('inline');
  const changeMode = (value: any) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const [isShared, setIsShared] = useState(true);
  const [checkedktph, setCheckedktph] = useState(true);

  const showShared = () => {
    setIsShared(!isShared);
  };

  if (isShared) {
    return (
      <Menu
        mode={mode}
        theme="dark"
        onClick={handleClick}
        defaultSelectedKeys={['1']}
        style={{ height: '100%' }}
      >
        <pre> </pre>
        {/* <Switch onChange={showShared}/> Shared */}
        <Row>
          <pre> </pre>
          <Radio checked={checkedktph} style={{ color: 'white' }}>
            KTPH
          </Radio>
          <Radio
            onClick={showShared}
            checked={!checkedktph}
            style={{ color: 'white' }}
          >
            Shared
          </Radio>
        </Row>

        <pre> </pre>
        <SubMenu key="sub1" title="Notes">
          <Menu.Item key="N1">All</Menu.Item>
          <Menu.Item key="N2">Speciality</Menu.Item>
          <Menu.Item key="N3">Summary</Menu.Item>
          <Menu.Item key="N4">Care Plan</Menu.Item>
          <Menu.Item key="N5">TOSP</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Charts">
          <Menu.Item key="C1">Dental Chart</Menu.Item>
          <Menu.Item key="C2">Periodontal Chart</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title="Radiographs">
          <Menu.Item key="R1">Dental</Menu.Item>
          <Menu.Item key="R2">Orthopantogram</Menu.Item>
          <Menu.Item key="R3">Cephalogram</Menu.Item>
          <Menu.Item key="R4">Other</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" title="Images">
          <Menu.Item key="I1">Dental</Menu.Item>
          <Menu.Item key="I2">Orthodontic</Menu.Item>
          <Menu.Item key="I3">Orthognathic</Menu.Item>
          <Menu.Item key="I4">Procedures</Menu.Item>
          <Menu.Item key="I5">Lesions</Menu.Item>
          <Menu.Item key="I6">Trauma</Menu.Item>
          <Menu.Item key="I7">Others</Menu.Item>
        </SubMenu>
        <Menu.Item key="V1">Videos</Menu.Item>
        <Menu.Item key="W1">Wave Files</Menu.Item>
        <SubMenu key="sub5" title="Lab Reports"></SubMenu>
        <SubMenu key="sub6" title="Documents"></SubMenu>
        <SubMenu key="sub7" title="Correspondence">
          <Menu.Item key="Cor1">Electronic</Menu.Item>
          <Menu.Item key="Cor2">Scanned Documents</Menu.Item>
        </SubMenu>
        <SubMenu key="sub8" title="Forms">
          <Menu.Item key="F1">Orthodontic</Menu.Item>
          {/* <Menu.Item key="F2">Procedure Primary</Menu.Item> */}
          <Menu.Item key="F9">Procedure</Menu.Item>
          <Menu.Item key="F3">General Notes</Menu.Item>
          <Menu.Item key="F4">Day Surgery Admission</Menu.Item>
          <Menu.Item key="F5">Prescription</Menu.Item>
          <Menu.Item key="F6">Memos</Menu.Item>
          <Menu.Item key="F7">Medical Certificate</Menu.Item>
          <Menu.Item key="F8">Patient Report</Menu.Item>
          <Menu.Item key="F10">Patient Education</Menu.Item>
        </SubMenu>
        <Menu.Item key="NF1">Nurse Form</Menu.Item>
        <Menu.Item key="SF1">OT Surgical Form</Menu.Item>
        <Menu.Item key="CF1">Consent</Menu.Item>
        <Menu.Item key="CF2">Xray</Menu.Item>
        <Menu.Item key="Reset">Reset</Menu.Item>
        <SubMenu key="sub9" title="Tools">
          <Menu.Item key="RF1">Recall</Menu.Item>
        </SubMenu>
        <SubMenu key="sub10" title="Homescreen">
          {/*<Menu.Item key="TTSHF1">TTSH</Menu.Item>*/}
          <Menu.Item key="NHGPF1">NHGP</Menu.Item>
          <Menu.Item key="KTPHF1">KTPH/TTSH</Menu.Item>
          <Menu.Item key="KTPHF2">KTPH/TTSH(New Version)</Menu.Item>
          <Menu.Item key="Test1">Test</Menu.Item>
        </SubMenu>
      </Menu>
    );
  } else {
    return (
      <Menu
        mode={mode}
        theme="dark"
        onClick={handleClick}
        defaultSelectedKeys={['1']}
        style={{ height: '100%' }}
      >
        {/* <pre> </pre> */}
        {/* <Switch onChange={changeMode}/> Shared */}
        <pre> </pre>
        <Row>
          <pre> </pre>
          <Radio
            onClick={showShared}
            checked={!checkedktph}
            style={{ color: 'white' }}
          >
            KTPH
          </Radio>
          <Radio checked={checkedktph} style={{ color: 'white' }}>
            Shared
          </Radio>
        </Row>
        <pre> </pre>
        <SubMenu key="sub1" title="Notes">
          <Menu.Item key="N1">All</Menu.Item>
          <Menu.Item key="N3">Summary</Menu.Item>
          {/* <Menu.Item key="N4">Care Plan</Menu.Item> */}
        </SubMenu>
        <SubMenu key="sub4" title="Care Plan">
          <Menu.Item key="careplannhgp">NHGP</Menu.Item>
          <Menu.Item key="careplanktph">KTPH</Menu.Item>
          <Menu.Item key="careplanttsh">TTSH</Menu.Item>
          <Menu.Item key="careplanwhc">WHC</Menu.Item>
          <Menu.Item key="careplanimh">IMH</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title="Charts">
          <Menu.Item key="C3">NHG Chart</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" title="Radiographs">
          <Menu.Item key="R1">Dental</Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
};
export default Mainmenu;
