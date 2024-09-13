import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import icon from '/icon.png'
import noGoals from '../assets/disconnect.png'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <div className="flex flex-row items-center gap-2">
        <img className=" h-10 w-10" src={icon} alt="orbit" />
        <span className=" text-lg">Orbit</span>
      </div>
      <img src={noGoals} alt="orbit" />
      <p className="text-gray-300 leading-relaxed max-w-80 text-center">
        Você ainda nao cadastrou nenhuma meta, que tal cadastrar uma agora
        mesmo?
      </p>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-4" />
          Cadastrar metas
        </Button>
      </DialogTrigger>
    </div>
  )
}
