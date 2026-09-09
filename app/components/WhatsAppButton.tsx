export function WhatsAppButton() {
  const href = "https://wa.me/917728053323?text=Hello%20JB%20Tech%20Consultants%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.";
  return (
    <a className="floating-wa" href={href} target="_blank" rel="noreferrer" aria-label="Chat with JB Tech Consultants on WhatsApp">
      <span>WhatsApp</span>
      <b>↗</b>
    </a>
  );
}