import path from "path";
import matter from "gray-matter";
import fs from "fs";
export interface FrontMatter {
  __resourcePath: string;
  layout?: string;
  src: string;
  title: string;
  description: string;
  date: string;
  time: string;
  squareThumbnail: boolean;
}

const epDir = path.join(process.cwd(), "pages/ep");
export const getSortedEpisodes = (): Array<FrontMatter> => {
  const fileNames = fs.readdirSync(epDir);

  const allEpData = fileNames.map((filename) => {
    const fullPath = path.join(epDir, filename);

    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const frontMatter = matter(fileContents).data;
    return {
      __resourcePath: path.join("ep", filename),
      src: frontMatter.src,
      title: frontMatter.title,
      description: frontMatter.description,
      date: frontMatter.date,
      time: frontMatter.time,
      squareThumbnail: frontMatter.squareThumbnail
    };
  });

  return allEpData.sort(
    (a, b) => getEpNumber(b.__resourcePath) - getEpNumber(a.__resourcePath)
  );
};

export const getEpNumber = (resourcePath) => {
  return parseInt(resourcePath.match(/^ep\/([0-9]+)-/)[1]);
};

export const formatPath = (resourcePath) => {
  return `/${resourcePath.replace(/\.mdx$/, "")}`;
};
