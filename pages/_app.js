import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Suspense } from "react";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const pageKey = router.asPath;

  return (
    <Suspense>
      <AnimatePresence initial={false} mode="popLayout">
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </Suspense>
  );
}
