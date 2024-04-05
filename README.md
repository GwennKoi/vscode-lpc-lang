# LPC Language Extension for Visual Studio Code

LPmud C Language syntax highlighting for the FLUFFOS branch of LPmud drivers.

## Contributing
If you would like to contribute, check out the [TODO.md](TODO.md).

## Features

Basic syntax highlighting for LPC

## Release Notes

### v1.1.6
* Adding syntax highlighting for ob->func()

### v1.1.5
* Fixing bug with end-marker of multi-line strings.

### v1.1.4
* Trivial change, adding preprocessor directives to sample.h

### v1.1.3
* Added the following efun snippets: `time_ns()`, `sys_network_ports()`, `sys_reload_tls()`

### v1.1.2
* Added `varargs` to `storage.modifier.lpc`
* Fixed `.` and `->` access to accessing class members as `keyword.operator.access.lpc`
* Added `_` separator for integer and float literals in `constant.numeric.lpc`
### v1.1.1
* Removed triangular brackets that were causing issues. `<` and `>` are not
  used in FluffOS as brackets. If needed for other drivers, can re-evaluate
  in the future.
* Modified standard colour tag support to be arrays instead of objects, since
  they are basic and don't require additional syntaxes such as "notIn".
* Removed `activationEvents` from package.json since VS Code advises that this
  is inferred information.
* Added various LPC-language support for syntax highlighting.

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
