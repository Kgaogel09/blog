import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileNAme) {
  const filePath = path.join(postsDirectory, fileNAme);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  const postSlug = fileNAme.replace(/\.md/, ""); //removes file extension

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getALlPost() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPosts = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  const sortedPosts = allPosts.sort((postA, postB) =>
    postA.date > postB.date ? -1 : 1
  );

  return sortedPosts;
}

export function getFeaturedPosts() {
  const allPost = getALlPost();

  const featuredPosts = allPost.filter((post) => post.isFeatured);

  return featuredPosts;
}
