import axios from 'axios';
import {React,useEffect,useState} from 'react';
import Products from '../../components/Products/Products';

function Home()
{
    useEffect(() => {
        getProducts(size,page);
    },[]);

    const [products,setProducts] = useState([]);
    const [size,setsize] = useState(4)
    const [page,setPage] = useState(1)

    const getProducts = async (pageSize, currentPage) => {
        axios.get(`https://localhost:44397/api/Product?pageSize=${size}&currentPage=${page}`)
        .then(response =>{
            setProducts(response.data);
            console.log(response.data);
        })
        .catch(error => console.log(error))
    }

    const productsList = products.map((product) => {
        return <Products name={product.name}
            cost={product.cost}
            description={product.description}
            key={product.id} />
    })

    return (
        <div className="row">
            {productsList}
        </div>
    );
}

export default Home;