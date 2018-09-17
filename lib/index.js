import './index.css';
import React from 'react';
import PickerWheel from './PickerWheel.js';
import Modal from './Modal.js';

type EnhancePickerWheelProps<T> = T & {
    isOpen: boolean,
}

function EnhancePickerWheel<T: *>({ isOpen, ...props }: EnhancePickerWheelProps<T>) {
    function onModalClose(event) {
        if (event.target === event.currentTarget) {
            props.onCancel();
        }
    }

    return (
        <div
            style={{ display: isOpen ? '' : 'none' }}
            onClick={onModalClose}
            className="picker-wheel-modal">
            <PickerWheel {...props} />
        </div>
    );
}

type ModalPickerWheelProps<T> = T & {
    isPopup: boolean,
}

function ModalPickerWheel<T: *>({ isPopup, ...props }: ModalPickerWheelProps<T>) {
    if (!isPopup) {
        return <PickerWheel {...props} />;
    }

    return (
        <Modal {...props}>
            <EnhancePickerWheel />
        </Modal>
    );
}

ModalPickerWheel.defaultProps = {
    isPopup: true,
    isOpen: false,
    theme: 'default',
    value: '',
    //min: new Date(1970, 0, 1),
    //max: new Date(2050, 0, 1),
    items: [],
    showHeader: true,
    confirmText: '完成',
    cancelText: '取消',
    onSelect: () => {},
    onCancel: () => {},
    itemHeight: 40,
};

export default ModalPickerWheel;
