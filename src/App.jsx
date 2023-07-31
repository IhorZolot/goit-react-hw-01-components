import 'modern-normalize'

import user from './assets/user.json';
import data from './assets/data.json';
import friends from './assets/friends.json';
import transactions from './assets/transactions.json';

import { Profile } from './components/Profile/Profile';
import { Container } from './components/Profile/Profile.styled';

import { FriendList } from './components/Friends/FriendList';
import {TransactionHistory} from  './components/Ttansactions/TransactionHistory';
import { Statistics } from 'components/Statistic/Statistics';


export const App = () => {
  return (
    <Container>
     <Profile {...user}/>
     <Statistics title="Upload stats" stats={data} />
     <FriendList friends={friends} />;
     <TransactionHistory items={transactions} />
    </Container>
  );
};

