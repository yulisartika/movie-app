import React from "react";
import "./CollectionOverview.scss";
import CollectionPreview from "../CollectionPreview/CollectionPreview";
import { connect } from "react-redux";
import { selectCollectionData } from "../../Redux/Collection/collection-selectors";

const CollectionOverview = ({ movies, collection }) => (
  <div className="collection-overview">
    {collection.map((items) => (
      <CollectionPreview
        key={items._id}
        title={items.title}
        start={items.start}
        end={items.end}
        movies={movies}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  collection: selectCollectionData(state),
});

export default connect(mapStateToProps)(CollectionOverview);
