<h1>✨ Contributing Guide</h1>

First of all, thank you for taking the time to contribute! 🎉<br>
The following is a set of guidelines for contributing to this repository.<br>
Before contributing, we encourage you to read our [Code of Conduct](https://github.com/CodeQuestic/OpenPrep/edit/main/.github/CODE_OF_CONDUCT.md).

<h2>📝 Contributing to the repository</h2>

- Cloning the Repository (repo)
- Making your Changes
- Opening a Pull Request

### Cloning the Repository

#### 1. Fork the Repository

Click the fork button at the top right of the page to create a copy of this repo in your account, or go to this repository's [fork page](https://github.com/CodeQuestic/OpenPrep/fork). After successfully forking the repo, you will be directed to your repo copy.

#### 2. Clone the Forked Repository

On your forked repo, click the green button that says `Code`. It will open a dropdown menu. Copy the link in the input with the label `HTTPS` or `GitHub CLI` depending on your preferred cloning mode.

For `HTTPS`, open up your terminal and run the following command:

```bash
git clone <your-clone-link>
# or
git clone https://github.com/<your-username>/OpenPrep.git
```

Replace `<your-username>` with your GitHub username.<br>

You can also clone the repo using the `GitHub CLI`. To do this, run the following command:

```bash
gh repo clone <your-username>/OpenPrep
```
### Running the Astro Starlight Website

To run the OpenPrep locally, follow these steps:

1. **Install Dependencies**
   - Ensure you have Node.js installed (version 14.18.1 or higher).
   - Navigate to the root directory of the project and run:
     ```bash
     npm install
     ```

2. **Run the Development Server**
   - Start the development server by running:
     ```bash
     npm start
     ```
   - This will start the Astro Starlight website on a local server. By default, it will be accessible at `http://localhost:3000`.

3. **Build the Project for Production**
   - To create a production build of the website, run:
     ```bash
     npm run build
     ```
   - The build output will be located in the `dist/` directory.

4. **Preview the Production Build**
   - You can preview the production build locally by running:
     ```bash
     npm run preview
     ```

### Making your Changes

#### 1. Create a New Branch

Create a new branch from the main branch. Your branch name should be descriptive of the changes you are making along with your first name. Some ideas to get you started:

- Branch name format:
- For documentation: `docs-[issue-id]`
- For bugs: `bugs-[issue-id]`
- Example: `docs[#123]`

To create a new branch, use the following command:

```bash
git checkout -b <your-branch-name>
```

#### 2. Make your Changes

By following these steps, you will create a new page or you can edit an existing page.

### Creating a New Page in Astro Starlight

To create a new page in Astro Starlight, follow these steps:

1. **Navigate to the Pages Directory**
   - Go to the `src/content/docs/` directory in your project. This is where all the pages for your Astro Starlight site are located.

2. **Create a New Markdown File**
   - Create a new file with the `.mdx` extension. For example, `new-page.mdx` (both .md & .mdx are accepted)

3. **Add Frontmatter to the New Page**
   - At the top of your new Markdown file, add frontmatter in YAML format. This includes metadata for your page. Here's an example:
     ```yaml
     ---
     title: "New Page Title"
     description: "A brief description of the new page."
     layout: "@/layouts/BaseLayout.astro"
     ---
     ```
     Adjust the `title`, `description`, and `layout` as needed.

4. **Write Content for the New Page**
   - Below the frontmatter, add the content for your new page using Markdown syntax. For example:
     ```markdown
     # Welcome to the New Page
     
     This is the content of your new page. You can add text, images, links, and more using Markdown.
     ```
   - [Learn more about building components in the Astro Starlight](https://starlight.astro.build/components/using-components/)

5. **Save and Commit Your Changes**
   - Save your new Markdown file and commit the changes to your branch:
     ```bash
     git add src/content/docs/new-page.mdx
     git commit -m "Add new page for Astro Starlight"
     git push origin <your-branch-name>
     ```

6. **Open a Pull Request**
   - Follow the [contribution guidelines](https://github.com/CodeQuestic/OpenPrep/blob/main/.github/CONTRIBUTING.md) to open a pull request for your changes.



### Editing an Existing Page in Astro Starlight

To edit an existing page in Astro Starlight, follow these steps:

1. **Navigate to the Pages Directory**
   - Go to the `src/content/docs/` directory in your project. This is where all the pages for your Astro Starlight site are located.

2. **Locate the Page to Edit**
   - Find the Markdown file (`.mdx`) of the page you want to edit. For instance, if you want to edit `existing-page.mdx`, locate this file.

3. **Open the File for Editing**
   - Open the file in your preferred text editor or integrated development environment (IDE).

4. **Make Your Changes**
   - Edit the frontmatter or the content as needed. For example, you can update the title, description, or content of the page:
     ```yaml
     ---
     title: "Updated Page Title"
     description: "An updated description of the page."
     layout: "@/layouts/BaseLayout.astro"
     ---
     ```
     ```markdown
     # Updated Content

     This is the updated content of your existing page. Modify the text, images, links, and other elements as needed.
     ```
   - [Learn more about building components in the Astro Starlight](https://starlight.astro.build/components/using-components/)

5. **Save and Commit Your Changes**
   - Save your modifications and commit the changes to your branch:
     ```bash
     git add src/content/docs/existing-page.mdx
     git commit -m "Edit existing page in Astro Starlight"
     git push origin <your-branch-name>
     ```

6. **Open a Pull Request**
   - Follow the [contribution guidelines](https://github.com/CodeQuestic/OpenPrep/blob/main/.github/CONTRIBUTING.md) to open a pull request for your changes.

> [!IMPORTANT]
> You are to make only `one contribution` per `pull request`. It makes it easier to review and merge. If you want to add `multiple contributions` or if you have solved `multiple issues`, create `separate pull requests` for each.

> [!NOTE]
> Before you begin with coding, please ensure that you create a [new issue](https://github.com/CodeQuestic/OpenPrep/issues) detailing the new feature you wish to implement and get assigned to it. Pull requests will only be accepted if the code address the existing issue assigned to you. Furthermore, if there are other existing issues you'd like to contribute to, you can request to be assigned to them.


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

To submit a pull request for the CodeQuestic/OpenPrep repository, follow these steps:

1. **Ensure Naming Conventions**: 
   - Follow the Conventional Commits specification for naming your pull request.
   - Use the format: `<language>[#issue-id]: <description>`
   - Example: `JavaScript[#123]: added new sorting algorithm`

2. **Create the Pull Request**:
   - Go to the repository on GitHub.
   - Click on the "Pull requests" tab.
   - Click on "New pull request".
   - Select the branch that contains your changes.
   - Ensure the title follows the Conventional Commits naming convention.

3. **Add a Detailed Description**:
   - In the description field of the pull request, provide a detailed explanation of the changes.
   - Describe what was changed, why it was changed, and any other relevant details.

4. **Submit the Pull Request**:
   - After filling out the title and description, click on "Create pull request".

Ensure your pull request complies with the repository's contribution guidelines before submission.

#### 2. Wait for the Review

🎉 Congratulations! You've made your pull request! A maintainer will review and merge your code or request changes. If changes are requested, make them and push them to your branch. Your pull request will automatically track the changes on your branch and update.
