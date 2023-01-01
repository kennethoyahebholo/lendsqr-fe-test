import React from 'react'

type Props = {
  Icon?: any;
  title?: string;
  main?: string;
  footer?: any;
  height?: string;
  noIcon?: boolean;
  loading?: boolean;
  hasButton?:boolean;
  handleClick?:any;
}


const EmptyRecord = ({
  Icon, title, main, footer, height, noIcon, loading, hasButton, handleClick,
}: Props) => {
 // const RenderIcon = Icon || EmptyTransactionIcon;
  return (
    <div style={height ? { height } : {}} className="empty-record">
      {loading ? 
      // <GifLoader />
      <p>hello world</p>
       : (
        <div className="empty-wrap">
          {/* {!noIcon && <RenderIcon />} */}
          <h4>{title || 'No Records yet'}</h4>
          <h5>{main || 'All available records requested would appear here'}</h5>
          {footer && <h6>{footer}</h6>}
          {
            hasButton && (
            <div style={{ marginTop: '24px' }}>
              {/* <StyledButton name="New Push Notification" border="none" backgroundColor="#523B9F" color="white" fontSize="12px" height="40px" borderRadius="4px" icon={<PlusIcon />} onClick={handleClick} padding="12px" /> */}
            </div>
            )
          }

        </div>
      )}
    </div>
  )
}

export default EmptyRecord