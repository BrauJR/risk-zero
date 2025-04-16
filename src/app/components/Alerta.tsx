'use client'

interface Props {
  mensaje: string
}

export default function Alerta({ mensaje }: Props) {
  return (
    <div className="bg-yellow-200 text-black px-4 py-2 rounded-md my-4">
      ⚠️ {mensaje}
    </div>
  )
}
