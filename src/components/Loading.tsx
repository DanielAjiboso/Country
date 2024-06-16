import { CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "blue",
};

const Loading: React.FC = () => {
  return (
    <div>
      <ClipLoader
        color="blue"
        cssOverride={override}
        size={600}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
