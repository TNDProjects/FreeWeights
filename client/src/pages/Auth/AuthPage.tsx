import { useState } from "react";
import supabase from "../../../supabaseClient";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

export default function AuthPage() {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleAuth = async (type: 'LOGIN' | 'SIGNUP') => {
    setLoading(true)
    const { error } = type === 'LOGIN'
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password })

    if (error) alert(error.message)
    else if (type === 'SIGNUP') alert('Check your email for a confirmation link!')
    setLoading(false)
  }

  return (
    <div className="flex flex-col gap-6 max-w-sm mx-auto pt-20">
      <h1 className="text-2xl font-bold italic uppercase tracking-tighter">freeweights / auth</h1>
      <div className="flex flex-col gap-4">
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <div className="flex flex-col gap-2 mt-4">
          <Button onClick={() => handleAuth('LOGIN')} disabled={loading}>Sign In</Button>
          <Button variant="ghost" onClick={() => handleAuth('SIGNUP')} disabled={loading}>Create Account</Button>
        </div>
      </div>
    </div>
  )
}
