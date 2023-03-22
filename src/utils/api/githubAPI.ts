import { GITHUB_ACCESS_TOKEN } from "../../../env";

export default class GithubApi implements IGithubApi {
  public repositories;
  accessToken = GITHUB_ACCESS_TOKEN;
  
  constructor() {
    this.repositories = this.getRepositories();
  }

  public async getRepositories() {
    const url = "https://api.github.com/user/repos";
    const headers = new Headers({
      Authorization: `Bearer ${this.accessToken}`,
      // "application/vnd.github.v3+json",
      Accept: "application/json",
    });
    const response = await fetch(url, { headers });
    const data = await response.json();

    return data;
  }
  public async getCommits(repo:string) {
    const url = `https://api.github.com/repos/konsbe/${repo}/commits`;
    const headers = new Headers({
      Authorization: `Bearer ${this.accessToken}`,
      // "application/vnd.github.v3+json",
      Accept: "application/json",
    });
    const response = await fetch(url, { headers });
    const data = await response.json();

    return data;
  }
}

export interface IGithubApi {
  repositories: Promise<any[]>;
  accessToken: string;
  getRepositories(): Promise<any>;
  getCommits(repo:string): Promise<any>;
}
