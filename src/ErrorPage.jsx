import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
//         
        <div>
            <div className="min-h-screen flex flex-grow items-center justify-center bg-gray-50">
            <div className="rounded-lg  text-center">
            <h1 className="mb-4 text-4xl font-bold">404</h1>
            <p className="text-gray-600">Oops! The page you are looking for could not be found.</p>

            <Link to="/" className="text-blue-700">Go back to home</Link>
            </div>
            </div>
        </div>
    );
};

export default ErrorPage;