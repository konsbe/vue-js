import { defineComponent } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import GithubApi from "@/utils/api/githubAPI";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default defineComponent({
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      githubRepositories: [] as any,
      chartData: {
        labels: ["January", "February", "March"],
        datasets: [{ data: [40, 20, 12] }],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
  mounted () {
    this.getObj();
  },
  methods: {
    async getObj() {
      const obj = new GithubApi();
      this.githubRepositories = await obj.repositories.then((dta) => { 
        return dta
       });
      const commits = await obj.getCommits(this.githubRepositories[0].name).then((commit) => { return commit});
      // console.log("this.githubRepositories: ",this.githubRepositories[0].name);
      // console.log("obj: ",Object.entries(this.githubRepositories));
      // console.log("commits: ",commits.length);

    }
  }
});
