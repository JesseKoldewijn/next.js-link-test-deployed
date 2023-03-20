import { type ReactElement } from "react";

export default function RootLayout({ children }: { children: ReactElement }) {
	return (
		<html>
			<head />
			<body>{children}</body>
		</html>
	);
}
