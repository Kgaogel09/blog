import Image from "next/image";
// import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
// import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

function PostContent({ post }) {
  const imagePath = `/images/post/${post.slug}/${post.image}`;

  const customRenderers = {
    img(image) {
      return (
        <Image
          src={`/images/post/${post.slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },

    // code(code) {
    //   const { language, value } = code;
    //   return (
    //     <SyntaxHighlighter
    //       // style={atomDark}
    //       language={language}
    //       children={value}
    //     />
    //   );
    // },
    // paragraph(paragraph) {
    //   const { node } = paragraph;
    //   console.log(node);
    //   if (node.children[0].tagName === "img") {
    //     const image = node.children[0];

    //     return (
    //       <div className={classes.image}>
    //         <Image
    //           src={`/images/post/${post.slug}/${image.properties.src}`}
    //           alt={image.alt}
    //           width={600}
    //           height={300}
    //         />
    //       </div>
    //     );
    //   }
    // },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
