import React, { Component, Fragment } from 'react';
import Modal from '../UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {

    return class extends Component {

        state = {
            error: null
        }

        componentWillMount() {
            this.requestInreceptor = axios.interceptors.request.use(request => {
                this.setState({ error: null });
                return request;
            });
            this.responseInterceptor = axios.interceptors.response.use(response => response, error => {
                this.setState({ error: error });
            });
        }

        componentWillUnmount() {
            // clean interceptors because they will stay attached to axios instance every time withErrorHandler is used
            axios.interceptors.request.eject(this.requestInreceptor);
            axios.interceptors.response.eject(this.responseInreceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null });
        }

        render() {
            return (
                <Fragment>
                    <Modal
                        modalClosed={this.errorConfirmedHandler}
                        show={this.state.error}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props}></WrappedComponent>
                </Fragment>
            );
        }
    }
};

export default withErrorHandler;