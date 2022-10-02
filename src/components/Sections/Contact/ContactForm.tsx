import {FC, memo, useCallback, useMemo, useState} from 'react';

interface FormData {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

interface Feedback {
  readonly message: string;
  readonly success: boolean;
}

const ContactForm: FC = memo(() => {
  const [data, setData] = useState(
    useMemo<FormData>(
      () => ({
        name: '',
        email: '',
        message: '',
      }),
      [],
    ),
  );
  const [feedback, setFeedback] = useState<Feedback | null>(null);
  const [isSending, setSending] = useState(false);

  const onChange = useCallback(
    <T extends HTMLInputElement | HTMLTextAreaElement>(event: React.ChangeEvent<T>): void => {
      const {name, value} = event.target;

      const fieldData: Partial<FormData> = {[name]: value};

      setData({...data, ...fieldData});
    },
    [data],
  );

  const handleSendMessage = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      setSending(true);
      setFeedback(null);
      const response = await fetch('/api/send-message', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify(data),
      });

      setSending(false);
      setFeedback({
        message:
          response.status === 200
            ? 'Message sent!'
            : 'Could not send message. Try to use another means of communication.',
        success: response.status === 200,
      });
    },
    [data, setSending, setFeedback],
  );

  const closeFeedback = useCallback(() => setFeedback(null), [setFeedback]);

  const inputClasses =
    'bg-neutral-700 border-0 focus:border-0 focus:outline-none focus:ring-1 focus:ring-orange-600 rounded-md placeholder:text-neutral-400 placeholder:text-sm text-neutral-200 text-sm';

  return (
    <>
      <form className="grid grid-cols-1 gap-y-4" method="POST" onSubmit={handleSendMessage}>
        <input
          className={inputClasses}
          disabled={isSending}
          name="name"
          onChange={onChange}
          placeholder="Name"
          required
          type="text"
        />
        <input
          autoComplete="email"
          className={inputClasses}
          disabled={isSending}
          name="email"
          onChange={onChange}
          placeholder="Email"
          required
          type="email"
        />
        <textarea
          className={inputClasses}
          disabled={isSending}
          maxLength={250}
          name="message"
          onChange={onChange}
          placeholder="Message"
          required
          rows={6}
          style={{resize: 'none'}}
        />

        {!feedback && (
          <button
            aria-label="Submit contact form"
            className="w-max rounded-full border-2 border-orange-600 bg-stone-900 px-4 py-2 text-sm font-medium text-white shadow-md outline-none hover:bg-stone-800 focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-stone-800"
            disabled={isSending}
            type="submit">
            Send message
          </button>
        )}
      </form>

      {feedback && (
        <div
          className="mt-4 mb-4 flex w-full items-center rounded-lg bg-gray-200 p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400"
          role="alert">
          {feedback.success && (
            <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              <span className="sr-only">Check icon</span>
            </div>
          )}
          {!feedback.success && (
            <div className="inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
              </svg>
              <span className="sr-only">Error icon</span>
            </div>
          )}
          <div className="ml-3 text-sm font-normal">{feedback.message}</div>
          <button
            aria-label="Close"
            className="-mx-1.5 -my-1.5 ml-auto inline-flex h-8 w-8 rounded-lg bg-white p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-900 focus:ring-2 focus:ring-gray-300 dark:bg-gray-800 dark:text-gray-500 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={closeFeedback}
            type="button">
            <span className="sr-only">Close</span>
            <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
});

ContactForm.displayName = 'ContactForm';
export default ContactForm;
