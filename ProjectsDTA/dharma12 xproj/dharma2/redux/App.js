import { Provider } from 'react-redux';
import store from './redux/store';
import HooksCakeContainer from './components/HooksCakeContainer';
import CakeContainer from './components/CakeContainer';

import './App.css';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';

import UserContainer from './components/UserContainer';



function App() {
  return (
    <Provider store={store} >
    <div className="App">
      <h1>Demo on Redux</h1>
      <hr/>


      <UserContainer/>
     {/* 
     <HooksCakeContainer/>
      <HooksIceCreamContainer/>

      <CakeContainer/>

      <IceCreamContainer/>

      <NewCakeContainer/>

     */}
      
    </div>
    </Provider>
  );
}

export default App;
