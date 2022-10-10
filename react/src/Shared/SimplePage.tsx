import React, { ReactNode } from 'react'
import { Container, Grid, Header, Icon, Message, Loader, SemanticICONS } from 'semantic-ui-react'
import { Helmet } from 'react-helmet'

type SimplePageProps = React.PropsWithChildren<{
  title: string
  icon?: SemanticICONS
  centered?: boolean
  loading?: boolean
  error?: string
}>

const SimplePage: React.FC<SimplePageProps> = ({ title, icon, centered, loading, error, children }) => (
  <Container style={{ paddingTop: '7em' }}>
    {title && !loading ?
      <Helmet>
        <title>{title}</title>
      </Helmet>
      : false}

    <Content centered={!!centered}>
      <Header as='h1'>
        {icon ? <Icon name={icon} /> : false}{title}
      </Header>

      {error ? <Message negative>{error}</Message> : false}

      {loading ? <Loader active inline='centered' /> : children}
    </Content>
  </Container>
);

export default SimplePage;

type ContentProps = {
  children: ReactNode;
  centered: boolean
}

const Content = ({ centered, children }: ContentProps): JSX.Element => {
  if (!centered) {
    return <>{children}</>;
  }

  return <>
    <Grid centered>
      <Grid.Column textAlign="center" mobile={16} tablet={8} computer={6}>
        {children}
      </Grid.Column>
    </Grid>
  </>
}
