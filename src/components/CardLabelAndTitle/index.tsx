import React from 'react';
import './styles.scss';

interface ICardLabelAndTitle{
  content:any;
  attribute:any;
  label:any;
  marginBottom?:string;
}
const CardLabelAndTitle = ({
  content, attribute, label, marginBottom,
}:ICardLabelAndTitle) => (
  <div className="row content-card-row-cover">
    {
      attribute?.map((ele:any, i:any) => (
        <div key={i} className={ele ? 'col-md content-card-cover' : 'col-md empty-content-card-cover'} style={{ marginBottom }}>
          <div className="card-label">
            {' '}
            {label?.[ele]}
          </div>
          <div className={`card-title ${ele}`}>{content?.[ele]}</div>
        </div>
      ))
    }

  </div>
);
export default CardLabelAndTitle;
