import React, { useEffect, useState } from 'react';
import { apiUrl } from '../constants';
import { useToast } from '../context/toaster-context/toster';
// Define the shape of our product data
interface ProductInput {
    name: string;
    price: string; // Keep as string for controlled inputs, convert to number on submit
    categoryId: string;
    description: string;
    imageUrl: string;
    stockQuantity: string;
}

function ProductAddModal({ refreshProducts }: { refreshProducts: () => void }) {
    const { addToast } = useToast()
    const accessToken = localStorage.getItem("access-token")||"";

    // 1. State for form values
    const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
    const fetchCategories = React.useCallback(async () => {
        // Simulate fetching categories from an API
        return fetch(apiUrl + "/categories")
            .then((res) => res.json())
            .then((data) => {
                console.log("Fetched categories:", data);
                setCategories(data);
            })
            .catch((err) => console.error("Error fetching categories:", err));
    }, []);

    const [formData, setFormData] = useState<ProductInput>({
        name: '',
        price: '',
        categoryId: '',
        description: '',
        imageUrl: '',
        stockQuantity: '',
    });

    // 2. State for validation errors
    const [errors, setErrors] = useState<Partial<Record<keyof ProductInput, string>>>({});

    // 3. Native dialog control handlers
    const openModal = () => {
        const modal = document.getElementById('product_add_modal') as HTMLDialogElement | null;
        modal?.showModal();
    };

    const closeModal = () => {
        const modal = document.getElementById('product_add_modal') as HTMLDialogElement | null;
        modal?.close();
        // Reset form upon manual exit if desired
    };

    // 4. Handle input changes dynamically
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear validation error when user types
        if (errors[name as keyof ProductInput]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    // 5. Client-side form validation
    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof ProductInput, string>> = {};

        if (!formData.name.trim()) newErrors.name = 'Product name is required';
        if (!formData.price || Number(formData.price) <= 0) newErrors.price = 'Enter a valid price greater than 0';
        if (!formData.categoryId) newErrors.categoryId = 'Please select a category';
        if (!formData.stockQuantity || Number(formData.stockQuantity) < 0) newErrors.stockQuantity = 'Stock cannot be negative';

        if (formData.imageUrl && !formData.imageUrl.startsWith('http')) {
            newErrors.imageUrl = 'Please enter a valid URL';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 6. Handle Form Submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        // Ready for your API / Global State
        const payload = {
            ...formData,
            price: parseFloat(formData.price),
            stockQuantity: parseInt(formData.stockQuantity, 10),
        };
        console.log('Submitting product:', payload);
        fetch(apiUrl + "/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Product added successfully:', data);
                
                // Reset form state & close modal
                refreshProducts(); // Refresh the product list in the parent component
                setFormData({ name: '', price: '', categoryId: '', description: '', imageUrl: '', stockQuantity: '' });
                closeModal();
            })
            .catch(err => {
                console.error('Error adding product:', err);
                addToast('Failed to add product. Please try again.', 'error');
                // Optionally, show an error toast or message to the user
            })
    };

    useEffect(() => {
        fetchCategories();
    }, [fetchCategories]);

    return (
        <>
            {/* Trigger Button */}
            <button className="btn btn-primary gap-2" onClick={openModal}>
                <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Add Product
            </button>

            {/* Main Dialog Window */}
            <dialog id="product_add_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box max-w-2xl p-6 md:p-8 bg-base-100 rounded-xl shadow-2xl">

                    {/* Header */}
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl text-base-content">Add New Product</h3>
                        <p className="text-sm text-base-content/60 mt-1">Fill out the information below to add a product to your inventory.</p>
                    </div>

                    {/* Close button (X icon) */}
                    <button
                        type="button"
                        className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 hover:bg-base-200"
                        onClick={closeModal}
                    >
                        ✕
                    </button>

                    {/* Form Content */}
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Row 1: Product Name */}
                            <div className="form-control w-full">
                                <label htmlFor="name" className="label py-1">
                                    <span className="label-text font-medium">Product Name <span className="text-error">*</span></span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="e.g. Wireless Ergonomic Mouse"
                                    className={`input input-bordered w-full ${errors.name ? 'input-error' : 'focus:input-primary'}`}
                                />
                                {errors.name && <span className="text-xs text-error mt-1">{errors.name}</span>}
                            </div>
                            <div className="form-control w-full">
                                <label htmlFor="imageUrl" className="label py-1">
                                    <span className="label-text font-medium">Product Image URL</span>
                                </label>
                                <input
                                    type="url"
                                    name="imageUrl"
                                    id="imageUrl"
                                    value={formData.imageUrl}
                                    onChange={handleChange}
                                    placeholder="https://example.com"
                                    className={`input input-bordered w-full ${errors.imageUrl ? 'input-error' : 'focus:input-primary'}`}
                                />
                                {errors.imageUrl && <span className="text-xs text-error mt-1">{errors.imageUrl}</span>}
                            </div>
                        </div>
                        {/* Row 2: Grid for Price, Stock, Category */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            {/* Price Input */}
                            <div className="form-control w-full">
                                <label htmlFor="price" className="label py-1">
                                    <span className="label-text font-medium">Price (USD) <span className="text-error">*</span></span>
                                </label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-base-content/40">$</span>
                                    <input
                                        type="number"
                                        name="price"
                                        id="price"
                                        step="0.01"
                                        value={formData.price}
                                        onChange={handleChange}
                                        placeholder="0.00"
                                        className={`input input-bordered w-full pl-7 ${errors.price ? 'input-error' : 'focus:input-primary'}`}
                                    />
                                </div>
                                {errors.price && <span className="text-xs text-error mt-1">{errors.price}</span>}
                            </div>

                            {/* Stock Input */}
                            <div className="form-control w-full">
                                <label htmlFor="stock" className="label py-1">
                                    <span className="label-text font-medium">Initial Stock <span className="text-error">*</span></span>
                                </label>
                                <input
                                    type="number"
                                    name="stockQuantity"
                                    id="stock"
                                    value={formData.stockQuantity}
                                    onChange={handleChange}
                                    placeholder="0"
                                    className={`input input-bordered w-full ${errors.stockQuantity ? 'input-error' : 'focus:input-primary'}`}
                                />
                                {errors.stockQuantity && <span className="text-xs text-error mt-1">{errors.stockQuantity}</span>}
                            </div>

                            {/* Category Dropdown */}
                            <div className="form-control w-full">
                                <label htmlFor="category" className="label py-1">
                                    <span className="label-text font-medium">Category <span className="text-error">*</span></span>
                                </label>
                                <select
                                    name="categoryId"
                                    id="category"
                                    value={formData.categoryId}
                                    onChange={handleChange}
                                    className={`select select-bordered w-full ${errors.categoryId ? 'select-error' : 'focus:select-primary'}`}
                                >
                                    <option value="" disabled>Select Category</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                                {errors.categoryId && <span className="text-xs text-error mt-1">{errors.categoryId}</span>}
                            </div>
                        </div>

                        {/* Row 4: Description */}
                        <div className="form-control w-full">
                            <label htmlFor="description" className="label py-1">
                                <span className="label-text font-medium">Description</span>
                            </label>
                            <textarea
                                name="description"
                                id="description"
                                rows={3}
                                value={formData.description}
                                onChange={handleChange}
                                placeholder="Provide a detailed description of the product items, features, specifications..."
                                className="textarea textarea-bordered w-full focus:textarea-primary resize-none"
                            ></textarea>
                        </div>

                        {/* Actions Footer */}
                        <div className="modal-action pt-4 border-t border-base-200">
                            <button
                                type="button"
                                className="btn btn-ghost"
                                onClick={closeModal}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="btn btn-primary px-6"
                            >
                                Save Product
                            </button>
                        </div>

                    </form>
                </div>
            </dialog>
        </>
    );
}

export default ProductAddModal;
