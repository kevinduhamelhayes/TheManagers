import { FaTwitter, FaInstagram, FaMoneyBillWave } from 'react-icons/fa';

export default function Services() {
  return (
    <div className="py-12 bg-black text-white w-full mx-10">
      <div className='pb-8'>
      <h2 className="text-4xl text-center">Redes Sociales que Gestionamos</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-evenly m-8">
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <FaTwitter size={50} className="hover:text-blue-400 transition-colors duration-300 pb-4" />
          <p>Twitter</p>
        </div>
        <div className="flex flex-col items-center mb-6 md:mb-0">
          <FaInstagram size={50} className="hover:text-pink-500 transition-colors duration-300 pb-4" />
          <p>Instagram</p>
        </div>
        <div className="flex flex-col items-center">
          <FaMoneyBillWave size={50} className="hover:text-red-500 transition-colors duration-300 pb-4" />
          <p>OnlyFans</p>
        </div>
        <div className="flex flex-col items-center">
          <FaMoneyBillWave size={50} className="hover:text-red-500 transition-colors duration-300 pb-4 " />
          <p>OnlyFans</p>
        </div>
        <div className="flex flex-col items-center">
          <FaMoneyBillWave size={50} className="hover:text-red-500 transition-colors duration-300 pb-4" />
          <p>OnlyFans</p>
        </div>
      </div>
    </div>
  );
}
