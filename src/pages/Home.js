import React, { useEffect } from "react";
import { getUserList } from "../action/getUserListAction";
import { connect } from "react-redux";
import { Card } from "antd";

// custom component
import { Container } from "./HomeStyle";

const Home = (props) => {
  // variables
  const { getUserList, getUserListState } = props;

  const { Meta } = Card;

  // callbacks
  useEffect(() => {
    getUserList();
  }, []);

  return (
    <>
      {getUserListState.apiState === "success" && (
        <>
          <span>Hello</span>
          {getUserListState.data.map((item, index) => (
            <Container is_odd={index % 2}>
              <img src={item.avatar} />
              <div>
                <span>{item.first_name}</span>
                <span>{item.email}</span>
              </div>
            </Container>
          ))}
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  getUserListState: state.getUserList,
});
const mapDispatchToProps = (dispatch) => ({
  getUserList: (params) => dispatch(getUserList(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
