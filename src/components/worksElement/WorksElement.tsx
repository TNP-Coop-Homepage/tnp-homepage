import { Work } from "@/types/Work";
import { GamePreviewImage } from "@/types/GamePreviewImage";
import GamePreviewImages from "./GamePreviewImages";

export default function WorksElement({ works }: { works: Work[] }) {
  return (
    <div>
      {Object.keys(works).map((value, i) => {
        return (
          <div key={i}>
            <h3 className={"hs"}>{works[i].title}</h3>
            <div className="level-3">
              <p>作者→{works[i].authors.join("、")}</p>
              {works[i].images ? (
                <GamePreviewImages
                  {...(works[i].images as GamePreviewImage[])}
                ></GamePreviewImages>
              ) : null}
              <p>{works[i].explanation}</p>
              <p>{works[i].comment}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
