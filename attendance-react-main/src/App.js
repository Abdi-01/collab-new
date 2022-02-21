import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SidebarComponent from './components/Sidebar';
import RegisterPage from './pages/Register';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className='App d-flex' >
        <SidebarComponent />
        <Routes>
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </div>
    );
  }
}

export default App;