/** Dígitos internacionais sem +: 55 BR, 51 DDD, 995501677 (9 dígitos). */
const WHATSAPP_DIGITS = "5551995501677";

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${WHATSAPP_DIGITS}`;
  if (!message?.trim()) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const wa = {
  default: whatsappHref("Olá! Gostaria de falar com a Redobrai."),
  solucoes: whatsappHref(
    "Olá! Quero conhecer melhor as soluções da Redobrai (AvaliaIMobe, Chronus, Vision)."
  ),
  precos: whatsappHref(
    "Olá! Gostaria de informações sobre preços e propostas da Redobrai."
  ),
  entrar: whatsappHref(
    "Olá! Quero aceder / criar conta na Redobrai. Podem ajudar?"
  ),
  comecar: whatsappHref(
    "Olá! Quero começar com a Redobrai."
  ),
  motor: (nome: string) =>
    whatsappHref(`Olá! Quero saber mais sobre ${nome}.`),
  proposta: (motor: string) =>
    whatsappHref(`Olá! Quero pedir proposta / falar sobre ${motor}.`),
  contacto: whatsappHref("Olá! Quero falar com a Redobrai."),
};
