import { useEffect, useMemo, useState } from "react";

export const usePagination = () => {
  const [pagination, setPagination] = useState({
    limitProductsPerPage: 8,
    totalProducts: 0,
    totalPages: 1,
    activePage: 1,
    startProduct: 0,
    endProduct: null,
  });

  const {
    limitProductsPerPage,
    totalProducts,
    totalPages,
    activePage,
    startProduct,
    endProduct,
  } = pagination;

  const onPageChange = (e, { activePage }) => {
    setPagination((prev) => ({ ...prev, activePage }));
  };

  const paginationMemoized = useMemo(
    () => ({
      limitProductsPerPage,
      totalProducts,
      totalPages,
      activePage,
      startProduct,
      endProduct,
    }),
    [
      limitProductsPerPage,
      totalProducts,
      totalPages,
      activePage,
      startProduct,
      endProduct,
    ]
  );

  const useProductPageData = (productLength) => {
    useEffect(() => {
      setPagination((prev) => ({
        ...prev,
        totalProducts: productLength,
        totalPages: Math.ceil(prev.totalProducts / prev.limitProductsPerPage),
        startProduct:
          prev.limitProductsPerPage * prev.activePage -
          prev.limitProductsPerPage,
        endProduct: prev.limitProductsPerPage * prev.activePage,
      }));
    }, [paginationMemoized, productLength]);
  };

  return {
    pagination,
    onPageChange,
    useProductPageData,
  };
};
