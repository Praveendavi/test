import React, { useEffect } from "react";
import { getUserList } from "../action/getUserListAction";
import { connect } from "react-redux";
import { Card } from "antd";

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
          {getUserListState.data.map((item, index) => (
            <Card
              key={index}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={item.avatar} />}
            >
              HEllo
              <Meta title={item.first_name} description={item.email} />
            </Card>
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
