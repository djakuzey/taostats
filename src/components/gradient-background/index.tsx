const GradientBackgroundFooter = () => (
  <div className="absolute z-0 w-full h-full flex justify-center items-center">
    <div
      style={{
        background: "radial-gradient(circle, rgba(0,219,188,1) 0%, rgba(23,23,23,1) 100%)",
      }}
      className="absolute z-0 w-full h-full flex justify-center items-center"
    />
    <div
      style={{
        background: "radial-gradient(circle, rgba(255,139,37,1) 0%, rgba(23,23,23,1) 100%)",
      }}
      className="absolute z-0 w-full h-full flex justify-center items-center"
    />
    <div
      style={{
        background: "radial-gradient(circle, rgba(125,98,80,1) 0%, rgba(23,23,23,1) 100%)",
      }}
      className="absolute z-0 w-full h-full flex justify-center items-center"
    />
  </div>
);

export default GradientBackgroundFooter;
