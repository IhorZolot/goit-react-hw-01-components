import { styled } from 'styled-components';

export const FriendsList = styled.ul`
  width: 600px;
  margin: 0 auto;
  margin-top: 60px;
`;
export const FriendsListLi = styled.li`
  border: 2px solid lightgray;
  border-radius: 4px;
  padding: 10px 20px;
  box-shadow: ${({ theme }) => theme.shadows.default};
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 5px;
`;
export const FriendsName = styled.p`
  font-weight: bold;
`;

export const FriendsStatus = styled.span`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  background-color: ${props => (props.$online ? 'green' : 'red')};
`;
