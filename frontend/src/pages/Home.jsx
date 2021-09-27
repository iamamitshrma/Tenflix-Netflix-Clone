import React, { useEffect, useState } from 'react';
import Featured from '../components/featured/Featured';
import Navbar from '../components/navbar/Navbar';
import List from '../components/list/List';
import axios from 'axios';

const Home = ({type}) => {

    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    //getting the list items from api
    useEffect(() => {
        const getRandomList = async () => {
            try {
                //here we have query fetch
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer "+ JSON.parse(localStorage.getItem("user")).accessToken,
                    },
                });
                setLists(res.data);
            } catch (error) {
                console.log(error);
            }
        }
        getRandomList();
    }, [genre, type]);

    console.log(lists)

    return (
        <div style={{paddingBottom: "40px"}} className="home">
            <Navbar />
            <Featured type={type} setGenre={setGenre}/>

            {
                lists.map((list) => {
                    return <List list={list}/>
                })
            }
        </div>
    )
}

export default Home;
