import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'
import icon from '/icon.png'
import { Progress, ProgressIndicator } from './ui/progress'
import { Separator } from './ui/separtor'
import { OutlineButton } from './ui/outline-button'
import { CheckCircle2, Plus } from 'lucide-react'

export function Summary() {
  return (
    <div className="py-10 max-w-[480px] px-5 mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img loading="eager" className=" h-6 w-6" src={icon} alt="orbit" />
          <span className=" text-lg font-semibold">5 a 10 de agosto</span>
        </div>
        <DialogTrigger asChild>
          <Button size="sm">
            <Plus className="size-4" />
            Cadastrar metas
          </Button>
        </DialogTrigger>
      </div>
      <div className="flex flex-col gap-3">
        <Progress value={5} max={10}>
          <ProgressIndicator style={{ width: '50%' }} />
        </Progress>

        <div className="flex items-center justify-between text-xs text-gray-400">
          <span>
            Você completou <span className="text-gray-100">5</span> de{' '}
            <span className="text-gray-100">15</span> metas essa semana
          </span>
          <span>50%</span>
        </div>
      </div>
      <Separator />
      <div className="flex flex-wrap gap-3">
        <OutlineButton>
          <Plus className="size-4 text-gray-600" />
          meditar
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-gray-600" />
          correr
        </OutlineButton>

        <OutlineButton>
          <Plus className="size-4 text-gray-600" />
          passear com a belinha
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-gray-600" />
          passear com a belinha
        </OutlineButton>
        <OutlineButton>
          <Plus className="size-4 text-gray-600" />
          passear com a belinha
        </OutlineButton>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-medium">Sua semana</h2>
        <div className="flex flex-col gap-4">
          <h3 className="font-medium">
            Domingo{' '}
            <span className="text-gray-400 text-xs">(10 de agosto)</span>
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="size-4 text-rose-500" />
              <span className="text-sm text-gray-400">
                Você completou "
                <span className="text-gray-100">Acordar cedo</span>" às{' '}
                <span className="text-gray-100"> 13:00h </span>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
  //<EmptyGoals />
}
