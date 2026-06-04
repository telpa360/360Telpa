/**
 * Safely convert any thrown/rejected value into a human-readable string.
 * Never returns a raw object/Event — prevents "[object Event]" style output.
 */
export function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "Radās neparedzēta kļūda.";
}
