import { FormEvent, useState } from 'react';
import { ArrowLeft } from 'phosphor-react';

import { api } from '../../../services/api';

import { FeedbackType, feedbackTypes } from '..';

import { CloseButton } from '../../CloseButton';
import { ScreenshotButton } from '../ScreenshotButton';
import { Loading } from '../../Loading';

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void;
}

export function FeedbackContentStep({ 
  feedbackType,
  onFeedbackRestartRequested,
  onFeedbackSent,
}: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  async function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    
    setIsSendingFeedback(true);

    await api.post('feedbacks', {
      type: feedbackType,
      comment,
      screenshot,
    });

    setIsSendingFeedback(false);
    onFeedbackSent();
  }

  return (
    <>
      <header>
        <button 
          type="button"
          onClick={onFeedbackRestartRequested}
          className="absolute top-5 left-5 text-zinc-400 hover:text-zinc-100"
        >
          <ArrowLeft weight="bold" className="w-4 h4" />
        </button>

        <span className="flex items-center gap-2 text-xl leading-6">
          <img 
            src={feedbackTypeInfo.image.source}
            alt={feedbackTypeInfo.image.alt} 
            className="w-6 h-6"
          />

          { feedbackTypeInfo.title }
        </span>
      
        <CloseButton />
      </header>

      <form onSubmit={handleSubmitFeedback} className="w-full my-4">
        <textarea 
          onChange={event => setComment(event.target.value)}
          className="min-w-[304px] w-full min-h-[112px] border-zinc-600 rounded-md text-sm bg-transparent placeholder-zinc-400 text-zinc-100 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder={feedbackTypeInfo.placeholder}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenshotButton 
            screenshot={screenshot}
            onScreenshot={setScreenshot} 
          />

          <button
            type="submit"
            disabled={comment.trim().length === 0 || isSendingFeedback}
            className="flex-1 flex items-center justify-center p-2 rounded-md border-transparent bg-brand-500 text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            { isSendingFeedback ? <Loading /> : 'Enviar feedback' }
          </button>
        </footer>
      </form>
    </>
  );
}