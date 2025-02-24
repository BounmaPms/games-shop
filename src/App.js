import './App.css';

import { Layout } from 'antd';

import AppHeader from './components/common/header.js';

const { Header } = Layout;

function App() {
  return (
    <Layout className='mainLayout'>
      <Header>
        <AppHeader/>
      </Header>
    </Layout>
  );
}

export default App;
