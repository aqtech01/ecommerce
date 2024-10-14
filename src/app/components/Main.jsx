export const Main = (props) => {
  const { children } = props;
  return (
    <>
      <div className="bg-slate-800 text-white">{children}</div>
    </>
  );
};
