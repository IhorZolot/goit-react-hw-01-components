import { styled } from 'styled-components';

export const Container = styled.div``;

export const ProfileContainer = styled.section`
  width: 600px;
  height: 650px;
  display: flex;
  padding: 100px 0;
  flex-direction: column;
  align-items: center;
  background-color: #dadfe2;
  margin: 0 auto;
  margin-top: 60px;
`;

export const UserContainerAll = styled.div`
  border: 1px solid #e0dcdc;
  border-radius: 4px;
`;

export const UserContainer = styled.div`
  background-color: white;
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UserAvatar = styled.img`
  width: 140px;
  border-radius: 50%;
  margin: 50px;
  outline: 0.5px solid lightgrey;
`;
export const UserName = styled.p`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const UserTag = styled.p`
  font-size: 18px;
  color: #888;
  margin-bottom: 10px;
`;
export const UserLocation = styled.p`
  font-size: 18px;
  color: #888;
  margin-bottom: 40px;
`;
export const UserStats = styled.ul`
  background-color: #eef2f7;
  display: flex;

  align-items: center;
  justify-content: space-around;
  flex-grow: 0;
`;
export const UserStatsLi = styled.li`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 0.1px solid #e0dcdc;
  flex-grow: 1;
  gap: 6px;
`;
export const UserLabel = styled.span`
  text-transform: capitalize;
  color: #888;
`;
export const Userquantity = styled.span`
  font-weight: bold;
`;
