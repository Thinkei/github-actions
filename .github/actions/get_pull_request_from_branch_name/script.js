module.exports = async ({ github, core, context, branch_name }) => {
  try {
    const pullRequests = await github.rest.pulls.list({
      owner: context.repo.owner,
      repo: context.repo.repo,
      head: `${context.repo.owner}:${branch_name}`,
    });
    if (!pullRequests.data || pullRequests.data.length === 0) {
      core.setFailed("No pull requests found");
    } else {
      core.setOutput("pr_number", pullRequests.data[0].number);
      core.setOutput("pr_base_branch", pullRequests.data[0].base.ref);
    }
  } catch (error) {
    core.setFailed(error.message);
  }
};
