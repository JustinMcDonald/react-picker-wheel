/**
 * @module PickerWheel Component
 */

import React, { Component } from 'react';
import PickerWheelColumn from './PickerWheelColumn.js';
import PureRender from './pureRender.js';

type Props = {
    theme: string,
    value: Object,
    min: Object,
    max: Object,
    items: Array,
    customHeader?: React.Element<*>,
    showHeader: boolean,
    confirmText: string,
    cancelText: string,
    onSelect: Function,
    onCancel: Function,
    itemHeight: number,
}

type State = {
    value: Object,
}

/**
 * Class PickerWheel Component Class
 * @extends Component
 */
class PickerWheel extends Component<void, Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };

        this.handleFinishBtnClick = this.handleFinishBtnClick.bind(this);
        this.handleItemSelect = this.handleItemSelect.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        // update value of state
        if (nextProps.value !== this.state.value) {
            this.setState({ value: nextProps.value });
        }
    }

    /**
     * When you swipe two datepickeritems at the same time.
     * Prevent dates from going out.
     */
    componentDidUpdate() {
        const value = this.state.value;
        const { min, max } = this.props;
        if (value > max) {
            this.setState({ value: max });
        }

        if (value < min) {
            this.setState({ value: min });
        }
    }

    /**
     * Optimization component, Prevents unnecessary rendering
     * Only props or state change or value before re-rendering
     *
     * @param  {Object} nextProps next props
     * @param  {Object} nextState next state
     * @return {Boolean}          Whether re-rendering
     */
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.state.value ||
            PureRender.shouldComponentUpdate(nextProps, nextState, this.props, this.state);
    }

    /**
     * 点击完成按钮事件
     * @return {undefined}
     */
    handleFinishBtnClick() {
        this.props.onSelect(this.state.value);
    }

    /**
     * 选择下一个日期
     * @return {undefined}
     */
    handleItemSelect(value) {
        this.setState({ value });
        this.props.onChange && this.props.onChange(value);
    }

    /**
     * render函数
     * @return {Object} JSX对象
     */
    render() {
        const {
            min,
            max,
            items,
            theme,
            confirmText,
            cancelText,
            showHeader,
            customHeader,
            itemHeight,
        } = this.props;
        const value = this.state.value;
        const themeClassName =
            ['default', 'dark', 'ios', 'android', 'android-dark', 'assurance'].indexOf(theme) === -1 ?
            'default' : theme;
     
        return (
            <div
                className={`picker-wheel ${themeClassName}`}>
                {showHeader &&
                    <div className="picker-wheel-header">{customHeader || value}</div>}
                <div className="picker-wheel-content">
                    <PickerWheelColumn
                        step={1}
                        value={value}
                        min={min}
                        max={max}
                        items={items}
                        onSelect={this.handleItemSelect}
                        itemHeight={itemHeight}
                    />
                </div>
                <div className="picker-wheel-navbar">
                    <a
                        className="picker-wheel-navbar-btn"
                        onClick={this.handleFinishBtnClick}>{confirmText}</a>
                    <a
                        className="picker-wheel-navbar-btn"
                        onClick={this.props.onCancel}>{cancelText}</a>
                </div>
            </div>
        );
    }
 }

export default PickerWheel;
