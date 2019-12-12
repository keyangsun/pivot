import React from 'react';
import Header from '../header';
import Nav from '../nav';
import Table from '../table';

const List: React.FC = () => {
    return (
        <div className="App">
            <Header />
            <Nav />
            <Table />
        </div>
    )
} 

export default List;