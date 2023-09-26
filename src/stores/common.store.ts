import { Store, defineClassStore } from "@/plugins/store.plugin";

export const useCommonStore = defineClassStore(
  class CommonStore extends Store {
    public name: string = "common";
  },
);
