import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TestimonialCard = () => {
  // image, quote and rating

  const portrait1 =
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const portrait2 =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const portrait3 =
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="flex flex-col items-center text-center border rounded-xl p-2">
      <img className="rounded-full h-20 w-20 object-cover" src={portrait1} />
      <p>"Nice qoute about Raglan Creation"</p>
      <div className="flex">
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStarHalf} />
      </div>
    </div>
  );
};
