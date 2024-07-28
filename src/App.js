import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Sidebar from './component/Sidebar';
import Action from './pages/Action';
import Comedies from './pages/Comedies'
import Documentaries from './pages/Documentaries'
import Horror from './pages/Horror'
import TopRated from './pages/TopRated'
import Trending from './pages/Trending'
import Upcoming from './pages/Upcoming';
import Popular from './pages/Popular';




const App = () => {


  return (
   <>

   <div className='flex'>
   <Sidebar />
    
   </div>
    
    
<Routes>
<Route path='/'element={<Home />} />
<Route path='/Upcoming'element={<Upcoming />} />
<Route path='/Popular'element={<Popular />} />
<Route path='/Action'element={<Action />} />
<Route path='/Comedy'element={<Comedies />} />
<Route path='/Documentary'element={<Documentaries />} />
<Route path='/Horror'element={<Horror />} />
<Route path='/Top'element={<TopRated />} />
<Route path='/Trending'element={<Trending />} />
{/* <Route path='/search' element={<Search />} /> */}
</Routes>


</>


 
  );
}

export default App;
