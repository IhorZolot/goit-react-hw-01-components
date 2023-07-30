import React from 'react';
import PropTypes from 'prop-types';

import {
  ProfileContainer,
  UserContainerAll,
  UserContainer,
  UserAvatar,
  UserName,
  UserTag,
  UserLocation,
  UserStats,
  UserStatsLi,
  UserLabel,
  Userquantity,
} from './Profile.styled';

export const Profile = props => {
  const { username, tag, location, avatar, stats } = props;
  return (
    <ProfileContainer>
      <UserContainerAll>
        <UserContainer>
          <UserAvatar src={avatar} alt="User avatar" />
          <UserName>{username}</UserName>
          <UserTag>{tag}</UserTag>
          <UserLocation>{location}</UserLocation>
        </UserContainer>
        <UserStats>
          {Object.entries(stats).map(([key, value], index) => (
            <UserStatsLi key={index}>
              <UserLabel>{key}</UserLabel>
              <Userquantity>{value}</Userquantity>
            </UserStatsLi>
          ))}
        </UserStats>
      </UserContainerAll>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
