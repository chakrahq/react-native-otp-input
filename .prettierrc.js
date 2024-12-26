module.exports = {
  printWidth: 80,          // Specify the line length that the printer will wrap on. Default: 80
  // tabWidth: 2,           // Specify the number of spaces per indentation-level. Default: 2
  // useTabs: false,        // Indent lines with tabs instead of spaces. Default: false
  singleQuote: true,    // Use single quotes instead of double quotes. Default: false
  // jsxSingleQuote: false, // Use single quotes instead of double quotes in JSX. Default: false
  bracketSpacing: true,  // Print spaces between brackets in object literals. Default: true

  /**
   * Print semicolons at the ends of statements.
   * Valid options:
   * - true - (default) add a semicolon at the end of every statement
   * - false - only add semicolons at the beginning of lines that may introduce ASI failures
   */
  semi: true,

  /**
   * Change when properties in objects are quoted.
   * Valid options:
   * - 'as-needed' - (default) only add quotes around object properties where required
   * - 'consistent' - if at least one property in an object requires quotes, quote all properties
   * - 'preserve' - respect the input use of quotes in object properties
   */
  // quoteProps: 'as-needed',

  /**
   * Print trailing commas wherever possible.
   * Valid options:
   *   - 'es5' - (default) trailing commas where valid in ES5 (objects, arrays, etc); no trailing
   *             commas in type parameters in TypeScript.
   *   - 'none' - no trailing commas
   *   - 'all' - trailing commas wherever possible (including function parameters and calls);
   *             to run, JavaScript code formatted this way needs an engine that supports
   *             ES2017 (Node.js 8+ or a modern browser) or downlevel compilation; this also
   *             enables trailing commas in type parameters in TypeScript (supported since
   *             TypeScript 2.7 released in January 2018)
   */
  trailingComma: 'all',

  /**
   * Put the > of a multi-line JSX element at the end of the last line instead of being alone on
   * the next line (does not apply to self closing elements).
   * Valid options:
   * - true
   * - false - (default)
   */
  bracketSameLine: false,

  /**
   * Include parentheses around a sole arrow function parameter.
   * Valid options:
   * - 'always' - (default) Always include parens. Example: (x) => x
   * - 'avoid' - Omit parens when possible. Example: x => x
   */
  arrowParens: 'always',
};
