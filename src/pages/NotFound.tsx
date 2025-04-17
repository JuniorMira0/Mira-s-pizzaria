
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const NotFound = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Página não encontrada</p>
          <Link to="/" className="text-[#ea1d2c] hover:text-[#ffc107] underline">
            Voltar para Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
