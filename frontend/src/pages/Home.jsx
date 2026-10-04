function Home() {
  return (
    <div>
      <div className="mb-4">
        <h2 className="fw-bold">Dashboard</h2>
        <p className="text-muted mb-0">
          Welcome to your TaskFlow workspace.
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-1">Projects</p>
              <h3 className="fw-bold mb-0">0</h3>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-1">Tasks</p>
              <h3 className="fw-bold mb-0">0</h3>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-1">In Progress</p>
              <h3 className="fw-bold mb-0">0</h3>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-1">Completed</p>
              <h3 className="fw-bold mb-0">0</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;