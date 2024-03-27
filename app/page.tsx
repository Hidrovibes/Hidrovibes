const bannerItem = {
  title: "Ecologico y sencillo",
  subtitle: "Desde la comodidad de tu casa",
  image: "https://cdn.pixabay.com/photo/2017/03/13/12/16/greenhouse-2139526_1280.jpg"
};
const bannerItem2 = {
  title: "Elige la practicidad",
  subtitle: "Gracias a nosotros",
  image: "https://ecologismos.com/wp-content/2012/05/greenwheel-un-cultuvo-hidroponico-de-uso-casero.jpg"
};

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-black">Hidrovibes</div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bannerItem.image})` }}>
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <h2 className="text-4xl font-bold text-white text-shadow-black">{bannerItem.title}</h2>
            <p className="text-2xl font-bold text-black">{bannerItem.subtitle}</p>
          </div>
        </div>
        <div className="m-10 mb-24">
        <section className="mb-4 flex">
      <div className="w-1/2">
        <h2 className="font-bold text-4xl text-black-700">
          ¿Quiénes somos?
        </h2>
        <br />
        <br />
        <p className="text-black text-justify">
          En nuestra empresa, nos comprometemos con el cuidado del medio ambiente y queremos brindarte la oportunidad de cultivar tus propios vegetales desde la comodidad de tu hogar. Nuestra iniciativa está centrada en promover prácticas sostenibles y facilitarte el acceso a alimentos frescos y saludables, directamente desde tu jardín doméstico.
          Únete a nosotros en este viaje hacia un estilo de vida más ecológico y autónomo.
        </p>
        <br />
        <p className="text-black text-justify">
          Descubre en Hidrovibes una solución sencilla y amigable para el cuidado de tus plantas. Con nuestra tecnología intuitiva, controla el riego, la nutrición y el ambiente de tus plantas de manera fácil y eficiente, garantizando un crecimiento saludable y sin complicaciones.
        </p>
      </div>
      <div className="w-1/2 flex justify-center items-center">
        <img
          src="https://pbs.twimg.com/media/GJnfKzIXgAE14wG?format=jpg&name=small"
          alt="Prototipo"
          className="h-auto max-h-96 max-w-full"
        />
      </div>
    </section>
      </div>
      <div className="relative w-full h-screen bg-cover bg-center" style={{ backgroundImage: `url(${bannerItem2.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold text-white text-shadow-black">{bannerItem2.title}</h2>
        <p className="text-2xl font-bold text-white">{bannerItem2.subtitle}</p>
      </div>
    </div>
      </main>
    </div>
  );
}
