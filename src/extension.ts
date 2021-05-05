import * as vscode from 'vscode';

const tokenTypes = new Map<string, number>();
const tokenModifiers = new Map<string, number>();

const legend = (function () {
	const tokenTypesLegend: string[] = [
		'string'
	];
	tokenTypesLegend.forEach((tokenType, index) => tokenTypes.set(tokenType, index));

	const tokenModifiersLegend: string[] = [
	];
	tokenModifiersLegend.forEach((tokenModifier, index) => tokenModifiers.set(tokenModifier, index));

	return new vscode.SemanticTokensLegend(tokenTypesLegend, tokenModifiersLegend);
})();

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.languages.registerDocumentSemanticTokensProvider({ language: 'lpc' }, new DocumentSemanticTokensProvider(), legend));
}

interface IParsedToken {
	line: number;
	startCharacter: number;
	length: number;
	tokenType: string;
	tokenModifiers: string[];
}

interface IBlockLocation {
	index: number;
	value: string;
}

class DocumentSemanticTokensProvider implements vscode.DocumentSemanticTokensProvider {
	async provideDocumentSemanticTokens(document: vscode.TextDocument, token: vscode.CancellationToken): Promise<vscode.SemanticTokens> {
		const allTokens = this._parseText(document);
		const builder = new vscode.SemanticTokensBuilder();
		allTokens.forEach((token) => {
			builder.push(token.line, token.startCharacter, token.length, this._encodeTokenType(token.tokenType), this._encodeTokenModifiers(token.tokenModifiers));
		});
		return builder.build();
	}

	private _encodeTokenType(tokenType: string): number {
		if (tokenTypes.has(tokenType)) {
			return tokenTypes.get(tokenType)!;
		}
		return 0;
	}

	private _encodeTokenModifiers(strTokenModifiers: string[]): number {
		let result = 0;
		for (let i = 0; i < strTokenModifiers.length; i++) {
			const tokenModifier = strTokenModifiers[i];
			if (tokenModifiers.has(tokenModifier)) {
				result = result | (1 << tokenModifiers.get(tokenModifier)!);
			} else if (tokenModifier === 'notInLegend') {
				result = result | (1 << tokenModifiers.size + 2);
			}
		}
		return result;
	}

	private _parseText(textDocument: vscode.TextDocument): IParsedToken[] {
		const blocks = this.getStringLiteralBlocks(textDocument.getText());
		const r: IParsedToken[] = [];
		let block: IBlockLocation;
		blocks.forEach(function (block) {
			const startLine = textDocument.positionAt(block.index).line;
			const endLine = textDocument.positionAt(block.index + block.value.length).line;
			let cursor = block.index;
			let textLength = 0;
			const minMaxCharacter = block.index + block.value.length;
			for (let i = startLine; i <= endLine; i++) {
				textLength = textDocument.lineAt(i).text.length - textDocument.positionAt(cursor).character;
				if (startLine === endLine) {
					textLength = block.value.length;
				} else if (i === endLine) {
					textLength = textDocument.positionAt(minMaxCharacter).character;
				}
				r.push({
					line: i,
					length: textLength,
					startCharacter: (i === startLine) ? textDocument.positionAt(cursor).character : 0,
					tokenType: 'string',
					tokenModifiers: []
				});
				cursor += textLength + 1;
			}
		});
		return r;
	}

	private getStringLiteralBlocks = (text: string) => {
		const regex = new RegExp(/((@{1,2}(\w*)\n([!-~ \t\r\n]){0,}?\n?(###\s*)?(\3))|("([!#-~]|\s){0,}?")|('([!-&(-~]|\s){0,}?'))/, 'g');
		const results: IBlockLocation[] = [];
		let matches;
		regex.lastIndex = 0;
		while ((matches = regex.exec(text))) {
			results.push({
				value: matches[0],
				index: matches.index,
			});
		}
		return results;
	}

}

