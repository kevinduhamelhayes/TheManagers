import { RiScales3Line } from 'react-icons/ri';
import CardPrices from './CardPrices';
import Button from '@nextui-org/react/dist/Button';
import { FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiOnlyfans } from 'react-icons/si';

export default function CardsPrices() {
  return (
    <div className="relative h-[800px] w-full overflow-hidden z-10">

      <video
        autoPlay
        muted
        loop
        className="absolute -top-[500px] z-10 w-auto min-w-full min-h-full max-w-none"
      >
        <source src="/videos/videohero3.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>

      {/* Fondo negro con opacidad */}
      <div className="absolute z-20 w-full h-full bg-black opacity-30"></div>

      {/* Contenido principal */}
      <div className="absolute z-30 w-full h-full flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold">Gestión Profesional de Tus Redes Sociales</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CardPrices />
          <CardPrices />
          <CardPrices />
        </div>
      </div>
    </div>
  );
}

