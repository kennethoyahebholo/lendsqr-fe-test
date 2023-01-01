import { FunctionComponent } from 'react';
// import EmptyRecord from '../../svgs/EmptyRecord';
import './Table.scss';

export interface IEmptyTableComp {
  title?: string;
  text1?: string;
  text2?: string;
  buttonName?: string;
  handleClick?: any;
}

const EmptyTableComp: FunctionComponent<IEmptyTableComp> = ({
  title,
  text1,
  text2,
}) => (
  <div className="flexed-center empty-cover">
    <div className="empty-icon">
      {/* <EmptyRecord /> */}
    </div>
    <h5>{title || 'You do not have any records yet'}</h5>
    {text1 && <span>{text1}</span>}
    {text2 && <span>{text2}</span>}
  </div>
);

export default EmptyTableComp;
