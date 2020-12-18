/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface PrismaSeedSchema {
  /**
   * The path to the seeding script
   */
  script: string;
  /**
   * TypeScript config to use for seeding
   */
  tsConfig: string;
  /**
   * Remove all terminal outputs the child process
   */
  silent?: boolean;
  [k: string]: unknown;
}