import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { slice, actions } from '../../dux/taco-dux';

import Header from '../ecosystems/header';
import Section from '../ecosystems/section';
import { pair1, pair2 } from '../../constants/colors';

const mapStateToProps = reduxState => ({
    status: reduxState[slice]
})

const mapDispatch = dispatch => ({
    getTaco: () => dispatch(actions.getTaco())
})

const overview = ({baseLayer = {}, mixin = {}, condiment = {}, seasoning = {}, shell = {}}) => `${baseLayer.name} with ${mixin.name}, garnished with ${condiment.name} topped off with ${seasoning.name} and wrapped in delicious ${shell.name}`;

class Taco extends PureComponent {
    componentDidMount () {
        this._getNewTaco()
    }

    _getNewTaco = () => {
        const { getTaco = () => {} } = this.props

        getTaco()
    }

    render () {
        const { status = {} } = this.props
        const { retrieving, error, taco } = status

        if (retrieving) {
            return <div>Retrieving!</div>
        }

        if (error) {
            return <div>{`Error: ${error}`}</div>
        }

        if (!taco) {
            return <div>No Taco Yet!</div>
        }

        const { baseLayer = {}, mixin = {}, condiment = {}, seasoning = {}, shell = {} } = taco;

        return (
            <Fragment>
                <Header onClick={this._getNewTaco} />
                <Section recipe={overview(taco)} colors={pair1} />
                <Section {...baseLayer} colors={pair2} />
                <Section {...mixin} colors={pair1} />
                <Section {...condiment} colors={pair2} />
                <Section {...seasoning} colors={pair1} />
                <Section {...shell} colors={pair2} />
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatch)(Taco);