import styles from './page.module.css';
import { promises as fs } from "fs";

type Talent = {
  "name-jp": string
  "name-en": string
  "image-src": string
};

const getElement: () => Promise<JSX.Element> = async () => {
  const json: string = await fs.readFile("resources/talent.json", { encoding: "utf8" });
  const talents: Talent[] = JSON.parse(json);
  const elements = [];

  for (const talent of talents) {
    elements.push(
      <li key={talent['name-en']} className={styles["talent-list__card"]}>
        <a>
          <figure className={styles["talent-list__card-thumbnail"]}>
            <img src={talent["image-src"]} />
          </figure>
          <div>{talent["name-jp"]}</div>
          <div>{talent["name-en"]}</div>
        </a>
      </li>
    );
  }

  return (
    <ul>
      {elements}
    </ul>
  );
};

export default async () => {
  const elements: JSX.Element = await getElement();

  return (
    <main className={styles.main}>
      <section className={styles["talent-list"]}>
        {elements}
      </section>
    </main>
  );
};
