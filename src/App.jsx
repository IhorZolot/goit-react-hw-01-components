 import 'modern-normalize'

import user from './assets/user.json';
import friends from './assets/friends.json';
import transactions from './assets/transactions.json';
import data from './assets/data.json';

import { Profile } from './components/Profile/Profile';
import { Container } from './components/Profile/Profile.styled';

import { FriendList } from './components/Friends/FriendList';
import {TransactionHistory} from  './components/Ttansactions/TransactionHistory';
import { Statistics } from './components/Statistics/Statistics';


export const App = () => {
  return (
    <Container>
     <Profile {...user}/>
     <FriendList friends={friends} />
     <Statistics title='upload stat' stats={data}/>
     <TransactionHistory items={transactions} />
    </Container>
  );
};

