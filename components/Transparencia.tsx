import { FaBalanceScale } from 'react-icons/fa';

export default function Transparency() {
  return (
    <div className="relative py-12 md:py-24 bg-gray-900 text-white w-full h-[800px]">
      <div className='flex flex-col items-center justify-center w-full h-full'>
      <h2 className="text-3xl mb-6 text-center">Transparencia Total</h2>
      <FaBalanceScale size={60} className="mx-auto mb-6 hover:text-gray-400 transition-colors duration-300" />
      <p className="text-center max-w-xl mx-auto">Ofrecemos balances mensuales detallados para que siempre sepas cómo están funcionando tus redes sociales.</p>
      </div>
      <img src="/videos/img2.jpg" alt="Descripción de la imagen" className="absolute top-0 left-0 w-full h-full object-cover opacity-20" />
    </div>
  );
}