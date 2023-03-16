import { defineComponent } from "vue";
import { GITHUB_ACCESS_TOKEN } from "../../../env";

export default defineComponent({
  data() {
    return {
      repositories: [] as any[],
      accessToken: GITHUB_ACCESS_TOKEN as string,
    };
  },
  mounted() {
    this.getRepositories();
  },
  methods: {
    async getRepositories(): Promise<void> {
      const url = "https://api.github.com/user/repos";
      const headers = new Headers({
        Authorization: `Bearer ${this.accessToken}`,
        // "application/vnd.github.v3+json",
        Accept: "application/json",
      });
      const response = await fetch(url, { headers });
      const data = await response.json();
      console.log("data: ", data);

      this.repositories = data;
    },
  },
});
