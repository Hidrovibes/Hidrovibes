import React from "react";

const Proyecto = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-black">Hidrovibes</div>
        </div>
      </header>
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">Prototipo Físico</h1>

        {/* Estructura Circular */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8 flex">
          <div className="w-1/2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Estructura Circular</h2>
            <p className="text-gray-700 mb-4">
              La estructura del jardín hidropónico adopta una forma circular para maximizar el uso del espacio y permitir una distribución equitativa de la luz en todas las plantas.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img src="https://pbs.twimg.com/media/GKvDskcWMAANQ-O?format=jpg&name=large" alt="Estructura Circular" className="h-auto max-h-96 rounded-lg" />
          </div>
        </section>

        {/* Sistema Hidropónico */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8 flex">
          <div className="w-1/2 flex justify-center items-center">
            <img src="https://pbs.twimg.com/media/GKvMWoIXAAAPWs7?format=jpg&name=small" className="h-auto max-h-96 rounded-lg"/>
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Sistema Hidropónico</h2>
            <p className="text-gray-700 mb-4">
              Cada sección del jardín circular cuenta con un sistema hidropónico individual que proporciona nutrientes esenciales directamente a las raíces de las plantas. El agua recircula de manera eficiente para maximizar su uso y reducir el desperdicio.
            </p>
          </div>
        </section>

        {/* Bomba de Agua */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8 flex">
          <div className="w-1/2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Bomba de Agua</h2>
            <p className="text-gray-700 mb-4">
              Se incorpora una bomba de agua para facilitar el flujo constante de solución nutritiva a través del sistema hidropónico. La bomba de agua contribuye a mantener las condiciones óptimas para el crecimiento de las plantas.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img src="https://pbs.twimg.com/media/GKvNqMBWgAE9f_n?format=jpg&name=large" className="h-auto max-h-96 rounded-lg" />
          </div>
        </section>

        {/* Sustrato de Cultivo */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8 flex">
          <div className="w-1/2 flex justify-center items-center">
            <img src="https://pbs.twimg.com/media/GKvg4fHWEAAihgG?format=png&name=900x900" className="h-auto max-h-96 rounded-lg"/>
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Esponja</h2>
            <p className="text-gray-700 mb-4">
              Cada unidad circular cuenta con una esponja especial que se utiliza para mantener la humedad dentro de la planta
              manteniendola humeda y sana.
            </p>
          </div>
        </section>

        {/* Control Automatizado */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8 flex">
          <div className="w-1/2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Control Automatizado</h2>
            <p className="text-gray-700 mb-4">
              Se implementa el uso de arduinos para automatizar el jardin, haciendo facil de usar mediante una aplicación.
            </p>
          </div>
          <div className="w-1/2 flex justify-center items-center">
            <img src="https://pbs.twimg.com/media/GLJjqHHXUAAORLx?format=png&name=small" className="h-auto max-h-96 rounded-lg" />
          </div>
        </section>

        {/* Acceso Fácil */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-8 flex">
          <div className="w-1/2 flex justify-center items-center">
            <img src="ruta/a/tu/imagen/acceso_facil.jpg" alt="Acceso Fácil" className="h-auto max-h-96 rounded-lg" />
          </div>
          <div className="w-1/2">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Acceso Fácil</h2>
            <p className="text-gray-700 mb-4">
              El diseño circular giratorio facilita el acceso a todas las plantas para labores de cuidado, cosecha y mantenimiento sin la necesidad de moverse alrededor de la estructura.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Proyecto;
