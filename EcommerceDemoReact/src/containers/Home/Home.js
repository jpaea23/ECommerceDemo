import axios from 'axios';
import { React,useContext,useEffect,useState } from 'react';
import Products from '../../components/Products/Products';
import { CartContext } from '../../hoc/Context/CartContext';

function Home()
{
    useEffect(() => {
        getProducts(size,page);
    },[]);

    const [cart,setCart] = useContext(CartContext);
    const [products,setProducts] = useState([{}]);
    const size = 4;
    const [page,setPage] = useState(1);
    const isPrevDisabled = (page === 1) ? true : false; 
    const isNextDisabled = (products.length < size) ? true : false;

    const getProducts = async (pageSize, currentPage) => {
        try {
            const response = await axios.get(`https://localhost:44397/api/Product?pageSize=${size}&currentPage=${page}`)
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    }
   
    const AddProductToCart = async (productId) => {
        const cartId = cart.id;
        const product = products.find(prod => prod.id === productId);

        try
        {
            const response = await axios.post(`https://localhost:44397/api/Cart?id=${cartId}`, product)
            setCart(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    const productsList = products.map((product,i) => {
        return <Products name={product.name}
            cost={product.cost}
            description={product.description}
            key={i} 
            id={product.id}
            AddToCart={AddProductToCart}/>
    })

    return (
        <div className="row m-2">
            {productsList}
            <div className="mx-auto">
                <button disabled={isPrevDisabled} 
                    className="btn btn-dark mr-3">
                    Prev
                </button>
                <button disabled={isNextDisabled}
                    className="btn btn-dark">
                    Next
                </button>
            </div>
        </div>
    );
}

export default Home;