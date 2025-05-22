import {Link, useLocation} from "react-router";
import {cn, getFirstWord} from "~/lib/utils";

const TripCard = ({ id, name, location, imageUrl, tags, price }: TripCardProps) => {
    const path = useLocation();

    return (
        <Link to={path.pathname === '/' || path.pathname.startsWith('/travel') ? `/travel/${id}` : `/trips/${id}`} className="trip-card">
            <img src={imageUrl} alt={name} />

            <article>
                <h2>{name}</h2>
                <figure>
                    <img
                        src="/assets/icons/location-mark.svg"
                        alt="location" className="size-4"
                    />
                    <figcaption>{location}</figcaption>
                </figure>
            </article>

            <div className="mt-5 pl-[18px] pr-3.5 pb-5">
                <div className="flex gap-2 flex-wrap">
                    {tags.map((tag, index) => (
                        <span
                            key={index}
                            className={cn(
                                "px-3 py-1 rounded-full text-sm font-medium",
                                index === 1
                                    ? "bg-pink-50 text-pink-500"
                                    : "bg-green-50 text-green-700"
                            )}
                        >
                            {getFirstWord(tag)}
                        </span>
                    ))}
                </div>
            </div>

            <article className="tripCard-pill">{price}</article>
        </Link>
    )
}
export default TripCard