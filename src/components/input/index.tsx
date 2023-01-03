import { FunctionComponent, useState } from 'react';
import './styles.scss'
import { IconButton, InputAdornment, TextField } from '@mui/material';

interface IEventObj {
  target: { name: string; value: string };
}

export interface ITextInput {
  label?: string;
  isSecure?: boolean;
  width?: any;
  Icon?: any;
  name?: string;
  value?: string;
  type?: string;
  defaultValue?: string;
  handleClick?: () => void;
  onChange?: (text: string) => void;
  customOnChange?: (arg: IEventObj) => void;
  customClasses?: string;
  placeholder?: string;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  pattern?: string;
  prefix?: string;
  CustomEndAdornment?: any;
  paddingLeft?:any;
  preIcon?:any;
  hasStyle?:any;
  position?:any;
  left?:any;
  top?:any;
  zIndex?:any;
  onBlur?:any;
  inputPaddingLeft?:string;
  isOnModal?:boolean;
  viewOnly?:boolean;
  maxDate?: string;
  copyIcon?:any;
  handleCopy?:any;
  fontSize?:string;
  customTextFieldStyles?:any;
}

const TextInput: FunctionComponent<ITextInput> = ({
  label,
  isSecure,
  width,
  Icon,
  name,
  value,
  customClasses,
  type = 'text',
  onChange,
  customOnChange,
  disabled,
  multiline,
  placeholder,
  rows,
  required,
  pattern,
  prefix,
  CustomEndAdornment,
  preIcon,
  onBlur,
  isOnModal,
  viewOnly,
  copyIcon,
  handleCopy,
  fontSize,
  customTextFieldStyles,
}) => {
 const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    const showP = !showPassword;
    setShowPassword(showP);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const handleChange = (event: any) => {
    const { value } = event.target;
    if (onChange && value) onChange(value);
    if (customOnChange) customOnChange(event);
  };
  return (
    <div className="text-wrap">
     <div style={{
        display: 'flex',
      }}
      >
       <TextField
          placeholder={placeholder}
          multiline={multiline}
          rows={rows}
          variant="filled"
          color="secondary"
          label={label}
          name={name}
          value={value}
          disabled={disabled || viewOnly}
          onChange={handleChange}
          style={{
           // display: 'none',
            border: '2px solid rgba(84, 95, 125, 0.15)',
            borderRadius: '5px',
            width: width || '447px',
            marginBottom: '20px',
            background: '#FFFFFF',
            borderColor: 'rgba(84, 95, 125, 0.15)',
            height: rows ? '' : '50px',
            // borderLeft: preIcon && 'none',
            // borderTopLeftRadius: preIcon && '0px',
            // borderBottomLeftRadius: preIcon && '0px',
            // ...(disabled ? { backgroundColor: 'rgba(209, 209, 209, 0.1' } : {}),
            ...(customTextFieldStyles || {}),
          }}
          required={required}
          InputLabelProps={{
            ...(value ? { shrink: true } : {}),
            style: {
              fontFamily: 'Avenir',
              color: '#545F7D',
              fontSize: '14px',
              height: '50px',
              opacity: '0.6',
              lineHeight: '19px',
            },
            ...(pattern ? { pattern } : {}),
          }}
          InputProps={{
            disableUnderline: true,
            style: {
              backgroundColor: 'transparent',
              fontFamily: 'Inter_Regular',
              fontWeight: 500,
              fontSize: fontSize || '13px',
              // color: '#475467',
              color: disabled ? '#999999' : '#475467',
              height: rows ? '' : '50px',
            },
            type: isSecure && !showPassword ? 'password' : type,
            ...(prefix ? { startAdornment: <InputAdornment position="start">{prefix}</InputAdornment> } : {}),
            ...(isSecure
              ? {
                endAdornment: (
                  <InputAdornment position="end">
                    {
                      !isOnModal ? (
                        <div style={{ cursor: 'pointer', position: 'absolute', right: '18px', top: '15px' }}>
                          <div
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <span style={{letterSpacing: '0.1em',  fontSize: '12px', lineHeight: '16px', color: ' #39CDCC' }} >SHOW</span> : <span style={{ letterSpacing: '0.1em',  fontSize: '12px', lineHeight: '16px', color: '#39CDCC' }} >HIDE</span>}
                          </div>
                        </div>
                      ) : (
                        <IconButton
                          aria-label="toggle password visibility"
                          // onClick={handleClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                        >
                          {/* {showPassword ? <Visibility style={{ fontSize: '16px', color: '#98A2B3' }} /> : <VisibilityOff style={{ fontSize: '16px', color: '#98A2B3' }} />} */}
                        </IconButton>
                      )
                    }

                  </InputAdornment>
                ),
              }
              : {}),
            ...(CustomEndAdornment ? { endAdornment: <InputAdornment position="start">{CustomEndAdornment}</InputAdornment> } : {}),
            // ...(type === 'cash' ? { inputComponent: NumberFormatCustom as any } : {}),
          }}
          // className={`${classes.root} ${customClasses}`}
          onBlur={onBlur}
        />
      </div>
    </div>
  )
}

export default TextInput