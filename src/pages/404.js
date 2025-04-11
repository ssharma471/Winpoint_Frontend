import { useEffect } from "react";

export default function Notfound() {
    useEffect(() => {
      // Clear any previous Crisp state
      delete window.$crisp;
      delete window.CRISP_WEBSITE_ID;
  
      // Set new session variables
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "1f81339b-985b-4879-ae59-3a8cc192df7b";
  
      // Inject Crisp script only if not already present
      if (!document.querySelector("script[data-crisp]")) {
        const script = document.createElement("script");
        script.src = "https://client.crisp.chat/l.js";
        script.async = true;
        script.setAttribute("data-crisp", "true");
  
        script.onload = () => {
          // Wait until crisp is ready before resetting
          const interval = setInterval(() => {
            if (window.$crisp && window.$crisp.push) {
              window.$crisp.push(["do", "session:reset"]); // This will clear the chat history
              // Optional: Open the chat automatically
              // window.$crisp.push(["do", "chat:open"]);
              clearInterval(interval);
            }
          }, 10);
        };
  
        document.head.appendChild(script);
      } else {
        // Script already there? Still reset.
        window.$crisp.push(["do", "reset"]);
      }
    }, []);
    return (
      
      <>
        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        
        <main
  className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8"
  style={{ backgroundImage: `url('/404Error2.jpg')`, backgroundSize: "cover", backgroundPosition: "center", height:"1000px" }}
>
          <div className="text-center">
            {/* <p className="text-base font-semibold text-black-600">404</p> */}
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              404
            </h1>
            <h1 className="mt-4 text-5xl tracking-tight text-balance text-gray-900 sm:text-7xl">
              Page not found
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-black-500 sm:text-xl/8">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </a>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
      </>
    )
  }
  