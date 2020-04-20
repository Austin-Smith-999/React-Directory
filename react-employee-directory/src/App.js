import React from 'react';
import './App.css';
// import mainPageContainer from "./components/mainpageContainer";
import NavBar from "./components/NavBar";
import tablesOfPeopleContainer from './components/tablesOfPeopleContainer';

function App() {
  return ( 
    <div>
  <NavBar />
  <tablesOfPeopleContainer />
  </div>

          );
}
        

export default App;

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Header />
//       <Section />
//     </div>
//   );
// }

// export default App;