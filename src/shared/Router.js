import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoListMain from '../pages/TodoListMain';
import TodoDetail from '../pages/TodoDetail';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/api/lists' element={<TodoListMain />} />
        <Route path='/api/lists/:id' element={<TodoDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
