import React, { useEffect } from "react";
import { getUserList } from "../action/getUserListAction";
import { connect } from "react-redux";

const UserList = () => {
  useEffect(() => {
    getUserList();
  }, []);

  return <div></div>;
};

const mapStateToProps = (state) => ({
  getUserListState: state.getUserList,
});
const mapDispatchToProps = (dispatch) => ({
  getUserList: (params) => dispatch(getUserList(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
