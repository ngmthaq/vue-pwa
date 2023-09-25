/**
 * Vue Component Configurations
 * @author Nguyen Manh Thang
 */

import {
  computed,
  onActivated,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onDeactivated,
  onMounted,
  onUnmounted,
  onUpdated,
  reactive,
  ref,
  watch,
  watchEffect,
} from "vue";
import { useRoute, useRouter } from "vue-router";

export abstract class Component {
  public readonly route = useRoute();
  public readonly router = useRouter();

  public readonly ref = ref;
  public readonly reactive = reactive;
  public readonly computed = computed;
  public readonly watch = watch;
  public readonly watchEffect = watchEffect;
  public readonly onMounted = onMounted;
  public readonly onUpdated = onUpdated;
  public readonly onUnmounted = onUnmounted;
  public readonly onBeforeMount = onBeforeMount;
  public readonly onBeforeUpdate = onBeforeUpdate;
  public readonly onBeforeUnmount = onBeforeUnmount;
  public readonly onActivated = onActivated;
  public readonly onDeactivated = onDeactivated;

  public readonly changeQueryParams = (queryParams: Record<string, string | number>) => {
    this.router.replace({ name: this.route.name as any, query: queryParams });
  };
}

export function defineClassComponent<C extends Component>(Component: new () => C) {
  return new Component();
}
