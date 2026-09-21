import imghome from "@/assets/images/Home.jpg";
import { Button } from "@/shared";
import { useNavigate } from "react-router-dom";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="w-full flex items-center justify-center p-4 md:p-8 min-h-[calc(100vh-100px)]">
      
      {/* TARJETA PRINCIPAL CON GLASSMORPHISM MEJORADO */}
      <div className="relative w-full max-w-[1050px] bg-white/20 backdrop-blur-xl border border-white/40 rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row items-center p-8 md:p-14 gap-10">

        {/* TEXTO */}
        <div className="w-full md:w-1/2 flex flex-col justify-center z-10 pl-2 md:pl-8">
          <span className="text-lg md:text-xl font-medium tracking-wide text-gray-800 mb-1">
            Plato De La Casa
          </span>
          
          <h1 className="text-6xl md:text-[5.5rem] font-black text-black leading-none tracking-tighter mb-2 drop-shadow-sm">
            SALMÓN
          </h1>
          
          <h3 className="text-2xl md:text-3xl font-normal text-gray-800 mb-10">
            Rebosado
          </h3>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate("/dashboard/orderCreate")}
              className="rounded-full px-10 py-3 shadow-xl bg-black text-white hover:bg-gray-800 hover:scale-105 hover:shadow-2xl transition-all duration-300 font-bold tracking-widest border-none"
            >
              ORDENAR
            </Button>

            <span className="text-3xl font-extrabold text-white drop-shadow-md">
              $ 50.000
            </span>
          </div>
        </div>

        {/* IMAGEN DEL PLATO */}
        <div className="w-full md:w-1/2 flex justify-center items-center z-10 relative">
          <div className="relative group cursor-pointer">
            {/* Sombra suave proyectada debajo de la imagen */}
            <div className="absolute inset-0 bg-black/30 translate-y-6 translate-x-4 blur-2xl rounded-[2.5rem] z-0 transition-transform duration-500 group-hover:translate-y-8"></div>
            
            <img
              src={imghome}
              alt="Salmón rebosado"
              className="relative z-10 w-full max-w-[480px] h-auto object-cover rounded-[2.5rem] shadow-2xl border-[6px] border-white/50 group-hover:-translate-y-3 transition-all duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
}