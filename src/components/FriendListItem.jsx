import React from 'react';
import PropTypes from 'prop-types';

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

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
