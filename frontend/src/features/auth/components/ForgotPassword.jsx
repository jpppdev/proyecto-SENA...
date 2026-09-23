import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@/shared";
import restaurante from "../../../assets/images/Img-Restaurante.jpeg";
import logo from "../../../assets/images/Img-Login.jpeg";
import title from "../../../assets/images/Img-Titulo.png";
import { forgotPasswordSchema } from "../schemas/ForgotPasswordSchema";

function ForgotPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setEmail(e.target.value);

    setErrors({
      ...errors,
      email: undefined,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = forgotPasswordSchema.safeParse({
      email,
    });

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});

    alert("Se ha enviado un codigo a su correo para recuperar su contraseña");

    navigate("/resetPasswordToken");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-110"
        style={{ backgroundImage: `url(${restaurante})` }}
      ></div>

      {/* Tarjeta */}
      <div className="relative z-10 w-[1000px] h-[600px] bg-white rounded-4xl shadow-2xl flex overflow-hidden">

        {/* Imagen */}
        <div className="w-1/2">
          <img
            src={logo}
            alt="Restaurante"
            className="w-full h-full object-cover"
          />
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-1/2 flex flex-col justify-center items-center px-14"
        >

          <img
            src={title}
            alt="Title"
            className="w-48 mx-auto mb-6"
          />

          <h1 className="text-main font-heading text-[var(--text-primary)] text-center mb-4">
            Recuperar contraseña
          </h1>

          <p className="text-body text-[var(--text-primary)] text-center mb-8">
            Ingresa tu correo electrónico y te enviaremos
            un enlace para recuperar tu contraseña.
          </p>

          <Input
            htmlFor="email"
            name="email"
            type="email"
            label="Correo electrónico"
            placeholder="Ingresa tu correo"
            value={email}
            onChange={handleChange}
            error={errors.email}
          />

          <div className="w-full mt-8">
            <Button
              variant="primary"
              type="submit"
              size="md"
              style={{
                backgroundColor: "var(--semantic-brand)",
                color: "var(--text-inverse)",
                borderRadius: "7px",
                width: "100%",
              }}
            >
              Recuperar contraseña
            </Button>
          </div>

          <div className="text-center mt-6">
            <p
              className="text-medium font-semibold cursor-pointer text-brand"
              onClick={() => navigate("/login")}
            >
              Volver al inicio de sesión
            </p>
          </div>

        </form>

      </div>
    </section>
  );
}

export default ForgotPassword;

