import { defineComponent } from "vue";
import type { PropType } from "vue";

export default defineComponent({
  data() {
    return {
      connections: [5, 3, 2, 4, 1] as number[],
    };
  },
  methods: {
    sortBy(prop: string): void {
      this.connections.sort();
    },
  },
});
