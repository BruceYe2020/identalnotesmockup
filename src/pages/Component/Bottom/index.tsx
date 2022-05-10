import React from 'react';

import Nurseform from '@/pages/Component/Nurseform';
import Surgicalform from '@/pages/Component/Surgicalform';
import Split from 'split.js';
import style from './index.less';
import DaySurgicalform from '@/pages/Component/Daysurgery';
import { Contains } from '@/pages/Contains';
import ProcedurePrimary from '@/pages/Component/ProcedurePrimary';
import ProcedureTertiary from '@/pages/Component/ProcedureTertiary';
import PatientEducation from '@/pages/Component/PatientEducation';
import Recallform from '@/pages/Component/Recallform';
import TTSHhomescreen from '@/pages/Component/TTSHhomescreen';
import NEHRhomescreen from '@/pages/Component/NHGPhomescreen';
import KTPHhomescreen from '@/pages/Component/KTPHhomescreen';
import KTPHhomescreenNewVersion from '@/pages/Component/KTPHhomescreenNewVersion';
import MedicalCertificate from '@/pages/Component/MedicalCertificate';
import Prescription from '@/pages/Component/Prescription';
import Consent from '@/pages/Component/Consent';
import Xray from '@/pages/Component/Xray';
import Summary from '@/pages/Component/Summary';
import CarePlan from '@/pages/Component/CarePlan';

import TOSP from '@/pages/Component/TOSP';
import Test from '@/pages/Component/Test';
import NHGChart from '../NHGChart';
import KTPHCarePlan from '@/pages/Component/KTPHCarePlan';
import NHGPCarePlan from '@/pages/Component/NHGPCarePlan';

const Bottom: React.FC = () => {
  let gps3 = [1000, 300];
  return (
    <Contains.Consumer>
      {({ div, setdiv }) => (
        <div>
          {div.bot === '0' && <div className={style.scrollable}></div>}
          {div.bot === 'NF1' && (
            <div className={style.scrollable}>
              <Nurseform />
            </div>
          )}
          {div.bot === 'SF1' && (
            <div className={style.scrollable}>
              <Surgicalform />
            </div>
          )}
          {div.bot === 'F4' && (
            <div className={style.scrollable}>
              <DaySurgicalform />
            </div>
          )}
          {div.bot === 'F5' && (
            <div className={style.scrollable}>
              <Prescription />
            </div>
          )}
          {div.bot === 'F2' && (
            <div className={style.scrollable}>
              <ProcedurePrimary />
            </div>
          )}
          {div.bot === 'F7' && (
            <div className={style.scrollable}>
              <MedicalCertificate />
            </div>
          )}
          {div.bot === 'F9' && (
            <div className={style.scrollable}>
              <ProcedureTertiary />
            </div>
          )}

          {div.bot === 'F10' && (
            <div className={style.scrollable}>
              <PatientEducation />
            </div>
          )}

          {div.bot === 'N3' && (
            <div className={style.scrollable}>
              <Summary />
            </div>
          )}
          {div.bot === 'N4' && (
            <div className={style.scrollable}>
              <CarePlan />
            </div>
          )}
          {div.bot === 'N5' && (
            <div className={style.scrollable}>
              <TOSP />
            </div>
          )}
          {div.bot === 'RF1' && (
            <div className={style.scrollable}>
              <Recallform />
            </div>
          )}
          {div.bot === 'TTSHF1' && (
            <div className={style.scrollable}>
              <TTSHhomescreen />
            </div>
          )}
          {div.bot === 'NHGPF1' && (
            <div className={style.scrollable}>
              <NEHRhomescreen />
            </div>
          )}
          {div.bot === 'KTPHF1' && (
            <div className={style.scrollable}>
              <KTPHhomescreen />
            </div>
          )}
          {div.bot === 'KTPHF2' && (
            <div className={style.scrollable}>
              <KTPHhomescreenNewVersion />
            </div>
          )}

          {div.bot === 'Test1' && (
            <div className={style.scrollable}>
              <Test />
            </div>
          )}
          {div.bot === 'CF1' && (
            <div className={style.scrollable}>
              <Consent />
            </div>
          )}
          {div.bot === 'CF2' && (
            <div className={style.scrollable}>
              <Xray />
            </div>
          )}

          {div.bot === 'C3' && (
            <div className={style.scrollable}>
              <NHGChart />
            </div>
          )}

          {div.bot === 'careplannhgp' && (
            <div className={style.scrollable}>
              <NHGPCarePlan />
            </div>
          )}
          {div.bot === 'careplanktph' && (
            <div className={style.scrollable}>
              <KTPHCarePlan />
            </div>
          )}
          {div.bot === 'careplanttsh' && (
            <div className={style.scrollable}></div>
          )}
          {div.bot === 'careplanwhc' && (
            <div className={style.scrollable}></div>
          )}
          {div.bot === 'careplanimh' && (
            <div className={style.scrollable}></div>
          )}
        </div>
      )}
    </Contains.Consumer>
  );
};
export default Bottom;
