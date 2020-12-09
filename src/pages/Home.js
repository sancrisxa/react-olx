import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import OlxAPI from '../helpers/OlxAPI';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    OlxAPI.getProducts()
        .then((products) => {
            setProducts(products);
            setLoading(false);
        });

    return (
       <div>
           <h1>HOME</h1>
           <hr />

           {loading &&

            <div>Carregando ... </div>

            }

           {products.length > 0 &&

                <ul>
                    {
                        products.map((product) => (
                            <li key={product.id}>{product.title}</li>
                        ))
                    }
                </ul>

            }
            
           <hr />
           <Link to="/sobre">Ir para página SOBRE</Link>
       </div> 
    );
}


export default Home;