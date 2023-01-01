import {
  Fragment, FunctionComponent, useState,
} from 'react';
// import { getClassStyle } from '../../utils/tableHelpers';
// import formatBodyTag from '../../utils/formatBody';
// import Checkbox from '../CheckboxNew';
// import ImageComp from '../InitialsImage';
// import ViewLink from '../../svgs/ViewLink';
// import MerchantDropdown from '../MerchantDropdown';
// import ListIcon from '../../svgs/ListIcon';
// import adminFormatBodyTag from '../../utils/adminFormatBody';


export interface ITableBody {
  content: any;
  clickable: any;
  handleClick: any;
  allowKeyArr: any;
  dominantName: any;
  imageToShow: any;
  hideDominantImage: any;
  action: any;
  checked?: any;
  handleChecked?: any;
  viewLinkFunc?: any;
  handleSelectDropdown?:any;
  dropdownData?:any;
  actionList?:any;
  viewLinkText?:any;
  btnObj?: any;
  formatLabels?:any;
  allowStatusName?:boolean;
  preventDoubleLinkTrigger?:boolean;
}

const TableBody: FunctionComponent<ITableBody> = ({
  content,
  clickable,
  handleClick,
  allowKeyArr,
  dominantName,
  imageToShow,
  hideDominantImage,
  action,
  checked,
  handleChecked,
  viewLinkFunc,
  handleSelectDropdown,
  dropdownData,
  actionList,
  viewLinkText,
  btnObj,
  allowStatusName,
  preventDoubleLinkTrigger,
}) => {
  const singleRec = (key_val: string, index?:any) => (
    <p
      // className={`${
      //   [
      //     'status',
      //     'enabled',
      //     'quantity',
      //     'statusName',
      //     'settlementStatus',
      //     'transactionType',
      //     'type',
      //     'amount',
      //     'trxAmount',
      //     'charges',
      //     'fees',
      //     'commission',
      //     'vendorFees',
      //     'comment',
      //     'defaultCharges',
      //     'message',
      //     'pushNotificationStatus',
      //   ].includes(key_val)
      //     ? getClassStyle(content, key_val)
      //     : ''
      // } `}
    >
      {/* {typeof content[key_val] === 'object'
        ? key_val === 'image' ? <ImageComp content={content} index={index} hasType="small-type" /> : ''
        : (
      // eslint-disable-next-line react/jsx-no-useless-fragment
          <>
            {
              key_val === 'image' ? (
                <span>
                  <img className="admin-small-image-table" src={content[key_val]} alt="I" />
                </span>
              ) : adminFormatBodyTag(content, key_val, allowStatusName)
            }

          </>
        )} */}
    </p>
  );

  const doubleRec = (ele: [string, string] | any[]) => (
    <div className="double-cell">
      {singleRec(ele[0])}
      {singleRec(ele[1])}
    </div>
  );

  const [dropdownState, setdropdownState] = useState({
    status: false,
    id: '',
  });

  const handleShowDropdown = (id:any) => {
    if (dropdownState?.status) {
      setdropdownState({
        status: false,
        id: '',
      });
    } else {
      setdropdownState({
        id,
        status: true,

      });
    }
  };
  const handleAndClearDropdowState = (title:any, details:any) => {
    handleSelectDropdown(title, details);
    setdropdownState({
      status: false,
      id: '',
    });
  };

  return (
    <tbody>
      <tr className={action ? 'action-tr' : ''} style={{ position: 'relative' }}>
        {checked && (
          <td className="checkbox-cover">
            <div className="table-checkbox">
              {/* <Checkbox
                onChange={({ target: { checked: checkedStatus } }) => handleChecked(content?.id, checkedStatus)}
                id={content?.id}
                name={`check-name-${content?.id}`}
                value={checked.includes(content?.id)}
                loading={false}
                onClick={() => {}}
              /> */}
            </div>
          </td>
        )}
        {allowKeyArr.map((ele: any, index: number): any => {
          const key = ele;
          const isDouble = Array.isArray(ele);
          const ImageNameColumn = () => (
            <td
              onClick={() => {
                if (window.getSelection?.()?.toString()) {
                  return;
                }
                handleClick?.(content);
              }}
              style={{ cursor: clickable ? 'pointer' : '' }}
              className="flexed-row"
              key={index}
            >
              {!hideDominantImage && (
              <img
                className="table-img"
                src={
                  content[imageToShow]
                      || 'https://publicpayfiimages.s3.amazonaws.com/randomAsset/dummyTableImage_imageBck_haw7f8.jpg'
                }
                alt="img url"
              />
              )}
              {/* <p>
                {typeof content[key] === 'object'
                  ? ''
                  : adminFormatBodyTag(content, key)}
              </p> */}
            </td>
          );
          const NormalColumns = () => (
            <td
              onClick={() => {
                if (window.getSelection?.()?.toString()) {
                  return;
                }
                handleClick?.(content);
              }}
              style={{ cursor: clickable ? 'pointer' : '' }}
              className=""
              key={index}
            >
              {!isDouble ? singleRec(ele, index) : doubleRec(ele)}
            </td>
          );

          if (imageToShow && dominantName && key === dominantName) {
            return (
              <Fragment key={index}>
                <ImageNameColumn />
              </Fragment>
            );
          }

          if (['img', 'imgUrl', 'image', 'photo'].includes(key)) {
            return (
              <Fragment key={index}>
                <td
                  onClick={() => {
                    handleClick?.(content);
                  }}
                  style={{ cursor: clickable ? 'pointer' : '' }}
                  className=""
                  key={index}
                >
                  {/* <ImageComp content={content} key={key} index={key} /> */}
                </td>
              </Fragment>
            );
          }

          if (['link'].includes(key)) {
            return (
              <Fragment key={index}>
                <td
                  // onClick={preventDoubleLinkTrigger ? null : () => {
                  //   // prevent click during highlighting
                  //   if (window.getSelection?.()?.toString()) {
                  //     return;
                  //   }
                  //   handleClick?.(content);
                  // }}
                  style={{ cursor: clickable ? 'pointer' : '' }}
                  className="link-view"
                  key={index}
                >
                  {/* <ViewLink /> */}
                  <span onClick={() => viewLinkFunc(content, key)}>
                    {viewLinkText || 'View Link'}
                  </span>
                </td>
              </Fragment>
            );
          }

          if (['btnType'].includes(key)) {
            return (
              <Fragment key={index}>
                <td
                  style={{ cursor: clickable ? 'pointer' : '' }}
                  className="btn-view"
                  key={index}
                >
                  {btnObj?.showOn(content) && (
                    <span className={btnObj?.shouldBeDisabled(content) ? 'disabled-row' : ''} onClick={() => btnObj?.cb(content)}>
                      {btnObj?.text?.(content)}
                    </span>
                  )}
                </td>
              </Fragment>
            );
          }

          return (
            <Fragment key={index}>
              <NormalColumns />
            </Fragment>
          );
        })}
        {action && (
          <td className="action-key">
            <span onClick={() => action.fxn(content)}>{action?.name}</span>
          </td>
        )}
        {
          actionList && (
          <td>
            <span onClick={() => handleShowDropdown(content?.id)} style={{ cursor: 'pointer' }}>
              {/* <ListIcon /> */}
            </span>
            {
              dropdownState?.status && dropdownState?.id === content?.id && (
              <div style={{
                position: 'absolute', background: 'white', right: '44px', width: '96px', zIndex: 1,
              }}
              >
                {' '}
                {/* <MerchantDropdown data={dropdownData} details={content} handleDropdown={handleAndClearDropdowState} fontSize="9px" /> */}
              </div>
              )
            }

          </td>
          )
        }

      </tr>

    </tbody>
  );
};

export default TableBody;