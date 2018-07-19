import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList, PostCreate, PostEdit } from './Posts';
import { UserList } from './Users';
import Dashboard from './Dashboard';
import AuthProvider from './AuthProvider';
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');
const App = () => (
  <Admin
    dashboard={Dashboard}
    dataProvider={dataProvider}
    authProvider={AuthProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
