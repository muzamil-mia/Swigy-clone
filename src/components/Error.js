import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return(
    <div className="error">
      <h2>{error.status}</h2>
    </div>
  )
}
export default Error;
