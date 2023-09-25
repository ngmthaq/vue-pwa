import { Store, defineClassStore } from "@/plugins/store.plugin";

export const useCounterStore = defineClassStore(
  class CommonStore extends Store {
    public name: string = "common";
  },
);
