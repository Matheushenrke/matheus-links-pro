// Meta Pixel helpers
type FbqFn = (...args: unknown[]) => void;

const fbq = (): FbqFn | undefined =>
  (window as unknown as { fbq?: FbqFn }).fbq;

export const trackContact = (contentName: string) => {
  fbq()?.("track", "Contact", { content_name: contentName });
};

export const trackViewContent = (contentName: string) => {
  fbq()?.("track", "ViewContent", { content_name: contentName });
};
