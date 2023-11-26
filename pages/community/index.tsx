import { useRouter } from "next/router";
import { useEffect } from "react";

const Redirect = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/");
  }, [router]);

  // Add a placeholder return statement if needed
  return null;
};

export default Redirect;
