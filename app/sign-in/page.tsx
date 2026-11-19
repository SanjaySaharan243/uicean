"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, LockKeyhole, Sparkles } from "lucide-react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return <section className="signin-page">
    <div className="signin-card">
      <div className="signin-symbol"><LockKeyhole size={19}/></div>
      <div className="eyebrow"><span>YOUR UICEAN SPACE</span><span className="eyebrow-line"/></div>
      <h1>Good to see<br/>you <em>again.</em></h1>
      <p>Sign in to find your saved pieces and keep your next idea close.</p>
      <form onSubmit={e=>{e.preventDefault();setMessage("Sign-in is not connected in this preview. Your email was not sent or stored.")}}>
        <label htmlFor="signin-email">Email address</label>
        <input id="signin-email" type="email" autoComplete="email" required placeholder="you@example.com" value={email} onChange={e=>setEmail(e.target.value)}/>
        <button type="submit" className="button-primary">Continue with email <ArrowUpRight size={14}/></button>
      </form>
      {message&&<p className="signin-message" role="status">{message}</p>}
      <div className="signin-note"><Sparkles size={14}/> A small note: accounts are part of a future UICEAN release.</div>
      <Link className="signin-back" href="/explore">Explore without signing in <ArrowUpRight size={13}/></Link>
    </div>
  </section>;
}
