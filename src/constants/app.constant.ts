/**
 * This file contains application constants
 */
export class APP_CONSTANTS {
  public static cacheVersion: number = 1;

  public static eventBus: Record<string, string> = {
    appendToast: "appendToast",
    executeAlert: "executeAlert",
    executeLoading: "executeLoading",
  };
}
