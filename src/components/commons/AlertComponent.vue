<template>
  <!-- Modal -->
  <div :id="props.id" class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body text-black">
          <slot></slot>
        </div>
        <div class="modal-footer p-1">
          <button
            type="button"
            style="min-width: 64px"
            class="btn btn-secondary btn-sm"
            v-if="props.type === 'confirm'"
            @click="app.onDeny"
          >
            Cancel
          </button>
          <button
            type="button"
            style="min-width: 64px"
            class="btn btn-sm"
            :class="app.variant.value"
            @click="app.onAccept"
          >
            OK
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Component, defineClassComponent } from "@/plugins/component.plugin";
import { Modal } from "bootstrap";
import type { Ref } from "vue";
import type { AlertComponentPropTypes, AlertComponentEmitTypes } from "./AlertComponent";

const props = defineProps<AlertComponentPropTypes>();

const emits = defineEmits<AlertComponentEmitTypes>();

const app = defineClassComponent(
  class AlertComponent extends Component {
    public readonly modal: Ref<Modal | null> = this.ref(null);

    public variant = this.computed(() => {
      if (!props.variant) return "btn-primary";
      if (props.variant === "primary") return "btn-primary";
      if (props.variant === "success") return "btn-success";
      if (props.variant === "error") return "btn-danger";
    });

    public constructor() {
      super();

      this.onMounted(() => {
        this.modal.value = new Modal("#" + props.id, { keyboard: false, backdrop: "static" });
        if (props.open) this.modal.value.show();
      });

      this.watch(
        () => props.open,
        (isOpen) => {
          if (this.modal.value) {
            if (isOpen) this.modal.value.show();
            else this.modal.value.hide();
          }
        },
      );
    }

    public onAccept = () => {
      emits("accept");
    };

    public onDeny = () => {
      emits("deny");
    };
  },
);
</script>

<style scoped lang="scss"></style>
