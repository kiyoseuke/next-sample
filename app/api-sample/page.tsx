import { Talent } from "@/types/Talent";
import styles from "./page.module.css";

const getElement: () => Promise<JSX.Element> = async () => {
  // .envとか作って取るのかな？
  const urlBase = "http://localhost:3000"

  const response: Response = await fetch(`${urlBase}/api/talent-list`);
  const talents: Talent[] = await response.json();
  const elements = [];

  for (const talent of talents) {
    elements.push(
      <li key={talent["name-en"]} className={styles["talent-list__card"]}>
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
