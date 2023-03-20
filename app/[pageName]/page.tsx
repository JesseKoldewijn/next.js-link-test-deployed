import Link from "next/link";

export default function Blog({ params }: { params: { pageName: string } }) {
	return (
		<div>
			<h1>Other page: {params.pageName}</h1>
			<Link href="/" style={{ display: "block" }}>
				Go home
			</Link>
		</div>
	);
}
