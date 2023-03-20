import Link from "next/link";

export default function Page({ params }: { params: { pageName: string } }) {
	return (
		<div>
			<h1>Visiting page {params.pageName}</h1>
			<Link href="/blog/a-post" style={{ display: "block" }}>
				Go to a post
			</Link>
			<Link href="/" style={{ display: "block" }}>
				Go home
			</Link>
		</div>
	);
}
