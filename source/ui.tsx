import React, { FC } from "react";
import { Text, Box } from "ink";

const App: FC<{ name?: string }> = () => (
	<Box
		paddingX={4}
		paddingY={1}
		borderStyle="single"
		flexDirection="column"
		width={50}
	>
		<Text bold>fiqryq</Text>
		<Box flexDirection="row" marginTop={1}>
			<Box>
				<Text>🙍</Text>
			</Box>
			<Box marginLeft={4} flexGrow={1}>
				<Text>piq</Text>
				<Text dimColor>-</Text>
				<Text> fiqry choerudin</Text>
			</Box>
		</Box>
		<Box flexDirection="row">
			<Box>
				<Text>👨‍💻</Text>
			</Box>
			<Box marginLeft={6} flexGrow={1}>
				<Text underline>frontend developer</Text>
			</Box>
		</Box>
		<Box flexDirection="row">
			<Box>
				<Text>🌐</Text>
			</Box>
			<Box marginLeft={4} flexGrow={1}>
				<Text underline dimColor>
					https://
				</Text>
				<Text underline>github.com/fiqryq</Text>
			</Box>
		</Box>
		<Box flexDirection="row">
			<Box>
				<Text>📧</Text>
			</Box>
			<Box marginLeft={4} flexGrow={1}>
				<Text dimColor>email:</Text>
				<Text>fiqrychoerudin48@gmail.com</Text>
			</Box>
		</Box>
	</Box>
);

module.exports = App;
export default App;
