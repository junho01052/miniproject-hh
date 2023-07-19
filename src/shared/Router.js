import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoListMain from '../pages/TodoListMain';
import TodoDetail from '../pages/TodoDetail';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/todos' element={<TodoListMain />} />
        <Route path='/todos/detail/:id' element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
