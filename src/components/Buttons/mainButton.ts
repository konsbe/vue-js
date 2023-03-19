import { defineComponent } from "vue";

const val = 2;

export default defineComponent({
  name: "mainButton",
  data: () => {
    return {
      count: 0 as number,
    };
  },
  template: `
      <button @click="plusOne()">
        You clicked me {{ count }} times.
      </button>`,
  methods: {
    plusOne(): void {
      this.count = this.count + val;
    },
  }
} as buttonType);

export type buttonType = {
  data(): { count: number };
  template: string;
  methods: {
    [stateVarData: string]: any;
    plusOne(): void 
  }
};
