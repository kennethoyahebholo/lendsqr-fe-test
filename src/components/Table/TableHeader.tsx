import React from 'react'
import { FunctionComponent } from 'react';
import formatHeader from '../../utils/formatHeaders';

export interface ITableHeader {
  headers: any;
  allowKeyArr: any;
  action: any;
  formatLabels?: any;
  checked?: any;
  handleChecked?: any;
  allChecked?: any;
  actionList?:any;
  hasNameAndImage?:boolean;
}

const TableHeader: FunctionComponent<ITableHeader> = ({
  // headers: titles,
  allowKeyArr,
  action,
  checked,
  formatLabels,
  handleChecked,
  actionList,
  hasNameAndImage,
  // allChecked,
}) => {
  // const headers = action ? [...titles, 'ACTION'] : titles;
  const keyArr = action ? [...allowKeyArr, 'ACTION'] : allowKeyArr;
  // let newArr = [];
  // if (checked) newArr = [...headers, ''];

  // if(allowKeyArr.includes('image')) newArr = [ 'IMG', ...newArr];
  const randomID = `rand-${Date.now().toString().slice(-5)}`;

  return (
    <thead>
      <tr className="header-pad">
        {checked && (
          <th className="checkbox-cover">
            <div className="table-checkbox">
              {/* <Checkbox
                onChange={({ target: { checked: checkedStatus } }) => handleChecked('all-ids', checkedStatus)}
                id={randomID}
                name={`check-name-${randomID}`}
                loading={false}
                onClick={() => {}}
                value={undefined}
              /> */}
            </div>
          </th>
        )}
        {keyArr.map((allowed: any, index: number) => {
          const key = Array.isArray(allowed) ? allowed[0] : allowed;
          // const name = Array.isArray(allowed) ? allowed[1] : allowed;
          return (
            <th
              className={`${['ACTION'].includes(allowed) ? 'action-key' : ''} ${
                ['image'].includes(allowed) ? 'img-column' : ''
              }`}
              key={index}
            >
              {formatLabels
                ? key === 'image'
                  ? hasNameAndImage ? formatLabels?.name : ''
                  : formatLabels[key] || formatHeader(key)
                : formatHeader(key)}
            </th>
          );
        })}
        {

          actionList && <th />

        }

      </tr>
    </thead>
  );
};

export default TableHeader