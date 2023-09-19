import React from 'react'
import {
  Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button,
} from '@nextui-org/react'

function CardPrices() {
  return (
    <Card className="mt-4 h-[450px] max-w-[360px]  bg-white ">
      <CardHeader className="flex flex-col gap-3 bg-slate-700 text-white">
        <div className="flex flex-col self-start">
          <p className="text-xl">Plan Full</p>
          <p className="text-small text-gray-300">el mas vendido por su flexibilidad</p>
        </div>
        <div className="absolute right-0 top-0 mr-1 mt-4 rotate-12 bg-orange-400">
          <p className="p-1 leading-4"> Recomendado</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <ul className="px-1">
          <li className="text-5xl font-semibold">
            <span className="flex items-baseline">
              100
              <p className="text-lg">u$d</p>
            </span>
          </li>
          <li className="mt-2">A todo lo incluido en el plan Easy le sumamos:</li>
          <li className="mt-2">Soporte técnico prioritario</li>
          <li className="mt-2">Listado de hasta 500 productos en tu tienda</li>
          <li className="mt-2">Integración con múltiples medios de pago</li>
          <li className="mt-2">Herramientas de marketing y promociones</li>
          <li className="mt-2">Personalización básica de la tienda</li>
        </ul>
      </CardBody>
      <Divider />
      <CardFooter className="min-h-[80px]">
        <Link>
          <Button color="primary" variant="solid" className="bg-slate-700 px-32 text-lg font-medium">
            Buy now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

export default CardPrices
