const {
  REACT_APP_AWS_PROJECT_REGION,
  REACT_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT,
  REACT_APP_AWS_APPSYNC_REGION,
  REACT_APP_AWS_APPSYNC_AUTH_TYPE,
  REACT_APP_AWS_APPSYNC_API_KEY,
} = process.env;

export const amplifyConfig = {
  aws_project_region: REACT_APP_AWS_PROJECT_REGION,
  aws_appsync_graphqlEndpoint: REACT_APP_AWS_APPSYNC_GRAPHQL_ENDPOINT,
  aws_appsync_region: REACT_APP_AWS_APPSYNC_REGION,
  aws_appsync_authenticationType: REACT_APP_AWS_APPSYNC_AUTH_TYPE,
  aws_appsync_apiKey: REACT_APP_AWS_APPSYNC_API_KEY,
};
