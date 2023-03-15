export default {
  data() {
    return {
      connections: [5, 3, 2, 4, 1],
    };
  },
  methods: {
    sortBy(prop: any): void {
      this.connections.sort();
    },
  },
};
