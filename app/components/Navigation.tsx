import React from "react";

const Navigation = () => {
  return (
    <div>
      <nav className="absolute top-5 right-0 z-10">
        <a href="/" className="text-black hover:text-green-900 px-4 py-2 border-r border-black">Home</a>
        <a href="empresa" className="text-black hover:text-green-900 px-4 py-2 border-r border-black">Empresa</a>
        <a href="proyecto" className="text-black hover:text-green-900 px-4 py-2 border-r border-black">Proyecto</a>
        <a href="/nosotros" className="text-black hover:text-green-900 px-4 py-2 border-r border-black">Nosotros</a>
      </nav>
    </div>
  );
}

export default Navigation;
