import {
  BaseTextFieldProps,
  Box,
  Button as MuiButton,
  TextField as MuiTextField,
  Typography,
  buttonClasses,
  outlinedInputClasses,
} from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
interface TextBoxProps {
  handleCancel: () => void;
  handleSave: (text: string) => void;
  type: string;
  value: string;
}

const ButtonIcon = styled(MuiButton)<{ backgroundColor: string }>`
  ${({ theme, backgroundColor }) => {
    return css`
      &.${buttonClasses.root} {
        border-radius: 2px;
        border-color: ${backgroundColor};
        background-color: ${backgroundColor};
        box-shadow: unset;
        min-width: 18px;
        height: 18px;
        padding: 0px;
      }
    `;
  }}
`;
interface TextFieldProps extends BaseTextFieldProps {
  borderColor: string;
}
const TextField = styled(MuiTextField)<TextFieldProps>`
  ${({ borderColor }) => {
    return css`
      fieldset.${outlinedInputClasses.notchedOutline} {
        border-color: ${borderColor} !important;
      }
      input {
        font-size: 14px;
      }
    `;
  }}
`;

export const TextBox: React.FC<TextBoxProps> = ({ handleCancel, handleSave, type, value }) => {
  const [text, setText] = useState(value);

  const save = () => {
    if (text.trim()) {
      handleSave(text);
      setText('');
    }
  };
  const close = () => {
    setText('');
    handleCancel();
  };

  return (
    <Box sx={{ marginTop: '16px', position: 'relative' }}>
      <TextField
        borderColor={type === 'good' ? '#009682' : type === 'bad' ? '#e62864' : '#a63eb9'}
        placeholder="Type something..."
        color="secondary"
        focused
        sx={{ width: '100%' }}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <Box sx={{ position: 'absolute', width: '53px', right: '4px', bottom: '4px' }}>
        <ButtonIcon
          onClick={close}
          sx={{ width: '24px', color: '#bfbfc8' }}
          backgroundColor="transparent"
        >
          <ClearIcon sx={{ width: '14px' }} />
        </ButtonIcon>
        <ButtonIcon
          sx={{ width: '24px', color: '#ffffff' }}
          onClick={save}
          backgroundColor="#145af0"
          color="primary"
        >
          <CheckIcon sx={{ width: '14px' }} />
        </ButtonIcon>
      </Box>
    </Box>
  );
};
