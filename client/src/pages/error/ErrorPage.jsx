import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const handleGoHome = () => {
        // Implement the logic to go back to the home page
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="400"
                height="200"
                viewBox="0 0 400 200"
            >
                <rect width="100%" height="100%" fill="#ffffff00" />
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="120"
                    fontWeight="bold"
                    fill="#333"
                >
                    404
                </text>
            </svg>

            <h1 className="text-4xl font-bold mb-4">Oops! Something went wrong.</h1>

            <p className="text-lg mb-8">We apologize for the inconvenience.</p>
            <Link to="/" className="flex items-center justify-center bg-teal-500 text-white py-2 px-4 rounded">
                Go to Home
            </Link>
        </div>
    );
};

export default ErrorPage;