import { defineComponent } from "vue";
import { GITHUB_ACCESS_TOKEN } from "../../../env";
import GithubApi, { IGithubApi } from "@/utils/api/githubAPI";

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
    async getRepositories() {
      const obj: IGithubApi = new GithubApi();
      this.repositories = await obj.repositories.then((dta) => {
        return dta;
      });
      const commits = await obj
        .getCommits(this.repositories[0].name)
        .then((commit) => {
          return commit;
        });
    },
  },
});
