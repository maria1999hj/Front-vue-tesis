import { Notify } from "quasar";

export function NotifyError(message) {
  Notify.create({
    message: message,
    position: "top-right",
    type: "negative",
  });
}

export function NotifySuccess(message) {
  Notify.create({
    message: message,
    position: "top-right",
    type: "positive",
  });
}
