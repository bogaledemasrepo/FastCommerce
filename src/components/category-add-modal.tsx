import React, { useState } from 'react';
import { apiUrl } from '../constants';
import { useToast } from '../context/toaster-context/toster';
// Define the shape of our Category data
interface CategoryInput {
    name: string;
    description: string;
}

function CategoryAddModal({ refreshCategories }: { refreshCategories: () => void }) {
    const { addToast } = useToast()
    const accessToken = localStorage.getItem("access-token") || "";

    const [formData, setFormData] = useState<CategoryInput>({
        name: '',
        description: ''
    });

    // 2. State for validation errors
    const [errors, setErrors] = useState<Partial<Record<keyof CategoryInput, string>>>({});

    // 3. Native dialog control handlers
    const openModal = () => {
        const modal = document.getElementById('Category_add_modal') as HTMLDialogElement | null;
        modal?.showModal();
    };

    const closeModal = () => {
        const modal = document.getElementById('Category_add_modal') as HTMLDialogElement | null;
        modal?.close();
        // Reset form upon manual exit if desired
    };

    // 4. Handle input changes dynamically
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear validation error when user types
        if (errors[name as keyof CategoryInput]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    // 5. Client-side form validation
    const validateForm = (): boolean => {
        const newErrors: Partial<Record<keyof CategoryInput, string>> = {};

        if (!formData.name.trim()) newErrors.name = 'Category name is required';
        if (!formData.description.trim()) newErrors.description = 'Description is required';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 6. Handle Form Submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        // Ready for your API / Global State
        const payload = {
            ...formData
        };
        console.log('Submitting Category:', payload);
        fetch(apiUrl + "/categories", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then(data => {
                console.log('Category added successfully:', data);

                // Reset form state & close modal
                refreshCategories(); // Refresh the category list in the parent component
                setFormData({ name: '', description: '' });
                closeModal();
            })
            .catch(err => {
                console.error('Error adding Category:', err);
                addToast('Failed to add Category. Please try again.', 'error');
                // Optionally, show an error toast or message to the user
            })
    };

    return (
        <>
            {/* Trigger Button */}
            <button className="btn btn-primary gap-2" onClick={openModal}>
                <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                </svg>
                Add Category
            </button>

            {/* Main Dialog Window */}
            <dialog id="Category_add_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box max-w-2xl p-6 md:p-8 bg-base-100 rounded-xl shadow-2xl">

                    {/* Header */}
                    <div className="mb-6">
                        <h3 className="font-bold text-2xl text-base-content">Add New Category</h3>
                        <p className="text-sm text-base-content/60 mt-1">Fill out the information below to add a Category to your inventory.</p>
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
                        {/* Row 1: Category Name */}
                        <div className="form-control w-full">
                            <label htmlFor="name" className="label py-1">
                                <span className="label-text font-medium">Category Name <span className="text-error">*</span></span>
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



                        {/* Row 2: Description */}
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
                                placeholder="Provide a detailed description of the Category items, features, specifications..."
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
                                Save Category
                            </button>
                        </div>

                    </form>
                </div>
            </dialog>
        </>
    );
}

export default CategoryAddModal;
