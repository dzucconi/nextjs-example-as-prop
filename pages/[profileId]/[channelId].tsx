import { useRouter } from "next/router";

const Page = () => {
  const router = useRouter();
  return (
    <div>
      <h1>Channel Page</h1>
      <pre>{JSON.stringify(router.query, null, 2)}</pre>
    </div>
  );
};

export default Page;
