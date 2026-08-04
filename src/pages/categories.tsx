import { useEffect, useState } from "react";
import { apiUrl } from "../constants";
import CategoryAddModal from "../components/category-add-modal";

function Categories() {
    const [categories, setCategories] = useState<{ id: string; name: string, description: string }[]>([]);
    const fetchCategories = () => {
        fetch(apiUrl + "/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
            .then(res => {
                console.log(res);
                setCategories(res);
            }).catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchCategories()
    }, []);
    if (categories.length === 0) {
        return (
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-bold">Categories</h2>
                </div>
                <div className="flex justify-center items-center h-64">
                    <span className="text-lg font-bold">No categories found</span>
                </div>
            </div>
        )
    }
    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Categories</h2>
                {/* Categories add button */}
                <CategoryAddModal refreshCategories={fetchCategories} />

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <span>##</span>
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category, index) => (
                            <tr key={category.id}>
                                <th>{index + 1}</th>
                                <td>{category.name}</td>
                                <td>{category.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Categories