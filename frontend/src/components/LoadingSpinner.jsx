function LoadingSpinner({ message = "Loading..." }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5">
      <div
        className="spinner-border text-primary mb-3"
        role="status"
        aria-hidden="true"
      ></div>

      <span className="text-muted">{message}</span>
    </div>
  );
}

export default LoadingSpinner;