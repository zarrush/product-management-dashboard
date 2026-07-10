import React from 'react'

//main Func & States
const ProductForm = ({
    productForm,
    setProductForm,
    setProducts,
}) => {

    //onChange Func
    const handleChange = (e) => {
    const { name, value } = e.target;

    setProductForm((prev) => ({
        ...prev,
        [name]: value,
    }));
}
    //OnSubmit Func
    const handleSubmit = (e) => {
        e.preventDefault();
        //
        if (
        !productForm.name.trim() ||
        !productForm.brand.trim() ||
        !productForm.model.trim()
        ){
        alert('Please fill in all required fields.')
        return;
        }

        const newProduct = {
            id: Date.now(),
            createdAt: new Date().toISOString(),
            ...productForm,
        };

    setProducts((prev) => [...prev, newProduct]);
    //Reset Fields
    setProductForm({
        name: "",
        brand: "",
        model: "",
        category: "",
        price: "",
        stock: "",
        description: "",
    });
};
    return (
    <div>
        {/*Product Form*/}
        <form onSubmit={handleSubmit}>
            {/*product name Field*/}
            <div className=''>
                <label htmlFor="name">Product name</label>
                <input 
                id='name'
                type="text"
                name='name'
                value={productForm.name}
                placeholder='Enter Product name ... '
                onChange={handleChange}
                />
            </div>
            {/*product Brand Field*/}
            <div className=''>
                <label htmlFor="brand">Product Brand</label>
                <input 
                id='brand'
                type="text" 
                name='brand'
                value={productForm.brand}
                placeholder='Enter the brand name...'
                onChange={handleChange}
                />
            </div>
            {/*product Model Field*/}
            <div className=''>
                <label htmlFor="model">Product Model</label>
                <input 
                id='model'
                type="text"
                name='model'
                value={productForm.model}
                placeholder='Enter the Product model...' 
                onChange={handleChange}
                />
            </div>
            {/*product Category Field*/}
            <div className=''>
                <label htmlFor="category">product Category</label>
                <select 
                id='category'
                name="category"
                value={productForm.category}
                onChange={handleChange}>
                    <option value=''>select cateGory</option>
                        <option value='Monitor'>Monitor</option>
                            <option value='Laptop'>Laptop</option>
                        <option value='Phone'>Phone</option>
                    <option value='Accessory'>Accessory</option>
                </select>
            </div>    
            {/*product price Field*/}
            <div className=''>
                <label htmlFor="price">Product price</label>
                <input 
                id='price'
                name='price'
                type="number"
                value={productForm.price}
                placeholder=''
                onChange={handleChange}
                />
            </div>
            {/*product Stock Field*/}
            <div className=''>
                <label htmlFor="stock"> product Stock</label>
                <input 
                id='stock'
                name='stock'
                type="number"
                value={productForm.stock}
                placeholder=''
                onChange={handleChange}
                />
            </div>
            {/*product Description Field*/}
            <div className=''>
                <label htmlFor="description">Product description</label>
                <textarea
                id='description'
                name='description'
                rows={4}
                value={productForm.description}
                placeholder='Product Description'
                onChange={handleChange}
                />
            </div>
            {/*product Submit Button Field*/}
            <button type="submit">
                Add Product
            </button>
        </form>
    </div>
    )
}



export default ProductForm