export type AlertComponentPropTypes = {
  id: string;
  open: boolean;
  type: "alert" | "confirm";
};

export type AlertComponentEmitTypes = {
  (e: "accept"): void;
  (e: "deny"): void;
};
