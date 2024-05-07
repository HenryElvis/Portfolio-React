import '/src/styles/pages/error.scss';

function ErrorPage() {
  
  return (
    <div id='error-body'>
        <h1>Game Over</h1>
        <h2>404 Error</h2>

      <a href="/">
        <h2>Click here to restart</h2>
      </a>
      
    </div>
  );
}

export default ErrorPage;