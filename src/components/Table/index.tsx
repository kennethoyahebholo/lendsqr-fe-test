import React from 'react'
import { FunctionComponent } from 'react';
import EmptyTableComp from './EmptyTableComp';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import UseCustomResizer from '../CustomResizer';
import './Table.scss';

export interface ITable {
  count?: any;
  setPage?: any;
  page?: any;
  pageSize?: any;
  contents?: any;
  clickable?: any;
  handleClick?: any;
  reference?: any;
  denyPadding?: any;
  allowKeyArr?: any;
  hidePaginate?: any;
  loading?: any;
  dominantName?: any;
  imageToShow?: any;
  hideDominantImage?: any;
  minHeight?: any;
  action?: any;
  formatLabels?: any;
  checked?: any;
  setChecked?: any;
  hideHeaders?: any;
  emptyCompObj?: any;
  emptyMinHeight?: any;
  refreshing?: any;
  CustomEmptyComponent?: any;
  viewLinkFunc?: any;
  handleSelectDropdown?:any;
  dropdownData?:any;
  actionList?:any;
  viewLinkText?:any;
  mobileAllowKeyArr?:any;
  btnObj?: any;
  hasNameAndImage?:boolean;
  allowStatusName?:boolean;
  preventDoubleLinkTrigger?:boolean;
}

const Table: FunctionComponent<ITable> = ({
  count,
  setPage,
  page,
  pageSize,
  contents: contentInp,
  clickable,
  handleClick,
  reference,
  refreshing,
  allowKeyArr,
  hidePaginate,
  loading,
  dominantName,
  imageToShow,
  hideDominantImage,
  minHeight,
  action,
  formatLabels,
  checked,
  setChecked,
  hideHeaders,
  emptyCompObj,
  emptyMinHeight,
  CustomEmptyComponent,
  viewLinkFunc,
  handleSelectDropdown,
  dropdownData,
  actionList,
  viewLinkText,
  mobileAllowKeyArr,
  btnObj,
  hasNameAndImage,
  allowStatusName,
  preventDoubleLinkTrigger,
}) => {

 const contents = contentInp || [];
  const firstContentObj = contents[0] || {};
  const { isMobile } = UseCustomResizer({ width: 655 });
  // if (loading) {
  //   return <Skeleton style={{ minHeight: minHeight || '20vh' }} />;
  // }
  const handleChecked = (newRecord:any, status:any) => {
    setChecked((old:any) => {
      const prev = old || [];
      if (status && newRecord !== 'all-ids') {
        const arr = [...prev, newRecord];
        const cleaned = new Set(arr);
        const cleanedArr = Array.from(cleaned);
        return [...cleanedArr];
      }
      let filtered = [];
      if (newRecord === 'all-ids') {
        filtered = status ? contents?.map(({ id }:any) => id) : [];
      } else filtered = prev?.filter((id:any) => id !== newRecord);
      return filtered;
    });
  };
  const firstLoading = refreshing && !contents?.length;
  return (
    <div>
      <div className="table-container table-responsive">
        <div className="div-table" style={{ minHeight: minHeight || '400px' }}>
          {/* {refreshing && <RefreshingSticker />} */}
          <div className="flex-grow table-cover-top">
            {firstLoading ? (
              // <GifLoader />
              <p>hello world</p>
            ) : (
              isMobile ? (
                firstContentObj[reference]
                && contents.map((content:any) => (

                  <table>
                    {/* <MobileTable
                      checked={false}
                      handleChecked={handleChecked}
                      hideDominantImage={hideDominantImage}
                      imageToShow={imageToShow}
                      dominantName={dominantName}
                      clickable={clickable}
                      handleClick={handleClick}
                      content={content}
                      key={content[reference]}
                      allowKeyArr={mobileAllowKeyArr}
                      action={action}
                      viewLinkFunc={viewLinkFunc}
                      handleSelectDropdown={handleSelectDropdown}
                      dropdownData={dropdownData}
                      actionList={actionList}
                      viewLinkText={viewLinkText}
                      hasPadding
                      btnObj={btnObj}
                    /> */}
                  </table>

                ))

              ) : (
                <>
                  <table>
                    {!hideHeaders && (
                    <TableHeader
                      checked={checked}
                      handleChecked={handleChecked}
                      headers={Object.keys(firstContentObj)}
                      action={action}
                      allowKeyArr={allowKeyArr}
                      formatLabels={formatLabels}
                      actionList={actionList}
                      hasNameAndImage={hasNameAndImage}
                    />
                    )}
                    {
                      contents.map((content: any) => (
                        <TableBody
                          checked={checked}
                          handleChecked={handleChecked}
                          hideDominantImage={hideDominantImage}
                          imageToShow={imageToShow}
                          dominantName={dominantName}
                          clickable={clickable}
                          handleClick={handleClick}
                          content={content}
                          key={content[reference]}
                          allowKeyArr={allowKeyArr}
                          action={action}
                          viewLinkFunc={viewLinkFunc}
                          handleSelectDropdown={handleSelectDropdown}
                          dropdownData={dropdownData}
                          actionList={actionList}
                          viewLinkText={viewLinkText}
                          formatLabels={formatLabels}
                          allowStatusName={allowStatusName}
                          preventDoubleLinkTrigger={preventDoubleLinkTrigger}
                        />
                      ))
                    }
                  </table>
                  {!firstContentObj[reference] && (
                  <div
                    style={{
                      minHeight: `calc(${emptyMinHeight} - 40px)` || '500px',
                    }}
                    className="empty-div"
                  >
                    {emptyCompObj && <EmptyTableComp {...emptyCompObj} />}
                    {CustomEmptyComponent && <CustomEmptyComponent />}
                  </div>
                  )}
                </>
              )
            )}
          </div>
        </div>

      </div>
      <div className="w-full">
        {count > pageSize && !hidePaginate && (
        <div
          className={`pagination-table ${
            loading || !contents ? 'hidden' : ''
          }`}
        >
          {/* <Pagination
            setPage={setPage || (() => {})}
            page={page}
            pageSize={pageSize || 12}
            count={count}
          /> */}
        </div>
        )}
      </div>
    </div>
  )
}

export default Table