# react-mobile-datepicker
[![Travis][build-badge]][build] [![npm package][npm-badge]][npm] [![Coveralls][coveralls-badge]][coveralls]

**a  lightweight react date picker for mobile, Not more than 4k**

react-mobile-datepicker provides a component that can set year, month, day, hour, minute and second by sliding up or down.

## Features
- is only 4k.
- It does not depend on moment.js

## Theme

### default
<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/default.png" width="300" />
</div>

### dark
<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/dark.png" width="300" />
</div>

### ios
<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/ios.png" width="300" />
</div>

### android
<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/android.png" width="300" />
</div>

### android-dark
<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/android-dark.png" width="300" />
</div>

## Custom date unit

set dateFormat for `['YYYY', 'MM', 'DD', 'hh', 'mm']` to configure year, month, day, hour, minute.

<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/year-month-day-hour-minute.png" width="300" />
</div>


set dateFormat for `['hh', 'mm', 'ss']` to configure hour, minute and second.

<div style="padding:30px">
<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/hour-minute-second.png" width="300" />
</div>

customize the content mapping shown in the month.

```js
const monthMap = {
	'01': 'Jan',
	'02': 'Feb',
	'03': 'Mar',
	'04': 'Apr',
	'05': 'May',
	'06': 'Jun',
	'07': 'Jul',
	'08': 'Aug',
	'09': 'Sep',
	'10': 'Oct',
	'11': 'Nov',
	'12': 'Dec',
};

<DatePicker
	dateFormat={['YYYY', ['MM', (month) => monthMap[month]], 'DD']}
/>

```

<img src="https://raw.githubusercontent.com/lanjingling0510/react-mobile-datepicker/master/.github/year-custom_month-day.png" width="300" />
</div>



## Getting Started

### Build

`npm run-script build`

### Install

Repository currently includes `dist` files, add directly with yarn add `https://<repository>/react-picker-wheel`.

### Import what you need
The following guide assumes you have some sort of ES2015 build set up using babel and/or webpack/browserify/gulp/grunt/etc.


```js
// Using an ES6 transpiler like Babel
import  React from 'react';
import ReactDOM from 'react-dom';
import DatePicker from 'react-mobile-datepicker';
```


### Usage Example


```js
class App extends React.Component {
	state = {
		time: new Date(),
		isOpen: false,
	}

	handleClick = () => {
		this.setState({ isOpen: true });
	}

	handleCancel = () => {
		this.setState({ isOpen: false });
	}

	handleSelect = (time) => {
		this.setState({ time, isOpen: false });
	}

	render() {
		return (
			<div className="App">
				<a
					className="select-btn"
					onClick={this.handleClick}>
					select time
				</a>

				<DatePicker
					value={this.state.time}
					isOpen={this.state.isOpen}
					onSelect={this.handleSelect}
					onCancel={this.handleCancel} />
			</div>
		);
	}
}


ReactDOM.render(<App />, document.getElementById('react-box'));
```


## PropTypes

| Property        | Type           | Default  | Description |
|:------------- |:------------- |:-------------- |:---------- |
| itemHeight | Number | 40 | height (px) of each wheel item |
| isPopup      | Boolean | true | whether  as popup add a overlay |
| isOpen      | Boolean | false | whether to open datepicker |
| theme      | String      | default  | theme of datepicker, include 'default', 'dark', 'ios', 'android', 'android-dark' |
| dateFormat | Array     | ['YYYY', 'M', 'D'] | according to year, month, day, hour, minute, second format specified display text. E.g ['YYYY年', 'MM月', 'DD日']|
| dateSteps | Array | [1, 1, 1] | set step for each time unit |
|showFormat | String | 'YYYY/MM/DD' | customize the format of the display title |
| value | Date | new Date() | date value |
| min  | Date | new Date(1970, 0, 1) | minimum date |
| max | Date | new Date(2050, 0, 1) | maximum date |
| showHeader | Boolean | true | whether to show the header |
| customHeader | ReactElement | undefined | customize the header, if you set this property, it will replace `showFormat`|
| confirmText  | String | 完成 | customize the selection time button text |
| cancelText | String | 取消 | customize the cancel button text |
| onSelect | Function | () => {} | the callback function after click button of done, Date object as a parameter |
| onCancel | Function | () => {} | the callback function after click button of cancel |
| onChange | Function | (value) => {} | callback function when wheel value changes |

## Changelog
* [Changelog](CHANGELOG.md)


[npm-badge]: https://img.shields.io/npm/v/react-mobile-datepicker.svg?style=flat-square
[npm]: https://www.npmjs.com/package/react-mobile-datepicker
[build-badge]: https://img.shields.io/travis/lanjingling0510/react-mobile-datepicker/master.svg?style=flat-square
[build]: https://travis-ci.org/lanjingling0510/react-mobile-datepicker
[coveralls-badge]: https://img.shields.io/coveralls/lanjingling0510/react-mobile-datepicker.svg?style=flat-square
[coveralls]: https://coveralls.io/github/lanjingling0510/react-mobile-datepicker
