import './App.css';
import Header from './Component/Header';
import DayList from './Component/DayList';
import Day from './Component/Day';
import EmptyPage from './Component/EmptyPage';
import CreateWord from './Component/CreateWord';
import CreateDay from './Component/CreateDay';
import DeleteDay from './Component/DeleteDay';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/" element ={<DayList/>}/>
                    <Route path="/day/:day" element = {<Day/>}/>
                    <Route path="/create_word" element = {<CreateWord/>}/>
                    <Route path="/create_day" element = {<CreateDay/>}/>
                    <Route path="/delete_day" element = {<DeleteDay/>}/>
                    <Route path='*' element = {<EmptyPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
