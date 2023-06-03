import reactLogo from "./assets/illustration-thank-you.svg";

export default function FormSubmitted({rating}) {
  return (
    <div className="App-submitted">
      <img src={reactLogo} alt="submitted image" />
      <p className="submitted-rating">You selected {rating} out of 5</p>
      <div>
        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, do not hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
