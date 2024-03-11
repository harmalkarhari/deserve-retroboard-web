import { Box, Button as MuiButton, Typography, buttonClasses } from '@mui/material';
import React, { useState } from 'react';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import styled from 'styled-components';
import { css } from 'styled-components';
import { TextBox } from '../text-box/text-box.component';
import MenuPopover from '../menu-popover/menu-popover.component';
interface CardProps {
  onDelete: () => void;
  onUpdate: (text: string) => void;
  text: string;
  type: string;
}
export const Button = styled(MuiButton)`
  ${({ theme }) => {
    return css`
      &.${buttonClasses.root} {
        color: #ffffff;
        border-radius: 2px;
        border-color: transparent;
        background-color: transparent;
        box-shadow: unset;
        padding: 0;
        min-width: 25px;
        display: inline-flex;
        align-items: end;
      }
    `;
  }}
`;

// Card component
export const Card: React.FC<CardProps> = ({ text, onDelete, type, onUpdate }) => {
  const [showNewText, setShowNewText] = useState(false);
  const toggleShowNewText = () => {
    setShowNewText(!showNewText);
  };
  const onSelection = (id: string) => {
    if (id === 'delete') {
      onDelete();
    } else {
      toggleShowNewText();
    }
  };
  const handleSave = (text: string) => {
    toggleShowNewText();
    onUpdate(text);
  };
  return (
    <>
      {showNewText && (
        <TextBox
          value={text}
          handleCancel={toggleShowNewText}
          handleSave={handleSave}
          type={type}
        />
      )}
      {/* TODO: refactor and move to new component. */}
      {!showNewText && (
        <Box
          data-testid="retro-block-card-testid"
          sx={{
            position: 'relative',
            backgroundColor: type === 'good' ? '#009682' : type === 'bad' ? '#e62864' : '#a63eb9',
            padding: '8px',
            marginTop: '16px',
          }}
        >
          <Typography
            data-testid="retro-block-card-text-testid"
            variant="caption"
            sx={{ textTransform: 'capitalize', color: '#ffffff', width: '85%' }}
            display="block"
            gutterBottom
          >
            {text}
          </Typography>
          <MenuPopover
            onSelection={onSelection}
            items={[
              { id: 'edit', label: 'Edit' },
              { id: 'delete', label: 'Delete' },
            ]}
            style={{ position: 'absolute', right: '4px', top: '8px' }}
          />
          <Box sx={{ textAlign: 'right' }} data-testid="user-action-menu-testid">
            <Button sx={{ mr: '8px' }}>
              <ThumbUpOutlinedIcon sx={{ width: '15px', marginRight: '2px' }} />
              <Typography
                variant="caption"
                sx={{ color: '#ffffff', marginBottom: 'unset' }}
                display="block"
                gutterBottom
              >
                0
              </Typography>
            </Button>
            <Button sx={{ mr: 0 }}>
              <MapsUgcOutlinedIcon sx={{ width: '15px', marginRight: '2px' }} />{' '}
              <Typography
                variant="caption"
                sx={{ color: '#ffffff', marginBottom: 'unset' }}
                display="block"
                gutterBottom
              >
                0
              </Typography>
            </Button>
          </Box>
        </Box>
      )}
    </>
  );
};
