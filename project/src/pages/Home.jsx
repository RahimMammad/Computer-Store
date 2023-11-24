import React from 'react';
import Basket from '../components/Basket/Basket';
import './Home.scss';
import useFetchData from '../hooks/useFetchData';
import Product from '../components/Product/Product';
import useDarkMode from '../hooks/usedarkMode';
import DarkThem from "../../public/moon.svg"

const Home = () => {
    const { data, error, isLoading } = useFetchData();
    const [darkmode, changeDarkTheme] = useDarkMode();

    return (
        <div className={`${darkmode ? 'dark' : ''}`}>
            <button
                style={{
                    width: '100px',
                    height: '30px',
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'none',
                    borderRadius: '8px',
                    border: "none"
                }}
                onClick={changeDarkTheme}
            >
                <img src={DarkThem} alt="" />
            </button>
            <div className='home-main-container'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : error ? (
                    <p>{error}</p>
                ) : (
                    data.map((product) => <Product key={product.id} product={product} />)
                )}
            </div>
            {/* <Basket /> */}
        </div>
    );
};

export default Home;
