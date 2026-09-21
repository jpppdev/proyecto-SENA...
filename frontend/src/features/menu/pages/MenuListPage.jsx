import { Link } from "react-router-dom";
import { Button, DataTable } from "@/shared";
import { MenuColumns } from "../table/MenuColumns";
import { menu } from "../data/menu"; 

export default function MenuListPage() {
  return (
    <div className="p-6">
      
      <h1 className="text-[length:var(--text-main)] font-semibold mb-4 text-[color:var(--color-text-primary)]">
        Listado del Menú
      </h1>
      
      <div className="flex justify-end items-center gap-4 pb-10">
        
        {/* botón de crear platillo */}
        <Link to="/dashboard/menuCreate" className="text-h1 font-heading">
          <Button>Agregar al menú</Button>
        </Link>

      </div>

      <DataTable data={menu} columns={MenuColumns} />

    </div>
  );
}