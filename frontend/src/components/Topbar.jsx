function Topbar() {
  return (
    <header className="taskflow-topbar bg-white border-bottom">
      <div className="container-fluid px-4 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-0 fw-semibold">
              Project Management
            </h5>

            <small className="text-muted">
              Manage your projects and tasks
            </small>
          </div>

          <div className="d-flex align-items-center gap-2">
            <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center user-avatar">
              G
            </div>

            <div className="d-none d-sm-block">
              <div className="fw-semibold">
                Guest User
              </div>

              <small className="text-muted">
                Viewer
              </small>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar;