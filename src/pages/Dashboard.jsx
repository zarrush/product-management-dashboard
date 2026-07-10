import { useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductLists from '../components/ProductLists';
import ProductCard from '../components/ProductCard';

const Dashboard = () => {
    //States
        const [ productForm , setProductForm ] = useState({
            name: '',
            brand: '',
            model: '',
            category:  '',
            price: '',
            stock: '',
            description: '',
        });
        const [ products , setProducts ] = useState([

        ])
    return(
        <div>
            <h1> Product Management Dashboard </h1>

            <ProductForm
                productForm = {productForm}
                setProductForm = {setProductForm}
                setProducts = {setProducts}
            />
        </div>
    )    
};

export default Dashboard;