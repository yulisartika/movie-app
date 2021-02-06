import React, { createRef } from "react";
import "./CollectionGrid.scss";
import CollectionGridItem from "../CollectionGridItem/CollectionGridItem";
import { connect } from "react-redux";
import { selectMovieGridItems } from "../../Redux/Movie/movie-selectors";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LeftGridArrow, RightGridArrow } from "../../Utils/GridScrollArrows";

const CollectionGrid = (props) => {
  const gridRef = createRef();
  const { movieGridItems, movies } = props;

  return (
    <div className="collection-grid">
      <span className="collection-grid__left-arrow">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="collection-grid__left-arrow--icon"
          onClick={() => LeftGridArrow(gridRef)}
        />
      </span>
      <div className="collection-grid__outer" ref={gridRef}>
        <div className="collection-grid__inner">
          {movies
            ? movieGridItems.map((item) => (
                <CollectionGridItem key={item.id} item={item} />
              ))
            : null}
        </div>
        <span className="collection-grid__right-arrow">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="collection-grid__right-arrow--icon"
            onClick={() => RightGridArrow(gridRef)}
          />
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieGridItems: selectMovieGridItems(state),
});

export default connect(mapStateToProps)(CollectionGrid);

// import React from "react";
// import "./CollectionGrid.scss";
// import CollectionGridItem from "../CollectionGridItem/CollectionGridItem";
// import { connect } from "react-redux";
// import { selectMovieGridItems } from "../../Redux/Movie/movie-selectors";
// import {
//   faChevronLeft,
//   faChevronRight,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { LeftGridArrow, RightGridArrow } from "../../Utils/GridScrollArrows";

// class CollectionGrid extends React.Component {
//   constructor() {
//     super();
//     this.gridRef = React.createRef();
//   }

//   render() {
//     const { movieGridItems, movies } = this.props;
//     return (
//       <div className="collection-grid">
//         <span className="collection-grid__left-arrow">
//           <FontAwesomeIcon
//             icon={faChevronLeft}
//             className="collection-grid__left-arrow--icon"
//             onClick={() => LeftGridArrow(this.gridRef)}
//           />
//         </span>
//         <div className="collection-grid__outer" ref={this.gridRef}>
//           <div className="collection-grid__inner">
//             {movies
//               ? movieGridItems.map((item) => (
//                   <CollectionGridItem key={item.id} item={item} />
//                 ))
//               : null}
//           </div>
//           <span className="collection-grid__right-arrow">
//             <FontAwesomeIcon
//               icon={faChevronRight}
//               className="collection-grid__right-arrow--icon"
//               onClick={() => RightGridArrow(this.gridRef)}
//             />
//           </span>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state) => ({
//   movieGridItems: selectMovieGridItems(state),
// });

// export default connect(mapStateToProps)(CollectionGrid);
