import { FeedbackType, feedbackTypes } from '..';
import { CloseButton } from '../../CloseButton';

interface FeedbackContentStepProps {
  onFeedbackTypeChanged: (type: FeedbackType) => void;
}

export function FeedbackTypeStep({ 
  onFeedbackTypeChanged 
}: FeedbackContentStepProps) {
  return (
    <>
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
      
        <CloseButton />
      </header>

      <div className="flex gap-2 w-full py-8">
        { Object.entries(feedbackTypes).map(([key, value]) => {
          return (
            <button
              key={key}
              type="button"
              onClick={() => onFeedbackTypeChanged(key as FeedbackType)}
              className="flex-1 flex flex-col items-center gap-2 w-24 py-5 border-2 border-transparent rounded-lg bg-zinc-800 hover:border-brand-500 transition-all duration-500 focus:border-brand-500 focus:outline-none"
            >
              <img src={value.image.source} alt={value.image.alt} />

              <span>{ value.title }</span>
            </button>
          )
        }) }
      </div>
    </>
  );
}
