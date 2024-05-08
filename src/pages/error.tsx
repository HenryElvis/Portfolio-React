import '/src/styles/pages/error.scss';

function ErrorPage() {
  
  return (
    <div id='error-body'>
      <div>

        <h1>Game Over</h1>
        <h2>404 - Error</h2>
      
      </div>

      <div>

        <a href="/">
          <h2>Click here to restart</h2>
        </a>
      
      </div>
      
    </div>
  );
}

export default ErrorPage;