export default {
  data: () => {
    return {
      count: 0,
    };
  },
  template: `
    <button @click="count++">
      You clicked me {{ count }} times.
    </button>`,
} as buttonType;

export type buttonType = ComponentProps<{
  data(): { count: number;};
  template: string;
}>;
