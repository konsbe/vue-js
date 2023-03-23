import { defineComponent } from "vue";
import { Bar } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import GithubApi from "@/utils/api/githubAPI";

ChartJS.register( Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale );

export default defineComponent({
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      githubCommits: [] as any,
      githubRepos: [] as any,
      githubRepositories: [] as any,
      newObj: new GithubApi(),
      chartOptions: {
        responsive: true,
        animation: false,

      },
    };
  },
  computed: {
    // a computed getter
    chartData() {
      this.githubRepositories.map(async (repo: any) => {
        this.githubRepos.push(repo.name);
        const dta = await this.newObj.getCommits(repo.name);
        this.githubCommits.push(dta.length);

        return dta.length;
      });
      return {
        labels: this.githubRepos.slice(0, 5),
        datasets: [{ data: this.githubCommits.slice(0, 5) }],
      };
    },
  },
  mounted() {
    this.getObj();
  },
  methods: {
    async getObj() {
      this.githubRepositories = await this.newObj.repositories.then((dta) => {
        return dta;
      });
      // this.githubRepositories.map(async (repo: any) => {
      //   this.githubRepos.push(repo.name);
      //   const dta = await obj.getCommits(repo.name);
      //   this.githubCommits.push(dta.length);

      //   return dta.length;
      // });
    },
  },
});
