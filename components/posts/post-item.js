import Image from "next/image";
import Link from "next/link";
import classes from "./post-item.module.css";

function PostsItem(props) {
  const { title, date, image, slug, excerpt } = props.post;
  const formattedDate = new Date(date).toLocaleDateString("en-Us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/post/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;
  return (
    <li className={classes.post}>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={200}
              height={200}
              layout=""
            />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{excerpt}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}

export default PostsItem;
