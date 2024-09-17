import React, { useEffect } from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { userSlice } from './store/reducers/UserSlice';
import { fetchUsers } from './store/reducers/ActionCreators';
import PostContainer from './components/PostContainer';

function App() {

  // const {count} = useAppSelector(state => state.user);
  // const {increment} = userSlice.actions;
  // const dispatch = useAppDispatch();
  // const {users, isLoading, error} = useAppSelector(state => state.userReducer);

  // useEffect(() => {
  //   dispatch(fetchUsers());
  // }, [])
 
  return (
    <div className="App">
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch(increment(10))}>Press here</button> */}
      {/* {isLoading && <h1>Идет загрузка...</h1>}
      {error && <h1>{error}</h1>}
      {users && JSON.stringify(users, null, 2)} */}
      <PostContainer />
    </div>
  );
}

export default App;
