import React from "react";
import "../css/article.css";
import clic from "../img/clic2.png";

const Article = () => {
  return (
    <div className="Article">
      <section className="inknut-antiqua-regular SectionArticle">
        "Tu hogar, a tu manera, con un solo
        <img className="inline-image" src={clic} alt="Clic" />
        clic."
      </section>
    </div>
  );
};
export default Article;