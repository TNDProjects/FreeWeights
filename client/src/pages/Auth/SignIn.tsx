import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../../supabaseClient";
import { Input } from "../../components/ui/Input";
import { Button } from "../../components/ui/Button";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    }

    if (data) {
      navigate("/");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col gap-6 max-w-sm mx-auto pt-20">
      <h1 className="text-center text-3xl font-bold ">Sign In</h1>
      <div className="flex flex-col gap-4">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col gap-2 mt-4">
          <Button onClick={() => handleAuth()}>Sign In</Button>
        </div>
      </div>
    </div>
  );
}
