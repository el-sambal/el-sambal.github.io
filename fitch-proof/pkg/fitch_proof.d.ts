/* tslint:disable */
/* eslint-disable */
/**
* Checks if a string is a fully correct proof.
*
* If the string corresponds to a fully correct proof, then a string will be returned,
* saying that the proof is correct.
*
* If the proof is not correct, then a string is returned which (hopefully) contains a nice error
* message.
*
* This function never panics.
* @param {string} proof
* @param {string} allowed_variable_names
* @returns {string}
*/
export function check_proof(proof: string, allowed_variable_names: string): string;
/**
* Takes in a proof string as input, and tries to format that proof.
*
* If formatting succeeds, the formatted string is returned. If formatting fails, the original
* string is returned.
*
* This function never panics.
* @param {string} proof
* @returns {string}
*/
export function format_proof(proof: string): string;
/**
* This function fixes the line numbers in a proof (in case they are not proper).
*
* If fixing the line numbers succeeds, the fixed string is returned. If it fails, the original
* string is returned.
*
* This function never panics.
* @param {string} proof
* @returns {string}
*/
export function fix_line_numbers_in_proof(proof: string): string;
/**
* @param {string} proof
* @returns {string}
*/
export function export_to_latex(proof: string): string;

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly check_proof: (a: number, b: number, c: number, d: number, e: number) => void;
  readonly format_proof: (a: number, b: number, c: number) => void;
  readonly fix_line_numbers_in_proof: (a: number, b: number, c: number) => void;
  readonly export_to_latex: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
