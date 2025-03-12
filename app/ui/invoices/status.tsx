import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <ClockIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <CheckIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}


/** why optimize fonts?
 * Cumulative Layout Shift: when hte browser first uses the system fonts and the n swaps it out for a custom font once it has loaded. This swap can cause the text size, or layout ot change, shifting elements around it.
 * 
 * Next.js automatically optimize fonts in the application when you use the next/font module. it downloads font files at build time and hosts them with your other static assets. this means when a user visit your application, there are not additional network request for fonts which would impact performance.
 * 
 */