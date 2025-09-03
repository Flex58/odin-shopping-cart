import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <>
        <h1>Oops! An unexpected error occured.</h1>
        <div>
           {error.name}: {error.message} 
        </div>
        <pre>{error.stack}</pre>
      </>
    );
  } else if (isRouteErrorResponse(error)) {
    return (
        <>
        <h1>Oops! An unexpected error occured.</h1>
        <div>{error.status} {error.statusText}</div>
        <p>{error.data}</p>
        </>
    )
  } else {
      return (
        <h1>Unknown Error</h1>
      )
  }
}

export default ErrorPage;
