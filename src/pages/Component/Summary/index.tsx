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
    toothNum: 'N/A',
    code: 'DLA001',
    desc: 'CONSULTATION(PACKAGE)',
    status: 'In Progress',
    timein: '11:05',
    timeout: '13:00',
    category: 'Procedure Record',
  },
  {
    key: '2',
    date: '4/1/2021',
    surgeon: 'Susanna Tan Li Wen',
    speciality: 'Orthodontics',
    institution: 'KTPH',
    toothNum: '13',
    code: 'DLJ001',
    desc: 'EXTRACTION',
    status: 'In Progress',
    timein: '11:05',
    timeout: '13:00',
    category: 'Procedure Record',
  },
  {
    key: '3',
    date: '4/1/2021',
    surgeon: 'Susanna Tan Li Wen',
    speciality: 'Orthodontics',
    institution: 'KTPH',
    toothNum: '14',
    code: 'DLJ001',
    desc: 'EXTRACTION',
    status: 'In Progress',
    timein: '11:05',
    timeout: '13:00',
    category: 'Procedure Record',
  },
  {
    key: '4',
    date: '4/1/2021',
    surgeon: 'Susanna Tan Li Wen',
    speciality: 'Orthodontics',
    institution: 'KTPH',
    toothNum: '16',
    code: 'DLB031',
    desc: 'FILLING(1 SURFACE)',
    status: 'In Progress',
    timein: '11:05',
    timeout: '13:00',
    category: 'Procedure Record',
  },
];
const { Panel } = Collapse;
const Summary: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const [isModalVisible1, setIsModalVisible1] = useState(false);

  const showModal1 = () => {
    setIsModalVisible1(true);
  };

  const handleOk1 = () => {
    setIsModalVisible1(false);
  };

  const handleCancel1 = () => {
    setIsModalVisible1(false);
  };
  console.log(moment());
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows,
      );
    },
    onSelect: (record, selected, selectedRows) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected, selectedRows, changeRows) => {
      console.log(selected, selectedRows, changeRows);
    },
  };

  return (
    <div className={style.Globalsettings}>
      <Col span={24}>
        <Collapse defaultActiveKey={['1']}>
          <Panel header="Summary" key="1" className="boldheader">
            <Row>
              <Col span={24}>
                <Form
                  labelCol={{ span: 0 }}
                  wrapperCol={{ span: 500 }}
                  layout="horizontal"
                >
                  <Row gutter={{ xs: 4 }}>
                    <Col span={4}>
                      <Form.Item label="Date from">
                        <DatePicker style={{ width: '100%' }} />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>

                <Card>
                  <Table
                    pagination={false}
                    rowSelection={{
                      ...rowSelection,
                    }}
                    scroll={{ x: 1500 }}
                    style={{ width: '100%', height: 750 }}
                    dataSource={data}
                  >
                    <Column
                      title="Date"
                      dataIndex="date"
                      key="date"
                      width={150}
                      fixed="left"
                    />
                    <Column
                      title="Surgeon"
                      dataIndex="surgeon"
                      key="surgeon"
                      width={150}
                      fixed="left"
                    />
                    <Column
                      title="Speciality"
                      dataIndex="speciality"
                      key="speciality"
                      width={200}
                    />
                    <Column
                      title="Institution"
                      dataIndex="institution"
                      key="institution"
                      width={200}
                    />
                    <Column
                      title="Tooth Number"
                      dataIndex="toothNum"
                      key="toothNum"
                      width={150}
                    />
                    <Column
                      title="Procedure Code"
                      dataIndex="code"
                      key="code"
                      width={150}
                    />
                    <Column
                      title="Description"
                      dataIndex="desc"
                      key="desc"
                      width={300}
                    />
                    {/* <Column
                      title="Status"
                      dataIndex="status"
                      key="status"
                      width={150}
                    /> */}

                    {/*<Column
                      title="Category"
                      dataIndex="category"
                      key="category"
                      width={200}
                    />*/}
                  </Table>
                  {/* <Row gutter={{xs:4,sm:8}}>
                    <Col>
                    <Button type="primary">Select All</Button>
                    </Col>
                    <Col>
                    <Button type="primary">Unselect All</Button>
                    </Col>
                    <Col>
                    <Button type="primary">Recall:</Button>
                    </Col>
                    <Col span={16}>
                    <Input style={{width:"100%"}}/>
                    </Col>
                    <Col>
                    <Button type="primary">Period:</Button>
                    </Col>
                    <Col>
                    <InputNumber min={1} max={10} defaultValue={3}/>
                    </Col>
                    <Col>
                    <Button type="primary">Recall</Button>
                    </Col>
                    <Col>
                    <Button type="primary">Undo</Button>
                    </Col>
                  </Row> */}
                </Card>
              </Col>
            </Row>
          </Panel>
        </Collapse>
      </Col>
    </div>
  );
};

export default Summary;
