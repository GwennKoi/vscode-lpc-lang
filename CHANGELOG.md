# Change Log

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

## v 1.1.0
* Added GMCP snippets

## v 1.0.5
* Reverted out the language server items for the moment

## v 1.0.2
* Added and removed some efuns from snippets (thanks to gesslar)

## v 1.0.0
* Strings are now handled by the language server.
* The language server should fix the @text/text block issues.

## v 0.4.0
* Fixed issue with snippets (thanks to gesslar)
* Added .lpc as a filetype

## v 0.3.0
* Added standard color tag support
* Fixed issue with extra paren appearing when defining mappings and arrays.

## v 0.2.1
* Added icon and some metadata changes.

## v 0.2.0
* Added more efun references.

## v 0.1.0
* Setup LPC Language based off of Pike
