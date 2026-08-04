import { useEffect, useState } from "react";
import { apiUrl, type Product } from "../constants";
import ProductAddModal from "../components/product-add-modal";

function ProductInventory() {
    const [products, setProducts] = useState<Product[]>([]);
    const fetchProducts = () => {
        fetch(apiUrl + "/products", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                setProducts(res);
            }).catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchProducts()
    }, []);
    if(products.length === 0) {
        return (
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Product Inventory</h2>
                    <ProductAddModal refreshProducts={fetchProducts} />
                </div>
                <div className="flex justify-center items-center h-64">
                    <span className="text-lg font-bold">No products found</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Product Inventory</h2>
                <ProductAddModal refreshProducts={fetchProducts} />
            </div>
            
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <span>##</span>
                                {/* <input type="checkbox" className="checkbox" /> */}
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th>

                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <th>
                                <label>
                                    <span># {index + 1}</span>
                                    {/* <input type="checkbox" size={6} className="checkbox" /> */}
                                </label>
                            </th>
                            {/* <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                    </div>
                                </div>
                            </td> */}
                            <td>
                                <span className="badge badge-ghost badge-sm">{product.name}</span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>))
                    }
                </tbody>
                {/* foot */}
                {/* <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot> */}
            </table>
        </div>
        </div>
    )
}

export default ProductInventory