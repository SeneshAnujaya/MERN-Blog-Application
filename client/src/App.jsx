import {Route, Routes} from 'react-router-dom';

import Post from "./Post";
import "./app.css";
import Layout from './Layout';

import Indexpage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { UserContextProvider } from './UserContext';
import CreatePost from './pages/CreatePost';
import PostPage from './pages/PostPage';
import EditPost from './pages/EditPost';

const App = () => {
  return(
  
<UserContextProvider>
  <Routes>
    <Route path='/' element={<Layout />}>
      <Route index element={<Indexpage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/create' element={<CreatePost />}/>
      <Route path="/post/:id" element={<PostPage />} />
      <Route path='/edit/:id' element={<EditPost />} />
    </Route>
  </Routes>
  </UserContextProvider>
);
}

export default App;
