import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDarkReasonable } from "react-syntax-highlighter/dist/cjs/styles/hljs";

const CodeBlock = {
	code({ node, inline, className, children, ...props }) {
		const match = /language-(\w+)/.exec(className || "");
		return !inline && match ? (
			<SyntaxHighlighter
				style={atomOneDarkReasonable}
				language={match[1]}
				PreTag="div"
				wrapLines={true}
				wrapLongLines={true}
				customStyle={{
					backgroundColor: "var(--theme-bgcode)",
					opacity: "1",
					padding: "1rem",
					marginTop: "2rem",
					border: "2px solid var(--theme-accent)",
					borderRadius: "4px",
				}}
				preTagProps={{
					style: {
						color: "var(--theme-accent)",
					},
				}}
				codeTagProps={{
					style: {
						"font-family": "JetBrains Mono",
						fontSize: "0.8rem",
						color: "var(--theme-secText)",
						"text-align": "left",
						"white-space": "pre",
						"word-spacing": "normal",
						"word-break": "normal",
						"overflow-wrap": "normal",
						"line-height": "1.5",
						"tab-size": "4",
						hyphens: "none",
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
