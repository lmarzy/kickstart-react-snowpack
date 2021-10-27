import { MutableRefObject, useCallback, useEffect, useRef } from 'react';

export const usePortal = (
  setVisibility: (arg0: boolean) => void
): MutableRefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null) as MutableRefObject<HTMLDivElement>;

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      const key = e.key;

      if (key === 'Escape') {
        setVisibility(false);
        return;
      }

      if (key !== 'Tab') {
        return;
      }

      const focusablElements =
        'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]';

      const focusableModalElements: HTMLElement[] = Array.from(
        ref.current.querySelectorAll(focusablElements)
      );

      const firstFocusableEl = focusableModalElements[0];
      const lastFocusableEl = focusableModalElements[focusableModalElements.length - 1];

      if (
        !focusableModalElements.includes(document.activeElement as HTMLElement) ||
        document.activeElement === lastFocusableEl
      ) {
        firstFocusableEl.focus();
        e.preventDefault();
      }
    },
    [setVisibility]
  );

  useEffect(() => {
    document.body.classList.add('overlay-active');
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('overlay-active');
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return ref;
};
