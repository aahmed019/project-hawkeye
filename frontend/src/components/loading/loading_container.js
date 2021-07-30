import { connect } from "react-redux";
import LoadingPage from "./loading_page";

const mapStateToProps = store => ({
  loaded: store.ui.status === 'loaded'
});

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);

