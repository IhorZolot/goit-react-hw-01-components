import React from 'react';

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
