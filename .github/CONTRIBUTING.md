<h1>✨ Contributing Guide</h1>

First of all, thank you for taking the time to contribute! 🎉<br>
The following is a set of guidelines for contributing to this repository.<br>
Before contributing, we encourage you to read our [Code of Conduct](https://github.com/rakshixh/FakeAuthentication-API/blob/master/.github/CODE_OF_CONDUCT.md).

<h2>📝 Contributing to the repository</h2>

- Cloning the Repository (repo)
- Making your Changes
- Opening a Pull Request

### Cloning the Repository

#### 1. Fork the Repository

Click the fork button at the top right of the page to create a copy of this repo in your account, or go to this repository's [fork page](https://github.com/rakshixh/FakeAuthentication-API/fork). After successfully forking the repo, you will be directed to your repo copy.

#### 2. Clone the Forked Repository

On your forked repo, click the green button that says `Code`. It will open a dropdown menu. Copy the link in the input with the label `HTTPS` or `GitHub CLI` depending on your preferred cloning mode.

For `HTTPS`, open up your terminal and run the following command:

```bash
git clone <your-clone-link>
# or
git clone https://github.com/<your-username>/FakeAuthentication-API.git
```

Replace `<your-username>` with your GitHub username.<br>

You can also clone the repo using the `GitHub CLI`. To do this, run the following command:

```bash
gh repo clone <your-username>/FakeAuthentication-API
```

### Making your Changes

#### 1. Create a New Branch

Create a new branch from the main branch. Your branch name should be descriptive of the changes you are making along with your first name. Some ideas to get you started:

- For documentation: `docs-<your-first-name>`
- For adding new features: `new-f-<your-first-name>`

To create a new branch, use the following command:

```bash
git checkout -b <your-branch-name>
```

#### 2. Make your Changes

Work on the code on your local machine.

> [!IMPORTANT]
> You are to make only `one contribution` per `pull request`. It makes it easier to review and merge. If you want to add `multiple contributions` or if you have solved `multiple issues`, create `separate pull requests` for each.

> [!NOTE]
> Before you begin with coding, please ensure that you create a [new issue](https://github.com/rakshixh/FakeAuthentication-API/issues) detailing the new feature you wish to implement and get assigned to it. Pull requests will only be accepted if the code address the existing issue assigned to you. Furthermore, if there are other existing issues you'd like to contribute to, you can request to be assigned to them.

#### 3. Commit your Changes

Your commit message should give a concise idea of the issue you are solving. Please be specific about the commit message.

To commit your changes, run the following command:

```bash
git add .
git commit -m "<your_commit_message>"
```

Eg:

```bash
git commit -m "adding new api for dynamic users"
```

Push your local commits to your remote repository.

```bash
git push origin <your-branch-name>
```

### Opening a Pull Request(PR)

#### 1. Create a new Pull Request(PR)

Go to the [FakeAuthentication-API](https://github.com/rakshixh/FakeAuthentication-API) repository and click the `compare & pull request` button or go to the [Pull Request](https://github.com/rakshixh/FakeAuthentication-API/pulls) page and click on the `New pull request` button. It will take you to the `Open a pull request` page.

> Note: Make sure your PR points to the `main` branch, not any other one.

#### 2. Wait for the Review

🎉 Congratulations! You've made your pull request! A maintainer will review and merge your code or request changes. If changes are requested, make them and push them to your branch. Your pull request will automatically track the changes on your branch and update.
