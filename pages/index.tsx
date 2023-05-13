import Link from "next/link";

const Page = () => {
  return (
    <div>
      <h1>Example Index</h1>

      <Link
        href={{
          pathname: "/[profileId]/[channelId]",
          query: { profileId: "author-slug", channelId: "example", postId: 1 },
        }}
        as="/post/1"
      >
        View post
      </Link>
    </div>
  );
};

export default Page;
