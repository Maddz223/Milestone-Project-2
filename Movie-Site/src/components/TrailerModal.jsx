import { useRef } from "react";
import PropTypes from "prop-types";

// TrailerModal component displays a modal with a YouTube trailer
const TrailerModal = ({ trailer, onClose }) => {
    if (!trailer) return null;

    const modalRef = useRef();

    const handleBackdropClick = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            onClose();
        }
    };

    return (
        // Modal container
        // The backdrop is a semi-transparent overlay that covers the entire screen
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-transparent backdrop-blur-sm transition-opacity duration-300"
            onClick={handleBackdropClick}>
            {/* Stops clicks inside the modal closing it */}
            <div
                ref={modalRef}
                className="relative bg-white dark:bg-slate-700 rounded-lg p-4 shadow-2xl max-w-fit transform transition-all duration-300 scale-100 animate-fadeIn"
                onClick={e => e.stopPropagation()}>
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

// PropTypes for type checking
// Ensures that the trailer prop is an object with a key and name property
TrailerModal.propTypes = {
    trailer: PropTypes.shape({
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
};

export default TrailerModal;