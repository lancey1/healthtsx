


function Disclaimer({ onAccept }) {
  return (
    <div>
      <h1>Disclaimer</h1>
      <p>
        This website is provided for informational purposes only. By continuing
        to use this website, you agree to be bound by the terms and conditions
        set forth in our <a href="/terms">Terms of Use</a>.
      </p>
      <button onClick={onAccept}>Accept</button>
    </div>
  );

}
export default Disclaimer
