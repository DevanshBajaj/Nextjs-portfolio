import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierCaveDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || "");
		return !inline && match ? (
			<SyntaxHighlighter
				style={atelierCaveDark}
				language={match[1]}
				PreTag="div"
				wrapLines={true}
				wrapLongLines={true}
				customStyle={{
					backgroundColor: "var(--theme-bgcode)",
					opacity: "1",
					marginTop: "2rem",
					border: "2px solid var(--theme-accent)",
					borderRadius: "4px",
				}}
				codeTagProps={{
					style: {
						color: "var(--theme-secText)",
					},
				}}
				{...props}
			>
				{String(children).replace(/\n$/, "")}
			</SyntaxHighlighter>
		) : (
			<code className={className} {...props}>
				{children}
			</code>
		);
	},
};

export default CodeBlock;
