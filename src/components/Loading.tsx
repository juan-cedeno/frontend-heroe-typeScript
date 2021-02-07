import '../css/spinner.css'

export const Loading = () => {
  return (
    <div className = 'spinner'>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
