import React, { useState } from 'react';
import {
  Tabs,
  Card,
  Dropdown,
  Row,
  Button,
  Input,
  Menu,
  Modal,
  Typography,
  Col,
} from 'antd';
import { PlusCircleOutlined, CloseOutlined } from '@ant-design/icons';

const OrthodonticsWithCardAdditional: React.FC = () => {
  const { TabPane } = Tabs;
  const { TextArea } = Input;
  const { Text } = Typography;

  const [updateVisible, setupdateVisible] = useState(false);

  const handleUpdate = () => {
    setupdateVisible(true);
  };

  const handleOkupdate = () => {
    setupdateVisible(false);
  };

  const handleCancelupdate = () => {
    setupdateVisible(false);
  };

  const [viewVisible, setviewVisible] = useState(false);

  const handleView = () => {
    setviewVisible(true);
  };

  const handleOkview = () => {
    setviewVisible(false);
  };

  const handleCancelview = () => {
    setviewVisible(false);
  };

  const menu = (
    <Menu>
      <Menu.Item key="1" onClick={handleView}>
        View Plan
      </Menu.Item>
      <Modal
        title=""
        visible={viewVisible}
        onOk={handleOkview}
        onCancel={handleCancelview}
        width={600}
        style={{ fontSize: 20 }}
      >
        <Card>
          <Text>The care plan is....</Text>
          <TextArea style={{ height: 200 }}></TextArea>
        </Card>
      </Modal>
      <Menu.Item key="2">Delete</Menu.Item>

      <Menu.Item key="4">Start treatment</Menu.Item>
      <Menu.Item key="5">End treatment</Menu.Item>
      <Menu.Item key="6">Follow up</Menu.Item>
      <Menu.Item key="3" onClick={handleUpdate}>
        Update
      </Menu.Item>
      <Modal
        title=""
        visible={updateVisible}
        onOk={handleOkupdate}
        onCancel={handleCancelupdate}
        width={600}
        style={{ fontSize: 20 }}
      >
        <Text>The previous care plan is....</Text>
        <TextArea style={{ height: 200 }}></TextArea>
        <pre></pre>
        <Row>
          <Col span={20}></Col>
          <Col span={3}>
            <Button style={{ width: 90 }}>Update</Button>
          </Col>
        </Row>
      </Modal>
    </Menu>
  );

  return (
    <Tabs tabPosition="bottom" style={{ height: '100%' }}>
      <TabPane tab="Care Plan" key="1">
        <Row>
          <Button
            type="primary"
            icon={<PlusCircleOutlined />}
            style={{ width: '38%' }}
          >
            Add
          </Button>
          <pre> </pre>
          <Button
            type="primary"
            icon={<CloseOutlined />}
            style={{ width: '38%' }}
          >
            Delete
          </Button>
        </Row>
        <Card size="small" style={{ width: '90%' }}>
          <Dropdown overlay={menu} trigger={['contextMenu']}>
            <div
              className="site-dropdown-context-menu"
              style={{
                textAlign: 'center',
              }}
            >
              <strong>
                <p style={{ fontSize: 20, width: '60%' }}>Orthodontics</p>
                <p style={{ width: '40%' }}>Shirely Tan</p>
              </strong>
              <p style={{ fontSize: 10, textAlign: 'right' }}>
                Updated on 08 Mar 18
              </p>
            </div>
          </Dropdown>
        </Card>

        <Card size="small" style={{ width: '90%' }}>
          <Dropdown overlay={menu} trigger={['contextMenu']}>
            <div
              className="site-dropdown-context-menu"
              style={{
                textAlign: 'center',
              }}
            >
              <strong>
                <p style={{ fontSize: 20, width: '30%' }}>Scaling</p>
                <p style={{ width: '35%' }}>Shirley Tan</p>
              </strong>
              <p style={{ fontSize: 10, textAlign: 'right' }}>
                Updated on 08 Mar 18
              </p>
            </div>
          </Dropdown>
          {/*<strong>
                  <p style={{ fontSize: 20 }}>Scaling</p>
                  <p>Shirely Tan</p>
                </strong>
                <p style={{ fontSize: 10, textAlign: 'right' }}>
                  Updated on 08 Mar 18
               </p>*/}
        </Card>
        <Card size="small" style={{ width: '90%' }}>
          <Dropdown overlay={menu} trigger={['contextMenu']}>
            <div
              className="site-dropdown-context-menu"
              style={{
                textAlign: 'center',
              }}
            >
              <strong>
                <p style={{ fontSize: 20, width: '30%' }}>Extraction</p>
                <p style={{ width: '35%' }}>Shirley Tan</p>
              </strong>
              <p style={{ fontSize: 10, textAlign: 'right' }}>
                Updated on 08 Mar 18
              </p>
            </div>
          </Dropdown>
        </Card>
        <Card size="small" style={{ width: '90%' }}>
          <Dropdown overlay={menu} trigger={['contextMenu']}>
            <div
              className="site-dropdown-context-menu"
              style={{
                textAlign: 'center',
              }}
            >
              <strong>
                <p style={{ fontSize: 20, width: '25%' }}>Filling</p>
                <p style={{ width: '35%' }}>Shirley Tan</p>
              </strong>
              <p style={{ fontSize: 10, textAlign: 'right' }}>
                Updated on 08 Mar 18
              </p>
            </div>
          </Dropdown>
        </Card>

        <Card size="small" style={{ width: '90%' }}>
          <Dropdown overlay={menu} trigger={['contextMenu']}>
            <div
              className="site-dropdown-context-menu"
              style={{
                textAlign: 'center',
              }}
            >
              <strong>
                <p style={{ fontSize: 20, width: '25%' }}>Endodontics</p>
                <p style={{ width: '35%' }}>Shirley Tan</p>
              </strong>
              <p style={{ fontSize: 10, textAlign: 'right' }}>
                Updated on 08 Mar 18
              </p>
            </div>
          </Dropdown>
        </Card>
        {/* <Card size="small" style={{ width: '90%' }}>
          <strong>
            <p style={{ fontSize: 20 }}></p>
            <p></p>
          </strong>
          <pre> </pre>
          <pre> </pre>
          <pre> </pre>
          <pre> </pre>
        
          <p style={{ fontSize: 10, textAlign: 'right' }}></p>
        </Card> */}
      </TabPane>
      <TabPane tab="Image" key="2" style={{ width: '90%' }}>
        <Row>
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Add
          </Button>
          <pre> </pre>
          <Button type="primary" icon={<CloseOutlined />}>
            delete
          </Button>
        </Row>
        <TextArea style={{ height: 1000 }} />
      </TabPane>
      <TabPane tab="Instrument" key="3" style={{ width: '90%' }}>
        <Row>
          <Button type="primary" icon={<PlusCircleOutlined />}>
            Add
          </Button>
          <pre> </pre>
          <Button type="primary" icon={<CloseOutlined />}>
            delete
          </Button>
        </Row>
        <TextArea style={{ height: 1000 }} />
      </TabPane>
    </Tabs>
  );
};

export default OrthodonticsWithCardAdditional;
