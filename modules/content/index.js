import React from 'react';
import SearchBar from './SearchBar';
import TableContent from './TableContent';
import MyModal from './MyModal';
//import RegistrationForm from './Form';

//封装子组件成一个完整组件并Render
let Home = ()=>{
    return <div id="app">
            <SearchBar />
            <TableContent />
            <MyModal />
        </div>
}
export default Home;