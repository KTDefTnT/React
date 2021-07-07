export const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    addCount: () => dispatch({ type: "ADD" }),
    minusCount: () => dispatch({ type: "MINUS" }),
  };
};
