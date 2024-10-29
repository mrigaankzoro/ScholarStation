// Modal.js
import React from 'react';

const Modal = ({ message, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-800 p-5 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold text-white">Error</h2>
                <p className="text-gray-300">{message}</p>
                <button 
                    onClick={onClose} 
                    className="mt-4 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default Modal;
