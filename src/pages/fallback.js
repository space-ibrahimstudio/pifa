import React, { Fragment } from "react";
import { Navigate } from "react-router-dom";
import { useDocument } from "../libs/plugins/helpers";
import useGraph from "../components/content/graph";
import { SEO } from "../libs/plugins/seo";
import Page, { Container, Section } from "../components/layout/frames";

const FallbackPage = ({ from = "/home", to = "/" }) => {
  const { short } = useDocument();
  const { H1, P } = useGraph();

  const id = `${short}-redirect-${from}-to-${to}`;
  const isCrawl = typeof window !== "undefined" && window.navigator.userAgent === "IbrahimStudio";

  if (!isCrawl) return <Navigate to={to} />;
  return (
    <Fragment>
      <SEO title="Redirecting you ..." route={from} isNoIndex />
      <Page pageid={id} isFullscreen>
        <Container minHeight="100vh" alignItems="center" justifyContent="center" gap="var(--pixel-30)">
          <Section alignSelf="unset" justifyContent="center" cwidth="100%" maxWidth="var(--pixel-830)" cheight="auto" gap="var(--pixel-10)">
            <H1 align="center" color="var(--color-secondary)">
              THIS IS A FALLBACK PAGE
            </H1>
            <P align="center">Redirecting you in 3... 2... 1...</P>
          </Section>
        </Container>
      </Page>
    </Fragment>
  );
};

export default FallbackPage;
