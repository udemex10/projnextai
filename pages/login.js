import { useState } from "react";
import Link from 'next/link';

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error(response.statusText);
      }

      const user = await response.json();
      console.log(user);
      // Handle successful login here
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <form onSubmit={handleSubmit} className="p-6 w-80 bg-white rounded shadow">
        <h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mb-4 p-2 w-full border rounded"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mb-4 p-2 w-full border rounded"
        />
        <button type="submit" className="mb-4 w-full p-2 bg-blue-500 text-white rounded">
          Login
        </button>
        <p className="text-center">
          Don't have an account?{" "}
          <Link
                href="/register"
                className="text-blue-500"
          >
              Sign up
          </Link>

        </p>
      </form>
    </div>
  );
}

export default LoginPage;
