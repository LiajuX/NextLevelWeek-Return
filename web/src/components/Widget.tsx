import { Popover } from '@headlessui/react'
import { ChatTeardropDots } from 'phosphor-react';

import { WidgetForm } from './WidgetForm';

export function Widget() { return (
    <Popover className="absolute bottom-5 right-5 flex flex-col items-end md:bottom-8 md:right-8">
      <Popover.Panel>
        <WidgetForm />
      </Popover.Panel>

      <Popover.Button className="h-12 px-3 rounded-full bg-brand-500 text-white flex items-center group">
        <ChatTeardropDots className="w-6 h-6" />

        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
          <span className="pl-2"></span>
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}