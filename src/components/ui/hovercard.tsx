// "use client";

import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

const HoverCardTrigger = HoverCardPrimitive.Trigger;
const HoverCardPortal = HoverCardPrimitive.Portal;
const HoverCardContent = HoverCardPrimitive.Content;
const HoverCardArrow = HoverCardPrimitive.Arrow;

interface HoverCardProps {
  trigger: () => React.ReactNode; // HoverCard를 열 트리거(링크나 버튼 등)
  content: () => React.ReactNode; // HoverCard 내부에 표시할 콘텐츠
}

const HoverCard = ({ trigger, content }: HoverCardProps) => (
  <HoverCardPrimitive.Root>
    <HoverCardTrigger asChild>{trigger()}</HoverCardTrigger>
    <HoverCardPortal>
      <HoverCardContent sideOffset={5}>
        {content()}
        <HoverCardArrow />
      </HoverCardContent>
    </HoverCardPortal>
  </HoverCardPrimitive.Root>
);

export { HoverCard };
