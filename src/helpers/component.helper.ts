import type { AlertComponentType } from "@/components/commons/AlertComponent";
import type { ToastComponentType } from "@/components/commons/ToastComponent";
import { APP_CONSTANTS } from "@/constants/app.const";
import { eventBus } from "@/plugins/bus.plugin";

export function appendToast(toast: ToastComponentType) {
  eventBus.emit(APP_CONSTANTS.eventBus.appendToast, toast);
}

export function openAlert(conf: AlertComponentType) {
  eventBus.emit(APP_CONSTANTS.eventBus.executeAlert, conf);
}
