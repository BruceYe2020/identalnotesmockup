import React, { useState } from 'react';
import { Collapse, Image, Popconfirm } from 'antd';
import DentalChart00 from '../images/DentalChart00.png';
import DentalChart11 from '../images/DentalChart11.png';
import DentalChart22 from '../images/DentalChart22.png';
import DentalChart33 from '../images/DentalChart33.png';
import DentalChart44 from '../images/DentalChart44.png';
import DentalChart55 from '../images/DentalChart55.png';
import DentalChart66 from '../images/DentalChart66.png';
import DentalChart77 from '../images/DentalChart77.png';
import DentalChart88 from '../images/DentalChart88.png';
import DentalChart99 from '../images/DentalChart99.png';
import DentalChart111 from '../images/DentalChart111.png';
import DentalChart100 from '../images/DentalChart100.png';

const Chart: React.FC = () => {
  const [image, setImage] = useState(1);
  const { Panel } = Collapse;
  const changeImage = () => {
    if (image === 12) setImage(1);
    else setImage((pre) => pre + 1);
  };
  const getImage = () => {
    switch (image) {
      case 1:
        return DentalChart00;
      case 2:
        return DentalChart22;
      case 3:
        return DentalChart33;
      case 4:
        return DentalChart00;
      case 5:
        return DentalChart44;
      case 6:
        return DentalChart55;
      case 7:
        return DentalChart66;
      case 8:
        return DentalChart77;
      case 9:
        return DentalChart88;
      case 10:
        return DentalChart99;
      case 11:
        return DentalChart111;
      case 12:
        return DentalChart100;
    }
  };
  return (
    <Collapse defaultActiveKey={['chart']}>
      <Panel header="Chart" key={'chart'}>
        <a>
          <Image onClick={changeImage} src={getImage()} preview={false} />
        </a>
      </Panel>
    </Collapse>
  );
};

export default Chart;
