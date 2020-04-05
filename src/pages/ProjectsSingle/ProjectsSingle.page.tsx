import React, { useState } from "react";
import { useParams, Redirect } from "react-router-dom";
import { capitalize } from "lodash";

import { github } from "services";
import { theme, constants } from "config";

import {
  Page,
  Section,
  Button,
  ButtonRow,
  Text,
  MarkdownPreviewer,
  Loading
} from "components";

const ProjectsPage: React.FC = () => {
  const params = useParams<{ id: string }>();

  const [repo, setRepo] = useState();
  const [readme, setReadme] = useState();
  const [repoLoading, setRepoLoading] = useState<boolean>(true);
  const [repoError, setRepoError] = useState<boolean>(false);
  const [loaderActive, setLoaderActive] = useState<boolean>(true);

  React.useEffect(() => {
    setTimeout(() => setLoaderActive(false), 750);

    github
      .asyncGetRepos()
      .then(data => {
        const repo = findRepoById(data, params.id)[0];

        if (repo) {
          github
            .asyncGetReadme(repo.name)
            .then(readme => {
              setReadme(readme);
              setRepo(repo);
              setRepoLoading(false);
            })
            .catch(error => {
              console.log(error);
              setRepoError(true);
            });
        } else {
          setRepoError(true);
        }
      })
      .catch(error => {
        console.log(error);
        setRepoError(true);
      });
  }, [params.id]);

  function findRepoById(repos: any[], id: string): any[] {
    return repos.filter(repo => Number(repo.id) === Number(id));
  }

  function decorateTitle(title: string): string {
    return title
      .split("-")
      .map(word => capitalize(word))
      .join(" ");
  }

  function renderButtonRow(repo: any) {
    return (
      <ButtonRow>
        <Button hero width="300px" href={repo.html_url}>
          View Demo
        </Button>
        <Button hero width="300px" href={repo.html_url}>
          View On Github
        </Button>
      </ButtonRow>
    );
  }

  if (repoError) {
    return <Redirect to={constants.routes.PROJECTS} />;
  }

  return (
    <Page accent={theme.pallet.BLUE}>
      {repoLoading || loaderActive ? (
        <Section accent={theme.pallet.BLUE}>
          <Loading accent={theme.pallet.BLUE} />
        </Section>
      ) : (
        <React.Fragment>
          <Section>
            <Text.Heading1>{decorateTitle(repo.name)}</Text.Heading1>
            {renderButtonRow(repo)}
            <MarkdownPreviewer content={readme} />
            {renderButtonRow(repo)}
          </Section>
        </React.Fragment>
      )}
    </Page>
  );
};

export default ProjectsPage;