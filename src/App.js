import './App.css';

import { Layout, Menu, } from 'antd';

import AppHeader from './components/common/header.js';

const { Header,  } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <AppHeader/>
      </Header>
    </Layout>
  );
}

export default App;
