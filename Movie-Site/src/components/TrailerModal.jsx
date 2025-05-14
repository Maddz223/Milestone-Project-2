import React, { useRef } from "react";
import PropTypes from "prop-types";

const TrailerModal = ({ trailer, onClose }) => {
    if (!trailer) return null;

    const modalRef = useRef();

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={handleBackdropClick}
        >
            <div
                ref={modalRef}
                className="relative bg-white dark:bg-gray-900 rounded-lg p-4 shadow-2xl max-w-fit"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-red-600 text-xl font-bold"
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Video container */}
                <div className="w-[90vw] max-w-[900px] aspect-video">
                    <iframe
                        className="w-full h-full rounded-md"
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        title={trailer.name}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Trailer title (optional) */}
                <div className="mt-2 text-center text-sm text-gray-700 dark:text-gray-300">
                    {trailer.name}
                </div>
            </div>
        </div>
    );
};

TrailerModal.propTypes = {
    trailer: PropTypes.shape({
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default TrailerModal;