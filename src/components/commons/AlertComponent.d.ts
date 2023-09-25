export type AlertComponentPropTypes = {
  id: string;
  open: boolean;
  type: "alert" | "confirm";
  variant?: "primary" | "success" | "error";
};

export type AlertComponentEmitTypes = {
  (e: "accept"): void;
  (e: "deny"): void;
};
