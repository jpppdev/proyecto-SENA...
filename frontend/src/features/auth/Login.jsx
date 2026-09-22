import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "@/shared";
import restaurante from "@/assets/images/Img-Restaurante.jpeg";
import logo from "@/assets/images/Img-Login.jpeg";
import title from "@/assets/images/Img-Titulo.png";
import { z } from "zod";

const loginSchema = z.object({
  email: z
    .string()
    .min(1, "El correo es obligatorio"),

  password: z
    .string()
    .min(1, "La contraseña es obligatoria"),
});

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      return;
    }

    setErrors({});

    navigate("/home");
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center blur-md scale-110"
        style={{ backgroundImage: `url(${restaurante})` }}
      ></div>

      <div className="relative z-10 w-[900px] h-[520px] bg-background rounded-4xl shadow-2xl flex">

        <div className="w-1/2">
          <img
            src={logo}
            alt="Restaurante"
            className="w-full h-full object-cover"
          />
        </div>

        <form
          onSubmit={handleLogin}
          className="w-1/2 flex flex-col justify-center px-12 "
        >
          <img
            src={title}
            alt="Title"
            className="w-48 mx-auto mb-6"
          />

          <h1 className="text-main font-heading text-text-primary text-center mb-6">
            Bienvenido
          </h1>

          <Input
            htmlFor="email"
            name="email"
            type="email"
            label="Correo electrónico"
            placeholder="Ingresa tu correo"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />

          <div className="mt-5">
            <Input
              htmlFor="password"
              name="password"
              type="password"
              label="Contraseña"
              placeholder="Ingresa tu contraseña"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
            />
          </div>

          <Button
            className="mt-6 p-4"
            variant="primary"
            type="submit"
            size="md"
          >
            Iniciar Sesión
          </Button>

          <p className="text-body text-text-primary text-center mt-6">
            ¿Aún no tienes una cuenta?{" "}
            <span className="text-medium font-semibold cursor-pointer text-brand"
            onClick={() => navigate("/register")}>
              Regístrate
            </span>
          </p>

          <div className="text-center mt-6 mb-6">
            <p className="text-medium font-semibold cursor-pointer text-brand"
            onClick={() => navigate("/forgot-password")}>
              
              ¿Olvidaste tu contraseña?
            </p>
          </div>
        </form>

      </div>
    </section>
  );
}

export default Login;