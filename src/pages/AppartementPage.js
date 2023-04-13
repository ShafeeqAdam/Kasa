import React from "react";
import "../pages/AppartementPage.scss";
import Description from "../composants/Description";
import AppartementHeader from "../composants/AppartementHeader";
import ImageBanner from "../composants/ImageBanner";

function AppartementPage() {
  return (
    <>
      <ImageBanner />
      <AppartementHeader />
      <div className="appartement__layout">
        <Description />
        <Description />
      </div>
    </>
  );
}

export default AppartementPage;
