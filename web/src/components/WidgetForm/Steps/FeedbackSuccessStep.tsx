import { CloseButton } from '../../CloseButton';

import successImageUrl from '../../../assets/success.svg';

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ 
  onFeedbackRestartRequested 
}: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className="flex flex-col items-center w-[304px] py-10">
        <img 
          src={successImageUrl}
          alt="Emoji de check para simbolizar o sucesso"
        />

        <span className="mt-2 text-xl">Agradecemos o feedback!</span>
      
        <button
          type="button"
          onClick={onFeedbackRestartRequested}
          className="mt-6 px-6 py-2 rounded-md border-transparent bg-zinc-800 text-sm leading-6 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors"
        >
          Quero enviar outro
        </button>
      </div>
    </>
  ); 
}
