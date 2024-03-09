import React, { useEffect, useState } from 'react';
import { Column } from './column';
import { useAppSelector } from '../../app/app.hooks';
import { PostWithId } from './dashboard.action';
import { Button, Tooltip } from 'flowbite-react';

function Component() {
  return (
    <Tooltip content="Tooltip content">
      <Button>Default tooltip</Button>
    </Tooltip>
  );
}
const Dashboard = () => {
  const { posts } = useAppSelector(state => state.dashboard);

  const getItems = (type: string) => {
    return posts.filter((item: PostWithId) => item.type === type);
  }

  const goodCards = getItems('good');
  const badCards = getItems('bad');
  const missedCards = getItems('missed');

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 p-4">
       <Component />
      <Column
        title="Went Well"
        cards={goodCards}
        type="good"
      />
      <Column
        title="To Improve"
        cards={badCards}
        type="bad"
      />
      <Column
        title="Action Items"
        cards={missedCards}
        type="missed"
      />
    </div>
  );
};

export default Dashboard;
