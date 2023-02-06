import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as booksSliceActionCreators from "@reducers/booksSlice";
import * as cartSliceActionCreators from "@reducers/cartSlice";
import * as searchSliceActionCreators from "@reducers/searchSlice";

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(
    {
      ...booksSliceActionCreators,
      ...cartSliceActionCreators,
      ...searchSliceActionCreators,
    },
    dispatch
  );
};

export default useActions;
