import { useState } from "react";

export default function NewsletterForm() {
  const enabled = process.env.NEXT_PUBLIC_ENABLE_NEWSLETTER === "true";
  if (!enabled) return null;

  const provider = process.env.NEXT_PUBLIC_NEWSLETTER_PROVIDER || "buttondown";
  const buttondown = process.env.NEXT_PUBLIC_BUTTONDOWN_FORM_ACTION || "";
  const [email, setEmail] = useState("");

  if (provider === "buttondown") {
    return (
      <form className="card" action={buttondown} method="post" target="_blank" rel="noopener">
        <div className="card-body">
          <h3 className="card-title">Newsletter</h3>
          <p>NovitÃ , guide e recensioni. Niente spam.</p>
          <input
            type="email"
            name="email"
            required
            placeholder="la-tua@email.it"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            style={{ width:"100%", padding:"10px", borderRadius:8, border:"1px solid #2a2a2a", background:"#0f0f0f", color:"#f3f3f3", margin:"8px 0" }}
          />
          <button className="btn" type="submit">Iscrivimi</button>
        </div>
      </form>
    );
  }

  return null;
}