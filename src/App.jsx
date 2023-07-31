import 'modern-normalize'

import user from './assets/user.json';
import data from './assets/data.json';
import friends from './assets/friends.json';
import transactions from './assets/transactions.json';

import { Profile } from './components/Profile';
import { Container } from './components/Profile.styled';
import { Statistics } from './components/Statistics';
import { FriendList } from './components/FriendList';
import {TransactionHistory} from  './components/TransactionHistory';


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

