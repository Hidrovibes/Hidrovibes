import React from "react";

const Empresa = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-black">Hidrovibes</div>
        </div>
        </header>
        <div className="flex flex-col h-screen bg-gray-100">


      {/* Contenido */}
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-3xl font-semibold text-gray-900 mb-4">CONOCENOS</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">


          <section id="vision" className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Visión</h2>
            <p className="text-gray-700 mb-4 text-justify">
            En nuestra búsqueda por ser líderes reconocidos en el mercado de jardines hidropónicos comerciales para interiores, nos comprometemos a ser la vanguardia de la innovación y la sostenibilidad. En este camino, nos destacaremos por la continua integración de tecnologías avanzadas que optimicen los procesos de cultivo y mejoren la eficiencia de nuestros sistemas. Al adoptar prácticas sostenibles en todos los aspectos de nuestro negocio, desde la selección de materiales hasta las operaciones diarias, buscamos establecer un estándar de excelencia que inspire a la industria en su conjunto.
Nuestro propósito va más allá de ser una empresa exitosa; nos esforzamos por crear un impacto positivo significativo en la sociedad. Al facilitar el acceso a alimentos frescos y cultivados localmente, contribuimos a fortalecer la seguridad alimentaria en las comunidades a las que servimos. Estamos comprometidos con la reducción de la huella ecológica, fomentando prácticas respetuosas con el medio ambiente que preserven los recursos naturales y minimicen el impacto ambiental.
En nuestra visión de transformar la manera en que concebimos y experimentamos el cultivo de plantas en entornos urbanos, buscamos inspirar a más personas a adoptar la agricultura hidropónica. Creemos que esta tecnología innovadora tiene el potencial de revolucionar la forma en que cultivamos alimentos, haciendo posible que las comunidades urbanas participen activamente en la producción de alimentos frescos y saludables.
Nos visualizamos como agentes de cambio, liderando el camino hacia un futuro donde la agricultura hidropónica sea una parte integral de la vida urbana. A medida que avanzamos, nos esforzamos por construir una comunidad de clientes, colaboradores y entusiastas comprometidos con la sostenibilidad y la alimentación consciente. Juntos, estamos sembrando las semillas para un futuro más verde y saludable, donde la conexión entre las personas y la tierra florece en armonía. 
            </p>
          </section>

          <section id="mision" className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Misión</h2>
            <p className="text-gray-700 mb-4 text-justify">
            En el núcleo de nuestra empresa reside la dedicación a proporcionar una solución innovadora y sostenible para el cultivo de plantas en entornos interiores. Nos enorgullece ser agentes de cambio en la manera en que concebimos y experimentamos la agricultura en espacios cerrados. Nuestro compromiso se manifiesta en la oferta de sistemas hidropónicos de alta calidad, diseñados meticulosamente para maximizar la eficiencia y la productividad en la producción de alimentos frescos y saludables.
Nos esforzamos por ser pioneros en la creación de soluciones que no solo satisfacen las necesidades actuales de los clientes, sino que también anticipan y abordan los desafíos futuros del cultivo urbano. La calidad de nuestros sistemas hidropónicos refleja la dedicación a la excelencia en la ingeniería y el diseño, asegurando que cada cliente experimente resultados óptimos en sus esfuerzos de cultivo interior.
Más allá de ofrecer productos excepcionales, abrazamos un compromiso profundo con la promoción de un estilo de vida verde y consciente del medio ambiente. Nos esforzamos por ser un faro de sostenibilidad, incorporando prácticas eco-amigables en cada aspecto de nuestro negocio. Desde la selección de materiales hasta la gestión de residuos, buscamos constantemente formas de minimizar nuestro impacto ambiental y fomentar la responsabilidad ambiental en la industria.
Como parte integral de nuestra visión, nos comprometemos a apoyar el crecimiento de la agricultura urbana. Creemos firmemente en la importancia de empoderar a las comunidades para que cultiven sus propios alimentos frescos y saludables, contribuyendo así a la creación de entornos urbanos más sostenibles y resilientes. Estamos dedicados a ser un catalizador para el cambio positivo, facilitando el acceso a soluciones de cultivo interior que no solo alimentan el cuerpo, sino también el alma de las comunidades a las que servimos.
En resumen, nuestra empresa no solo se trata de proporcionar sistemas hidropónicos avanzados, sino de ser líderes en el impulso de un movimiento hacia un futuro donde la agricultura interior sostenible sea la norma. Estamos comprometidos con la innovación constante, la sostenibilidad y el empoderamiento de las comunidades urbanas para que florezcan en un entorno más verde y saludable.  
            </p>
          </section>
          <section id="valores">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Valores</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Compromiso con la calidad.</li>
              <li>Innovación constante.</li>
              <li>Responsabilidad ambiental.</li>
            </ul>
          </section>
        </div>
        <br />
        <br />
        <br />
      </main>
    </div>
    
  </div>
        
        
  );
}

export default Empresa;