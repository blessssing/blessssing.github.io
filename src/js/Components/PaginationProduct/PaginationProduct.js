import React from "react";
import "./PaginationProduct.scss";
import { Icon, Pagination } from "semantic-ui-react";

const PaginationProduct = ({ totalPages, onPageChange, defaultActivePage }) => {
  return (
    <div className="container-pagination">
      <Pagination
        defaultActivePage={defaultActivePage}
        // ellipsisItem={{
        //   content: <Icon name="ellipsis horizontal" />,
        //   icon: true,
        // }}
        firstItem={{ content: <Icon name="angle double left" />, icon: true }}
        lastItem={{ content: <Icon name="angle double right" />, icon: true }}
        prevItem={{ content: <Icon name="angle left" />, icon: true }}
        nextItem={{ content: <Icon name="angle right" />, icon: true }}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    </div>
  );
};

export default PaginationProduct;
