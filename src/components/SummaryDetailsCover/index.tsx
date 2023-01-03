import React from 'react';
import './styles.scss';

interface ISummaryDetailsCover{
  children:any;
  title?:string;
  width?:string;
  paddingBottom?:string;
  paddingTop?:string;
}
const SummaryDetailsCover = ({
  children, title, width, paddingBottom, paddingTop,
}:ISummaryDetailsCover) => (
  <div style={{ width, paddingBottom, paddingTop }}>
    {
      title && <div className="summary-header">{title}</div>
    }

    {children}

  </div>
);
export default SummaryDetailsCover;