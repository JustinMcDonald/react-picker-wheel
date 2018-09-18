
/**
 * @module Date组件
 */
import React, { Component } from 'react';
import { shallowEqual } from './pureRender.js';
import { addPrefixCss, formatCss } from './prefix.js';

const isUndefined = val => typeof val === 'undefined';
const isArray = val => Object.prototype.toString.apply(val)  === '[object Array]';
const isFunction = val => Object.prototype.toString.apply(val)  === '[object Function]';

const FIXED_SPIN_ANIMATION_TIME = 200;

const MAX_SPIN_TIME = 5000;

type Props = {
    value: Object,
    min: Object,
    max: Object,
    items: Array,
    step: number,
    onSelect: Function,
    itemHeight: number,
}

type State = {
    translateY: number,
    marginTop: number,
}

/**
 * Class Date组件类
 * @extends Component
 */
class PickerWheelColumn extends Component<void, Props, State> {
    constructor(props) {
        super(props);
        this.animating = false;                 // 判断是否在transition过渡动画之中
        this.touchY = 0;                        // 保存touchstart的pageY
        this.translateY = 0;                    // 容器偏移的距离
        this.lastEventTime = Date.now();
        this.lastTouchY = 0;
        this.velocity = 0;
        this.moveItemCount = 0;                 // 一次滑动移动了多少个时间
        this.itemHeight = props.itemHeight;
        this.spinTimeout = null;
        this.accelerationRate = 0;

        this.middleIndex = Math.floor(props.items.length / 2);
        this.middleY = - this.itemHeight * this.middleIndex;
        this.currentIndex = this.middleIndex;       // 滑动中当前日期的索引

        this.maxItemSpinCount = Math.min(props.items.length / 2, 7);

        this.state = {
            translateY: this.middleY,
            marginTop: (this.currentIndex - this.middleIndex) * this.itemHeight,
            items: props.items,
        };

        this.renderPickerWheelItem = this.renderPickerWheelItem.bind(this);
        this.handleContentTouch = this.handleContentTouch.bind(this);
        this.handleContentMouseDown = this.handleContentMouseDown.bind(this);
        this.handleContentMouseMove = this.handleContentMouseMove.bind(this);
        this.handleContentMouseUp = this.handleContentMouseUp.bind(this);
    }

    componentDidMount() {
        const viewport = this.viewport;
        viewport.addEventListener('touchstart', this.handleContentTouch, false);
        viewport.addEventListener('touchmove', this.handleContentTouch, false);
        viewport.addEventListener('touchend', this.handleContentTouch, false);
        viewport.addEventListener('mousedown', this.handleContentMouseDown, false);
    }

    componentWillMount() {
        this._iniItems(this.props.value);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value === this.props.value) {
            return;
        }
        this._iniItems(nextProps.value);
        this.currentIndex = this.middleIndex;
        this.setState({
            translateY: this.middleY,
            marginTop: (this.currentIndex - this.middleIndex) * this.itemHeight,
        });
    }

    /**
     * Optimization component, Prevents unnecessary rendering
     * Only value or state change should re-rendering
     *
     * @param  {Object} nextProps next props
     * @param  {Object} nextState next state
     * @return {Boolean}          Whether re-rendering
     */
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.value !== this.props.value ||
            !shallowEqual(nextState, this.state);
    }

    componentWillUnmount() {
        const viewport = this.viewport;
        viewport.removeEventListener('touchstart', this.handleContentTouch, false);
        viewport.removeEventListener('touchmove', this.handleContentTouch, false);
        viewport.removeEventListener('touchend', this.handleContentTouch, false);
        viewport.removeEventListener('mousedown', this.handleContentMouseDown, false);
    }

    _iniItems(value) {
        let items = this.state.items;
        for (let i = 0; i < items.length; i++) {
            if (items[this.middleIndex].value === value) {
                this.setState({ items });
                return true;
            } else {
                const shiftedItem = items[0];
                items = [
                    ...items.slice(1),
                    shiftedItem,
                ];
            }
        }
    }

    _updateItemsAndMargin(difference) {
        const { items } = this.state;
        if (difference > 0) {
            const shiftedItems = items.slice(0, difference);
            this.currentIndex += difference;
            this.setState({
                items: items.slice(difference).concat(shiftedItems),
                marginTop: (this.currentIndex - this.middleIndex) * this.itemHeight,
            });
        } else if (difference < 0) {
            const shiftedItems = items.slice(items.length + difference, items.length);
            this.currentIndex += difference;
            this.setState({
                items: shiftedItems.concat(items.slice(0, items.length + difference)),
                marginTop: (this.currentIndex - this.middleIndex) * this.itemHeight,
            });
        }
    }

    _checkIsUpdateItems(direction, translateY) {
        return direction === 1 ?
            this.currentIndex * this.itemHeight + this.itemHeight / 2 < -translateY :
            this.currentIndex * this.itemHeight - this.itemHeight / 2 > -translateY;
    }

    /**
     * 清除对象的transition样式
     * @param  {Dom}     obj     指定的对象
     * @return {undefined}
     */
    _clearTransition(obj) {
        this.animating = false;
        addPrefixCss(obj, { transition: '' });
        if (this.spinTimeout) clearTimeout(this.spinTimeout);
    }

    /**
     * 滑动到下一日期
     * @param  {number} direction 滑动方向
     * @return {undefined}
     */
    _moveToNext(direction) {
        const value = this.state.items[this.middleIndex].value;
        const { max, min } = this.props;
        if (direction === -1 && value < min && this.moveItemCount) {
            this._updateItemsAndMargin(1);
        } else if (direction === 1 && value > max && this.moveItemCount) {
            this._updateItemsAndMargin(-1);
        }

        this._moveTo(this.refs.scroll, this.currentIndex, direction);
    }

    /**
     * 添加滑动动画
     * @param  {DOM} obj   DOM对象
     * @param  {number} angle 角度
     * @return {undefined}
     */
    _moveTo(obj, currentIndex, direction) {
        this.animating = true;

        /*
        let unitsToTravel = 0;
        for (var i = 0; i < FIXED_SPIN_ANIMATION_TIME; i++) {
            unitsToTravel += this.velocity;
            this.velocity += accelerationRate;
        }

        const absoluteUnitsToTravel = Math.abs(unitsToTravel);

        const additionalIndexesToTravel = [
            -this.maxItemSpinCount,
            Math.floor(absoluteUnitsToTravel / this.itemHeight) * direction,
            this.maxItemSpinCount
        ].sort(function(a, b){ return a - b; })[1];
        */

        const additionalIndexesToTravel = direction;
        const virtualCurrentIndex = additionalIndexesToTravel + currentIndex;

        const animationTime = this.itemHeight / this.velocity;
        this.velocity += (this.accelerationRate * animationTime);

        addPrefixCss(obj, { transition: `transform ${animationTime}ms ease-out` });

        this.setState({
            translateY: -virtualCurrentIndex * this.itemHeight,
        });

        console.log({
            direction: direction,
            velocity: this.velocity,
            accelerationRate: this.accelerationRate,
            virtualCurrentIndex: virtualCurrentIndex,
        });

        this.spinTimeout = setTimeout(() => {
            this._updateItemsAndMargin(additionalIndexesToTravel);
            if ((this.velocity <= 0 && direction <= 0) ||
                (this.velocity >= 0 && direction >= 0)) {
                this.props.onSelect(this.state.items[this.middleIndex].value);
                this._clearTransition(this.refs.scroll);   
            } else {
                this._moveTo(obj, virtualCurrentIndex, direction);
            }
        }, animationTime);
    }

    handleStart(event) {
        this.touchY =
            (!isUndefined(event.targetTouches) &&
             !isUndefined(event.targetTouches[0])) ?
            event.targetTouches[0].pageY :
            event.pageY;

        this._clearTransition(this.refs.scroll);

        this.translateY = this.state.translateY;
        this.moveItemCount = 0;
    }


    handleMove(event) {
        const touchY =
            (!isUndefined(event.targetTouches) &&
             !isUndefined(event.targetTouches[0])) ?
            event.targetTouches[0].pageY :
            event.pageY;

        const dir = touchY - this.touchY;
        const translateY = this.translateY + dir;
        const direction = dir > 0 ? -1 : 1;

        const diff = this.lastTouchY - touchY;
        const now = Date.now();
        const timeDiff = now - this.lastEventTime;
        this.velocity = diff / timeDiff;

        this.accelerationRate = -(this.velocity / MAX_SPIN_TIME); // units per ms for decelleration

        this.lastEventTime = Date.now();
        this.lastTouchY = touchY;

        // 日期最小值，最大值限制
        const value = this.state.items[this.middleIndex].value;
        const { max, min } = this.props;
        if (value < min ||
            value > max) {
            return;
        }

        // 检测是否更新日期列表
        if (this._checkIsUpdateItems(direction, translateY)) {
            this.moveItemCount = direction > 0 ? this.moveItemCount + 1 : this.moveItemCount - 1;
            this._updateItemsAndMargin(direction);
        }

        this.setState({ translateY });
    }

    handleEnd(event) {
        const touchY = event.pageY || event.changedTouches[0].pageY;
        const dir = touchY - this.touchY;
        const direction = dir > 0 ? -1 : 1;
        this._moveToNext(direction);
    }

    /**
     * 滑动日期选择器触屏事件
     * @param  {Object} event 事件对象
     * @return {undefined}
     */
    handleContentTouch(event) {
        event.preventDefault();
        if (this.animating) return;
        if (event.type === 'touchstart') {
            this.handleStart(event);
        } else if (event.type === 'touchmove') {
            this.handleMove(event);
        } else if (event.type === 'touchend') {
            this.handleEnd(event);
        }
    }

    /**
     * 滑动日期选择器鼠标事件
     * @param  {Object} event 事件对象
     * @return {undefined}
     */
    handleContentMouseDown(event) {
        if (this.animating) return;
        this.handleStart(event);
        document.addEventListener('mousemove', this.handleContentMouseMove);
        document.addEventListener('mouseup', this.handleContentMouseUp);
    }

    handleContentMouseMove(event) {
        if (this.animating) return;
        this.handleMove(event);
    }

    handleContentMouseUp(event) {
        if (this.animating) return;
        this.handleEnd(event);
        document.removeEventListener('mousemove', this.handleContentMouseMove);
        document.removeEventListener('mouseup', this.handleContentMouseUp);
    }

    /**
     * 渲染一个日期DOM对象
     * @param  {Object} date date数据
     * @return {Object}      JSX对象
     */
    renderPickerWheelItem(item, index) {
        const className =
            (item.value < this.props.min || item.value > this.props.max) ?
            'disabled' : '';

        return (
            <li
                key={index}
                className={className}
                style={{
                    height: this.itemHeight,
                    lineHeight: `${this.itemHeight}px`,
                }}
            >
                {item.text}
            </li>
        );
    }

    render() {
        const scrollStyle = formatCss({
            transform: `translateY(${this.state.translateY}px)`,
            marginTop: this.state.marginTop,
        });

        return (
            <div className="picker-wheel-col-1">
                <div
                    ref={viewport => this.viewport = viewport} // eslint-disable-line
                    className="picker-wheel-viewport"
                    style={{ height: this.itemHeight * 5 }}
                >
                    <div
                        className="picker-wheel-wheel"
                        style={{
                            height: this.itemHeight,
                            marginTop: -(this.itemHeight / 2)
                        }}
                    >
                        <ul
                            ref="scroll"
                            className="picker-wheel-scroll"
                            style={scrollStyle}>
                            {this.state.items.map(this.renderPickerWheelItem)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default PickerWheelColumn;
