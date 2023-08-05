export default {
	preset: "ts-jest",
	testEnvironment: "jest-environment-jsdom",
	roots: ["<rootDir>/src"],
	transform: {
		"^.+\\.(ts|tsx)$": ["ts-jest", { tsconfig: { jsx: "react" } }],
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|tsx)$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
}
