// src/users/pagesUserListPage.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataTable, Button, Select, SearchField } from "@/shared";
import { UserColumns } from "../table/UserColumns";
import { users } from "../data/users";
import { Link } from "react-router-dom";
import ReportConfigModal from "../reports/components/ReportConfigModal";
import { LayoutGrid, List, Filter, Plus } from "lucide-react";


export default function UserListPage() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  return (
    // Contenedor principal con efecto Glassmorphism basado en Figma
    <div className="flex flex-col w-full max-w-[1400px] min-h-[750px] bg-white/20 backdrop-blur-md rounded-[28px] shadow-lg p-8 mx-auto border border-white/30">
      
      {/* 1. BARRA SUPERIOR (Buscador y Acciones) */}
      <div className="flex items-center justify-between bg-white/40 p-3 rounded-2xl shadow-sm mb-6">
        
        {/* Iconos de Vista (Grid / Lista) */}
        <div className="flex items-center gap-4 px-4 text-[var(--color-text-primary)]">
          <LayoutGrid className="cursor-pointer hover:text-[var(--color-brand)] transition-colors" />
          <List className="cursor-pointer hover:text-[var(--color-brand)] transition-colors" />
        </div>

        {/* Buscador Central usando tu componente SearchField */}
        <div className="flex-1 max-w-2xl px-4">
           <SearchField 
             value={searchValue}
             onChange={setSearchValue}
             placeholder="Search client..." 
             variant="filled"
             fullWidth
             className="bg-white rounded-full border-none shadow-inner h-10"
           />
        </div>

        {/* Botones de Filtro y Agregar */}
        <div className="flex items-center gap-4 pr-2">
          {/* Botón Filtro usando tu variante secondary */}
          <Button variant="secondary" className="rounded-full flex items-center gap-2 bg-transparent border-gray-600">
            <Filter size={18} /> FILTRO
          </Button>
          
          {/* Botón Agregar que navega a tu formulario usando react-router-dom */}
          <Button 
            variant="secondary" 
            onClick={() => navigate('listar-usuario/usercreate')}
            className="rounded-full flex items-center gap-2 bg-transparent border-gray-600"
          >
            <Plus size={18} /> Agregar
          </Button>
        </div>
      </div>

      {/* 2. FILA DE SELECTORES (Filtros rápidos usando tu componente Select) */}
      <div className="flex gap-4 mb-8 p-4 rounded-2xl bg-white/30 border border-white/40">
        <div className="flex-1">
          <Select name="fNombre" options={[{ label: "Nombre", value: "nombre" }]} />
        </div>
        <div className="flex-1">
          <Select name="fRol" options={[{ label: "Rol", value: "rol" }]} />
        </div>
        <div className="flex-1">
          <Select name="fDoc" options={[{ label: "Documento", value: "doc" }]} />
        </div>
        <div className="flex-1">
          <Select name="fEstado" options={[{ label: "Estado", value: "estado" }]} />
        </div>
      </div>

      {/* 3. TABLA DE USUARIOS (Usando tu DataTable y UserColumns de TanStack Table) */}
      <div className="flex-1 overflow-x-auto bg-white/50 rounded-2xl p-4 shadow-sm border border-white/40">
         {/* Tu componente DataTable procesará la data y las columnas */}
         <DataTable data={users} columns={UserColumns} />
      </div>

      {/* 4. BOTÓN INFERIOR (Exportar -> Abre tu ReportConfigModal) */}
      <div className="flex justify-center mt-6">
        <Button 
          variant="primary" 
          onClick={() => setIsReportModalOpen(true)} 
          className=
          "rounded-xl px-12 py-3 bg-[var(--color-secundary-500)] text-black hover:bg-[var(--color-secundary-600)] font-bold border-none shadow-md"
        >
          Exportar
        </Button>
      </div>

      {/* 5. MODAL DE REPORTES (Tu componente ya creado) */}
      <ReportConfigModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

    </div>
  );
}

