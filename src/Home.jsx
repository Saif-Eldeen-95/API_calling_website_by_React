function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our API Explorer</h1>
      <p>
        This application demonstrates how to fetch and display data from external APIs
        using React. Explore the different features to learn how API calls work.
      </p>
      
      <h2>Features</h2>
      <ul>
        <li><strong>Fetch Data</strong> - View a list of posts fetched from a public API</li>
        <li><strong>Post Details</strong> - Click on any post to see more details</li>
        <li><strong>About</strong> - Learn more about this project</li>
      </ul>
      
      <p>
        Navigate using the menu above to get started!
      </p>
    </div>
  );
}

export default Home