import React, { ReactNode } from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

type TooltipProps = {
  children: ReactNode
  content: string
}
export const Tooltip = ({
  children,
  content,
  ...props
}: TooltipProps) => {
  return (
    <TooltipPrimitive.Root>
      <TooltipPrimitive.Trigger asChild>
        {children}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Content
        className="text-white select-none text-[10px] leading-none  border border-[#3D3D3D] font-bold uppercase data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade rounded bg-[#262626] px-[15px] py-[10px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]"
        sideOffset={5}
        {...props}
      >
        {content}
        <TooltipPrimitive.Arrow className="fill-[#3D3D3D] " />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Root>
  );
}
