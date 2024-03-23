import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({
  project,
}: {
  project: {
    title: string;
    link: string;
    thumbnail: string;
    subtitle: string;
  };
}) => {
  return (
    <li
      key={project.title}
      className="group/product relative h-96 w-full flex-[1_384px] overflow-hidden rounded-lg shadow"
    >
      <Link
        href={project.link}
        className="block group-hover/product:shadow-2xl"
        target="_blank"
      >
        <Image
          src={project.thumbnail}
          height="600"
          width="600"
          className="absolute inset-0 h-full w-full object-cover object-center duration-300 group-hover/product:scale-110"
          alt={project.title}
        />
      </Link>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black opacity-0 duration-200 group-hover/product:opacity-80"></div>
      <div className="absolute bottom-4 left-4 text-3xl text-white opacity-0 group-hover/product:opacity-100">
        <h2>{project.title}</h2>
        <p className="text-xl">{project.subtitle}</p>
      </div>
    </li>
  );
};

export default ProjectCard;
