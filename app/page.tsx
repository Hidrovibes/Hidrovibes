import Image from "next/image";

const bannerItem = {
  title: "Ecologico y sencillo",
  subtitle: "Desde la comodidad de tu casa",
  image: "https://cdn.pixabay.com/photo/2017/03/13/12/16/greenhouse-2139526_1280.jpg"
};

const cardItems = [
  {
    id: 1,
    title: "Seguridad residencial",
    subtitle: "Protección a tu familia y patrimonio",
    image: "https://cdn.pixabay.com/photo/2017/01/18/23/59/insurance-1991226_640.jpg"
  },
  {
    id: 2,
    title: "Empresas y espacios coorporativos",
    subtitle: "Solución profesional para integrar sistemas de alarma, videovigilancia y control de accesos.",
    image: "https://media.istockphoto.com/id/670723856/es/foto/c%C3%A1mara-de-seguridad-en-la-corporaci%C3%B3n.jpg?s=612x612&w=0&k=20&c=k8N07rmvppOMJ8c43h7tju6v41z86ZqoSl81i9Q2F8Q="
  },
  {
    id: 3,
    title: "Espacios educativos",
    subtitle: "Garantiza la seguridad de un colegio y a sus alumnos",
    image: "https://media.istockphoto.com/id/1422516934/es/foto/vista-trasera-de-los-estudiantes-de-secundaria-que-estudian-en-el-aula.jpg?s=612x612&w=0&k=20&c=DdJpqkwd3dXFuMNu-vlesb9ig1My3xR3eyLIZdv-hkY="
  }
];

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
        <div className="text-center py-4">
          <h2 className="text-2xl font-bold text-black">Elige la mejor opción para ti</h2>
        </div>
        <div className="container mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardItems.map((card) => (
              <div key={card.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img className="w-full h-48 object-cover object-center" src={card.image} alt={card.title} />
                <div className="p-4">
                  <h3 className="font-bold text-xl mb-2 text-black">{card.title}</h3>
                  <p className='text-black'>{card.subtitle}</p>
                </div>
              </div>
            ))}
          </div>  
        </div>
      </main>
    </div>
  );
}
