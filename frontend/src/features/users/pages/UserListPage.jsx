// src/users/pagesUserListPage.js

import { useState } from "react";
import { DataTable, Button } from "@/shared";
import { UserColumns } from "../table/UserColumns";
import { users } from "../data/users";
import { Link } from "react-router-dom";
import ReportConfigModal from "../reports/components/ReportConfigModal";

export default function UserListPage() {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  return (
    <div className="p-6">
      
      <h1 className="text-[length:var(--text-main)] font-semibold mb-4 text-[color:var(--color-text-primary)] ">Listado de Usuarios</h1>

      
      <div className="flex justify-end items-center gap-4 pb-10">

        {/* botón de reportar usuario */}
        <Button onClick={() => setIsReportModalOpen(true)}>
          Reportar usuario
        </Button>


        {/* botón de reportar crear usuario */}
        <Link to="/dashboard/userCreate" className="text-h1 font-heading">
          <Button>Crear usuario</Button>
        </Link>

      </div>

      <DataTable data={users} columns={UserColumns} />

      <ReportConfigModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />

    </div>
  );
}
