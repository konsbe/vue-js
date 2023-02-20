export default {
  props: ["title"],
  template: `<h4>{{ title }}</h4>`,
} as cardType;

export type cardType = ComponentProps<{
  props: string[];
  template: string;
}>;
