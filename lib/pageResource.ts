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
  squareThumbnailPath: string;
}

const epDir = path.join(process.cwd(), "pages/ep");
export const getSortedEpisodes = (): Array<FrontMatter> => {
  const fileNames = fs.readdirSync(epDir);

  const allEpData = fileNames.map((filename) => {
    const fullPath = path.join(epDir, filename);

    //Extracts contents of the MDX file
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const frontMatter = matter(fileContents).data;
    const resourcePath = path.join("ep", filename);
    const squareThumbnailPath = `/square_thumbnails/${getEpNumber(
      resourcePath
    )}.jpg`;

    return {
      __resourcePath: resourcePath,
      src: frontMatter.src,
      title: frontMatter.title,
      description: frontMatter.description,
      date: frontMatter.date,
      time: frontMatter.time,
      squareThumbnailPath: fs.existsSync(`public/${squareThumbnailPath}`)
        ? squareThumbnailPath
        : `/images/grad_${getEpNumber(resourcePath) % 8}.png`,
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
