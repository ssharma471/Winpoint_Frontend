import { useEffect, useState } from "react";
import { useRouter } from "next/router"; // ✅ import useRouter
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.pathname === "/") {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      // Not on homepage — skip loader
      setLoading(false);
    }
  }, [router.pathname]);

  const loadingText = "Winpoint Digital";

  if (loading && router.pathname === "/") {
    return (
      <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-white">
        <img
          src="/ss.png"
          alt="Winpoint Digital Logo"
          className="w-16 h-16 mb-6"
        />
        <div className="loader mb-6"></div>

        <div className="flex space-x-1 text-3xl font-bold tracking-wide">
          {loadingText.split("").map((char, index) => (
            <span
              key={index}
              className="fade-in-letter rainbow-text"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>
      </div>
    );
  }

  return <Component {...pageProps} />;
}

export default MyApp;
