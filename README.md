# LPC Language Extension for Visual Studio Code

LPmud C Language syntax highlighting for the FLUFFOS branch of LPmud drivers.

## Features

Basic syntax highlighting for LPC

## Release Notes
### v1.1.1
* Removed triangular brackets that were causing issues. `<` and `>` are not
  used in FluffOS as brackets. If needed for other drivers, can re-evaluate
  in the future.
* Modified standard colour tag support to be arrays instead of objects, since
  they are basic and don't require additional syntaxes such as "notIn".
* Removed `activationEvents` from package.json since VS Code advises that this
  is inferred information.

### v 1.1.0
* Added GMCP snippets

### v 1.0.5
* Reverted out the language server items for the moment

### v 1.0.2
* Added and removed some efuns from snippets (thanks to gesslar)

### v 1.0.0
* Strings are now handled by the language server.
* The language server should fix the @text/text block issues.

## Contribute

If you'd like to contribute please check out our project page: [GwennKoi/vscode-lpc-lang](http://github.com/GwennKoi/vscode-lpc-lang)
