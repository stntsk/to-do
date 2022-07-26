import './App.css';
import {
  Routes,
  Route,
  //NavLink,
  //useRouteMatch,
} from "react-router-dom";
import { Header } from '../Components/Header/Header'
import { ListCreator } from '../Components/ListCreator/ListCreator';
import { ListHolder } from '../Components/ListHolder/ListHolder';
import { List } from '../Components/ListHolder/List';
import Footer from '../Components/Footer/footer';

const App = () => {
  return (
    <div>
      <Header  />
      <Routes>
        <Route path='createlist' element={ <ListCreator/> } />      
        <Route path='lists' element={ <ListHolder /> }>
          <Route path=':listId' element={<List />} />
        </Route>
      </Routes>
      <Footer />
    </div>            
  );
}

export default App;
