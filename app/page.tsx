import Link from "next/link";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
	return (
		<div>
			<h1>Subpage linking issue reproduction</h1>
			<p>Reproducing:</p>
			<ol>
				<li>Press the &quot;Go to blog&quot; link</li>
				<li>Press the &quot;Go to post&quot; link</li>
				<li>
					<em>Expected behavior</em>: link should take you to the blog
					post
				</li>
				<li>
					<em>Actual behavior</em>: the browser fetches the data for
					the page but never navigates
				</li>
			</ol>
			<p>
				Reloading and pressing the &quot;Go to another page&quot; link
				and then going to the blog post does work however, suggesting
				the issue is navigating from <code>/blog</code> to{" "}
				<code>/blog/a-post</code> (<code>/[slug]</code> where slug is
				blog and <code>/blog/[slug]</code> where slug is a-post)
			</p>
			<Link href="/blog" style={{ display: "block" }}>
				Go to blog
			</Link>
			<Link href="/another-page" style={{ display: "block" }}>
				Go to another page
			</Link>

	  <hr />
      <div>
        My dev env:
        <pre>
          Operating System:
            Platform: win32
            Arch: x64
            Version: Windows 10 Pro
		  <br />
          Binaries:
            Node: 16.18.0
            npm: 9.4.2
            Yarn: 1.22.19
            pnpm: 8.0.0-beta.1
		  <br />
          Relevant packages:
            next: 13.2.5-canary.8
            eslint-config-next: 13.2.4
            react: 18.3.0-next-47cf4e578-20230315
            react-dom: 18.3.0-next-47cf4e578-20230315
        </pre>
      </div>
		</div>
	);
}
