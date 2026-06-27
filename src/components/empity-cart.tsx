import React from 'react';
import CustomButton from './custom-button';

// Explicitly type the component props
interface EmptyCartProps {
    onStartShopping: () => void;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ onStartShopping }) => {
    return (
        <div className="flex flex-col items-center justify-center text-center px-4 py-12 max-w-sm mx-auto font-sans">
            <div className="text-6xl mb-4 transition-transform duration-300 hover:scale-110">
                🛒
            </div>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                Your Cart is Empty
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
                Looks like you haven't added anything to your cart yet. Explore our top categories and find something you love!
            </p>


            <CustomButton onClick={onStartShopping} title={'Start Shopping'} />
        </div>
    );
};

export default EmptyCart;
