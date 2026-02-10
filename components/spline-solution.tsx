'use client'

import Spline from '@splinetool/react-spline'

interface SplineSolutionProps {
  className?: string
}

export function SplineSolution({ className }: SplineSolutionProps) {
  return (
    <div className={`${className ?? 'w-[296px] h-[277px] lg:w-[544px] lg:h-[509px]'} pointer-events-none overflow-hidden`}>
      <Spline scene="https://draft.spline.design/qcWnRtOfPJaduXFk/scene.splinecode" />
    </div>
  )
}
