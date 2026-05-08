// Meta Pixel + GA4 helpers
type FbqFn = (...args: unknown[]) => void;
type GtagFn = (...args: unknown[]) => void;

const fbq = (): FbqFn | undefined =>
  (window as unknown as { fbq?: FbqFn }).fbq;

const gtag = (): GtagFn | undefined =>
  (window as unknown as { gtag?: GtagFn }).gtag;

export const trackContact = (contentName: string) => {
  fbq()?.("track", "Contact", { content_name: contentName });
  gtag()?.("event", "whatsapp_click", {
    event_category: "CTA",
    event_label: "WhatsApp",
  });
};

export const trackViewContent = (contentName: string) => {
  fbq()?.("track", "ViewContent", { content_name: contentName });
  gtag()?.("event", "project_click", {
    event_category: "Portfolio",
    event_label: contentName,
  });
};
