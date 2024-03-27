import React from "react";

const Proyecto = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      <header className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-xl text-black">Hidrovibes</div>
        </div>
        </header>
        <div className="container mx-auto mt-8 px-4">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">Prototipo Físico</h1>

      {/* Estructura Circular */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Estructura Circular</h2>
        <p className="text-gray-700 mb-4">
          La estructura del jardín hidropónico adopta una forma circular para maximizar el uso del espacio y permitir una distribución equitativa de la luz en todas las plantas.
        </p>
        <img src="ruta/a/tu/imagen/estructura_circular.jpg" alt="Estructura Circular" className="w-full h-auto rounded-lg" />
      </section>

      {/* Sistema Hidropónico */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sistema Hidropónico</h2>
        <p className="text-gray-700 mb-4">
          Cada sección del jardín circular cuenta con un sistema hidropónico individual que proporciona nutrientes esenciales directamente a las raíces de las plantas. El agua recircula de manera eficiente para maximizar su uso y reducir el desperdicio.
        </p>
        <img src="https://www.bing.com/images/search?view=detailV2&ccid=4a71mMsc&id=F335FAF0C6D56C69C1C63423B11904E51ED8CA2E&thid=OIP.4a71mMscAp_XLz7ymaKatwHaFf&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.e1aef598cb1c029fd72f3ef299a29ab7%3frik%3dLsrYHuUEGbEjNA%26riu%3dhttp%253a%252f%252f2.bp.blogspot.com%252f-CjcU9jN8HAE%252fT_WjkAugJbI%252fAAAAAAAAAJA%252fR0c20WvEoSw%252fs1600%252fSistema%25252BNFT_rgb.jpg%26ehk%3dsRvElCrk6ePw7FrprWkh30kloOQFVt4DoW9WHhjECVA%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=695&expw=936&q=ESTRUCTURA+CIRCULAR+DE+UN+HIDROPONICO&simid=608042098510601046&FORM=IRPRST&ck=1631FF0E104823F28CBCFA00B51163FA&selectedIndex=29&itb=0" 
        alt="Sistema Hidropónico" className="w-full h-auto rounded-lg" />
      </section>

      {/* Bomba de Agua */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Bomba de Agua</h2>
        <p className="text-gray-700 mb-4">
          Se incorpora una bomba de agua para facilitar el flujo constante de solución nutritiva a través del sistema hidropónico. La bomba de agua contribuye a mantener las condiciones óptimas para el crecimiento de las plantas.
        </p>
        <img src="https://www.bing.com/images/search?view=detailV2&ccid=egIMQECC&id=0AFB0A4618D39AD45E4B7FCC100B025FA83358B9&thid=OIP.egIMQECCBUAN_k4KQRN97gAAAA&mediaurl=https%3a%2f%2f1.bp.blogspot.com%2f-e-8ftSfCFCk%2fYNoCBEwAE6I%2fAAAAAAAAcAQ%2fY3ivNlADPT4-3w1U7mztQ6qQdYTfIjDDwCLcBGAsYHQ%2fs320%2fIMG_20210519_152323.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.7a020c40408205400dfe4e0a41137dee%3frik%3duVgzqF8CCxDMfw%26pid%3dImgRaw%26r%3d0&exph=240&expw=320&q=BOMBA+DE+AGUA+PARA+UN+SISTEMA+HIDROPONICO&simid=607994432954326750&FORM=IRPRST&ck=7A7B1C050ED0D4144EEA29A956DF36E3&selectedIndex=59&itb=0" 
        alt="Bomba de Agua" className="w-full h-auto rounded-lg" />
      </section>

      {/* Sustrato de Cultivo */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Sustrato de Cultivo</h2>
        <p className="text-gray-700 mb-4">
          Cada unidad circular cuenta con un sustrato de cultivo diseñado para retener la humedad y proporcionar un soporte adecuado para las raíces de las plantas.
        </p>
        <img src="https://www.bing.com/images/search?view=detailV2&ccid=t6Zn61Cn&id=B86175538F46917365AED1B510BD30EC5B523D8B&thid=OIP.t6Zn61Cnkho2tk7w3RD8nwHaFP&mediaurl=https%3a%2f%2fcdn.portalfruticola.com%2f2022%2f08%2fatips08302022-2-1024x724.png&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b7a667eb50a7921a36b64ef0dd10fc9f%3frik%3diz1SW%252bwwvRC10Q%26pid%3dImgRaw%26r%3d0&exph=724&expw=1024&q=SUSTRATO+CULTIVO+PARA+UN+SISTEMA+HIDROPONICO&simid=607988407100514164&FORM=IRPRST&ck=C423589414D76335BDB4BEC77C02BCB3&selectedIndex=0&itb=0" 
        alt="Sustrato de Cultivo" className="w-full h-auto rounded-lg" />
      </section>

      {/* Control Automatizado */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Control Automatizado</h2>
        <p className="text-gray-700 mb-4">
          Se implementa un sistema de control automatizado que regula la velocidad de rotación, el suministro de agua y otros parámetros clave. Este sistema puede ser programado o ajustado según las necesidades específicas de los cultivos.
        </p>
        <img src="https://www.bing.com/images/search?view=detailV2&ccid=mPblEyZn&id=B7FC83A72787B7DB7061698573ABA12F34720336&thid=OIP.mPblEyZnJ-HWV3m_15xYggFNC7&mediaurl=https%3a%2f%2fcdn.portalfruticola.com%2f2018%2f01%2f7900372b-arduinohardware.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.98f6e513266727e1d65779bfd79c5882%3frik%3dNgNyNC%252bhq3OFaQ%26pid%3dImgRaw%26r%3d0&exph=720&expw=1280&q=CONTROL+AUTIMATIZADO+PARA+UN+SISTEMA+HIDROPONICO&simid=608018656562455237&FORM=IRPRST&ck=FDDB79F9BF9300967B5ED87858438BC2&selectedIndex=4&itb=0" 
        alt="Control Automatizado" className="w-full h-auto rounded-lg" />
      </section>

      {/* Acceso Fácil */}
      <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Acceso Fácil</h2>
        <p className="text-gray-700 mb-4">
          El diseño circular giratorio facilita el acceso a todas las plantas para labores de cuidado, cosecha y mantenimiento sin la necesidad de moverse alrededor de la estructura.
        </p>
        <img src="ruta/a/tu/imagen/acceso_facil.jpg" alt="Acceso Fácil" className="w-full h-auto rounded-lg" />
      </section>
    </div>
        </div>
  );
}

export default Proyecto;
