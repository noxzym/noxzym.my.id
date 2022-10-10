import { IArticleComponent } from "@/types";

export const parseDateArticle = (article: IArticleComponent["meta"]) => {
    const dateFormatter = Intl.DateTimeFormat("id", { month: "short" });
    return new Date(article.date).getFullYear() === new Date().getFullYear()
        ? `${dateFormatter.format(new Date(article.date))} ${new Date(
              article.date
          ).getDate()}`
        : `${dateFormatter.format(new Date(article.date))} ${new Date(
              article.date
          ).getDate()}, ${new Date(article.date).getFullYear()}`;
};
