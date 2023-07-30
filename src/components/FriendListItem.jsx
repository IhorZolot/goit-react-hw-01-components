import React from 'react';

import {
  FriendsListLi,
  FriendsName,
  FriendsStatus
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <FriendsListLi>
      <FriendsStatus $online={isOnline}></FriendsStatus>
      <img src={avatar} alt="User avatar" width="48" />
      <FriendsName>{name}</FriendsName>
    </FriendsListLi>
  );
};

