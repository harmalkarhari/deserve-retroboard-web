import React, { useEffect } from 'react';
import { RetroboardColumn } from './retroboard-column/retroboard-column.component';
import { useAppDispatch, useAppSelector } from '../../app/app.hooks';
import { PostWithId, getPosts } from './dashboard.action';
import styled, { css } from 'styled-components';
import { Grid } from '@mui/material';

const RetroBoardContainer = styled(Grid)`
  ${() => {
    return css`
      height: 100vh;
      background: #f0f0f5;
      padding: 16px;
    `;
  }}
`;
//TODO: move string values to locale files
const Dashboard = () => {
  const { posts } = useAppSelector(state => state.dashboard);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const getItems = (type: string) => {
    return posts.filter((item: PostWithId) => item.type === type);
  };

  const goodCards = getItems('good');
  const badCards = getItems('bad');
  const missedCards = getItems('missed');

  return (
    <RetroBoardContainer container spacing={2} data-testid="retro-board-testid">
      <RetroboardColumn title="Went Well" cards={goodCards} type="good" />
      <RetroboardColumn title="To Improve" cards={badCards} type="bad" />
      <RetroboardColumn title="Action Items" cards={missedCards} type="missed" />
    </RetroBoardContainer>
  );
};

export default Dashboard;
