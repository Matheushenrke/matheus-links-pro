import { addUTMParams } from "@/utils/utm";

export const WHATSAPP_PHONE = "5565992843701";

export interface WhatsAppUTM {
  source?: string;
  medium?: string;
  campaign?: string;
  content?: string;
}

const encode = (message: string) => encodeURIComponent(message);

// wa.me — usado no desktop e como fallback do intent:// no Android.
const buildWebUrl = (message: string, utm?: WhatsAppUTM) => {
  const base = `https://wa.me/${WHATSAPP_PHONE}?text=${encode(message)}`;
  return utm ? addUTMParams(base, utm) : base;
};

// whatsapp:// abre o app direto, sem a página "baixar o app" (iOS, e Android com app).
const buildNativeUrl = (message: string) =>
  `whatsapp://send?phone=${WHATSAPP_PHONE}&text=${encode(message)}`;

// intent:// é o caminho mais confiável no Chrome Android: abre o app; se não
// houver app, cai no browser_fallback_url (wa.me).
const buildIntentUrl = (message: string, utm?: WhatsAppUTM) => {
  const fallback = encodeURIComponent(buildWebUrl(message, utm));
  return `intent://send?phone=${WHATSAPP_PHONE}&text=${encode(message)}#Intent;scheme=whatsapp;package=com.whatsapp;S.browser_fallback_url=${fallback};end`;
};

export interface WhatsAppLink {
  href: string;
  /** No mobile abrimos na mesma aba (deep link). No desktop, nova aba. */
  target?: "_blank";
}

/**
 * Monta o melhor link de WhatsApp para a plataforma atual.
 *
 * Prioriza abrir o app nativo (sem a página intermediária de "baixar o app")
 * e só usa o wa.me quando não há app disponível (desktop, ou deep link falho).
 * Deve ser usado no `href` de um <a>, para que o clique nativo do usuário faça
 * a navegação — é o jeito mais confiável e o menos bloqueado pelos navegadores
 * internos do Instagram/Facebook e por abas anônimas.
 */
export function getWhatsAppLink(message: string, utm?: WhatsAppUTM): WhatsAppLink {
  const ua = typeof navigator !== "undefined" ? navigator.userAgent : "";
  const isAndroid = /Android/i.test(ua);
  const isIOS = /iPhone|iPad|iPod/i.test(ua);

  if (isAndroid) return { href: buildIntentUrl(message, utm) };
  if (isIOS) return { href: buildNativeUrl(message) };
  return { href: buildWebUrl(message, utm), target: "_blank" };
}
