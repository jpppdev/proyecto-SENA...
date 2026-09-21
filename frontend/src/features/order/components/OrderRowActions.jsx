import { Pencil, Eye, Trash } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function OrderRowActions({ order }) {
  const navigate = useNavigate();

  
  const handleView = () => {
    navigate(`/dashboard/orderView/${order.id}`);
  };

  const handleEdit = () => {
    navigate(`/dashboard/orders/${order.id}/edit`);
  };

  const handleDelete = () => {
    console.log("Eliminar orden:", order.id);
  };

  return (
    <div className="flex gap-2">
      <button onClick={handleView} className="p-1 rounded hover:bg-gray-100 text-blue-600">
        <Eye size={16} /> 
      </button>
      
      <button onClick={handleEdit} className="p-1 rounded hover:bg-gray-100 text-orange-500">
        <Pencil size={16} /> 
      </button>

      <button onClick={handleDelete} className="p-1 rounded hover:bg-gray-100 text-red-600">
        <Trash size={16} /> 
      </button>
    </div>
  );
}