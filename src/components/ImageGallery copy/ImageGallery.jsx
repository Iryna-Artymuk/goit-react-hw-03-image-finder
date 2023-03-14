import css from './ImageGallery.module.css';
import ReactPaginate from 'react-paginate';
import { useEffect, useState } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// function Items({ currentItems }) {
//   return (
//     <div className="items">
//       {currentItems &&
//         currentItems.map(item => (
//           <div>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </div>
//   );
// }

export default function PaginatedItems(props) {
  const { data } = props;
  const { getActiveImg, toggleModal } = props;

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data]);

  const handlePageClick = event => {
    const newOffset =
      (event.selected * itemsPerPage) % data.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <ul className={css.ImageGallery}>
        {currentItems.map(({ id, webformatURL, tags }) => (
          <ImageGalleryItem
            id={id}
            webformatURL={webformatURL}
            tags={tags}
            key={id}
            getActiveImg={getActiveImg}
            toggleModal={toggleModal}
          />
        ))}
      </ul>
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName={css.pageLink}
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName={css.pagination}
        activeClassName={css.active}
        renderOnZeroPageCount={null}
      />
    </>
  );
}
