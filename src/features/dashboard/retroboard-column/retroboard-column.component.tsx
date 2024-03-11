import React, { useState } from 'react';
import { Card } from '../../../components/card/card.component';
import { PostWithId, addPost, editPost, removePost } from '../dashboard.action';
import { useAppDispatch } from '../../../app/app.hooks';
import { Box, Button as MuiButton, Grid, buttonClasses, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styled, { css } from 'styled-components';
import { TextBox } from '../../../components/text-box/text-box.component';
interface ColumnProps {
  title: string;
  cards: Array<PostWithId>;
  type: string;
}
const Button = styled(({ backgroundColor, ...rest }: any) => <MuiButton {...rest} />)`
  ${({ backgroundColor }) => {
    return css`
      &.${buttonClasses.root} {
        color: #9e9eac;
        border-radius: 2px;
        border-color: ${backgroundColor};
        background-color: ${backgroundColor};
        box-shadow: unset;
      }
    `;
  }}
`;

// Column component
export const RetroboardColumn: React.FC<ColumnProps> = ({ title, cards, type }) => {
  const [showNewText, setShowNewText] = useState(false);
  const dispatch = useAppDispatch();
  const handlePost = (text: string) => {
    if (text.trim()) {
      dispatch(addPost({ text, type }));
      setShowNewText(false);
    }
  };

  const handlePut = (id: string, text: string) => {
    if (text.trim()) {
      dispatch(editPost({ id, text, type }));
    }
  };

  const toggleShowNewText = () => {
    setShowNewText(!showNewText);
  };

  const handleCancel = () => {
    setShowNewText(false);
  };

  const handleDelete = (card: PostWithId) => {
    dispatch(removePost(card));
  };

  return (
    <Grid item xs={12} md={4} data-testid={`${type}-testid`}>
      <Typography
        data-testid="column-text-testid"
        variant="subtitle2"
        fontWeight={'bold'}
        gutterBottom
      >
        {title}
      </Typography>
      <Button
        sx={{ width: '100%' }}
        backgroundColor={showNewText ? '#d2d2d7' : '#e1e6eb'}
        onClick={toggleShowNewText}
      >
        <AddIcon />
      </Button>
      {showNewText && (
        <TextBox value="" handleCancel={handleCancel} handleSave={handlePost} type={type} />
      )}
      <Box>
        {cards.map(card => (
          <Card
            onUpdate={(text: string) => handlePut(card.id, text)}
            type={type}
            key={card.id}
            text={card.text}
            onDelete={() => handleDelete(card)}
          />
        ))}
      </Box>
    </Grid>
  );
};
